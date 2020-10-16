let officers = []

export const useOFficers =() => {
    return officers.slice()
}

export const getOfficers = () => {
    //request officer api
    return fetch("https://criminals.glassdale.us/officers")
    //convert the JSON string response to JS data structure
    .then(response => response.json())

    //Do something with the data
    .then(
        // store data in a variable
        parsedOfficers => {
            //create table for data
        console.table(parsedOfficers)
        //emptry array = data stored in variable?
        officers = parsedOfficers
        }
    )
}