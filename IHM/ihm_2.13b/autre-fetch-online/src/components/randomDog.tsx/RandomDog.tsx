import { useEffect, useState } from 'react'



type Dog = {
  message: string;
  status: string;
};

function RandomDog() {
const [dog, setDog] = useState<Dog>()

useEffect(() => {
    fetchdog();
    const interval = setInterval(() => { fetchdog(); }, 5000);
      return () => clearInterval(interval);
  }, [5000]);

  
  
  const fetchdog = async () => {

    try {
      const response = await fetch("https://dog.ceo/api/breeds/image/random");      
   
        if (!response.ok)
          throw new Error(
            `fetch error : ${response.status} : ${response.statusText}`
          );
          const dog = await response.json();
          setDog(dog);
    } catch (err) {
      console.error("HomePage::error: ", err);
    }
    };

  return (
    <>
     <div>status  : {dog?.status}</div>
      <div><img src={dog?.message} alt="A Random Dog"/></div>
       
    </>
  )
}

export default RandomDog