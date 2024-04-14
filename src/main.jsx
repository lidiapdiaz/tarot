import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom';
import App from './App.jsx'
import './App.scss'
import Menu from './components/landing/menu/Menu.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
    <Menu/>
    <App />
    </BrowserRouter>
  </React.StrictMode>,
)
