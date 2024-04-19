import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
   <div className=' bg-slate-800 max-h-screen rounded-xl shadow-inner'>
   <App />
   </div>
  </React.StrictMode>,
)
