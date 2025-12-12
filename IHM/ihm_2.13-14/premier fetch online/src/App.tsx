import { useEffect, useState } from 'react'
import './App.css'

type Joke = {
  category: string;
  type: string;
  joke?: string;
  setup?: string;
  delivery?: string;
};

function App() {
  const [joke, setJoke] = useState<Joke>()

  useEffect(() => {
    
    const interval = setInterval(() => { fetch("https://v2.jokeapi.dev/joke/Any")
      .then((response) => {
        if (!response.ok)
          throw new Error(
            `fetch error : ${response.status} : ${response.statusText}`
          );
        return response.json();
      })
      .then((joke) => {
        setJoke(joke);
      })
      .catch((err) => {
        console.error("HomePage::error: ", err);
      });
    }, 10000);
      return () => clearInterval(interval);


  }, []);

  return (
    <div className="joke-container">
      <h1 className="joke-title">Joke of the Moment 🤡</h1>
      <div className="joke-card">
        <p className="joke-category">Category: {joke?.category}</p>
        <p className="joke-type">Type: {joke?.type}</p>
        <p className="joke-text">{joke?.joke || joke?.setup}</p>
        {joke?.delivery && <p className="joke-delivery">{joke.delivery}</p>}
      </div>
    </div>
  )
}

export default App
