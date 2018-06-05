/* eslint-disable no-console */

const installLink = document.querySelector(".install-link");

// Install App functionality
// Based on {@link https://w3c.github.io/manifest/#usage-example}
window.addEventListener("beforeinstallprompt", event => {
    console.log("beforeinstallprompt Event");

    // Suppress automatic prompting
    event.preventDefault();

    // Show the (hidden-by-default) install link
    installLink.hidden = false;

    // Wait for the user to click the link
    installLink.addEventListener("click", async ev => {
        console.log("Install App Link Click Event");
        ev.preventDefault();

        // The prompt() method can only be used once.
        installLink.hidden = true;

        // Show the prompt.
        const { userChoice } = await event.prompt();
        console.info(`User choice was: ${userChoice}`);
    });
});
