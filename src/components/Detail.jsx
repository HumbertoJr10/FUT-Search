import styled from 'styled-components';
import React from "react";
import { useParams } from "react-router-dom";
import { useEffect } from "react";


//------------------------------- ESTILOS -------------------------

const HeaderDiv = styled.header`
    background-color: #252422;
    width: 90%;
    height: 50px;
    margin-left: 5%;
    border-left: gold 1px solid;
    border-top: gold 1px solid;
    border-right: gold 1px solid;
    border-top-left-radius: 20px;
    border-top-right-radius: 20px;
`

const DivDetail = styled.div`
margin-left: 5%;
width: 90%;
background-color: white;
display: flex;
border-left: 1px solid white;
border-right: 1px solid white;
`

const DivTextoDetail = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 80%;
`

const TituloDetail = styled.h1`
    margin: 0;
    color: gold;
`

const ImagenDetail = styled.img`
    margin-left: 20px;
    margin-top: 20px;
    margin-bottom: 50px;
`

//-------------------------------------------------------------------
export default function Detail(props) {

    let [characterDetail, setCharacterDetail ] = React.useState({})
    let {detailId} = useParams()
    
    useEffect(() => {
        fetch(`https://rickandmortyapi.com/api/character/${detailId}`)
        .then((response) => response.json())
        .then( (data) => {
            console.log(data)
            setCharacterDetail(data)
            
        })

        return setCharacterDetail({})
    }, [])
   

    return (
        <div>
        <HeaderDiv>
            <TituloDetail>{characterDetail.name}</TituloDetail>
        </HeaderDiv>
        <DivDetail>
            <div>
                <ImagenDetail src={characterDetail.image}/>
            </div>
            <DivTextoDetail>
                <h3>{characterDetail.name} is a {characterDetail.gender} {characterDetail.species} from Rick & Morty series. the Character's status is {characterDetail.status}</h3>
            </DivTextoDetail>
        </DivDetail>
        </div>)
}