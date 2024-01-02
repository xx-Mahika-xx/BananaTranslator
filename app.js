console.debug("Script works")

const btnTranslate = document.querySelector("#btn-translate");
const txtInput = document.querySelector("#txtarea");
const outputDiv = document.querySelector("#output");
const serverURL = "https://api.funtranslations.com/translate/minion.json";

function errorHandler(error) {
    console.error("Error Occured", error);
    alert("Oops! Something went wrong. Try again later.");
}

function getTranslationURL(text) {
    return `${serverURL}?text=${text}`
}

function clickHandler() {
    console.debug("Translate button clicked");
    fetch(getTranslationURL(txtInput.value))
        .then(response => response.json())
        .then(json => {
            outputDiv.innerText = json.contents.translated; // json.contents.translated is the translated text
        })
        .catch(errorHandler)
};

btnTranslate.addEventListener("click", clickHandler)
