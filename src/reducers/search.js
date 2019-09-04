const initialState = {
    characters: [],
    planets: [],
    films: []
};

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case 'CHARACTER_REQUEST_COMPLETE':
            return {
                ...state,
                characters: action.characters
            }
        case 'PLANET_REQUEST_COMPLETE':
            return {
                ...state,
                planets: action.planets
            }
        case 'FILM_REQUEST_COMPLETE':
            return {
                ...state,
                films: action.films
            }
        default:
            return state;
    }
};

export default reducer;