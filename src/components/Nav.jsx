import React from "react";
import SearchBar from "./SearchBar"
import styled from "styled-components";
import LOGO from "../img/LOGOIMG.png" 
import App from "../App";
import { NavLink, Link } from "react-router-dom";
import BotonRandom from "./BotonRandom";
import { useSelector } from "react-redux";



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
    text-decoration: none;
    text-align: center;
    border: 1px solid white;
`
const DivBarraBotones = styled.div`
display: flex;
`

const DivBarraBotonesMenu = styled.div`
display: flex;
`

const NumFav = styled.span`
    background: url('https://pngimg.com/uploads/love/love_PNG85.png');
    background-size: 32px;
    
    font-size: 17px;
    
    padding-right: 10px;
    padding-top: 2px;
    padding-bottom: 4px;
    margin-left: 15px;
`

export default function Nav ({BuscarNombre, BuscarRickMorty}) {

    const favorites = useSelector(state=> state.favorites)

    return (
        <StylesNav>
          <DivBarraBotonesMenu>
                <NavLink to="/home" className="LOGO">
                    <LogoIMG src={LOGO}/>
                </NavLink>

                <NavLink className="MenuButton" to="/home">
                    <p>Home</p>
                </NavLink>
                <NavLink className="MenuButtonFav" to="/home">
                    <p>Favorites</p>
                    {favorites.length>0?<NumFav className={favorites.length>9?'grand':'mix'}>{favorites.length}</NumFav>:null}
                </NavLink>
                <NavLink className="MenuButton" to="/about">
                    <p>About</p>
                </NavLink>
            </DivBarraBotonesMenu>
            <DivBarraBotones>
                <SearchBar BuscarNombre={BuscarNombre} BuscarRickMorty={BuscarRickMorty}/>
                <BotonRandom BuscarRickMorty={BuscarRickMorty}/>
            </DivBarraBotones>
        </StylesNav>
    ) 
}