console.log("Script works")
var btnTranslate= document.querySelector("#btn-translate");
var txtInput=document.querySelector("#txtarea");
var outputDiv=document.querySelector("#output");


function clickHandler(){
    console.log("Translate button clicked");
    outputDiv.innerText="hi" + txtInput.value;
};

btnTranslate.addEventListener("click",clickHandler)