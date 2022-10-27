/**
 * Test du component Header
 **/

import Header from './'
import { screen } from '@testing-library/react'
import { render } from '../../utils/test'

describe('Header', () => {
    it('Should render without crashing', async () => {
        render(<Header />)
    })

    it('Should render with the expected text', async () => {
        render(<Header />)
        const expectedText = screen.getByText(/Accueil/i)
        expect(expectedText).toBeInTheDocument()
    })
})
