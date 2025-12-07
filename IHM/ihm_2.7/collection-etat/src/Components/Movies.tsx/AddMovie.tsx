
import { useState, type SyntheticEvent } from 'react';
import type { NewMovie } from '../../type';

export interface AddMovieProprs {
    addMovie : (newMovie: NewMovie) => void;
  }

const AddMovie =({addMovie}: AddMovieProprs) => {
  const [title, setTitle] = useState("");
  const [director, setDirector] = useState("");
  const [duration, setDuration] = useState("");

const handleTitleChange = (e: SyntheticEvent) => {
    const titleInput = e.target as HTMLInputElement;
    console.log("change in titleInput:", titleInput.value);
    setTitle(titleInput.value);
  };

  const handleDirectorChange = (e: SyntheticEvent) => {
    const directorInput = e.target as HTMLInputElement;
    console.log("change in directorInput:", directorInput.value);
    setDirector(directorInput.value);
  };

  const handleDurationChange = (e: SyntheticEvent) => {
    const durationInput = e.target as HTMLInputElement;
    console.log("change in durationInput:", durationInput.value);
    setDuration(durationInput.value);
  };

  const handleSubmit = (e: SyntheticEvent) => {
  e.preventDefault();
  
 addMovie({
    title,
    director,
    duration: Number(duration),
  });

};



  return (
    <div className="App">
    <form onSubmit={handleSubmit}>
      <div>
        <label>Title:</label>
        <input type="text" value={title} onChange={handleTitleChange} />
      </div>
      <div>
        <label>Director:</label>
        <input type="text" value={director} onChange={handleDirectorChange} />
      </div>
      <div>
        <label>Duration (min):</label>
        <input type="number" value={duration} onChange={handleDurationChange} />
      </div>
      <button type="submit">Add Movie</button>
    </form>   
    </div>
    
  )


}

export default AddMovie
