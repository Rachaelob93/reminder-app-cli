const yargs = require("yargs");
const {addNote, loadNotes, listNotes} = require("../utils/notes");


const command = process.argv[2];


if (command == "add") {
    console.log("adding a note...");
    addNote(yargs.argv.note);
}else if (command == "list") {
    console.log("listing notes...")
    listNotes()
    
}else if (command == "remove") {
 console.log("removing note")
}else{
    console.log("command not recognised")
}

listNotes()