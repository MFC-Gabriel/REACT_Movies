import './global.css';
import { Header } from './components/Header';
import { BrowserRouter } from 'react-router-dom';
import {Router} from './router'
import { Footer } from './components/footer';




function App() {
 

  return (
    // tudo que tiver englobado no BrowserRouter vai ter acesso ao router
    <BrowserRouter>
      <Header/>
       <Router /*chamada das paginas do router*/  /> 
      <Footer/>
    </BrowserRouter>
  )
}

export default App
