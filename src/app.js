const express = require('express');
const morgan = require('morgan');
const { db } = require('./firebase');

const app = express();

app.use(morgan('dev'));

app.get('/', async (req, res) => {
  const querySnapshot = await db.collection('contacts').get();
  res.send(querySnapshot.docs[0].data()); //de lo que me da firebase , el primer documento , la data
});

module.exports = app;
