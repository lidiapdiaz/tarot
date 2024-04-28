import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom';
import App from './App.jsx'
import './styles/App.scss'
import Menu from './components/landing/menu/Menu.jsx'
import Hero from './components/landing/hero/Hero.jsx';
import MainContent from './components/landing/maincontent/MainContent.jsx';
import Advices from './components/landing/advices/Advices.jsx';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
    <Menu/>
    <Hero/>
    <MainContent/>
    <Advices/>
 {/*    <App /> */}
    </BrowserRouter>
  </React.StrictMode>,
)
