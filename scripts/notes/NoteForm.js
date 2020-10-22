import { saveNote } from "./NotesDataProvider.js"

// create note form HTML with inputs and render form to DOM
// add a click event for when user clicks the submit button
// submit should grab values from form inputs, build new note object, and POST that note to the API

const contentTarget = document.querySelector(".noteFormContainer")
const eventHub = document.querySelector(".container")

const render = () => {
    contentTarget.innerHTML = `
    <input type="text" id="note-investigator"/>
    <input type="text" id="note-suspect"/>
    <input type="date" id="note-date"/>
    <textarea id="note-text"></textarea>
    <button id="saveNote">Save Note</button>
    `
}

eventHub.addEventListener("click",clickEvent => {
    //grab input values
    const dateOfInterview = document.querySelector("#note-date").value
    const investigator = document.querySelector("#note-investigator").value
    const suspect = document.querySelector("#note-suspect").value
    const note = document.querySelector("#note-text").value
    const timestamp = Date.now()

    // make a note object

    const newNote = {
        dateOfInterview,
        investigator,
        suspect,
        note,
        timestamp
    }

    // Post object to database/API/json
    saveNote(newNote)
})

export const NoteForm = () => {
    render()
}