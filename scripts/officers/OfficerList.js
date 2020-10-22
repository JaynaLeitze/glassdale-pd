import { getOfficers, useOFficers } from "./OfficerProvider.js"
import { Officer } from "./Officers.js"



export const OfficerList = () => {
   
    getOfficers()
    .then( () => {
        let officerHTMLRep = ""
        let officerArray = useOFficers()

        for(const officer of officerArray){
            officerHTMLRep += Officer(officer)}
    
    
    

    const targetElement = document.querySelector(".filters__officer")
    targetElement.innerHTML += `
            <section class="officers">
            <h3> Officers </h3>
            ${officerHTMLRep}
            </section>
    `
    
          }   )
}