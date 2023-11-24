import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import { Layout } from './components/Layout/Layout'
import { HomePage } from './pages/Home/HomePage'
import { Rooms } from './pages/Rooms'
import styled, { ThemeProvider } from 'styled-components'
import { BookingsPage } from './pages/BookingsPage'
import { ContactPage } from './pages/Contact/ContactPage'
import { MenuOpenProvider } from './components/MenuOpenContext'
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
    <MenuOpenProvider>
      <ThemeProvider theme={theme}>
        <BrowserRouter>
            <Routes>
              <Route element={<Layout />}>
                <Route path='/' element={<HomePage />} />
                <Route path='/rooms' element={<Rooms />} />
                <Route path='/bookings' element={<BookingsPage />}/>
                <Route path='/contact' element={<ContactPage />}/>
                <Route path='/concierge'/>
              </Route>
            </Routes>
          
        </BrowserRouter>
      </ThemeProvider>
    </MenuOpenProvider>
    
      
    </>
  )
}

export default App
