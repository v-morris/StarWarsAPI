export const characterRequestComplete = (characters) => ({
  type: 'CHARACTER_REQUEST_COMPLETE',
  characters
});

export const planetRequestComplete = (planets) => ({
  type: 'PLANET_REQUEST_COMPLETE',
  planets
});

export const filmRequestComplete = (films) => ({
  type: 'FILM_REQUEST_COMPLETE',
  films
});

//   This is not an action, but it is used to generate the repo data that is used by an action.
export const searchGithub = item => {
  return fetch(`https://api.github.com/search/repositories?q=${item}`)
    .then(response => response.json())
    .then(response => response.items.map(repo => (
      {
        id: repo.id,
        name: repo.name,
        url: repo.html_url
      }
    )
    )
    )
};

export const getCharacter = () => {
  return fetch(`https://swapi.co/api/people/?format=json`)
    .then(response => response.json())
    .then(response => {
      console.log('*', response.results);
      var characterList = response.results;
      return fetch(response.next)
        .then(response => response.json())
        .then(response => {
          characterList = [...characterList, ...response.results]
          console.log('20 Char Array', characterList);
          return fetch(response.next)
            .then(response => response.json())
            .then(response => {
              characterList = [...characterList, ...response.results]
              console.log('30 Char Array', characterList);
              return fetch(`https://swapi.co/api/films/?format=json`)
                .then(res => res.json())
                .then(res => {
                  console.log('charlist', characterList);
                  console.log('films list', res.results);
                  return filmsToCharacters(characterList, res.results)

                })
            })
        })
    })
};

const filmsToCharacters = (characters, films) => {
  films.sort(function (a, b) {
    return a.episode_id - b.episode_id
  })
  console.log()
  for (var i = 0; i < characters.length; i++) {
    for (var j = 0; j < characters[i].films.length; j++) {
      characters[i].films[j] =
        films[characters[i].films[j].charAt(characters[i].films[j].length - 2) - 1]
    }
  }
  console.log('charactersXX: ', characters);
  return characters;
}

export const getPlanets = () => {
  return fetch(`https://swapi.co/api/planets/?format=json`)
    .then(response => response.json())
    .then(response => {
      console.log('*', response.results);
      return response.results
    })
};

export const getFilms = () => {
  return fetch(`https://swapi.co/api/films/?format=json`)
    .then(response => response.json())
    .then(response => {
      console.log('films', response.results);
      return response.results
    })
};