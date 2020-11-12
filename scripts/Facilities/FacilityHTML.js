export const FacilityHTML = (facility, criminalsArray) => {
  return `
    <div class="facilityContent">
    <h2> ${facility.facilityName}</h2>
    <h5> Security Level: ${facility.securityLevel}</h5>
     <h5>Capacity: ${facility.capacity}</h5>
     <div>
     <h4>Criminals</h4>
     <ul>
        ${criminalsArray.map((c) => `<li>${c.name}</li>`).join("")}
     </ul>
     </div>
</div>
    `;
};
