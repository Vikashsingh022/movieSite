import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import Search from './Search.jsx'

import { BrowserRouter } from "react-router-dom";

ReactDOM.createRoot(document.getElementById('root')).render(
  
    <Search>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </Search>
   
 
)