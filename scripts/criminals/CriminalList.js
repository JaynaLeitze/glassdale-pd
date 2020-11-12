import { useConvictions } from "../convictions/ConvictionProvider.js";
import {
  getCriminalFacilities,
  useCriminalFacilities,
} from "../Facilities/CriminalFacilityProvider.js";
import {
  getFacilities,
  useFacilities,
} from "../Facilities/FacilityDataProvider.js";
import { Criminal } from "./Criminal.js";
import { getCriminals, useCriminals } from "./CriminalProvider.js";

const eventHub = document.querySelector(".container");
const targetElement = document.querySelector(".caseDataContainer");

export const CriminalList = () => {
  getFacilities()
    .then(getCriminalFacilities)
    .then(() => {
      let criminalHTMLRep = "";
      let facilities = useFacilities();
      let crimFac = useCriminalFacilities();
      let criminals = useCriminals();
      // debugger

      //Pass all three collections to render()
      render(criminals, facilities, crimFac);

      targetElement.innerHTML += criminalHTMLRep;
    });
};

eventHub.addEventListener("crimeSelected", (event) => {
  const criminalsArray = useCriminals();
  const convictionsArray = useConvictions();
  let facilities = useFacilities();
  let crimFac = useCriminalFacilities();

  const convictionThatWasChosen = convictionsArray.find((convictionObj) => {
    return convictionObj.id === parseInt(event.detail.crimeThatWasChosen);
  });
  //console.log("convictionThatWasChose", convictionThatWasChosen)

  const filteredCriminalsArray = criminalsArray.filter((criminalObj) => {
    return criminalObj.conviction === convictionThatWasChosen.name;
  });

  render(filteredCriminalsArray, facilities, crimFac);
});

eventHub.addEventListener("officerSelected", (officerSelectedEventObj) => {
  const selectedOfficerName = officerSelectedEventObj.detail.officerName;
  //    console.log("CriminalList: officerSelected custom event has been heard on the event hub, selected officer name:",selectedOfficerName)

  const criminalsArray = useCriminals();
  let facilities = useFacilities();
  let crimFac = useCriminalFacilities();
  //    console.log("criminalsArray", criminalsArray)

  const filteredArrayCriminals = criminalsArray.filter((criminalObj) => {
    return criminalObj.arrestingOfficer === selectedOfficerName;
  });
  //    console.log("CriminalList:Array of criminals filtered for only the criminals that were arrested by selected officers", filteredArrayCriminals)

  render(filteredArrayCriminals, facilities, crimFac);
});

const render = (criminalsArray, allFacilities, allRelationships) => {
  targetElement.innerHTML = criminalsArray
    .map((criminalObject) => {
      //Step 2- Filter all relationships to get only ones for this criminal
      const facilityRelationshipsForThisCriminal = allRelationships.filter(
        (cf) => cf.criminalId === criminalObject.id
      );

      //Step 3 - Convert the realationships to faciites with map()
      const facilities = facilityRelationshipsForThisCriminal.map((cf) => {
        const matchingFacilityObject = allFacilities.find(
          (facility) => facility.id === cf.facilityId
        );
        return matchingFacilityObject;
      });
      //Must pass the matching facilities to the Criminal component
      return Criminal(criminalObject, facilities);
    })
    .join("");
};
