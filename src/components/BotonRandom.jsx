import React from "react";
import styled from "styled-components";
import { useDispatch } from "react-redux";
import { addCharacter } from "../redux/action/action";



const BtnStyle = styled.button`
 background-color: #252422;
   border-radius: 10px;
   height: 40px;
   width: 100px;
   color: gold;
   border: 1px solid gold;
   cursor: pointer;
   margin: 10px;
   margin-left: 0;
   font-size: 18px;
   &:hover {
      background-color: gold;
      color: #252422;
   }
`

export default function BotonRandom({BuscarRickMorty}) {

    const dispatch = useDispatch()

    function buscador() {
        let randomId= Math.floor(Math.random() * 825)+1;
        dispatch(addCharacter(randomId))
    }

    return (
        <BtnStyle onClick={buscador}>Random</BtnStyle>
    )
}










