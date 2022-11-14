import { useEffect, useState } from "react";
import styled from "styled-components";
import baseDeDatos from "../BaseDeDatos";
import { useDispatch, useSelector } from "react-redux";
import { addCharacter, addPlayer } from "../redux/action/action";
import { useNavigate } from "react-router-dom";


const BarraBusqueda = styled.div`
&:hover {
   filter: drop-shadow(0 2px 10px rgba(0, 0, 0, 0.7));
}

`
const BotonBarra = styled.button`
   background-color: #252422;
   border-radius: 10px;
   height: 40px;
   width: 100px;
   color: gold;
   border: 1px solid gold;
   cursor: pointer;
   margin: 10px;
   font-size: 18px;
   &:hover {
      background-color: gold;
      color: #252422;
   }
   @media (max-width: 700px) {
        width: 80px;
        font-size: 15px;
        margin: 9px;
    }
`
const BotonImagen = styled.img`
   width: 20px;
`
const CampoInput = styled.input`
background-color: #252422;
border: 1px solid gold;
height: 40px;
color: white;
border-radius: 10px;
margin-left: 10px;
@media (max-width: 500px) {
        width: 90px;
    }

`
 



export default function SearchBar({BuscarNombre, BuscarRickMorty}) {

   const character = useSelector(state=>state.character)
   const navigate = useNavigate()
   const [ texto, setTexto ] = useState('')
   const dispatch = useDispatch()

 function estadotexto (e) {
    setTexto(e.target.value)
 }

function buscar() {

   let condicion1 = character.filter(e => e.name.toUpperCase().includes(texto.toUpperCase()))
   let condicion2 = character.filter(e => e.id == texto)

   if (condicion1.length>0 || condicion2.length>0) {
      alert('El personaje ya existe')
      return
   }
   navigate("/home")

   let evaluar = texto*1;
   if (!isNaN(evaluar)) {

      if (evaluar<827 && evaluar>0) {
         
         dispatch(addCharacter(texto))
      } else {
         alert('Numero de Personaje no Valido')
      }
      
   } else {
      let busqueda = baseDeDatos.filter(e=> e.name.toUpperCase().includes(texto.toUpperCase()))
      if (busqueda.length>0) {
         dispatch(addPlayer(texto))
      } else {
         alert('Jugador No encontrado')
      }
      
   }
}

const BuscarNombreEnter = (e) =>{
   if (e.key==='Enter') {
     buscar()
     e.target.value = ''
   }
  }

  useEffect(()=>{
   setTexto('')
  },[character])

   return (
      <BarraBusqueda>
         <CampoInput id='TextpBusqueda' type='search' onKeyPress={BuscarNombreEnter} onChange={estadotexto}/>
            <BotonBarra onClick={buscar}>
               Add Card
            </BotonBarra>
         </BarraBusqueda>
   );
}



