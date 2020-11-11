let criminalFacilities = []

// get copy of array
export const useCriminalFacilities = () => {
    return criminalFacilities.slice
}

// get criminal facilities from api
export const getCriminalFacilities = () => {
    return fetch("https://criminals.glassdale.us/criminalFacilities")
    .then(response => response.json)
    .then(apiData => {
        criminalFacilities = apiData
    })
}