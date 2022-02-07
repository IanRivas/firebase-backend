require('dotenv').config();
const { initializeApp, applicationDefault } = require('firebase-admin/app');
const { getFirestore } = require('firebase-admin/firestore');

initializeApp({
  credential: applicationDefault(), //esto lee el json y lo conecta
});

const db = getFirestore();

module.exports = {
  db,
};
