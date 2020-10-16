import { Criminal } from "./Criminal.js"
import { getCriminals, useCriminals } from "./CriminalProvider.js"

export const CriminalList = () => {
   
    getCriminals()
    .then( () => {
        let criminalHTMLRep = ""
        let CriminalArray = useCriminals()

        for(const criminal of CriminalArray){
            criminalHTMLRep += Criminal(criminal)}
    
    
    

    const targetElement = document.querySelector(".criminalsContainer")
    targetElement.innerHTML += criminalHTMLRep
    
          }   )
}