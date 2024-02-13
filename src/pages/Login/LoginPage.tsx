import { LoginPageStyled } from "./LoginPageStyled"
import logo from './../../assets/logo.png'
import { InputStyled } from "../../components/InputStyled"
import { ButtonStyled } from "../../components/ButtonStyled"
import { FormEvent, useEffect, useState } from "react"
import { NavigateFunction, useNavigate } from "react-router-dom"


interface UserInterface {
    user: string
    password: string
}

export const LoginPage = () => {

    const navigate : NavigateFunction = useNavigate()
    const [user,setUser] = useState<UserInterface>()

    const login = async () => {

        await fetch(import.meta.env.VITE_APIURL + 'login',{

            method: 'POST',
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(user)
        }).then(async (response) => {

            const data = await response.json()

            if(!response.ok){

                throw new Error(data.message)
            }
            else {
                console.log(data.userToken);
                
                localStorage.setItem('loginToken',data.userToken)
                return navigate('/')
            }            
        }).catch((error: Error) => {
            console.error(error)
        })
    }

    const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {

        event.preventDefault()
        const form = event.target as HTMLFormElement
        setUser({
            user: form.user.value,
            password: form.password.value
        })
        
        
        
        
    }

    useEffect(() => {
        
        if(user !== undefined){
            login()
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
            <p>User: admin</p>
            <p>Password: admin</p>
        </LoginPageStyled>
        
        
        </>
    )
}