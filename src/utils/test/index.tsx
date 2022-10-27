/**
 * Gestion des fonctions pour faciliter les tests
 **/

import { render as rtlRender } from '@testing-library/react'
import { MemoryRouter } from 'react-router-dom'

interface props {
    children: any
}

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