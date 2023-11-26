import { LoginPageStyled } from "./LoginPageStyled"
import logo from './../../assets/logo.png'
import { InputStyled } from "../../components/InputStyled"
import { ButtonStyled } from "../../components/ButtonStyled"
import userAdmin from './../../data/user.json'
import { useEffect, useRef, useState } from "react"
import { useNavigate } from "react-router-dom"

export const LoginPage = () => {

    const userInput = useRef(null)
    const passwordInput = useRef(null)
    const navigate = useNavigate()
    const [user,setUser] = useState({
        user: '',
        password: ''
    })

    const handleSubmit = (event) => {

        event.preventDefault()
        setUser({
            user: userInput.current.value,
            password: passwordInput.current.value
        })
        

        
        
    }

    useEffect(() => {
       
        if(user.user === userAdmin.user && user.password === userAdmin.password || localStorage.getItem('loginSession') !== null){
            localStorage.setItem('loginSession',JSON.stringify(user))
            return navigate('/')
        }
        
    },[user])


    return (
        <>
        <LoginPageStyled>
            <img src={logo} alt="Logo" width={80} height={80} />
            <h1>Login Dashboard</h1>
            <form onSubmit={handleSubmit} method="post">
                <InputStyled>

                    <label htmlFor="name">User</label>
                    <input type="text" name="user" ref={userInput}/>
                
                </InputStyled>
                <InputStyled>
                    <label htmlFor="password">Password</label>
                    <input type="password" name="password" ref={passwordInput}/>
                </InputStyled>
                <ButtonStyled type="submit" status="login">LOGIN</ButtonStyled>
                
            </form>
        </LoginPageStyled>
        
        
        </>
    )
}