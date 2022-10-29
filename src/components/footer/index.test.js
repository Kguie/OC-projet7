/**
 * Test du component Footer
 **/

import Footer from './'
import { render, screen } from '@testing-library/react'

describe('Footer', () => {
    it('Should render with the expected text', async () => {
        render(
            <Footer />
        )
        const expectedText = screen.getByText(/All rights reserved/i)
        expect(expectedText).toBeInTheDocument()
    })
})
