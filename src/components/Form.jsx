import React, { useEffect } from "react";
import { useState } from "react";
import styled from "styled-components";
import validation from "./validation";
import logo from "../img/logoFifaMorty.png"
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { accessLogin } from "../redux/action/action";

//--------------- ESTILOS -------------------------
const DivLogin = styled.div`
    background-color: white;
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 500px;
    margin-top: 20px;
    padding: 25px;

    border-radius: 20px;
    background-color: #050505;
    background: #0f0f0f78;
    color: gold;

   
`
const DivInputLogin = styled.div`
display: flex;
flex-direction: column;
position: relative;

`
const InputLogin = styled.input`
background-color: #252422;
width: 200px;
height: 40px;
color: white;
border-radius: 10px;
margin-bottom: 10px;
position: relative;
top: -10px;
`
const ButtonLogin = styled.button`
    background-color: #252422;
    border-radius: 10px;
    height: 40px;
    width: 100px;
    color: gold;
    border: 1px solid gold;
    cursor: pointer;
 
    &:hover {
      background-color: gold;
      color: #252422;
   }

   &:disabled {
    border-color: red;
    color: red;
    text-decoration: line-through;
    &:hover {
        background-color: #252422;
        
    }
   }
`
const ImgLogin = styled.img`
    border-radius: 20px;
    margin-top: 15px;
`
const ErrorLoginP= styled.p`
    color: white;
    background-color: #080808b9;
    margin: 0;
    width: 500px;
    padding: 5px;
    margin-bottom: 10px;
    border-radius: 20px;
`
const Todo = styled.div`
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
`
const TextoLogin = styled.h1`
    font-family: 'Indie Flower', cursive;
`
const ImagenLogo = styled.img`
    width: 450px;
    filter: drop-shadow(0 2px 10px rgba(0, 0, 0, 1));
    transition: all .5s;
    &:hover {
        cursor: pointer;
        filter: drop-shadow(0 2px 10px gold);
    }
`

//--------------------------------------------------


export default function Form({login}) {  // ----------Componente ---------
    
    const [userData, setUserData] = useState({
        username: '', password: ''
    })

    const [errorLogin, setErrorLogin] = useState(false)
    const cuenta = {
        username: 'humberto@gmail.com',
        password: 'humberto123'
    }

    
    const [errors, setErrors] = useState({
        userErrros: '',
        passErrors: ''
    })
    function usernameHandler (e) {
        setUserData({...userData, username: e.target.value})
        setErrors(validation(userData))
    }
    function passwordHandler (e) {
        setUserData({...userData, password: e.target.value})
        setErrors(validation(userData))
    }
      
    const access = useSelector(state => state.access)
    const navigate = useNavigate()
    const dispatch = useDispatch()

    useEffect(()=>{
        if (access) {
            navigate('/home')
        }
    }, [access])

    function login () {
        if (userData.username===cuenta.username && userData.password===cuenta.password) {
            dispatch(accessLogin())
        } else {
            setErrorLogin(true)
        }
    }

    return (
        <Todo>
        
        <ImagenLogo src={logo} alt="logoFifaMorty"/>

        <div>
            {errors.userErrros?<ErrorLoginP>❌  {errors.userErrros}</ErrorLoginP>:null}
            {errors.passErrors?<ErrorLoginP>❌  {errors.passErrors}</ErrorLoginP>:null}
            {errorLogin?<ErrorLoginP>❌  Los datos ingresados son incorrectos</ErrorLoginP>:null}
        </div>
    
    <DivLogin>
        <TextoLogin>Welcome</TextoLogin>
        <DivInputLogin>
            <InputLogin onChange={usernameHandler} type="text" placeholder="Username"/>
            <InputLogin onChange={passwordHandler} type="password" placeholder="Password" />
        </DivInputLogin>
        <ButtonLogin disabled={errors.passErrors?true:false} onClick={login}>Login</ButtonLogin>
    </DivLogin>
    </Todo>)
}