import { getFacilities, useFacilities } from "./FacilityDataProvider.js";
import { FacilityHTML } from "./FacilityHTML.js";

const eventHub = document.querySelector(".container");
const facilitiesContainer = document.querySelector(".caseDataContainer");

eventHub.addEventListener("facilitiesButtonClicked", () => {
  FacilityList();
});

export const FacilityList = () => {
  getFacilities().then(() => {
    const facilitiesArray = useFacilities();
    renderFacilities(facilitiesArray);
  });
};

const renderFacilities = (facilities) => {
  let facilityHTMLRep = "";
  for (const facility of facilities) {
    facilityHTMLRep += FacilityHTML(facility);

    facilitiesContainer.innerHTML = `
       
        
        ${facilityHTMLRep}
        
    `;
  }
};
