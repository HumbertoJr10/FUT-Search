import styled from 'styled-components';
import { Link } from 'react-router-dom'
import { NavLink } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addFavoriteCharacter, addFavoritePlayer, deleteFavorite } from '../redux/action/action';
import isPlayer from '../redux/action/isPlayer';



// halloween: 'https://futhead.cursecdn.com/static/img/19/cards/large/1_22_0.png'
// black: 'https://futhead.cursecdn.com/static/img/23/cards/large/1_3_3.png'

const Cartita = styled.div`
//background: url("https://futhead.cursecdn.com/static/img/23/cards/large/1_3_3.png");
background-position: center;
//background-size: 400px;
width: 280px;
position: relative;
background-repeat: no-repeat;
margin: 0;
padding: 50px;
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
transition: filter 0.3s linear;
overflow: hidden;

&:hover {
   filter: drop-shadow(0 2px 10px rgba(0, 0, 0, 0.7));
}

&:hover .Like {
   transform: translateY(0);
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
   font-family: 'Indie Flower', cursive;
`
const LikeImg = styled.img`
width: 50px;
position: absolute;
top: 407px;
left: 274px;
transform: translateY(300%);
transition: transform .5s linear;
&:hover {
   src: url("https://cdn.pixabay.com/photo/2020/06/20/08/01/instagram-5320013_960_720.png");
   cursor: pointer;
};
`

// https://cdn.pixabay.com/photo/2020/06/20/08/01/instagram-5320013_960_720.png  clicked
// https://www.pnguniverse.com/wp-content/uploads/2020/09/Emoji-love.png         not Clicked


export default function Card({name, species, gender, image, CerrarCarta, detailId}) {
   
   const [isFav, setIsFav] = useState(false)
   const dispatch = useDispatch()
   const favorites = useSelector( state => state.favorites)

   useEffect(()=>{
      let nuevo = favorites.filter(e => e.name==name)
      if (nuevo.length>0) {
         setIsFav(true)
      } else {
         setIsFav(false)
      }
   },[favorites])

   function agregado(){
      if (isPlayer(gender)) {
         let retorna = favorites.filter(e => e.name==name)
         if (retorna.length>0) {
            dispatch(deleteFavorite(name))
            setIsFav(false)
         } else {
            dispatch(addFavoritePlayer(name))
            setIsFav(true)
         }
      } else {
         let retorna = favorites.filter(e => e.id==detailId)
         if (retorna.length>0) {
            dispatch(deleteFavorite(name))
            setIsFav(false)
         }else {
            dispatch(addFavoriteCharacter(detailId))
            setIsFav(true)
         }
      }
   }


   return (
      <Cartita className={isNaN(detailId)?'uefa':'halloween'}>
         <LikeImg onClick={agregado} className='Like' src={!isFav?`https://www.pnguniverse.com/wp-content/uploads/2020/09/Emoji-love.png`:`https://cdn.pixabay.com/photo/2020/06/20/08/01/instagram-5320013_960_720.png`} alt='like'/>
         <ImagenesCarta className={isNaN(detailId)?'null':'imgHalloween'} src={image} alt="imagen" />
         <BotonCerrar onClick={CerrarCarta}> Cerrar </BotonCerrar>
         
         <NavLink className="CardName" to={`/detail/${detailId}`}>
            <LetrasCarta>{name}</LetrasCarta>
         </NavLink>  
         <LetrasCarta>{species}</LetrasCarta>
         <LetrasCarta>{gender}</LetrasCarta>
      </Cartita>
   );
}
