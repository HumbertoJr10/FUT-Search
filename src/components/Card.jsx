import styled from 'styled-components';
import { Link } from 'react-router-dom'

// halloween: 'https://futhead.cursecdn.com/static/img/19/cards/large/1_22_0.png'
// black: 'https://futhead.cursecdn.com/static/img/23/cards/large/1_3_3.png'

const Cartita = styled.div`
//background: url("https://futhead.cursecdn.com/static/img/23/cards/large/1_3_3.png");
background-position: center;
//background-size: 400px;
width: 280px;
background-repeat: no-repeat;
margin: 0;
padding: 75px;
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;

&:hover {
   filter: drop-shadow(0 2px 10px rgba(0, 0, 0, 0.7));
}
`

const ImagenesCarta = styled.img`
   width: 215px;
   position: inherit;
   filter: drop-shadow(0 2px 5px rgba(255, 255, 255, 0.7));
   margin-bottom: 10px;
`

const BotonCerrar = styled.button`
transition: background-color  ease 0.4s;
width: 100%;
font-family: 'Times New Roman';
border: 2px solid;
background-color: #252422;
color: #ffd60a;
border-radius: 10px;
font-size: 17px;
cursor: pointer;
position: inherit;

&:hover {
   background-color: #ffd60a;
   color: #252422;
}
`

const LetrasCarta = styled.h1`
   color: white;
   //-webkit-text-stroke: black 2px;
   margin: 0;
   font-size: 28px;
`



export default function Card({name, species, gender, image, CerrarCarta, detailId}) {
   
   function cerrarFinal() {
      CerrarCarta(name)
   }
   
   return (
      <Cartita className={isNaN(detailId)?'uefa':'halloween'}>
         <ImagenesCarta className={isNaN(detailId)?'null':'imgHalloween'} src={image} alt="imagen" />
         <BotonCerrar onClick={cerrarFinal}> Cerrar </BotonCerrar>
         
         <Link to={`/detail/${detailId}`}>
            <LetrasCarta>{name}</LetrasCarta>
         </Link>  
         <LetrasCarta>{species}</LetrasCarta>
         <LetrasCarta>{gender}</LetrasCarta>
      </Cartita>
   );
}
