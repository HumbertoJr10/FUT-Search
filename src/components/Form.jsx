import React from "react";
import { useState } from "react";
import styled from "styled-components";
import validation from "./validation";

//--------------- ESTILOS -------------------------
const DivLogin = styled.div`
    background-color: white;
    display: flex;
    flex-direction: column;
    width: 50%;
    margin-top: 20px;
    margin-left: 25%;
    padding: 20px;
    border-radius: 20px;
    background-color: #252422;
    border: 1px solid gold;
    color: gold;
`
const DivInputLogin = styled.div`
display: flex;
flex-direction: column;
`
const InputLogin = styled.input`
    background-color: #252422;
    border: 1px solid gold;
    height: 40px;
    color: white;
    border-radius: 10px;
    margin-bottom: 10px;
`
const ButtonLogin = styled.button`
    background-color: #252422;
    border-radius: 10px;
    height: 40px;
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
    color: red;
    margin: 0;
    padding: 0;
    margin-bottom: 10px;
`
//--------------------------------------------------
//-----------------FUNCIONES --------------------------

 



export default function Form({login}) {  // ----------Componente ---------
    
    const [userData, setUserData] = useState({
        username: '', password: ''
      })
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
      

      console.log(errors.userErrros)

    return (
        <>
        
        <div>
            {errors.userErrros?<ErrorLoginP>❌  {errors.userErrros}</ErrorLoginP>:null}
            {errors.passErrors?<ErrorLoginP>❌  {errors.passErrors}</ErrorLoginP>:null}
        </div>
    
        <DivLogin>
        <DivInputLogin>
            <InputLogin onChange={usernameHandler} type="text" placeholder="Username"/>
            
            <InputLogin onChange={passwordHandler} type="password" placeholder="Password" />
            
        </DivInputLogin>
        <ButtonLogin disabled={errors.passErrors?true:false} onClick={()=> login(userData)}>Login</ButtonLogin>
        <ImgLogin src="https://media.tenor.com/KhzM_UZPbScAAAAd/icon-card-fifa-mobile.gif" alt="imagen" />
    </DivLogin>
    </>)
}