import {getOfficers, useOfficers} from "./OfficerProvider.js"

const officersFilterContainer = document.querySelector(".filters__officer")
console.log("OfficerSelect: Getting reference to container for dropdown")

export const OfficerSelect = () => {
    console.log("OfficerSelect: Get data from API and render drop down ot the DOM")
    getOfficers()
    .then(() => {
        const officersArray = useOfficers()
        console.log("officersArray", officersArray)

        render(officersArray)
    })
}

const render = (officers) => {
        officersFilterContainer.innerHTML = `
        <select class="dropdown" id="officerSelect">
            <option value="0">Please select an officer...</option>
            ${officers.map(
            officerObj => {
                return `<option value="${officerObj.name}"> ${officerObj.name}</option>`
                }
            ).join("")
        }
        </select>
        `
    
    
}

const eventHub = document.querySelector(".container")


eventHub.addEventListener("change", (changeEvent) => {
    if (changeEvent.target.id === "officerSelect") {
        console.log("OfficerSelect: Change event happened in the officers dropdown")

        console.log("OfficerSelect: Build custom event for officersSelected")
        const officersSelectedEvent = new CustomEvent("officerSelected", {
            detail: {
                officerName: changeEvent.target.value
            }
        })
        console.log("OfficerSelect: Dispatch event")
        eventHub.dispatchEvent(officersSelectedEvent)
    }
})