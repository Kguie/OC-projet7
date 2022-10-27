/**
 * Gestion des tests au niveau de Home
 **/

import Home from "."
import { screen } from "@testing-library/react"
import { render } from "../../utils/test"

describe('The Home component', () => {
    test('Should render without crash', () => {
        render(<Home />)
        expect(screen.getByRole('heading', { level: 1, text: /chez vous/i })).toBeTruthy()
    })
})