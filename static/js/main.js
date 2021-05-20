const pwaInstallDiv = document.querySelector(".pwa-install-div");
const pwaInstallBtn = document.querySelector("#pwa-install-btn");
const pwaInstallDismiss = document.querySelector("#pwa-install-dismiss");
const back_to_top_btn = document.querySelector(".back-to-top-btn");
const header = document.querySelector("#header");
const body = document.querySelector("body");
const toc = document.querySelector("#toc");

const db_name = "git_basics";
const db_version = 1;
const obj_store_name = "theme";

let pwaInstallEvent;
let theme;
let theme_btn;


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

window.addEventListener
(
	"load",
	async () =>
	{
		await loadDatabase();
		createThemeSwitcher();
		applyTheme();
		mobileEdgeCaseStyling();
		addAnnouncement();
	}
);

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

function createThemeSwitcher()
{
	theme_btn = document.createElement("button");

	theme_btn.classList.add("btn", "theme-switcher");
	theme_btn.addEventListener("click", switchTheme);
	body.appendChild(theme_btn);
}

async function switchTheme()
{
	if(theme === "light")
	{
		theme_btn.setAttribute("aria-label", "Light mode");
		body.classList.add("dark");
		theme = "dark";
		await saveDatabase();
	}
	else
	{
		theme_btn.setAttribute("aria-label", "Dark mode");
		body.classList.remove("dark");
		theme = "light";
		await saveDatabase();
	}
}

async function applyTheme()
{
	if(theme === "light")
	{
		theme_btn.setAttribute("aria-label", "Dark mode");
		body.classList.remove("dark");
		await saveDatabase();
	}
	else
	{
		theme_btn.setAttribute("aria-label", "Light mode");
		body.classList.add("dark");
		await saveDatabase();
	}
}

async function loadDatabase()
{
	return new Promise
	(
		(resolve, reject) =>
		{
			let request = indexedDB.open(db_name, db_version);

			request.addEventListener("error", reject);

			request.addEventListener
			(
				"upgradeneeded",
				(e) =>
				{
					let db = e.target.result;

					if(!db.objectStoreNames.contains(obj_store_name))
						db.createObjectStore(obj_store_name);
				}
			);

			request.addEventListener
			(
				"success",
				(e) =>
				{
					let db = e.target.result;

					let transaction = db.transaction(obj_store_name, "readonly");
					let store = transaction.objectStore(obj_store_name);

					let getTheme = store.get("theme");
					getTheme.addEventListener("error", reject);
					getTheme.addEventListener
					(
						"success",
						(e) =>
						{
							theme = e.target.result || "light";
							resolve();
						}
					);
				}
			);
		}
	);
}

async function saveDatabase()
{
	return new Promise
	(
		(resolve, reject) =>
		{	
			let request	= indexedDB.open(db_name, db_version);

			request.addEventListener("error", reject);

			request.addEventListener
			(
				"success",
				(e) =>
				{
					let db = e.target.result;

					let transaction = db.transaction(obj_store_name, "readwrite");
					let store = transaction.objectStore(obj_store_name);

					store.put(theme, "theme");
					resolve();
				}
			);
		}
	);
}

function addAnnouncement()
{
	const announcement_div_parent = document.createElement("div");
	const announcement_text = document.createElement("div");
	const announcement_link = document.createElement("a");
	const announcement_img = document.createElement("img");

	announcement_div_parent.classList.add("announcement");
	announcement_text.innerText = "git_basics is available on the Play Store! 🎉";
	announcement_link.href = "https://play.google.com/store/apps/details?id=com.harsh_kapadia.git_basics";
	announcement_img.src = "https://play.google.com/intl/en_us/badges/static/images/badges/en_badge_web_generic.png";
	announcement_img.alt = "Get it on Google Play";

	announcement_link.appendChild(announcement_img);

	announcement_div_parent.appendChild(announcement_text);
	announcement_div_parent.appendChild(announcement_link);
	header.insertBefore(announcement_div_parent, toc);
}

function mobileEdgeCaseStyling()
{
	let user_agent = navigator.userAgent;
	console.log(user_agent);
	if((user_agent.indexOf("Edg") > -1 && user_agent.indexOf("Mobile") > -1) || user_agent.indexOf("iPhone") > -1) 
		body.classList.add("mobile-edge-case");
}
