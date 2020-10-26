const eventHub = document.querySelector(".container")

export const Witness = () => {
    return `
    <button id="witness" class="witness__statement">Witness Statements</button>
    `
}

eventHub.addEventListener("click", (eventObj) => {
    if (eventObj.target.id === "witness") 

    const witnessEvent = new CustomEvent("witnessButtonClicked",{
        detail: {
            statement:statement

        }
    })
    eventHub.dispatchEvent(witnessEvent)
})