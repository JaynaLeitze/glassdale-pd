import { getOfficers, useOfficers } from "./OfficerProvider.js"
import {  OfficerHTML } from "./Officers.js"



export const OfficerList = () => {
   
    getOfficers()
    .then( () => {
        let officerHTMLRep = ""
        let officerArray = useOfficers()

        for(const officer of officerArray){
            officerHTMLRep += OfficerHTML(officer)}
    
    
    

    const targetElement = document.querySelector(".filters__officer")
    targetElement.innerHTML += `
            <section class="officers">
            <h3> Officers </h3>
            ${officerHTMLRep}
            </section>
    `
    
          }   )
}