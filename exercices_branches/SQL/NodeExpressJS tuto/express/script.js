// const express = require('express'); // on charge express
// const app = express();
// const port = 3000; // on decide que notre serveur se lancera sur le port 3000

// // premiere route
// // lorsqu'on lance la racine, on tombe sur notre message
// app.get('/', (req, res) => {
//   res.send('Hello World! 👋');
// });

// // lorsque le serveur se lance correctement, on affiche dans notre console
// // un message qui indique sur quel port est exécuté celui-ci
// app.listen(port, () => {
//   console.log(`Example app listening on port ${port}`);
// });


import express from 'express';
import cors from 'cors';

const app = express();
app.use(cors());

const port = 3000;

app.get('/', (req, res) => {
  res.send('👋');
});

app.listen(port, () => {
  console.log(`Infinite scroll app listening on port ${port}`);
});
