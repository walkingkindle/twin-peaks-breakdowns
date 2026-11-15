"""Search every local Twin Peaks source for a regular expression.

Covers Twin Perfect's three transcripts, the other theorists' videos, the episode scripts
(PDFs, through pdftotext), the Fire Walk With Me subtitles, The Return's transcripts and the
Log Lady intros. Prints each hit with the text around it.

Usage: python3 -I find_in_sources.py PATTERN [--context CHARS] [--only TEXT] [--max N]

Sources live in the folder that holds this repo (TwinPeaks/), outside version control.
Set TWIN_PEAKS_SOURCES to search somewhere else.
"""

import argparse
import os
import re
import shutil
import subprocess
from pathlib import Path

SOURCES = Path(os.environ.get('TWIN_PEAKS_SOURCES', Path(__file__).resolve().parents[5]))
FOLDERS = ['explainer-videos', 'episode-transcripts']
CACHE = Path.home() / '.cache' / 'twin-peaks-breakdowns' / 'pdf-text'


def pdf_text(pdf: Path) -> str:
    """Text of a script PDF, cached until the PDF changes. Scanned PDFs come back empty."""
    cached = CACHE / f'{pdf.stem}.txt'
    if cached.exists() and cached.stat().st_mtime >= pdf.stat().st_mtime:
        return cached.read_text(errors='ignore')
    if not shutil.which('pdftotext'):
        return ''
    text = subprocess.run(
        ['pdftotext', '-layout', str(pdf), '-'], capture_output=True, text=True, errors='ignore'
    ).stdout
    CACHE.mkdir(parents=True, exist_ok=True)
    cached.write_text(text)
    return text


def documents(only: str | None):
    for folder in FOLDERS:
        for path in sorted((SOURCES / folder).rglob('*')):
            if path.suffix not in ('.txt', '.pdf', '.srt') or (only and only not in str(path)):
                continue
            text = pdf_text(path) if path.suffix == '.pdf' else path.read_text(errors='ignore')
            # Captions and scripts break lines mid-sentence; one space reads better in context.
            yield path.relative_to(SOURCES), re.sub(r'\s+', ' ', text)


def main() -> None:
    parser = argparse.ArgumentParser(description=__doc__, formatter_class=argparse.RawTextHelpFormatter)
    parser.add_argument('pattern', help='regular expression, matched case-insensitively')
    parser.add_argument('--context', type=int, default=300, help='characters shown on each side')
    parser.add_argument('--only', help='only search files whose path contains this text')
    parser.add_argument('--max', type=int, default=8, help='most hits to show per file')
    args = parser.parse_args()

    if not any((SOURCES / folder).is_dir() for folder in FOLDERS):
        raise SystemExit(f'No sources under {SOURCES}. Set TWIN_PEAKS_SOURCES.')
    pattern = re.compile(args.pattern, re.IGNORECASE)
    total = 0
    for name, text in documents(args.only):
        hits = list(pattern.finditer(text))
        if not hits:
            continue
        total += len(hits)
        print(f'\n== {name} ({len(hits)} hit{"s" if len(hits) > 1 else ""})')
        for hit in hits[: args.max]:
            before = text[max(0, hit.start() - args.context) : hit.start()]
            after = text[hit.end() : hit.end() + args.context]
            print(f'  @{hit.start()}: …{before}»{hit.group(0)}«{after}…\n')
        if len(hits) > args.max:
            print(f'  … {len(hits) - args.max} more; raise --max or narrow the pattern.')
    print(f'\n{total} hit(s) for /{args.pattern}/ in {SOURCES}.')


if __name__ == '__main__':
    main()
