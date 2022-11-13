import styled from 'styled-components';
import React from "react";
import { useParams } from "react-router-dom";
import { useEffect } from "react";
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';


//------------------------------- ESTILOS -------------------------

const Todo = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;

    @media (max-width: 1000px) {
        flex-direction: column;
    }
`
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
const TituloDetail = styled.h1`
    margin: 0;
    color: gold;
    font-family: 'Indie Flower', cursive;
    font-size: 42px;
`
const DivDetail = styled.div`
margin-left: 5%;
width: 90%;
background-color: white;
display: flex;
align-items: center;
flex-direction: column;
border-left: 1px solid white;
border-right: 1px solid white;
`

const ImagenPlayer = styled.img`
    position: relative;
    
`

const ImagenCharacter = styled.img`
    position: relative;
    height: 500px;
    width: 500px;
    border-radius: 30px;
    margin-bottom: 25px;
`

const PlayerDetail = styled.h3`
    margin: 25px;
`
const CharacterDetail = styled.h3`
    margin: 25px;
`

const BotonVolver = styled.button`
    width: 200px;
    border: 2px solid gold;
    background-color: #252422;
    color: gold;
    padding: 15px;
    border-radius: 20px;
    margin-bottom: 20px;
    &:hover {
        color: #252422;
        background-color: gold;
        border: 2px solid #252422;
        cursor: pointer;
    }
`

//-------------------------------------------------------------------
export default function Detail(props) {

    let [characterDetail, setCharacterDetail ] = React.useState({})
    let {detailId} = useParams()
    const character = useSelector(state => state.character)
    const navigate = useNavigate()

    function isPLAYER() {
        if (isNaN(detailId)) {
            return true
        } else {
            return false
        }
    }
    
    useEffect(()=>{
        if (isPLAYER()) {
            let aux = character.filter ( e => e?.name===detailId)
            setCharacterDetail(aux[0])
        } else {
            fetch(`https://rickandmortyapi.com/api/character/${detailId}`)
            .then( Response => Response.json())
            .then( data => {
                setCharacterDetail(data)
            })
        }
    })


    return (
        <Todo>
            {
                isPLAYER()?<ImagenPlayer src={characterDetail.image}/>:<ImagenCharacter src={characterDetail.image} />
            }
            <div>
                <HeaderDiv>
                    <TituloDetail>{characterDetail.name}</TituloDetail>
                </HeaderDiv>

                <DivDetail>
                    {
                        isPLAYER()?(
                            <PlayerDetail> {characterDetail.name} is a professional player, he currently plays for {characterDetail.team} in the {characterDetail.species} position. his age is  {characterDetail.gender}.</PlayerDetail>
                        ):(
                            <CharacterDetail>{characterDetail.name} is a {characterDetail.gender} {characterDetail.species} from Rick & Morty series. the Character's status is {characterDetail.status}</CharacterDetail>
                        )
                    } 

                    <BotonVolver onClick={()=>{navigate('/home')}}>Back</BotonVolver>
                </DivDetail>
            </div>
        </Todo>
    )
}