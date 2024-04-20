import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom';
import App from './App.jsx'
import './styles/style.scss'
import Menu from './components/landing/menu/Menu.jsx'
import Hero from './components/landing/hero/Hero.jsx';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
    <Menu/>
    <Hero/>
    <App />
    </BrowserRouter>
  </React.StrictMode>,
)
