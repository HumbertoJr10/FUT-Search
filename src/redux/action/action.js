import baseDeDatos from "../../BaseDeDatos"

//----- ACTION TYPE-----------------------
export const ADD_PLAYER = 'ADD_PLAYER'
export const ADD_CHARACTER = 'ADD_CHARACTER'
export const ADD_FAVORITE = 'ADD_FAVORITE'
export const DELETE_CARD = 'DELETE_CARD'
export const DELETE_FAVORITE = 'DELETE_FAVORITE'
export const ADD_FAVORITE_PLAYER = 'ADD_FAVORITE_PLAYER'

//---------------------------------------



// ---------- ACTION CREATOR -------------

export function addPlayer (nombre) {

    let nuevo = baseDeDatos.filter(e=> e.name.toUpperCase().includes(nombre.toUpperCase()))

    return {
        type: ADD_PLAYER,
        payload: nuevo[0]
    }
}

export function addCharacter (id) {
    return function (dispatch) {
        return fetch(`https://rickandmortyapi.com/api/character/${id}`)
        .then(Response => Response.json())
        .then( data => {
            dispatch({
                type: ADD_CHARACTER,
                payload: data
            })
        })
    }
}

export function addFavoriteCharacter (id) {
    return function (dispatch) {
        return fetch(`https://rickandmortyapi.com/api/character/${id}`)
        .then(Response => Response.json())
        .then( data => {
            dispatch({
                type: ADD_FAVORITE,
                payload: data
            })
        })
    }
}

export function addFavoritePlayer (nombre) {
    let nuevo = baseDeDatos.filter(e=> e.name.toUpperCase().includes(nombre.toUpperCase()))

    return {
        type: ADD_FAVORITE_PLAYER,
        payload: nuevo[0]
    }
}

export function deleteCard (name) {
    return {
        type: DELETE_CARD,
        payload: name
    }
}

export function deleteFavorite (name) {
    return {
        type: DELETE_FAVORITE,
        payload: name
    }
}


