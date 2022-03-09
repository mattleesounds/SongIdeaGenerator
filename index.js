//create objects for elements to be edited
keyEl = document.getElementById("key")
modeEl = document.getElementById("mode")
chordsEl = document.getElementById("chords")
tempoEl = document.getElementById("tempo")
feelingEl = document.getElementById("feeling")

//Generate Song: Generates random ey, mode, chord progression
//tempo, and feeling
function generateSong(){
    generateKey()
    generateMode()
    generateChords()
    generateTempo()
    generateFeeling()
}

//Generate key (A-G)
let keys = ["A", "A#", "B", "C", "C#", "D", "D#", "E", "F", "F#", "G", "G#"]
function generateKey(){
    keyEl.textContent = "Key: " + keys[Math.floor(Math.random() * 12)]
}

//Generate mode
let modes = ["Ionian", "Dorian", "Phrygian", "Lydian", "Mixolydian", "Aeolian", "Locrian"]
function generateMode(){
    modeEl.textContent = "Mode: " + modes[Math.floor(Math.random() * 7)]
}

//Generate chord progression
//A list of 3-6 scale degrees between 1 and 6
let chordProgression = []

function generateChords() {
    let numberOfChords = Math.floor(Math.random() * 4) + 3
    for (i = 0; i < numberOfChords; i++) {
        chordProgression[i] = Math.floor(Math.random() * 6) + 1   
    }
    chordsEl.textContent = "Chords: " + chordProgression
}

//Generate tempo (60 - 170)
function generateTempo(){
    tempoEl.textContent = "Tempo: " + (Math.floor(Math.random() * 110) + 60)
}

//Generate feeling description
let feelings = ["Exuberant", "Dreamy", "Aloof", 
            "Ominous", "Determined", "Celebratory",
            "Desperate", "Affectionate", "Curious"]

function generateFeeling(){
    feelingEl.textContent = "Feeling: " + feelings[Math.floor(Math.random() * 9)]
}


