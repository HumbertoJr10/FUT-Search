import { ADD_PLAYER, ADD_CHARACTER, ADD_FAVORITE, DELETE_CARD } from "../action/action";


const initialState = {
    character: [],
    favorites: []
}

const reducer = (state = initialState, {type, payload}) => {
    switch (type) {

        case ADD_PLAYER:
            return {
                ...state,
                character: [...state.character, payload]
            }
        
        case ADD_CHARACTER:
            return {
                ...state,
                character: [...state.character, payload]
            }

        case ADD_FAVORITE: 
            return {
                ...state,
                favorites: [...state.favorites, payload]
            }

        case DELETE_CARD:
            return {
                ...state,
                character: state.character.filter( e => e.name != payload)
            }

        default:
            return {...state}
    }
}

export default reducer;