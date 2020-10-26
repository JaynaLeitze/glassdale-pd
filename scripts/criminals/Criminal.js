const eventHub = document.querySelector(".container")

export const Criminal = (taco) => {
   return ` 
        <div id="criminal-${taco.id}" class="criminalContent" >
        <h3 class="crim__name">${taco.name}</h3>
        <p class="crim__age">Age:${taco.age}</p>
        <p class="crim__conviction"> Conviction: ${taco.conviction}</p>
        <p class="crim__start">Term Start: ${new Date(taco.incarceration.start).toLocaleDateString('en-US')}</p>
        <p class="crim__end">Term Start: ${new Date(taco.incarceration.end).toLocaleDateString('en-US')}</p>
        <button id="associates--${taco.id}">Associate Alibis</button>
    </div>
    `
}
eventHub.addEventListener("click", (eventObj) => {
    //check to see if the button is the alibi button
    if (eventObj.target.id.startsWith("associates--")){

    }
    //split id of alibi button
    const [prefix, criminalId] = eventObj.target.id.split("--")

    //build custom event
    const alibiEvent = new CustomEvent("alibiButtonClicked", {
        detail: {
            criminalId: criminalId
        }
    })
    //dispatch event so that other modules can listen for this event
    eventHub.dispatchEvent(alibiEvent)
})