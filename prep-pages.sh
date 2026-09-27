#!/bin/bash
# Run after unzipping a new Claude Design export (and after renaming the
# pages to desktop.html / mobile.html), right before committing.
#
# - Adds the page title and favicon to both pages (once).
# - Adds a freshness check to both pages (once): on load, each page compares
#   its own version with version.json and reloads itself if it is out of
#   date. This matters for in-app browsers (Messages, Instagram, Gmail…),
#   which keep old copies of pages around.
# - Stamps a new version into index.html, both pages and version.json.
set -euo pipefail
cd "$(dirname "$0")"

V=$(date +%Y%m%d%H%M%S)

for f in desktop.html mobile.html; do
  if ! grep -q '<title>' "$f"; then
    sed -i '' 's|<meta charset="utf-8">|<meta charset="utf-8">\
<title>Ogechi \&amp; Brandon · May 2027</title>\
<link rel="icon" href="photos/ob-logo.svg">|' "$f"
  fi
  if ! grep -q 'OB_VERSION' "$f"; then
    sed -i '' "s|<link rel=\"icon\" href=\"photos/ob-logo.svg\">|<link rel=\"icon\" href=\"photos/ob-logo.svg\">\\
<script>window.OB_VERSION='0';\\
fetch('version.json?t=' + Date.now(), { cache: 'no-store' }).then(function (r) { return r.json(); }).then(function (j) {\\
  if (!j.v \|\| j.v === window.OB_VERSION) return;\\
  var key = 'ob-reloaded-' + j.v;\\
  try { if (sessionStorage.getItem(key)) return; sessionStorage.setItem(key, '1'); } catch (e) { return; }\\
  location.replace(location.pathname + '?v=' + j.v + location.hash);\\
}).catch(function () {});</script>|" "$f"
  fi
done

sed -i '' -E "s/window\.OB_VERSION='[0-9]+'/window.OB_VERSION='$V'/" index.html desktop.html mobile.html
printf '{"v":"%s"}\n' "$V" > version.json
echo "Stamped version $V"
