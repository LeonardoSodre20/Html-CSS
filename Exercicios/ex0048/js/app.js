const resquestAPI = () => {
    const urlAPI = `https://rickandmortyapi.com/api/character`

    fetch(urlAPI)
        .then(resquest => resquest.json())
            .then(json => {

                let apiInformations = document.querySelector('[data-container-api]')

                json.results.map(results => {
                    
                    apiInformations.innerHTML+= `
                
                        
                        <div class="container-character">
                            <div class="container-img">
                                <img src=${results.image}>
                            </div>
                            <h2>Nome: ${results.name}</h2>
                            <h3>Espécie: ${results.species}</h3>
                            <h4>Status: ${results.status}</h4>
                            <h4>Gênero: ${results.gender}</h4>
                        </div>
        
                    `
                })

            })
    
            
   
}

resquestAPI()