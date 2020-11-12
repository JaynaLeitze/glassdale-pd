const eventHub = document.querySelector(".container");
const contentTarget = document.querySelector(".criminals__button");

export const renderCriminalsButton = () => {
  contentTarget.innerHTML = `
    <button id="display-criminals-button">Criminals</button>
    `;
};

eventHub.addEventListener("click", (eventObj) => {
  if (eventObj.target.id === "display-criminals-button") {
    const criminalEvent = new CustomEvent("criminalsButtonClicked");

    eventHub.dispatchEvent(criminalEvent);
  }
});
