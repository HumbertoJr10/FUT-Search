import Card from './Card';
import styled from 'styled-components';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { deleteCard } from '../redux/action/action';


const ContenedorCartas = styled.div`
display: flex;
justify-content: center;
flex-wrap: wrap;
`

export default function Cards(props) {
   const character = useSelector( state => state.character) 
   const dispatch = useDispatch()
   
   return (
      <ContenedorCartas>
         {
            character?.map(elemento => {
               return <Card key={elemento.name} 
               name={elemento.name} 
               species={elemento.species}
               gender={elemento.gender}
               image={elemento.image}
               CerrarCarta={()=> {dispatch(deleteCard(elemento.name))}}
               detailId={elemento.id || elemento.name}
               />
            })
         }
      </ContenedorCartas>
   )
}
