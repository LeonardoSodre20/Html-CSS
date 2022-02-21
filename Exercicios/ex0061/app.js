console.log(fetch(`https://pokeapi.co/api/v2/generation`)
    .then(response => response.json())
        .then(value => console.log(value)))

for(let i = 0;)
