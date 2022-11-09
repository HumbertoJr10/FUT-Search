import { useState } from "react";
import styled from "styled-components";
import { baseDeDatos } from "../App";


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
   &:hover {
      background-color: gold;
      color: #252422;
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

`
 



export default function SearchBar({BuscarNombre, BuscarRickMorty}) {

   const [ texto, setTexto ] = useState('')

 function estadotexto (e) {
    setTexto(e.target.value)
 }

function buscar() {
   let evaluar = texto*1;
   if (!isNaN(evaluar)) {

      if (evaluar<827 && evaluar>0) {
         BuscarRickMorty(texto)
      } else {
         alert('Numero de Personaje no Valido')
      }
      
   } else {
      BuscarNombre(texto)
   }
}

const BuscarNombreEnter = (e) =>{
   if (e.key==='Enter') {
     buscar()
     e.target.value = ''
   }
  }

   return (
      <BarraBusqueda>
         <CampoInput id='TextpBusqueda' type='search' onKeyPress={BuscarNombreEnter} onChange={estadotexto}/>
         <BotonBarra onClick={buscar}>
            Buscar
         </BotonBarra>
         </BarraBusqueda>
   );
}



