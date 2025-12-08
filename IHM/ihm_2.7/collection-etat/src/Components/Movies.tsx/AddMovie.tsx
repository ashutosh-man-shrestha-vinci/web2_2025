
import { useState, type SyntheticEvent } from 'react';
import type { NewMovie } from '../../type';
import { Box, Button, TextField } from '@mui/material';

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
    
    <Box  sx={{
        marginTop: 2,
        padding: 3,
        backgroundColor: "#f5f5f5",
        borderRadius: 4,
        boxShadow: 2,
      }} component="form" onSubmit={handleSubmit} >
       <Box sx={{ marginBottom: 2 }}>
          <TextField
            fullWidth
            id="title"
            name="title"
            label="titre"
            variant="outlined"
            value={title}
            onChange={handleTitleChange}
            required
            color="primary"
          />
        </Box>
        <Box sx={{ marginBottom: 2 }}>
          <TextField
            fullWidth
            id="director"
            name="director"
            label="Réalisateur"
            variant="outlined"
            value={director}
            onChange={handleDirectorChange}
            required
            color="primary"
          />
        </Box>
        <Box sx={{ marginBottom: 2 }}>
          <TextField
            fullWidth
            id="duration"
            name="duration"
            label="Durée"
            variant="outlined"
            value={duration}
            onChange={handleDurationChange}
            required
            color="primary"
          />
        </Box>
        <Button type="submit" variant="contained" color="primary">
          Ajouter
        </Button>
    </Box>
    
  )


}

export default AddMovie
