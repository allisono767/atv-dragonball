import logo from "./assets/images/db1.png"

import { useState } from 'react'

import style from './App.module.css'

import {Menu} from './components/menu.jsx'


import { Footer } from "./components/footer.jsx";

function App() {
  const [aparecerVideo, setAparecerVideo] = useState(false)
  const [aparecerBotao, setAparecerBotao] = useState(false)

  return (
    <>
     {/* {first ? <nav>batata</nav>: <nav>Arroz</nav>}
     <button onClick={() => setfirst(true)}><img src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b2/Hamburger_icon.svg/640px-Hamburger_icon.svg.png" alt="" /></button> */}
   <Menu option01='Início' option02='Personagens'/>
 
   <section className={style.Inicio}>

      <div className={style.primeira}>
        <img src={logo} alt="logo" className={style.logo}/>
      
        <div className={style.wrapInfo}>
        <p className={style.paragrafoLP}>Trabalho Dragon Ball Api</p>
       
        </div>
        </div>
       

      
  
   </section>
   
  <Footer></Footer>
   
    </>
  )
}

export default App
