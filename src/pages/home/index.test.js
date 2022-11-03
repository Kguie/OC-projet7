/**
 * Gestion des tests au niveau de Home
 **/

import Home from "."
import { screen } from "@testing-library/react"
import { render } from "../../utils/test"

describe('The Home component', () => {
    render(<Home />)
    it('Should render without crash', () => {
        expect(screen.getByRole('heading', { level: 1, text: /chez vous/i })).toBeTruthy()
    })
})