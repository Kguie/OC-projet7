/**
 * Gestion de la page d'accueil 
 **/
import Card from "../../components/card";
import Banner from "../../components/banner";
import lodgingData from "../../data/logements.json"
import { useEffect } from "react";

/**
 * Affiche la page d'accueil 
 */
function Home() {

  //Titre de la page
  useEffect(() => {
    document.title = ' Accueil'
  }, [])

  return (
    <section className="home">
      <Banner text="Chez vous, partout et ailleurs" />

      {/* Ajout de tous les logements sous format de carte */}
      <div className="home__cards-wrapper">

        {/* Récupération des données et map pour la création de chaque carte */}
        {lodgingData && lodgingData.map((lodging: any) => (
          <Card
            key={`lodging-${lodging.id}`}
            id={lodging.id}
            cover={lodging.cover}
            title={lodging.title}
          />
        ))}
      </div>
    </section>
  );
}

export default Home;
