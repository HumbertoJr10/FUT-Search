import { useSelector } from "react-redux"
import styled from "styled-components"
import Card from "./Card"
import { useDispatch } from "react-redux"
import { deleteCard } from "../redux/action/action"
import Lottie from "react-lottie"
import nothing from '../assets/lottie/79993-comprometido.json'

const ContenedorCartas = styled.div`
display: flex;
justify-content: center;
flex-wrap: wrap;
`
const DivIngreso = styled.div`
   display: flex;
   flex-direction: column;
   justify-content: center;
`
const TextoIngreso = styled.h1`
   color: white;
   font-family: 'Indie Flower', cursive;
   position: relative;
   top: 0;
   background-color: #252422;
   border-radius: 20px;
   backdrop-filter: blur(10px);
   opacity: 75%;
   padding: 15px;
`


const defaultOption = {
    loop: true,
    autoplay: true,
    renderSettings: {
      preserveAspectRatio: 'xMidYMid slice'
    }
  }


export default function FavoriteContainer () {

    const dispatch = useDispatch()
    const favorites = useSelector(state => state.favorites)

    return (
        <ContenedorCartas>
        <DivIngreso>
         {
            favorites[0]?null:<Lottie options={{animationData: nothing, ...defaultOption}} width={350} onClick={null}/>
         }
         {
            favorites[0]?null:<TextoIngreso>Las cartas que agregue a Favoritos se mostrarán aquí</TextoIngreso>
         }
         </DivIngreso>

            {
                favorites.map( elemento => (
                    <Card key={elemento.id}
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