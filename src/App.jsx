import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import { Layout } from './components/Layout/Layout'
import { Home } from './pages/Home/Home'
import { Rooms } from './pages/Rooms'
import styled, { ThemeProvider } from 'styled-components'
import { Bookings } from './pages/Bookings'

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

      `,
      p: `
        font-size: 0.875rem;

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
              <Route path='/room' element={<Rooms />} />
              <Route path='/bookings' element={<Bookings />}/>
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
