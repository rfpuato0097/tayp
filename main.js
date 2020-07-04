import {sentences} from '/sentences.js';

var timeStart;
var timeEnd;

function pickSentences(sentences){
    let tempSentences = sentences;
    let randSentences = ""

    for (let i = tempSentences.length -1; i > 0; i--) {
        let j = Math.floor(Math.random() * i)
        let k = tempSentences[i]
        tempSentences[i] = tempSentences[j]
        tempSentences[j] = k
      } 

    return randSentences = tempSentences[0] + " " + tempSentences[1] + " " + tempSentences[2];
}

var paragraph = pickSentences(sentences);
document.querySelector("#sentences").innerHTML = paragraph;

//Read the input.
const inputField = document.querySelector("#input");
inputField.addEventListener("keyup", key => {
    if(inputField.value.length === 1){
        timeStart = new Date().getTime();
    }

    if(inputField.value != ""){
        let substring = paragraph.slice(0, inputField.value.length);
        if(substring != inputField.value){
            document.querySelector("#input").style.backgroundColor = "#FF4242";
        } else {
            document.querySelector("#input").style.backgroundColor = "white";
        }
    } else{
        document.querySelector("#input").style.backgroundColor = "white";
    }

    if(key.keyCode === 13){
        timeEnd = new Date().getTime();
        let totalTime = ((timeEnd - timeStart)/1000)/60;
        let WPM = (inputField.value.length / 5) / totalTime;
        document.querySelector("#wpm").textContent = "Salita kada Minuto: "+WPM.toFixed(0);
        inputField.value = "";
    }
})

const umulitBtn = document.querySelector("#ulit");
umulitBtn.addEventListener("click", clicked => {
    window.location.reload();
})