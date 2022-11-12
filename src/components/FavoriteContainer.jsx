import { useSelector } from "react-redux"
import styled from "styled-components"
import Card from "./Card"

const ContenedorCartas = styled.div`
display: flex;
justify-content: center;
flex-wrap: wrap;
`


export default function FavoriteCard () {

    const favorites = useSelector(state => state.favorites)

    return (
        <ContenedorCartas>
            {
                favorites.map( elemento => (
                    <Card 
                    name={elemento.name} 
                    species={elemento.species}
                    gender={elemento.gender}
                    image={elemento.image}
                    CerrarCarta={()=> {dispatch(deleteCard(elemento.name))}}
                    detailId={elemento.id || elemento.name}
                    />
                ))
            }
        </ContenedorCartas>
    )
}