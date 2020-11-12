import { getCriminals, useCriminals } from "../criminals/CriminalProvider.js";
import {
  getCriminalFacilities,
  useCriminalFacilities,
} from "./CriminalFacilityProvider.js";
import { renderFacilitiesButton } from "./FacilitiesButton.js";
import { getFacilities, useFacilities } from "./FacilityDataProvider.js";
import { FacilityHTML } from "./FacilityHTML.js";

const eventHub = document.querySelector(".container");
const facilitiesContainer = document.querySelector(".caseDataContainer");

let facilities = [];
let crimFac = [];
let criminals = [];

eventHub.addEventListener("facilitiesButtonClicked", () => {
  FacilityList();
});

export const FacilityList = () => {
  getFacilities()
    .then(getCriminalFacilities)
    .then(getCriminals)
    .then(() => {
      facilities = useFacilities();
      crimFac = useCriminalFacilities();
      criminals = useCriminals();
      renderFacilities();
    });
};

const renderFacilities = () => {
  facilitiesContainer.innerHTML = `
          
            ${facilities
              .map((facility) => {
                const criminalRelationshipsForThisFacility = crimFac.filter(
                  (cf) => cf.facilityId === facility.id
                );
                const criminalsAtThisFacility = criminalRelationshipsForThisFacility.map(
                  (cf) => {
                    const matchingCriminalObj = criminals.find(
                      (criminal) => criminal.id === cf.criminalId
                    );
                    return matchingCriminalObj;
                  }
                );
                return FacilityHTML(facility, criminalsAtThisFacility);
              })
              .join("")}
        `;
};
