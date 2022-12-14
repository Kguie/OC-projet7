/**
 * Gestion de la logique de routage
 **/

import { Routes, Route, BrowserRouter } from "react-router-dom";
import Home from '../../pages/home';
import About from '../../pages/about';
import Lodging from '../../pages/lodging';
import Error from '../../components/error';
import Header from "../../components/header";
import Footer from "../../components/footer";


/**
 * Gestion du router et des routes
 */
export function MyRouter() {

    return (
        <BrowserRouter>
            <Header />
            <Routes>
                <Route path='/' element={<Home />} />
                <Route path='/about' element={<About />} />
                <Route path='/lodging/:id' element={<Lodging />} />

                {/* Ajout d'une route error pour les routes non répertoriées */}
                <Route element={<Error />} path='*' />
            </Routes>
            <Footer />
        </BrowserRouter>
    )
}

