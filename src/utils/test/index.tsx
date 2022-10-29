/**
 * Gestion des fonctions pour faciliter les tests
 **/

import { render as rtlRender } from '@testing-library/react'
import { MemoryRouter } from 'react-router-dom'

type props = {
    children: any
}

/**
 *Wrapper permettant d’utiliser le render qui le suit avec tous les éléments nécessaires au fonctionnement des pages et components   
 */
function Wrapper({ children }: props) {
    return (
        <MemoryRouter>
            {children}
        </MemoryRouter>
    )
}

export function render(ui: any) {
    rtlRender(ui, { wrapper: Wrapper })
}