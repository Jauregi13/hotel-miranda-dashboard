import { useState, useEffect, FormEvent, ChangeEvent } from "react"
import { InputStyled } from "./InputStyled"


interface InputProp  {
    label : string,
    name: string,
    value: string | undefined
}

export const TextArea = (prop : InputProp) => {

    const [value, setValue] = useState('')

    useEffect(() => {

        setValue(prop.value || '')

    },[prop.value])

    const autoResize = (event : ChangeEvent<HTMLTextAreaElement>) => {
        const element = event.target
        element.style.height = 'auto'
        element.style.height = `${element.scrollHeight}px`
    }

    return (

        <InputStyled>
            <label htmlFor={prop.name}>{prop.label}</label>
            <textarea  name={prop.name} value={value} onChange={(event) => setValue(event.target.value)} 
                onInput={autoResize}/>
        </InputStyled>
        
    )
}