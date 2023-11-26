import { LoginPageStyled } from "./LoginPageStyled"
import logo from './../../assets/logo.png'
import { InputStyled } from "../../components/InputStyled"
import { ButtonStyled } from "../../components/ButtonStyled"
import user from './../../data/user.json'

export const LoginPage = () => {

    const handleSubmit = (event) => {
        event.preventDefault()
        
    }


    return (
        <>
        <LoginPageStyled>
            <img src={logo} alt="Logo" width={80} height={80} />
            <h1>Login Dashboard</h1>
            <form onSubmit={handleSubmit} method="post">
                <InputStyled>

                    <label htmlFor="name">User</label>
                    <input type="text" name="user" />
                
                </InputStyled>
                <InputStyled>
                    <label htmlFor="password">Password</label>
                    <input type="password" name="password" />
                </InputStyled>
                <ButtonStyled type="submit" status="login">LOGIN</ButtonStyled>
                
            </form>
        </LoginPageStyled>
        
        
        </>
    )
}