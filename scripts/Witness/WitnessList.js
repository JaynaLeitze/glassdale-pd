import { getStatements, useStatements } from "./WitnessData.js";
import { WitnessHTML } from "./WitnessHTML.js";

const eventHub = document.querySelector(".container");
const witnessesContainer = document.querySelector(".caseDataContainer");

eventHub.addEventListener("witnessButtonClicked", () => {
  WitnessList();
});

export const WitnessList = () => {
  getStatements().then(() => {
    const witnessArray = useStatements();
    renderStatements(witnessArray);
  });
};

const renderStatements = (witnessStatements) => {
  let statementHTMLRep = "";
  for (const witness of witnessStatements) {
    statementHTMLRep += WitnessHTML(witness);

    witnessesContainer.innerHTML = `
    
        ${statementHTMLRep}
    
    `;
  }
};
