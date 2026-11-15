"""Read the fan transcript of a broadcast Season 1–2 episode.

The transcripts come from Glastonberry Grove, fetched through the Wayback Machine because the
live site's TLS certificate is broken. They follow what aired, unlike the draft scripts, and
include scenes the drafts lack. Only some episodes were transcribed.

Usage: python3 -I aired_transcript.py EPISODE [PATTERN] [--context CHARS]

EPISODE is `pilot` or the overall number from 1 to 29 (the Log Lady's numbering: S1E01 = 1,
S2E01 = 8, S2E22 = 29). Without PATTERN, lists the episode's scenes; with it, prints the
matching passages. Transcripts are cached in ~/.cache/twin-peaks-breakdowns/aired/.
"""

import argparse
import gzip
import html
import re
import urllib.error
import urllib.request
from pathlib import Path

CACHE = Path.home() / '.cache' / 'twin-peaks-breakdowns' / 'aired'
SNAPSHOT = 'https://web.archive.org/web/2026id_/http://www.glastonberrygrove.net/texts/{page}'


def transcript(episode: str) -> str:
    page = 'pilot.html' if episode == 'pilot' else f'episode{int(episode)}.html'
    cached = CACHE / page.replace('.html', '.txt')
    if cached.exists():
        return cached.read_text()
    try:
        with urllib.request.urlopen(SNAPSHOT.format(page=page), timeout=60) as response:
            body = response.read()
        # Some snapshots were archived gzip-compressed, and the raw (id_) view serves them as stored.
        if body[:2] == b'\x1f\x8b':
            body = gzip.decompress(body)
        raw = body.decode('utf-8', errors='ignore')
    except urllib.error.HTTPError as error:
        if error.code == 404:
            raise SystemExit(
                f'No archived transcript for episode {episode}. Use the draft script in '
                '../episode-transcripts/ and describe lines you cannot confirm instead of quoting them.'
            )
        raise
    raw = re.sub(r'(?is)<(script|style)\b.*?</\1>', ' ', raw)
    text = html.unescape(re.sub(r'<[^>]+>', ' ', raw))
    text = re.sub(r'[ \t]+', ' ', text)
    text = re.sub(r'\n\s*\n+', '\n', text).strip()
    CACHE.mkdir(parents=True, exist_ok=True)
    cached.write_text(text)
    return text


def main() -> None:
    parser = argparse.ArgumentParser(description=__doc__, formatter_class=argparse.RawTextHelpFormatter)
    parser.add_argument('episode', help='pilot, or the overall episode number 1–29')
    parser.add_argument('pattern', nargs='?', help='regular expression, matched case-insensitively')
    parser.add_argument('--context', type=int, default=700, help='characters shown on each side')
    args = parser.parse_args()
    if args.episode != 'pilot' and not (args.episode.isdigit() and 1 <= int(args.episode) <= 29):
        raise SystemExit('EPISODE must be `pilot` or a number from 1 to 29.')

    text = transcript(args.episode)
    if not args.pattern:
        previous = None
        for heading in re.finditer(r'^\s*((?:INT|EXT)\. [^\n]+)', text, re.MULTILINE):
            line = heading.group(1).strip()
            if line != previous:
                print(f'@{heading.start():>6}  {line}')
            previous = line
        return
    hits = list(re.finditer(args.pattern, text, re.IGNORECASE))
    for hit in hits:
        start = max(0, hit.start() - args.context)
        print(f'\n== @{hit.start()}\n{text[start : hit.end() + args.context]}')
    print(f'\n{len(hits)} hit(s) for /{args.pattern}/ in episode {args.episode}.')


if __name__ == '__main__':
    main()
