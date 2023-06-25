// const express = require('express')
// const router = express.Router
// const movieModel = require("./src/Model/movieDB");

// const create = async (req, res) => {
//   try {
//     const {
//       movieName,
//       releaseYear,
//       actor,
//       camera,
//       actress,
//       producer,
//       director,
//       language,
//     } = req.body;
//     const movieNameRegex = new RegExp(movieName, "i");
//     const releaseYearRegex = new RegExp(releaseYear, "i");
//     const actorRegex = new RegExp(actor, "i");
//     const cameraRegex = new RegExp(camera, "i");
//     const actressRegex = new RegExp(actress, "i");
//     const producerRegex = new RegExp(producer, "i");
//     const directorRegex = new RegExp(director, "i");
//     const languageRegex = new RegExp(language, "i");

//     const movies = await movieModel.find({
//       movieName: { $regex: movieNameRegex },
//       releaseYear,
//       actor: { $regex: actorRegex },
//       camera: { $regex: cameraRegex },
//       actress: { $regex: actressRegex },
//       producer: { $regex: producerRegex },
//       director: { $regex: directorRegex },
//       language: { $regex: languageRegex },
//     });
//     console.log(movies);

//     if (movies.length > 0) {
//       console.log(
//         "Movies found:",
//         movies.map((movie) => movie.movieName)
//       );
//       res.json({
//         message: "Movie Already Exists",
//         statusCode: 400,
//         status: "failed to save",
//         exists: true,
//       });
//     } else {
//       var data = await new movieModel(req.body);
//       data.save();
//       res.send({
//         message: "Saved successfully",
//         statusCode: 200,
//         status: "data saved",
//       });
//       console.log("data saved");
//     }
//   } catch (error) {
//     res.status(500).send(error);
//   }
// };

// const readAll = async (req, res) => {
//   console.log("I am here");

//   try {
//     var data = await movieModel.find();
//     res.json(data);
//     console.log(data[0].movieName);
//     // res.send(data)
//     // return data;
//   } catch (error) {
//     res.status(500).send(error);
//   }
// };

// const remove = async (req, res) => {
//   try {
//     console.log(req.params.id);
//     var data = await movieModel.findByIdAndDelete(req.params.id);
//     res.json({ status: "deleted" });
//   } catch (error) {
//     res.status(500).send(error);
//   }
// };

// const update = async (req, res) => {
//   try {
//     let id = req.params.id;
//     console.log(req.body);
//     console.log(id);
//     if (await movieModel.findByIdAndUpdate(id, req.body)) {
//       res.json({ status: "updated" });
//     } else {
//       res.json({ status: "update failed" });
//     }
//   } catch (error) {
//     res.status(500).send(error);
//   }
// };

// const simpleFunction = () =>{
//   const myArray = [1,2,3,4,5]
//   return myArray
// }

// module.exports = { create, readAll, remove, update, simpleFunction };
