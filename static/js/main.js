const pwaInstallDiv = document.querySelector(".pwa-install-div");
const pwaInstallBtn = document.querySelector("#pwa-install-btn");
const pwaInstallDismiss = document.querySelector("#pwa-install-dismiss");
const header = document.querySelector("#header");
const back_to_top_btn = document.querySelector(".back-to-top-btn");

let pwaInstallEvent;


if(navigator.serviceWorker)
{
	window.addEventListener
	(
		"load",
		() =>
		{
			navigator.serviceWorker
				.register("service_worker.js")
				.catch((err) => console.error(`Service Worker error: ${err}`));
		}
	);

	window.addEventListener
	(
		"beforeinstallprompt",
		(e) =>
		{
			e.preventDefault();
			pwaInstallEvent = e;
			showPWAInstallPrompt();
		}
	);

	pwaInstallBtn.addEventListener
	(
		"click",
		() =>
		{
			pwaInstallEvent.prompt();
			pwaInstallDiv.classList.add("hidden");
		}
	);

	pwaInstallDismiss.addEventListener("click", () => dismissPWAInstallPrompt());
}

const observer = new IntersectionObserver(scrollToTop);
observer.observe(header);

back_to_top_btn.addEventListener("click", () => header.scrollIntoView(true));


function showPWAInstallPrompt()
{
	pwaInstallDiv.classList.remove("hidden");
	pwaInstallDiv.classList.add("pwa-install-div-summon");
}

function dismissPWAInstallPrompt()
{
	pwaInstallDiv.classList.add("pwa-install-div-dismiss");
	setTimeout(() => pwaInstallDiv.classList.add("hidden"), 2000);
}

function scrollToTop(entries, observer)
{
	entries.forEach
	(
		(entry) =>
		{
			if(entry.isIntersecting)
				back_to_top_btn.classList.add("hidden");
			else
				back_to_top_btn.classList.remove("hidden");
		}
	);
}
