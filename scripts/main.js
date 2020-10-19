import { getCriminals, useCriminals } from "./criminals/CriminalProvider.js"
import { getOfficers } from "./officers/OfficerProvider.js"
import { CriminalList } from "./criminals/CriminalList.js"
import { getConvictions } from "./convictions/ConvictionProvider.js"
import { ConvictionSelect } from "./convictions/ConvictionSelect.js"
import { OfficerList } from "./officers/OfficerList.js"

//getOfficers()
//.then()

const allTheCriminals = useCriminals()
console.log(allTheCriminals)

CriminalList()
ConvictionSelect()
OfficerList()