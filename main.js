const sentences = [
    "Naririnig mo ba ang tindero ng balot?",
    "Ang tindero ng balot ay nasa labas ng kalsada.",
    "Magkakape ako mamaya.",
    "Negosyo o kalayaan? Bayan o sarili? Pumili ka!",
    "Kapag namulat ka sa katotohanan, kasalanan na ang pumikit.",
    "Kung hindi ukol, hindi bubukol.",
    "Para kayong mga birheng naniniwala sa pag-ibig ng isang puta!",
    "Wala na tayong panahon para sa mga bagay na hindi natin kayang panindigan.",
    "May mas malaki tayong kalaban sa mga Amerikano, ang ating sarili.",
    "Mas magandang mamatay sa digmaan kaysa magpasakop sa dayuhan.",
    "Mas madali pang pagkasunduin ang langit at lupa kaysa dalawang Pilipino tungkol sa kahit anong bagay.",
    "Ganito ba talaga ang tadhana natin? Kalaban ng kalaban. Kalaban ng kakampi. Nakakapagod.",
    "Malaking trabaho ang ipagkaisa ang bansang watak-watak.",
    "Mas mahalaga ang papel natin sa digmaan kaysa sa anumang nararamdaman natin sa isa’t isa.",
    "Walang naka-aangat sa batas kahit pa presidente.",
    "Nasubukan mo na bang hulihin ang hangin.",
    "Ang taong may damdamin ay hindi alipin.",
    "Wala ba tayong karapatang mabuhay ng malaya?",
    "Hindi pagdurusa ang pagdaan sa napakatinding pasakit.",
    "Paano ako lalaban? Kakagatin ko sila?",
    "Bigyan n'yo ako ng tatlong araw.",
    "Ano bang akala n'ya, ibang bansa na ang cavite?",
    "Mga inutil! Hindi tayo mamamasyal!",
    "Ang kalaban ng kalaban ay kaibigan.",
    "Mata sa mata, ngipin sa ngipin.",
    "Huwag mong kalimutang huminga.",
    "Magkasama tayo sa laban na ito.",
    "Walang puwang ang bulag sa gabinete na ito."
];

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