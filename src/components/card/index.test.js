/**
 * Gestion des tests au niveau du component Card
 **/

import Card from './'
import { screen } from '@testing-library/react'
import { render } from '../../utils/test'

describe('The Card function', () => {
    test('Should render without crash', async () => {
        render(
            <Card
                title="House on Miami Beach"
                cover="/myPicture.png"
                id='123'
            />
        )
        const cardPic = screen.getByRole('img')
        const cardTitle = screen.getByText(/Miami Beach/i)
        expect(cardPic.src).toBe('http://localhost/myPicture.png')
        expect(cardTitle).toBeTruthy()
    })
})