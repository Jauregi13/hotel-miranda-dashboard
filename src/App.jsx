import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import { Layout } from './components/Layout/Layout'
import { Home } from './pages/Home'
import { Room } from './pages/Room'
import styled, { ThemeProvider } from 'styled-components'

function App() {

  const theme = {
    fonts: {
      primary: 'Poppins'
    },
    colors: {
      lightGreen: '#799283',
      red: '#E23428'
    },
    textStyles: {
      h1: `
        font-size: 1.75rem;
        font-weight: 600;
        line-height: 0;
      `,
      h2: `
        font-size: 0.75rem;
        font-weight: 300;
        line-height: 0;

      `
    }
  }

  return (
    <>
    <ThemeProvider theme={theme}>
      <BrowserRouter>
          <Routes>
            <Route element={<Layout />}>
              <Route path='/' element={<Home />} />
              <Route path='/room' element={<Room />} />
              <Route path='/bookings'/>
              <Route path='/guest'/>
              <Route path='/concierge'/>
            </Route>
          </Routes>
        
      </BrowserRouter>
    </ThemeProvider>
      
    </>
  )
}

export default App
