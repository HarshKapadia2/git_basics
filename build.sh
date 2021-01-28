#!/bin/sh

set -euo pipefail;

output="${1-./build}";
echo "Building to: '${output}'";

mkdir -p "${output}";

for path in \
	"static"            \
	"manifest.json"     \
	"service_worker.js" \
; do
	cp -r "src/${path}" "${output}/";
done

asciidoctor "src/index.adoc" -o "${output}/index.html";

echo "Build complete";
