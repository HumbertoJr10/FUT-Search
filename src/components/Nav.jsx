import React from "react";
import SearchBar from "./SearchBar"
import styled from "styled-components";
import LOGO from "../img/LOGOIMG.png" 
import App from "../App";
import { NavLink, Link } from "react-router-dom";
import BotonRandom from "./BotonRandom";



const StylesNav = styled.div`
background-color: #252422;
display: flex;
justify-content: space-between;
align-items: center;
margin-bottom: 50px;
border-radius: 20px;
border: 1px solid gold;
&:hover {
   filter: drop-shadow(0 2px 10px rgba(0, 0, 0, 0.7));
}
`

const LogoIMG = styled.img`
height: 50px;
margin-left: 20px;
&:hover {
    cursor: pointer;
}
`

const BotonesNav = styled.span`
    color: orange;
    text-decoration: none;
    text-align: center;
    border: 1px solid white;
`
const DivBarraBotones = styled.div`
display: flex;
`

export default function Nav ({BuscarNombre, BuscarRickMorty}) {
    return (
        <StylesNav>
          <div>
                <NavLink to="/home">
                    <LogoIMG src={LOGO}/>
                </NavLink>


                <Link to="/home">
                    <BotonesNav>Home</BotonesNav>
                </Link>

                <Link to="/about">
                    <BotonesNav>About</BotonesNav>
                </Link>

            </div>
            <DivBarraBotones>
                <SearchBar BuscarNombre={BuscarNombre} BuscarRickMorty={BuscarRickMorty}/>
                <BotonRandom BuscarRickMorty={BuscarRickMorty}/>
            </DivBarraBotones>
            
        </StylesNav>
    ) 
}