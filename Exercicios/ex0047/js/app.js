const requestAPI = () => {
    const urlAPI = `https://rickandmortyapi.com/api/character`

    fetch(urlAPI, {
        method: 'GET'

    }).then(request => request.json())
        .then(json => {
            let container = document.querySelector('.container')

            json.results.map(results => {
                container.innerHTML+= `

                    <div> <img src=${results.image}>
                    </div>

                    <strong>${results.name}</strong>
                    <span>${results.species}</span>
                    <span>${results.status}</span>
                    

                
                `
            })
        })
}


requestAPI()