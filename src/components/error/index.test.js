/**
 * Test du component Error
 **/

import Error from '.'
import { screen } from '@testing-library/react'
import { render } from '../../utils/test'

describe('Error', () => {
    it('Should render with the expected text', async () => {
        render(<Error />)
        const expectedText = screen.getByText(/La page que vous demandez n'existe pas/i)
        expect(expectedText).toBeInTheDocument()
    })
})
