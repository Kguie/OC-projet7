/**
 * Gestion des tests au niveau du component Accordion
 **/

import Accordion from './'
import { screen, fireEvent } from '@testing-library/react'
import { render } from '../../utils/test'

describe('The Accordion function', () => {
    render(
        <Accordion
            category='Test Category'
            content="This is my test content"
        />
    )
    it('Should render without crash', async () => {

        expect(screen.getByTestId('category').textContent).toBe('Test Category')

        const toggleBtn = screen.getByTestId('header')
        const content = screen.queryByTestId('content')
        expect(content).toBeNull()

        //En cliquant sur le bouton,la division avec le texte apparaît 
        fireEvent.click(toggleBtn)

        const expectedText = screen.getByTestId('content')
        expect(expectedText.textContent).toBe('This is my test content')


        //En cliquant une seconde fois,la division disparaît 
        fireEvent.click(toggleBtn)

        expect(content).toBeNull()
    })
})


