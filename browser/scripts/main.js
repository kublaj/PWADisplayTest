/* eslint-disable no-console */

console.log("main.js");

let installPromptEvent;

const installLinkEl = document.querySelector(".install-link");

// On the beforeinstallprompt event, save a reference to the event, and show the Install App link
window.addEventListener("beforeinstallprompt", event => {
    console.log("beforeinstallprompt");

    event.preventDefault();
    installPromptEvent = event;
    installLinkEl.hidden = false;
});

// Show the install prompt when the Install App link is clicked
installLinkEl.addEventListener("click", event => {
    console.log("click");

    event.preventDefault();
    installLinkEl.hidden = true;
    installPromptEvent.prompt();
});
