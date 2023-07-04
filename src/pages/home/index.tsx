/**
 * Gestion de la page d'accueil 
 **/
import Card from "../../components/card";
import Banner from "../../components/banner";
import { useEffect } from "react";
import { useGetLodgingData } from "../../utils/hooks";
import Loader from "../../utils/style/loader";

/**
 * Affiche la page d'accueil 
 */
function Home() {

  //Titre de la page
  useEffect(() => {
    document.title = ' Accueil'
  }, [])
  const url: string = `${process.env.REACT_APP_API}/lodgings/`;
  const { data, isLoading } = useGetLodgingData(url);
  const lodgingData = data && Array.isArray(data) && data

  return (
    <section className="home">
      <Banner text="Chez vous, partout et ailleurs" />

      {/* Ajout de tous les logements sous format de carte */}
      <div className="home__cards-wrapper">

        {/* Récupération des données et map pour la création de chaque carte */}
        {isLoading ? <Loader /> :
          lodgingData && lodgingData.map((lodging: any) => (
            <Card
              key={`lodging-${lodging._id}`}
              id={lodging._id}
              cover={lodging.cover}
              title={lodging.title}
            />
          ))}
      </div>
    </section>
  );
}

export default Home;
