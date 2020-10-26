import { getCriminals, useCriminals } from "./criminals/CriminalProvider.js"
import { getOfficers } from "./officers/OfficerProvider.js"
import { CriminalList } from "./criminals/CriminalList.js"
import { getConvictions } from "./convictions/ConvictionProvider.js"
import { ConvictionSelect } from "./convictions/ConvictionSelect.js"
import { OfficerList } from "./officers/OfficerList.js"
import { NoteList } from "./notes/NotesList.js"
import { NoteForm } from "./notes/NoteForm.js"
import { OfficerSelect } from "./officers/OfficerSelect.js"
import { alibiEventListener } from "./criminals/AlibiList.js"


//getOfficers()
//.then()

const allTheCriminals = useCriminals()
console.log(allTheCriminals)

CriminalList()
ConvictionSelect()
OfficerList()

NoteList()
NoteForm()
OfficerSelect()
alibiEventListener()
