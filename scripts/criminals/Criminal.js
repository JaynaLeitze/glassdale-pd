const eventHub = document.querySelector(".container")

export const Criminal = (criminalObj,facilities) => {
   return ` 
        <div id="criminal-${criminalObj.id}" class="criminalContent" >
        <h3 class="crim__name">${criminalObj.name}</h3>
        <p class="crim__age">Age:${criminalObj.age}</p>
        <p class="crim__conviction"> Conviction: ${criminalObj.conviction}</p>
        <p class="crim__start">Term Start: ${new Date(criminalObj.incarceration.start).toLocaleDateString('en-US')}</p>
        <p class="crim__end">Term Start: ${new Date(criminalObj.incarceration.end).toLocaleDateString('en-US')}</p>
        <div>
            <h3>Facilities</h3>
            <ul>
                ${facilities.map(f => `<li>${f.facilityName}</li>`).join("")}
            </ul>
        </div>
        <button id="associates--${criminalObj.id}">Associate Alibis</button>
    </div>
    `
}
eventHub.addEventListener("click", (eventObj) => {
    //check to see if the button is the alibi button
    if (eventObj.target.id.startsWith("associates--")){

    
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
}
})
