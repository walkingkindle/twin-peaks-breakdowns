#!/usr/bin/env bash
# One-time setup of twinpeaksbreakdowns.com on the Ubuntu server. Copy this folder over and run it as root:
#   scp -r deploy server:twinpeaksbreakdowns && ssh -t server sudo bash twinpeaksbreakdowns/setup-server.sh
# Point the domain's DNS at the server first, so Certbot can issue the certificate.
# Running it again is safe: it keeps an existing nginx site and certificate.
set -euo pipefail

DOMAIN=twinpeaksbreakdowns.com
WEB_ROOT=/var/www/$DOMAIN/html
DEPLOY_USER=deploy
# GitHub Actions holds the private half (secret DEPLOY_SSH_KEY).
CI_KEY='ssh-ed25519 AAAAC3NzaC1lZDI1NTE5AAAAIOCYTPkiEJuoZboLtvaba6IW9OrRcFdgXkPmGiY3n9lV twinpeaksbreakdowns-ci'
HERE=$(dirname "$(readlink -f "$0")")

# A user for CI whose key can do nothing but rsync into the web root.
if ! id "$DEPLOY_USER" &>/dev/null; then
  useradd --create-home --shell /bin/sh "$DEPLOY_USER"
  usermod --password '*' "$DEPLOY_USER" # no password, but not locked, so key logins work
fi
home=$(getent passwd "$DEPLOY_USER" | cut -d: -f6)
install -d -m 700 -o "$DEPLOY_USER" -g "$DEPLOY_USER" "$home/.ssh"
key_line="command=\"/usr/bin/rrsync $WEB_ROOT\",restrict $CI_KEY"
touch "$home/.ssh/authorized_keys"
grep -qxF "$key_line" "$home/.ssh/authorized_keys" || echo "$key_line" >>"$home/.ssh/authorized_keys"
chown "$DEPLOY_USER:$DEPLOY_USER" "$home/.ssh/authorized_keys"
chmod 600 "$home/.ssh/authorized_keys"

install -d -m 755 "/var/www/$DOMAIN"
install -d -m 755 -o "$DEPLOY_USER" -g "$DEPLOY_USER" "$WEB_ROOT"

site=/etc/nginx/sites-available/$DOMAIN
[ -e "$site" ] || install -m 644 "$HERE/nginx.conf" "$site"
ln -sfn "$site" "/etc/nginx/sites-enabled/$DOMAIN"
nginx -t
systemctl reload nginx

# Certbot needs both names to resolve to this server.
ip=$(ip -4 -o addr show scope global | awk '{ sub(/\/.*/, "", $4); print $4; exit }')
for name in "$DOMAIN" "www.$DOMAIN"; do
  if ! getent ahostsv4 "$name" | awk '{ print $1 }' | grep -qxF "$ip"; then
    echo "$name doesn't resolve to $ip yet. Run this script again once DNS has updated."
    exit 1
  fi
done
certbot --nginx -d "$DOMAIN" -d "www.$DOMAIN" --non-interactive --agree-tos --redirect
echo "Done: https://$DOMAIN is ready for its first deploy."
