import { useConvictions } from "../convictions/ConvictionProvider.js"
import { Criminal } from "./Criminal.js"
import { getCriminals, useCriminals } from "./CriminalProvider.js"

const targetElement = document.querySelector(".criminalsContainer")
const eventHub = document.querySelector('.container')

export const CriminalList = () => {
   
    getCriminals()
    .then( () => {
        let criminalHTMLRep = ""
        let CriminalArray = useCriminals()

        for(const criminal of CriminalArray){
            criminalHTMLRep += Criminal(criminal)}
    
    
    

    
    targetElement.innerHTML += criminalHTMLRep
    
          }   )
}

eventHub.addEventListener("crimeSelected", event => {
    
    const criminalsArray = useCriminals()
    
    const convictionsArray = useConvictions()

    const convictionThatWasChosen = convictionsArray.find(convictionObj => {

        return convictionObj.id === parseInt(event.detail.crimeThatWasChosen)
    })
//console.log("convictionThatWasChose", convictionThatWasChosen)

const filteredCriminalsArray = criminalsArray.filter(criminalObj => {
    return criminalObj.conviction === convictionThatWasChosen.name
})

render(filteredCriminalsArray)
    
})

const render = (criminalsArray) => {
    let criminalHTMLRep = ""
    for (const criminal of criminalsArray) {
        criminalHTMLRep += Criminal(criminal)

    targetElement.innerHTML = `
       
        <section class="criminalsList">
        ${criminalHTMLRep}
        </section>
    `
    }

}