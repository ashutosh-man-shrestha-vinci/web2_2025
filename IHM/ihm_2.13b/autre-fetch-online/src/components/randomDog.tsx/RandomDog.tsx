import { useEffect, useState } from 'react'



type Dog = {
  message: string;
  status: string;
};

function RandomDog() {
const [dog, setDog] = useState<Dog>()


 useEffect(() => {
    fetch("https://dog.ceo/api/breeds/image/random")
      .then((response) => {
        if (!response.ok)
          throw new Error(
            `fetch error : ${response.status} : ${response.statusText}`
          );
        return response.json();
      })
      .then((dog) => {
        setDog(dog);
      })
      .catch((err) => {
        console.error("HomePage::error: ", err);
      });
  }, []);

  return (
    <>
     <div>status  : {dog?.status}</div>
      <div><img src={dog?.message} alt="A Random Dog"/></div>
       
    </>
  )
}

export default RandomDog