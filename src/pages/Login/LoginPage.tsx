import { LoginPageStyled } from "./LoginPageStyled"
import logo from './../../assets/logo.png'
import { InputStyled } from "../../components/InputStyled"
import { ButtonStyled } from "../../components/ButtonStyled"
import userAdmin from '../../data/user.json'
import { FormEvent, useEffect, useState } from "react"
import { NavigateFunction, useNavigate } from "react-router-dom"

interface UserInterface {
    user: string
    password: string
}

export const LoginPage = () => {

    const navigate : NavigateFunction = useNavigate()
    const [user,setUser] = useState<UserInterface>({
        user: '',
        password: ''
    })

    const handleSubmit = (event: FormEvent<HTMLFormElement>) => {

        event.preventDefault()
        const form = event.target as HTMLFormElement
        setUser({
            user: form.user.value,
            password: form.password.value
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
                    <input type="text" name="user"/>
                
                </InputStyled>
                <InputStyled>
                    <label htmlFor="password">Password</label>
                    <input type="password" name="password"/>
                </InputStyled>
                <ButtonStyled type="submit" status="login">LOGIN</ButtonStyled>
                
            </form>
        </LoginPageStyled>
        
        
        </>
    )
}