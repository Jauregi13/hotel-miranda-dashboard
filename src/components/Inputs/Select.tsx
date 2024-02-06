import { InputStyled } from "./InputStyled"
import { SelectStyled } from "./SelectStyled"
import { useState, useEffect } from "react"

interface OptionInterface {
    value: string
    name: string
}

interface SelectProp {

    label: string
    name: string
    value: string | undefined
    options: OptionInterface[]

}


export const Select = (prop : SelectProp) => {

    const [value, setValue] = useState('')

    useEffect(() => {

        setValue(prop.value || '')

    },[prop.value])

    return (

        <InputStyled>
            <label htmlFor={prop.name}>{prop.label}</label>
            <SelectStyled name={prop.name} value={value} onChange={(event) => setValue(event.target.value)}>
                {
                    prop.options.map((option) => (
                        <option value={option.value}>{option.name}</option>
                    ))
                }
            </SelectStyled>
        </InputStyled>
    )
}