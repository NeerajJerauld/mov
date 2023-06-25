import React, { useEffect, useState } from "react";
import { Paper, Typography } from "@mui/material";

const Aboutus = () => {


  return (
    <div>
      <Paper
        elevation={3}
        sx={{ p: 3, borderRadius: "10px", margin: "20px", padding: "20px" }}
      >
        {" "}
        <Typography
          variant="body1"
          sx={{
            textAlign: "justify",
            fontWeight: "bold",
            fontSize: "1.2rem",
            mb: 2,
          }}
        >
          Welcome to our Movie Management App!
        </Typography>
        <Typography variant="body1" sx={{ textAlign: "justify", mb: 2 }}>
          At MovieX, we provide a comprehensive solution for managing your movie
          collection. Whether you are a movie enthusiast, a filmmaker, or a
          production company, our app is designed to streamline the process of
          organizing and managing movies. With our user-friendly interface, you
          can easily add and update movie details such as titles, release years,
          actors, cameras, actresses, producers, directors, and languages. Our
          app makes it effortless to keep track of your entire movie library in
          one centralized location. Stay organized by creating different
          categories or genres to classify your movies. You can also search and
          filter movies based on various criteria, making it convenient to find
          the movies you're looking for in no time. Additionally, our app offers
          advanced features such as analytics and reporting. Get insights into
          your movie collection with detailed statistics, charts, and graphs.
          Understand your movie preferences, track the performance of your
          movies, and make informed decisions for future projects. We strive to
          provide a seamless and enjoyable experience for all movie enthusiasts
          and professionals. Whether you're a casual movie watcher or a
          dedicated industry expert, MovieX is here to simplify your movie
          management journey. Join us today and embark on an exciting cinematic
          adventure with MovieX! Feel free to explore our app and reach out to
          our support team if you have any questions or feedback.
        </Typography>
        <Typography sx={{ mb: 3 }}>
          Enjoy managing your movies with ease and efficiency!
        </Typography>
      </Paper>
    </div>
  );
};

export default Aboutus;
