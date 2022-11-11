import './App.css'
import Cards from './components/Cards.jsx'
//import characters, { Rick } from './data.js'
import styled from 'styled-components'
import GlobalStyle from './globalStyles'
import Nav from './components/Nav'
import React from 'react'
import { useState, useEffect } from 'react'
import baseDeDatos from './BaseDeDatos'
import { Routes, Route, useLocation} from 'react-router-dom'
import About from './components/About'
import Detail from './components/Detail'
import { useNavigate } from "react-router-dom";
import Form from './components/Form'
import { useSelector } from 'react-redux'





//------------------------------------------------------------------------

function App () { //------------------- COMPONENTE ----------------------------

  //-------------------------------- USE ESTATE y FUNCIONES----------------------------
  const [characters, setCharacters] = useState([])
  const [ access, setAccess] = useState(false)
  let myUsername= 'humberto@gmail.com'
  let myPassword= 'humberto123'
 

  const navigate = useNavigate();
  const location = useLocation();

function BuscarNombre (nombre) {  // BUSCA Y AGREGA JUGADORES <-------------------------
    let mostrar = [];
   
    baseDeDatos.map((e)=> {
      if (e.name.toUpperCase().normalize('NFD').replace(/[\u0300-\u036f]/g, "").includes(nombre.toUpperCase())) {
        mostrar.push(e);
      }
    })
    
    if (characters.includes(mostrar[0])) {
      alert(`${mostrar[0].name} Ya ha sido agregado`)
    } else if (mostrar.length>0) {
      setCharacters([...characters, mostrar[0]])
      navigate("/home")
    }  else {
      alert('Jugador No encontrado')
    }
  }

function CerrarCarta (nombre) {   // SACA LA CARTA DE VISTA 
    let mostrar=[]
    for (let f=0; f<characters.length;f++) {
      if (characters[f].name!=nombre) {
        mostrar.push(characters[f])
      }
    }
    setCharacters(mostrar)
 }

function BuscarRickMorty(id) {    // BUSCAR RICK Y MORTY

console.log('solicitando el id: ' + id)
  
  fetch(`https://rickandmortyapi.com/api/character/${id}`)
  .then( (response) => response.json())
  .then( (data) => {
    let nuevo = {
      name: data.name,
      species: data.species,
      gender: data.gender,
      image: data.image,
      id: data.id
    }
      for (let f=0; f<characters.length; f++) {
        if (characters[f].name===nuevo.name) {
          alert(`${nuevo.name} ya ha sido agregado`)
          return
        }
      }

      setCharacters([...characters, nuevo])
      navigate("/home")
  })
}

function CambiarFondo() {  // CAMBIAR FONDO DEPENDIENDO DE LA CARTA
  for (let f=0; f<characters.length; f++) {
    
    if (isNaN(characters[f].gender[0])) {
      document.body.style.backgroundImage = "url(https://pbs.twimg.com/media/DNeM89PXUAIDMkd.jpg)"
      return
    }
  }
  document.body.style.backgroundImage = "url(https://images5.alphacoders.com/571/571559.jpg)"
}

function login(userData) {
  if (userData.username==myUsername && userData.password == myPassword) {
    setAccess(true)
  } else {
    alert('Los datos son incorrectos')
  }
}

useEffect(()=>{


  CambiarFondo()
},[characters],[access]) 

/*
useEffect(() => {
  if (!access) {
    navigate('/');
  } else {
    navigate('/home')
  }
}, [access]);

console.log(access)
*/


//-----------------RENDER ----------------------------------
  return (
    <div className='App' style={{ padding: '25px' }}>
      <GlobalStyle />
      {/*<button onClick={CambiarFondo}>PROBAR</button>*/}
      {location.pathname!='/'?<Nav BuscarNombre={BuscarNombre} BuscarRickMorty={BuscarRickMorty}/>:null}
      <div>
        <Routes>
          <Route path='/' element={<Form login={login}/>}/>
          <Route path='/home' element={<Cards characters={characters} CerrarCarta={CerrarCarta}/>} />
          <Route path='/about' element={<About />} />
          <Route path='/detail/:detailId' element={<Detail characters={characters}/>} />
        </Routes>
      </div>
    </div> 
  )
}

export default App