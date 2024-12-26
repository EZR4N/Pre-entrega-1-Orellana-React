import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.scss'
import NavBar from './componentes/navBar/NavBar'
import TituloPrincipal from './componentes/navBar/TituloPrincipal/TituloPrincipal'
import Carousel from './componentes/main/Carrousel/Carousel'


//BOOTSTRAP
import 'bootstrap/dist/css/bootstrap.min.css';

//FONT AWESOME
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';
import CarouselMain from './componentes/main/Carrousel/Carousel'
import NuestrosProductos from './componentes/main/NuestrosProductos/NuestrosProductos'
import ItemListContainer from './componentes/main/ItemListContainer/ItemListContainer'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <NavBar/>
      <main>
      <CarouselMain/>
      <NuestrosProductos/>      
        <TituloPrincipal texto="Summo Store???"/>
        <ItemListContainer greeting="Felices Fiestas!"/>
      </main>
    </>
  )
}

export default App
