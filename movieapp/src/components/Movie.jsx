import React, { useEffect, useState } from "react";
import { TextField, Button, Grid } from "@mui/material";
import axios from "axios";
import Home from "./Home";
import { useNavigate } from "react-router-dom";

const Movie = () => {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    movieName: "",
    releasedYear: "",
    actor: "",
    camera: "",
    actress: "",
    producer: "",
    director: "",
    language: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    // console.log(formData); // You can perform further actions with the form data here
    
  try {
    const response = await axios.post('http://localhost:24000/movie/addMovie', formData);
    console.log(response.data); // Handle the response from the backend
    alert(
      "response: "+response.data.message+ "   "+
      "status: "+response.data.status
    )
    if(response.data.statusCode === 200){
      navigate(<Home />)
    }
    
  } catch (error) {
    console.error(error); // Handle any error that occurs during the request
  }
  };


  return (
    <div>
      <form onSubmit={handleSubmit} style={{ margin: "20px", padding: "20px" }}>
        <Grid container spacing={2}>
          <Grid item xs={6}>
            <TextField
              label="Movie Name"
              name="movieName"
              value={formData.movieName}
              onChange={handleChange}
              fullWidth
            />
          </Grid>
          <Grid item xs={6}>
            <TextField
              label="Released Year"
              name="releasedYear"
              value={formData.releasedYear}
              onChange={handleChange}
              fullWidth
            />
          </Grid>
          <Grid item xs={6}>
            <TextField
              label="Actor"
              name="actor"
              value={formData.actor}
              onChange={handleChange}
              fullWidth
            />
          </Grid>
          <Grid item xs={6}>
            <TextField
              label="Camera"
              name="camera"
              value={formData.camera}
              onChange={handleChange}
              fullWidth
            />
          </Grid>
          <Grid item xs={6}>
            <TextField
              label="Actress"
              name="actress"
              value={formData.actress}
              onChange={handleChange}
              fullWidth
            />
          </Grid>
          <Grid item xs={6}>
            <TextField
              label="Producer"
              name="producer"
              value={formData.producer}
              onChange={handleChange}
              fullWidth
            />
          </Grid>
          <Grid item xs={6}>
            <TextField
              label="Director"
              name="director"
              value={formData.director}
              onChange={handleChange}
              fullWidth
            />
          </Grid>
          <Grid item xs={6}>
            <TextField
              label="Language"
              name="language"
              value={formData.language}
              onChange={handleChange}
              fullWidth
            />
          </Grid>
          <Grid item xs={12}>
            <Button
              type="submit"
              variant="contained"
              color="primary"
              fullWidth
              style={{ width: "23%" }}
            >
              Add 
            </Button>
          </Grid>
        </Grid>
      </form>
    </div>
  );
};

export default Movie;
