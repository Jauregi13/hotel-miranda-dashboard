import { InputStyled } from "./InputStyled"
import { useEffect, useState } from "react"

interface InputProp  {
    type: string,
    label : string,
    name: string,
    value: string | undefined
}


export const InputText = (prop : InputProp) => {

    const [value, setValue] = useState('')

    useEffect(() => {

        setValue(prop.value || '')

    },[prop.value])

    return (

            <InputStyled>
                <label htmlFor={prop.name}>{prop.label}</label>
                <input type={prop.type} name={prop.name} value={value} onChange={(event) => setValue(event.target.value)}/>
            </InputStyled>

    )
}