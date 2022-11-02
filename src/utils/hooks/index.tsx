/**
 * Gestion des hooks custom
 **/

import { useEffect, } from 'react'
import { useNavigate } from "react-router-dom";
import lodgingData from '../../data/logements.json'


/**
 * Récupère les données d'un logement en fonction de l'id renseigné, tout en redirigeant l'utilisateur vers la page d'erreur si il rentre un mauvais id
 * @param {string} id du logement 
 * @returns {object|error} les données du logement ou redirection vers la page erreur 
 */
export function useGetLodgingById(id: string | null | undefined) {
    const lodgingFound = lodgingData.find((lodging,) => lodging.id === id);
    const navigate = useNavigate();

    useEffect(() => {

        //L'id rentré en argument n'est pas retrouvé dans la base de données
        if (!lodgingFound) {

            navigate("/error");
        }
    }, [lodgingFound, navigate]);

    //L'id retrouvé dans las basse de données est retourné
    if (lodgingFound) {
        return lodgingFound
    }
}