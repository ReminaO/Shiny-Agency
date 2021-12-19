//Import des modules
import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter, Route, Routes } from 'react-router-dom'


//Import des composants
import './index.css'
import Home from './pages/Home'
import Survey from './pages/Survey'
import Freelances from './pages/Freelances'
import Results from './pages/Results'
import Header from './components/Header'
import Error from './components/Error'
import Footer from './components/Footer'
import { ThemeProvider } from './utils/context'
import GlobalStyle from '../src/utils/style/GlobalStyle'

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <ThemeProvider>
      <GlobalStyle />
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="survey/:questionNumber" element={<Survey />} />
          <Route path="freelances" element={<Freelances />} />
          <Route path="results" element={<Results />} />
          <Route path="*" element={<Error />} />
        </Routes>
        <Footer />
      </ThemeProvider>
      </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
)

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
