/**
 * Tests du component Gallery
 **/

import Gallery from '.'
import { screen, fireEvent } from '@testing-library/react'
import { render } from '../../utils/test'



describe('The Gallery component', () => {

    const pictures = ['myPicture1', 'myPicture2', 'myPicture3', 'myPicture4', 'myPicture5']
    const onePicture = ["myPicture1"]

    it('Should render without crash and without the navigation div', async () => {
        render(
            <Gallery pictures={onePicture} />
        )

        //Le component ne devrait être constitué d'une seule image, la photo du carrousel et donc d’aucune icône
        const picture = screen.getAllByRole('img')
        expect(picture.length).toEqual(1)
        expect(screen.getByAltText(/galerie/i)).toBeTruthy()

    })

    it('Should render all the pictures and be able to change with the icons', async () => {

        render(
            <Gallery pictures={pictures} />
        )

        //Le component devrait afficher une 3 images(la photo et les 2 icônes)
        expect(screen.getAllByRole('img').length).toEqual(3)

        //La partie number devrait afficher 1/5
        const numbers = screen.getByTestId('numbers')
        expect(numbers.textContent).toBe('1/5')

        const leftIcon = screen.getByTestId('left-arrow')
        const rightIcon = screen.getByTestId('right-arrow')


        //Utilisation de setTimeout() pour vérifier le contenu de numbers après la find e l'animation
        //En cliquant sur l’icône de droite,on passe à la photo 2
        fireEvent.click(rightIcon)
        setTimeout(() => { expect(numbers.textContent).toBe('2/5') }, 600);

        //En cliquant sur l’icône de gauche,on repasse à la photo 1
        fireEvent.click(leftIcon)
        setTimeout(() => { expect(numbers.textContent).toBe('1/5') }, 600);

        //En cliquant sur l’icône de gauche,on arrive à la photo 5
        fireEvent.click(leftIcon)
        setTimeout(() => { expect(numbers.textContent).toBe('5/5') }, 600);

        //En cliquant sur l’icône de droite,on revient à la photo 1
        fireEvent.click(rightIcon)
        setTimeout(() => { expect(numbers.textContent).toBe('1/5') }, 600);

    })
})