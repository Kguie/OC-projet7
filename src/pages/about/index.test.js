/**
 * Gestion des tests au niveau du component accordion
 **/

import About from '.'
import { screen, fireEvent } from '@testing-library/react'
import { render } from '../../utils/test'

//Tests de l'accordion avec le contenu de la page about
describe('About and accordion', () => {
    it('Should render without crash', async () => {
        render(
            <About />
        )

        //Le texte recherché n’apparaît pas avant le clic sur le bouton
        const toggleBtn = screen.getAllByTestId('header')[0]
        const nonExpectedText = screen.queryByText(/Les annonces postées sur Kasa garantissent une fiabilité totale/i)
        expect(nonExpectedText).toBeNull()

        fireEvent.click(toggleBtn)

        const expectedText = screen.queryByText(/Les annonces postées sur Kasa garantissent une fiabilité totale/i)
        expect(expectedText).toBeTruthy()

    })
})