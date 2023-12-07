
import React from 'react';
import { render, screen } from '@testing-library/react';
import ButtonStyled from './components/ButtonStyled';
import 'jest-styled-components';
import 'jest-dom/extend-expect';

describe("TEST BUTTON STYLE",() => {

    test("Renderizar botón ", () => {
    
        render(<ButtonStyled data-testid="button-active">ACTIVE</ButtonStyled>)
        const button = screen.getByTestId('button-active')
        expect(button).toBeInTheDocument()

    })
})