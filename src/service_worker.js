const cacheName = "v1";
const cacheAssets = [
	"./",
	"./index.html",
	"./src/static/css/pwa_install.css",
	"./src/static/js/main.js",
	"./src/static/img/add-1.jpg",
	"./src/static/img/add-2.jpg",
	"./src/static/img/add-3.jpg",
	"./src/static/img/add-to-master_file_1-1.jpg",
	"./src/static/img/branches.png",
	"./src/static/img/cat-1.jpg",
	"./src/static/img/cat-file-p-1.jpg",
	"./src/static/img/cat-file-p-2.jpg",
	"./src/static/img/cat-file-p-3.jpg",
	"./src/static/img/cat-file-p-4.jpg",
	"./src/static/img/cat-file-p-5.jpg",
	"./src/static/img/cat-file-p-6.jpg",
	"./src/static/img/cat-file-p-7.jpg",
	"./src/static/img/cat-file-p-8.jpg",
	"./src/static/img/cat-file-t-1.jpg",
	"./src/static/img/clear_cross.svg",
	"./src/static/img/commit-master_file_1-1.jpg",
	"./src/static/img/connection-graph-1.png",
	"./src/static/img/connection-graph-2.png",
	"./src/static/img/connection-graph-3.png",
	"./src/static/img/connection-graph-4.png",
	"./src/static/img/cvcs.png",
	"./src/static/img/de-compressed.jpg",
	"./src/static/img/dir-1.jpg",
	"./src/static/img/dir-2.jpg",
	"./src/static/img/du-c-1.jpg",
	"./src/static/img/du-c-2.jpg",
	"./src/static/img/du-c-3.jpg",
	"./src/static/img/du-c-4.jpg",
	"./src/static/img/dvcs.png",
	"./src/static/img/edit-master_file_1-1.jpg",
	"./src/static/img/fast-forward-merge.png",
	"./src/static/img/favicon.ico",
	"./src/static/img/git-init.jpg",
	"./src/static/img/git-local-remote-2.png",
	"./src/static/img/git-local-remote.png",
	"./src/static/img/git-push.jpeg",
	"./src/static/img/git_basics_logo.svg",
	"./src/static/img/head-1.jpg",
	"./src/static/img/icon-192x192.png",
	"./src/static/img/icon-512x512.png",
	"./src/static/img/log-1.jpg",
	"./src/static/img/ls-a-1.jpg",
	"./src/static/img/lvcs.jpg",
	"./src/static/img/mkdir_1.jpg",
	"./src/static/img/mv-1.jpg",
	"./src/static/img/touch-master_file_1.jpg",
	"./src/static/img/touch-master_file_2.jpg",
	"./src/static/img/tree-1.png",
	"./src/static/img/types-of-merges.jpg",
	"./src/static/img/verify-pack-1.jpg",
	"./src/static/img/working-of-commit.jpeg"
];

self.addEventListener
(
	"install",
	(e) =>
	{
		// Cache files
		e.waitUntil
		(
			caches.open(cacheName)
				.then((cache) => cache.addAll(cacheAssets))
				.then(() => self.skipWaiting())
				.catch((err) => console.error(`Cache error: ${err}`))
		);
	}
);

self.addEventListener
(
	"activate",
	(e) =>
	{
		e.waitUntil
		(
			// Delete any previous cache
			caches.keys()
			.then
			(
				(cacheKeys) =>
				{
					return Promise.all
					(
						cacheKeys.map
						(
							(cacheKey) =>
							{
								if(cacheKey !== cacheName)
									return caches.delete(cacheKey);
							}
						)
					);
				}
			)
		);
	}
);

self.addEventListener
(
	"fetch",
	(e) =>
	{
		e.respondWith
		(
			fetch(e.request)
			.then
			(
				(response) =>
				{
					const resClone = response.clone();

					// Add response to cache
					if(e.request.url.indexOf('http') === 0)
						caches.open(cacheName).then((cache) => cache.put(e.request, resClone));

					return response;
				}
			).catch((err) => caches.match(e.request).then((response) => response))
		);
	}
);
