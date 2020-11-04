import { getNotes, useNotes } from "./NotesDataProvider.js"
import { NoteHTML } from "./NotesHTML.js"

// get the notes from the api >> use the notes array
// iterate the notes array >> make an html representation each
// render html string of notes to the notesContainer element on the DOM

const eventHub = document.querySelector(".container")
const notesContainer = document.querySelector(".noteFormContainer")


eventHub.addEventListener("noteStateChanged",() => NoteList())
    

export const NoteList = () => {
    getNotes()
    .then(() => {
        const allNotes = useNotes()
        render(allNotes)
    })


const render = (notesArray) => {
    let notesHTMLRep = ""
    for (const note of notesArray)
    notesHTMLRep += NoteHTML(note)


notesContainer.innerHTML = `
    ${notesHTMLRep}
`
}}