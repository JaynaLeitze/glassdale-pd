export const FacilityHTML = (facility) => {
  return `
    <div class="facilityContent">
    <h3> ${facility.facilityName}</h3>
    <h5> Security Level: ${facility.securityLevel}</h5>
     <h5>Capacity: ${facility.capacity}</h5>
</div>
    `;
};
