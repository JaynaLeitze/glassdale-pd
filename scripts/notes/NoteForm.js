import { getCriminals, useCriminals } from "../criminals/CriminalProvider.js"
import { saveNote } from "./NotesDataProvider.js"
import { CriminalList } from "../criminals/CriminalList.js"

// create note form HTML with inputs and render form to DOM
// add a click event for when user clicks the submit button
// submit should grab values from form inputs, build new note object, and POST that note to the API

const contentTarget = document.querySelector(".noteFormContainer")
const eventHub = document.querySelector(".container")



const render = (criminals) => {
    contentTarget.innerHTML = `
    <h3>Note Form</h3>
    <input type="text" id="note-investigator" placeholder="Investigator:"/>
    <select class="dropdown" id="note-Suspect">
            <option value="0">Select a Criminal</option>
            ${criminals.map(
            criminalObj => {
                return `<option value="${criminalObj.id}"> ${criminalObj.name}</option>`
                }
            ).join("")
        }
        </select>
        
    <input type="date" id="note-date"/>
    <textarea id="note-text"></textarea>
    <button id="saveNote">Save Note</button>
    `
}

eventHub.addEventListener("click",clickEvent => {
    if (clickEvent.target.id === "saveNote"){
    //grab input values
    const dateOfInterview = document.querySelector("#note-date").value
    const investigator = document.querySelector("#note-investigator").value
    const criminalId = document.querySelector("#note-Suspect").value
    const note = document.querySelector("#note-text").value
    const timestamp = Date.now()

    // make a note object

    const newNote = {
        dateOfInterview,
        investigator,
        criminalId: parseInt(criminalId),
        note,
        timestamp
    }
    console.log(newNote)
    // Post object to database/API/json
    saveNote(newNote)
    }
})

export const NoteForm = () => {
    getCriminals()
    .then(() => {
        const criminalArray = useCriminals()
        render(criminalArray)
    })
    
}