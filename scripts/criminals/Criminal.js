

export const Criminal = (taco) => {
   return ` 
        <div class="criminalContent">
        <h3 class="crim__name">${taco.name}"</h3>
        <p class="crim__age">Age:${taco.age}</p>
        <p class="crim__conviction">${taco.conviction}</p>
        <p class="crim__start">Term Start: ${new Date(taco.incarceration.start).toLocaleDateString('en-US')}</p>
        <p class="crim__end">Term Start: ${new Date(taco.incarceration.end).toLocaleDateString('en-US')}</p>
    </div>
    `
}