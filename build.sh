#!/bin/sh

set -euo pipefail;

output="${1-./build}";
echo "Building to: '${output}'";

mkdir -p "${output}";

for path in \
	"static"                       \
	"manifest.json"                \
	"service_worker.js"            \
	"robots.txt"                   \
	"google66b7e1d4dbf56798.html"  \
; do
	cp -r "src/${path}" "${output}/";
done

asciidoctor "src/index.adoc" -a webfonts! -o "${output}/index.html";

echo "Build complete";
