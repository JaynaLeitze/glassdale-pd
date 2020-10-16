import { getCriminals, useCriminals } from "./criminals/CriminalProvider.js"
import { getOfficers } from "./officers/OfficerProvider.js"
import { CriminalList } from "./criminals/CriminalList.js"

//getOfficers()
//.then()

const allTheCriminals = useCriminals()
console.log(allTheCriminals)

CriminalList()