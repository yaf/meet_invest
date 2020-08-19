const mysql = require ('mysql');

const connection = mysql.createConnection ({
  hôte: «localhost»,
  utilisateur: 'admin',
  mot de passe: 'admin',
  base de données: 'meetinvest_bdd'
});

connection.connect ((err) => {
 if (err) throw err;
 console.log ('Connecté!');
});
