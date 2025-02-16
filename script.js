document.addEventListener("DOMContentLoaded", function () {
    const addNoteBtn = document.getElementById("addNote");
    const notesContainer = document.getElementById("notesContainer");

    addNoteBtn.addEventListener("click", addNote);
});

function addNote() {
    const notesContainer = document.getElementById("notesContainer");
    const note = document.createElement("div");
    note.classList.add("note");
    note.setAttribute("contenteditable", "true");
    note.textContent = "New Note";

    note.addEventListener("dblclick", removeNote);

    notesContainer.insertBefore(note, notesContainer.firstChild);
}

function removeNote(event) {
    event.target.remove();
}
