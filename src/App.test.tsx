
import React from 'react';
import { render, screen } from '@testing-library/react';
import { ButtonStyled } from './components/ButtonStyled';
import './setupTests'



describe("TEST BUTTON STYLE",() => {

    test("Renderizar un botón cualquiera", () => {
    
        render(<ButtonStyled data-testid="button-active">ACTIVE</ButtonStyled>)
        const button = screen.getByTestId('button-active')
        expect(button).toBeInTheDocument()

    })

    test("Comprobar que el botón Active tiene el color del texto adecuado", () => {

        render(<ButtonStyled data-testid="button-active" status="active">Active</ButtonStyled>)
        const button = screen.getByTestId('button-active')
        expect(button).toHaveStyle('color: #5AD07A')

    })

    test("Comprobar que el botón Canceled tiene el color del fondo adecuado", () => {

        render(<ButtonStyled data-testid="button-canceled" status="canceled">Canceled</ButtonStyled>)
        const button = screen.getByTestId('button-canceled')
        expect(button).toHaveStyle('background-color: #575757')

    })

    test("Comprobar que el botón Available tiene el color del fondo adecuado", () => {

        render(<ButtonStyled data-testid="button-available" status="Available">Available</ButtonStyled>)
        const button = screen.getByTestId('button-available')
        expect(button).toHaveStyle('background-color: #5AD07A')

    })

    test("Comprobar que el botón View Notes de Special Request tiene el color del fondo adecuado", () => {

        render(<ButtonStyled data-testid="button-viewNotes" request="true">View Notes</ButtonStyled>)
        const button = screen.getByTestId('button-viewNotes')
        expect(button).toHaveStyle('background-color: #EEF9F2')

    })


})