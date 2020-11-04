

const eventHub = document.querySelector(".container")
const contentTarget = document.querySelector(".filters__witness")



export const renderWitnessButton = () => {
    contentTarget.innerHTML = `
    <button id="display-witnesses-button">Witness Statements</button>
    `
}

eventHub.addEventListener("click", (eventObj) => {
    if (eventObj.target.id === "display-witnesses-button") {

    const witnessEvent = new CustomEvent("witnessButtonClicked")

    eventHub.dispatchEvent(witnessEvent)
}
})
