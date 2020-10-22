//convert object to HTML string
//return that HTML string

export const NoteHTML = (taco) => {
    return `
    <h3 class="note__case">Case Notes</h3>
    <div class="noteContent">
    
    <p class="note__investigator">Investigator: ${taco.investigator}<br>
    Suspect: ${taco.suspect}<br>
    Date of Interview: ${taco.dateOfInterview}<br>
    Notes: ${taco.note}<br>
    Timestamp: ${new Date(taco.timestamp).toLocaleDateString('en-US')}</p>
</div>
    `
}