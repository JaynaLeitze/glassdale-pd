const eventHub = document.querySelector(".container")
const contentTarget = document.querySelector(".facility__button")



export const renderFacilitiesButton = () => {
    contentTarget.innerHTML = `
    <button id="display-facilities-button">Facilities</button>
    `
}

eventHub.addEventListener("click", (eventObj) => {
    if (eventObj.target.id === "display-facilities-button") {

    const facilityEvent = new CustomEvent("facilitiesButtonClicked")

    eventHub.dispatchEvent(facilityEvent)
}
})