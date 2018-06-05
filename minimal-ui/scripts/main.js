/* eslint-disable no-console */

let installPromptEvent;
const installLink = document.querySelector(".install-link");

// Install App functionality
// Based on {@link https://w3c.github.io/manifest/#usage-example}
window.addEventListener("beforeinstallprompt", event => {
    console.log("beforeinstallprompt Event");

    // Suppress automatic prompting
    event.preventDefault();

    // Stash the event so it can be triggered later.
    installPromptEvent = event;

    // Show the (hidden-by-default) install link
    installLink.hidden = false;
});

installLink.addEventListener("click", async event => {
    console.log("Install App Link Click Event");
    event.preventDefault();

    // The prompt() method can only be used once.
    installLink.hidden = true;

    // Show the prompt.
    const { userChoice } = await installPromptEvent.prompt();
    console.info(`User choice was: ${userChoice}`);
});
