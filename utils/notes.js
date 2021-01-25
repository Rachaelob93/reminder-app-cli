const yargs = require("yargs");

const fs = require("fs");

const addNote = (myNote) => {
     const allNotes = loadNotes()
     allNotes.push({reminder: myNote})
    saveNotes(allNotes)
};

const loadNotes = () => {
    try{
        const dataBuffer = fs.readyFileSync("src/notes.json");
        const notesJson = dataBuffer.toString();
        return JSON.parse(notesJson);
    } catch (error) {
        return [];
    }
};

const saveNotes = allNotes => {
    const notesJson = JSON.stringify(allNotes);
    fs.writeFileSync("src/notes.json", notesJson);
};

module.exports = {
    addNote,
    loadNotes
};