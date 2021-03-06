import { getCriminals, useCriminals } from "../criminals/CriminalProvider.js"
import { getNotes, useNotes, deleteNote } from "./NotesDataProvider.js"
import { NoteHTML } from "./NotesHTML.js"

// get the notes from the api >> use the notes array
// iterate the notes array >> make an html representation each
// render html string of notes to the notesContainer element on the DOM

const eventHub = document.querySelector(".container")
const notesContainer = document.querySelector(".noteListContainer")


eventHub.addEventListener("noteStateChanged",() => NoteList())
    

export const NoteList = () => {
    const notes = useNotes()
    const criminals = useCriminals()
    const arrayOfNoteRepresentations = notes.map(note => {
    const criminal = criminals.find(criminalObj => criminalObj.id === note.criminalId)
    const html = NoteHTML(note, criminal)
        return html
    })
        
        const stringOfAll = arrayOfNoteRepresentations.join("")

        notesContainer.innerHTML = stringOfAll
    }


// const render = (notesCollection, criminalCollection) => {
// notesContainer.innerHTML = notesCollection.map(note => {
//     // Find the related criminal
//     const relatedCriminal = criminalCollection.find(criminal => criminal.id === note.criminalId)

//     return `
//         <section class="note">
//             <h2>Note about ${relatedCriminal.name}</h2>
//             ${note.noteText}
//         </section>
//     `
// })

   



eventHub.addEventListener("click", clickEvent => {
   
    if (clickEvent.target.id.startsWith("deleteNote--")) {
        const [prefix, id] = clickEvent.target.id.split("--")
        console.log("button was clicked");

        /*
            Invoke the function that performs the delete operation.

            Once the operation is complete you should THEN invoke
            useNotes() and render the note list again.
        */
       deleteNote(id).then(
           () => {
              NoteList()
           }
       )}
    })
