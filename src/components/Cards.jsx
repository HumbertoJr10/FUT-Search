import Card from './Card';
import styled from 'styled-components';

const ContenedorCartas = styled.div`
display: flex;
justify-content: center;
flex-wrap: wrap;
`

export default function Cards(props) {
   const { characters, CerrarCarta } = props;
   return (
      <ContenedorCartas>
         {
            characters.map(elemento => {
               return <Card key={elemento.name} 
               name={elemento.name} 
               species={elemento.species}
               gender={elemento.gender}
               image={elemento.image}
               CerrarCarta={CerrarCarta}
               detailId={elemento.id || elemento.name}
               />
            })
         }
      </ContenedorCartas>
   )
}
