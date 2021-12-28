#!/bin/sh

set -eu;

script_dir=$(dirname "${0}");

# Create the 'build' directory if it doesn't exist
mkdir -p "${script_dir}/build";

# Remove all files from the 'build' directory to prevent residual files
rm -rf "${script_dir}/build/"*;

# Copy files to the 'build' directory
for path in							\
	"static"						\
	"manifest.webmanifest"			\
	"robots.txt"					\
	"service-worker.js"				\
	"google66b7e1d4dbf56798.html"	\
; do
	cp -r "${script_dir}/src/${path}" "${script_dir}/build";
done;

# Build site
asciidoctor "${script_dir}/src/index.adoc" -a webfonts! -o "${script_dir}/build/index.html";

# Lazy load images
sed -i -e 's/<img/<img loading="lazy"/g' "${script_dir}/build/index.html";

echo "Asciidoctor Jet static site build complete.";
