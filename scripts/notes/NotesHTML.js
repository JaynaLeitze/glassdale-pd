//convert object to HTML string
//return that HTML string

export const NoteHTML = (taco) => {
    return `
    <div class="noteContent">
    <h3 class="note__case">Case Notes</h3>
    <p class="note__investigator">Investigator:${taco.investigator}</p>
    <p class="note__suspect"> Suspect:${taco.suspect}</p>
    <p class="note__date">Date of Interview:${taco.dateOfInterview}</p>
    <p class="note__text">${taco.note}</p>
    <p class="crim__end">Timestamp: ${new Date(taco.timestamp).toLocaleDateString('en-US')}</p>
</div>
    `
}