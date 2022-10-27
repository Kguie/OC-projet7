/**
 * Gestion de la page d'accueil 
 **/
import Card from "../../components/card";
import lodgingData from "../../data/logements.json"

/**
 * Affiche la page d'accueil 
 */
function Home() {

  return (
    <div className="home">
      <div className="home__banner">
        <h1 className="home__banner__text">Chez vous, partout et ailleurs</h1>
      </div>
      <div className="home__cards-wrapper">
        {lodgingData && lodgingData.map((lodging: any) => (
          <Card
            key={`lodging-${lodging.id}`}
            id={lodging.id}
            cover={lodging.cover}
            title={lodging.title}
          />
        ))}
      </div>
    </div>
  );
}

export default Home;
