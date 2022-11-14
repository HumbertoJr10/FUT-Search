import React from "react";
import styled from "styled-components";
import { useDispatch } from "react-redux";
import { addCharacter } from "../redux/action/action";
import { useNavigate } from "react-router-dom";



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
   @media (max-width: 500px) {
        display: none;
    }
    @media (max-width: 700px) {
        width: 80px;
        font-size: 15px;
        margin: 9px;
    }
`

export default function BotonRandom({BuscarRickMorty}) {

    const dispatch = useDispatch()
    const navigate= useNavigate()

    function buscador() {
        let randomId= Math.floor(Math.random() * 825)+1;
        dispatch(addCharacter(randomId))
        navigate("/home")
    }

    return (
        <BtnStyle onClick={buscador}>Random</BtnStyle>
    )
}










