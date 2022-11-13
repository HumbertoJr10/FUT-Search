import { ADD_PLAYER, ADD_CHARACTER, ADD_FAVORITE, DELETE_CARD, DELETE_FAVORITE, ADD_FAVORITE_PLAYER, ACCESS_LOGIN } from "../action/action";


const initialState = {
    character: [],
    favorites: [],
    access: false
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

        case ADD_FAVORITE_PLAYER:
            return {
                ...state,
                favorites: [...state.favorites, payload]
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

        case DELETE_FAVORITE:
            return {
                ...state,
                favorites: state.favorites.filter ( e => e.name != payload)
            }

        case ACCESS_LOGIN:
            return {
                ...state,
                access: true
            }

        default:
            return {...state}
    }
}

export default reducer;