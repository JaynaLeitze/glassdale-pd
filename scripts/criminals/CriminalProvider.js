let criminals = []

export const useCriminals = () => {
    return criminals.slice()
}

export const getCriminals = () => {
    //request the data
    return fetch("https://criminals.glassdale.us/criminals")
    //convert JSON string response to data structure
    .then(response => response.json())
    //do something with the data
    .then(
        parsedCriminals => {
            criminals = parsedCriminals
        }
    )
}