/**
 * Gestion des hooks custom
 **/

import { useEffect, useState } from 'react'
import { useNavigate } from "react-router-dom";
import axios from 'axios';

/**
 * Récupère les données de tous les logements,ou renvoie sur la page d'erreur 
 * @param {String} url de l'api utilisé
 * @returns {object|error} les données de tous les logements ou redirection vers la page erreur
 */
export function useGetLodgingData(url: string) {
    const [data, setData] = useState({} || [])
    const [isLoading, setLoading] = useState(true)
    const navigate = useNavigate();

    useEffect(() => {
        if (!url) return
        setLoading(true)
        async function getData() {
            try {
                const response = await axios.get(url);
                if (!response) {
                    navigate("/error")
                }
                else {
                    setData(response.data.lodgings)
                }

            } catch (error) {
                console.error(error);
                navigate("/error")
            }
            finally {
                setLoading(false)
            }
        }
        getData()
    }, [navigate, url])
    return { isLoading, data }
}


