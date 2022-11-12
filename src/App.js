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
import FavoriteContainer from './components/FavoriteContainer'



//------------------------------------------------------------------------

function App () { //------------------- COMPONENTE ----------------------------

  const [ access, setAccess] = useState(false)
  let myUsername= 'humberto@gmail.com'
  let myPassword= 'humberto123'
 
  const character = useSelector( state => state.character)

  const navigate = useNavigate();
  const location = useLocation();

  function CambiarFondo() {  // CAMBIAR FONDO DEPENDIENDO DE LA CARTA
    for (let f=0; f<character.length; f++) {
      
      if (isNaN(character[f].gender[0])) {
        document.body.style.backgroundImage = "url(https://pbs.twimg.com/media/DNeM89PXUAIDMkd.jpg)"
        return
      }
    }
    document.body.style.backgroundImage = "url(https://images5.alphacoders.com/571/571559.jpg)"
  }
  
  useEffect(()=>{
    CambiarFondo()
  },[character]) 


  /*
function login(userData) {
  if (userData.username==myUsername && userData.password == myPassword) {
    setAccess(true)
  } else {
    alert('Los datos son incorrectos')
  }
}
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
      {location.pathname!='/'?<Nav />:null}
      <div>
        <Routes>
          <Route path='/' element={<Form />}/>
          <Route path='/home' element={<Cards />} />
          <Route path='/about' element={<About />} />
          <Route path='/detail/:detailId' element={<Detail />} />
          <Route path='/favorites' element={<FavoriteContainer />} />
        </Routes>
      </div>
    </div> 
  )
}

export default App