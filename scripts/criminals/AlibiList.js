/*
    Responsibility: Get the alibis ralted to a single criminal and show it in a list
*/
import { useCriminals } from "./CriminalProvider.js"

const eventHub = document.querySelector('.container')

export const alibiEventListener = () => {

eventHub.addEventListener("alibiButtonClicked", (eventObj) => {
    //show teh alibis for teh selected criminals
    console.log(eventObj.detail.criminalId)
    // need to find the one criminal whose id matches the criminalId sent in the event
    const foundCriminal = useCriminals().find((criminalObj) => criminalObj.id === parseInt(eventObj.detail.criminalId))
    

    AlibiList(foundCriminal)
})
}
//function that adds a list of alibis to the criminal card
export const AlibiList = (criminalObj) => {
    render(criminalObj)

}

// Render method for alibis
const render = (criminalObj) => {
    const contentTarget = document.querySelector(`#criminal-${criminalObj.id}`)

    contentTarget.innerHTML += `
    <div class="alibi__list">
        ${criminalObj.known_associates.map(alibiObj => {
            return `
            <p> ${alibiObj.name}</p>
            <p> ${alibiObj.alibi}</P>
            `
        }).join("") }
    </div>
    `
}