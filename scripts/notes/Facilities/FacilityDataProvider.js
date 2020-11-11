let facilities = []

export const useFacilities = () => facilities.slice

export const getFacilities = () => {
    return fetch("https://criminals.glassdale.us/facilites")
    .then(response => response.json())
    .then(apiData => {
        facilities = apiData
    })
}