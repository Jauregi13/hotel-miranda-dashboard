import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import { Layout } from './components/Layout/Layout'
import { HomePage } from './pages/Home/HomePage'
import { RoomsPage } from './pages/Rooms/RoomsPage'
import { ThemeProvider } from 'styled-components'
import { BookingsPage } from './pages/Bookings/BookingsPage'
import { ContactPage } from './pages/Contact/ContactPage'
import { MenuOpenProvider } from './components/MenuOpenContext'
import { UsersPage } from './pages/Users/UsersPage'
import { LoginPage } from './pages/Login/LoginPage'
import { GuestDetails } from './pages/GuestDetails/GuestDetails'

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
              <Route path='/login' element={<LoginPage />}/>
              <Route element={<Layout />}>
                <Route path='/' element={<HomePage />} />
                <Route path='/rooms' element={<RoomsPage />} />
                <Route path='/bookings' element={<BookingsPage />}/>
                <Route path='/bookings/:id' element={<GuestDetails />} />
                <Route path='/contact' element={<ContactPage />}/>
                <Route path='/users' element={<UsersPage />}/>
              </Route>
            </Routes>
          
        </BrowserRouter>
      </ThemeProvider>
    </MenuOpenProvider>
    
      
    </>
  )
}

export default App
