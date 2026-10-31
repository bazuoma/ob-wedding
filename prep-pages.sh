#!/bin/bash
# Run after unzipping a new Claude Design export (and after renaming the
# pages to desktop.html / mobile.html), right before committing.
#
# - Adds the page title and favicon to both pages (once).
# - Adds a freshness check to both pages (once): on load, each page compares
#   its own version with version.json and reloads itself if it is out of
#   date. This matters for in-app browsers (Messages, Instagram, Gmail…),
#   which keep old copies of pages around.
# - Makes sure the site starts at the password screen.
# - Hides the private reception address.
# - Lets auto-fit grid columns shrink on narrow phones.
# - Points the pages at optimized photos, deletes unused photos, and checks
#   every referenced photo exists.
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

# Keep the private reception address off the public site (the page source
# and this public repo are readable by anyone, passwords or not).
# Matches any street number so the address itself never appears in this file.
sed -i '' -E "s/To follow at [0-9][^']*, Woodland Hills, CA\./To follow in Woodland Hills — address shared with the wedding party directly./" desktop.html mobile.html
if grep -qE "Reception', value: '[^']*[0-9]{3,}" desktop.html mobile.html; then
  echo "WARNING: a reception street address is still in a page — the wording probably changed in Claude Design. Check before publishing." >&2
  exit 1
fi

# The published site must always start at the password screen. Claude Design's
# "startUnlocked" preview setting skips it, and V12 shipped with it on for
# desktop only. Handles both the spaced and compact forms of the setting.
sed -i '' -E 's/(startUnlocked&quot;: ?\{[^}]*&quot;default&quot;: ?)true/\1false/' desktop.html mobile.html
if grep -qE 'startUnlocked&quot;: ?\{[^}]*&quot;default&quot;: ?true' desktop.html mobile.html; then
  echo "ERROR: startUnlocked is still on — the site would skip the password screen." >&2
  exit 1
fi
for f in desktop.html mobile.html; do
  grep -qE 'startUnlocked&quot;: ?\{[^}]*&quot;default&quot;: ?false' "$f" || { echo "ERROR: couldn't confirm startUnlocked is off in $f." >&2; exit 1; }
done

# Auto-fit grids with a fixed px minimum overflow on phones when the space is
# narrower than that minimum (V12's attire columns ran under the lace border).
# Capping the minimum at 100% lets columns shrink; wider screens are unchanged.
sed -i '' -E 's/repeat\(auto-(fit|fill), minmax\(([0-9]+px), 1fr\)\)/repeat(auto-\1, minmax(min(\2, 100%), 1fr))/g' desktop.html mobile.html

# Use the pre-sized copy in photos/opt/ whenever the pages point at a full-size
# original that has one (Claude Design sometimes reverts to the originals).
for f in desktop.html mobile.html; do
  for p in $(grep -oE "photos/[a-z0-9-]+\.(png|jpe?g)" "$f" | sort -u); do
    b=$(basename "$p"); b="${b%.*}"
    if [ -f "photos/opt/$b.jpg" ]; then
      sed -i '' "s#$p#photos/opt/$b.jpg#g" "$f"
    fi
  done
done

# Delete photos nothing references any more (matched by exact path, including
# photos/opt/), then shrink any remaining top-level photo over 2400px.
removed=0
while IFS= read -r p; do
  if ! grep -rqF --exclude-dir=.git --exclude-dir=photos "$p" .; then
    rm "$p"; removed=$((removed + 1))
  fi
done < <(find photos -type f)
echo "Removed $removed unused photos"
while IFS= read -r p; do
  w=$(sips -g pixelWidth "$p" | awk '/pixelWidth/{print $2}')
  h=$(sips -g pixelHeight "$p" | awk '/pixelHeight/{print $2}')
  if [ "$w" -gt 2400 ] || [ "$h" -gt 2400 ]; then sips -Z 2400 "$p" >/dev/null; echo "Resized $p"; fi
done < <(find photos -maxdepth 1 -type f \( -name '*.jpeg' -o -name '*.jpg' -o -name '*.png' \))

# Every photo the pages reference must exist.
missing=0
for f in index.html desktop.html mobile.html; do
  for p in $(grep -oE "photos/[^'\")> ]*" "$f" | sort -u); do
    [ -f "$p" ] || { echo "MISSING in $f: $p" >&2; missing=1; }
  done
done
[ "$missing" -eq 0 ] || exit 1

sed -i '' -E "s/window\.OB_VERSION='[0-9]+'/window.OB_VERSION='$V'/" index.html desktop.html mobile.html
printf '{"v":"%s"}\n' "$V" > version.json
echo "Stamped version $V"
