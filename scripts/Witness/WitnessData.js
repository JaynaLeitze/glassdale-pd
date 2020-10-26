let witnesses = []

const useStatements = () => {
    witnesses.slice()
}

export const getStatements = () => {
    //request the data
    return fetch("https://criminals.glassdale.us/witnesses")
    //convert JSON string response to data structure
    .then(response => response.json())
    //do something with the data
    .then(
        parsedStatements => {
            witnesses = parsedStatements
        }
    )
}