import React, { useState } from "react";
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

@media (max-width: 1000px) {
    flex-direction: row; 
    padding-top: 10px;
    padding-bottom: 10px;
}

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
@media (max-width: 1000px) {
    display: none;
}
`


const DivBarraBotones = styled.div`
display: flex;
`

const DivBarraBotonesMenu = styled.div`
display: flex;

@media (max-width: 1000px) {
        display: none;
    }
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

const BotonResponsive = styled.button`
display: flex;
flex-direction: column;
width: 4rem;
height: 3rem;
border: 0;
background: transparent;
gap: .65rem;
margin: 10px;
display: none;
padding-top: 8px;

    &:hover {
        cursor: pointer;
    }

    &:hover div:first-child{
        transform: rotate(45deg);
    }

    &:hover div:nth-child(2) {
        opacity: 0;
    }     

    &:hover div:last-child {
        transform: rotate(-45deg);
    }

    @media (max-width: 1000px) {
        display: flex;
    }
`

const MenuResponsive = styled.div`
    background-color: #252422;
    overflow: hidden;
    margin-bottom: 0;
    position: relative;
    top: -70px;
    border-bottom-left-radius: 20px;
    border-bottom-right-radius: 20px;
    border-left: 1px solid gold;
    border-right: 1px solid gold;
    border-bottom: 1px solid gold;
    transition: all .5s;
    transform: translateY(0);

    @media (max-width: 1000px) {
        flex-direction: column;
        align-items: center;
    }

    @media (min-width: 1001px) {
        display: none;
    }
`

export default function Nav ({BuscarNombre, BuscarRickMorty}) {

    const favorites = useSelector(state=> state.favorites)
    const [menuR, setMenuR] = useState(false)

    function openMenu () {
        if (menuR) {
            setMenuR(false)
        } else {
            setMenuR(true)
        }
    }

    return (
        <>
        <StylesNav>

        <BotonResponsive onClick={openMenu}>
            <div className="divResponsive"></div>
            <div className="divResponsive"></div>
            <div className="divResponsive"></div>
        </BotonResponsive>

            <DivBarraBotonesMenu>
                <NavLink to="/home" className="LOGO">
                    <LogoIMG src={LOGO}/>
                </NavLink>

                <NavLink className="MenuButton" to="/home">
                    <p>Home</p>
                </NavLink>
                <NavLink className="MenuButtonFav" to="/favorites">
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
        
        <MenuResponsive className={!menuR?"menuResponsiveON":"menuResponsiveOFF"}>
                <NavLink className="MenuButton" to="/home">
                    <p>Home</p>
                </NavLink>
                <NavLink className="MenuButtonFav" to="/favorites">
                    <p>Favorites</p>
                    {favorites.length>0?<NumFav className={favorites.length>9?'grand':'mix'}>{favorites.length}</NumFav>:null}
                </NavLink>
                <NavLink className="MenuButton" to="/about">
                    <p>About</p>
                </NavLink>
        </MenuResponsive>
       
        </>
    ) 
}