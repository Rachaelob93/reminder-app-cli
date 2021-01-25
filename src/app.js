const yargs = require("yargs");
const {addNote, loadNotes} = require("../utils/notes");

const command = process.argv[2];


if (command == "add") {
    console.log("adding a note...");
    addNote(yargs.argv.note);
}else if (command == "list") {
    console.log("listing notes")
}else if (command == "remove") {
 console.log("removing note")
}else{
    console.log("command not recognised")
}

