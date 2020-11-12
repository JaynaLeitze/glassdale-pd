/*
    Responsibility: Get the alibis ralted to a single criminal and show it in a list
*/
import { useCriminals } from "./CriminalProvider.js";

const eventHub = document.querySelector(".container");

eventHub.addEventListener("alibiButtonClicked", (eventObj) => {
  //show teh alibis for teh selected criminals
  const arrayofCriminals = useCriminals();
  console.log(arrayofCriminals);
  // need to find the one criminal whose id matches the criminalId sent in the event

  const foundCriminal = arrayofCriminals.find((criminalObj) => {
    return criminalObj.id === parseInt(eventObj.detail.criminalId);
  });

  AlibiList(foundCriminal);
});

//function that adds a list of alibis to the criminal card
const AlibiList = (criminalObj) => {
  render(criminalObj);
};

// Render method for alibis
const render = (criminalObj) => {
  const contentTarget = document.querySelector(`#criminal-${criminalObj.id}`);

  contentTarget.innerHTML += `
    <div class="alibi__list">
        ${criminalObj.known_associates
          .map((alibiObj) => {
            return `
            <p> ${alibiObj.name}</p>
            <p> ${alibiObj.alibi}</P>
            `;
          })
          .join("")}
    </div>
    `;
};
