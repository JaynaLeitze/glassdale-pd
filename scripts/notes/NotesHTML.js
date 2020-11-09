//convert object to HTML string
//return that HTML string

export const NoteHTML = (noteObj, criminalObj) => {
    return `
    <h3 class="note__case">Case Notes</h3>
    <div class="noteContent">
    
    <p class="note__investigator">Investigator: ${noteObj.investigator}<br>
    Criminal: ${criminalObj.name}<br>
    Date of Interview: ${noteObj.dateOfInterview}<br>
    Notes: ${noteObj.note}<br>
    Timestamp: ${new Date(noteObj.timestamp).toLocaleDateString('en-US')}</p>
    <button id="deleteNote--${noteObj.id}">Delete</button>
</div>
    `
}