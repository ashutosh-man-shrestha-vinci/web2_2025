import { Cinema } from "./components/Cinema/index";
import Footer from "./components/Footer";
import Header from "./components/Header";
import { PageTitle } from "./components/PageTitle/index";

const App = () => {
  const pageTitle = "Informations sur les films dans les cinémas";

  const cinema1Name = "UGC DeBrouckère";

  const moviesCinema1 = [
  {
    title: "HAIKYU-THE DUMPSTER BATTLE",
    director: "Susumu Mitsunaka",
  },
  {
    title: "GOODBYE JULIA",
    director: "Mohamed Kordofani",
  },
  {
    title: "INCEPTION",
    director: "Christopher Nolan",
  },
  {
    title: "PARASITE",
    director: "Bong Joon-ho",
  },
];

const cinema2Name = "UGC Toison d'Or";

const moviesCinema2 = [
  {
    title: "THE WATCHERS",
    director: "Ishana Night Shyamalan",
  },
  {
    title: "BAD BOYS: RIDE OR DIE",
    director: "Adil El Arbi, Bilall Fallah",
  },
  {
    title: "TENET",
    director: "Christopher Nolan",
  },
  {
    title: "THE IRISHMAN",
    director: "Martin Scorsese",
  },
]; 

  
  return (
    <div>
       <Header logoUrl="https://images.unsplash.com/photo-1512427691650-1f433aee35d4">
        🍿 Bienvenue dans l'app Cinéma !
      </Header>
      
      <PageTitle title={pageTitle} />

      <Cinema name={cinema1Name} movies= {moviesCinema1} />

      <Cinema name={cinema2Name} movies={moviesCinema2} />
       <Footer logoUrl="https://images.unsplash.com/photo-1512427691650-1f433aee35d4">
        📽️ Merci de visiter notre app Cinéma !
      </Footer>   
   
    </div>

   
  );
};

export default App;