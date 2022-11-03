/* sans fetch */

/* const url = 'https://blockchain.info/ticker';

function recupererPrix() {
  // Créer une requête
  let requete = new XMLHttpRequest(); // Créer un objet
  requete.open('GET', url); // Premier paramètre GET / POST, deuxième paramètr : url
  requete.responseType = 'json'; // Nous attendons du JSON
  requete.send(); // Nous envoyons notre requête

  // Dèss qu'on reçoit une réponse, cette fonction est executée
  requete.onload = function() {
    if (requete.readyState === XMLHttpRequest.DONE) {
      if (requete.status === 200) {
        let reponse = requete.response; // on stock la réponse
        let prixEnEuros = reponse.EUR.last;
        document.querySelector('#price_label').textContent = prixEnEuros;
      }
      else {
        alert('Un problème est intervenu, merci de revenir plus tard.');
      }
    }
  }
  console.log('Prix actualisé');
}

setInterval(recupererPrix, 1000);
 */


/* avec fecth */


const url = 'https://blockchain.info/ticker';

async function recupererPrix() {
  const requete = await fetch(url, {
    method: 'GET'
  });
  
  if(!requete.ok) {
    alert('Un problème est survenu.');
  } else {
    let donnees = await requete.json();
    // console.log(donnees);
    document.querySelector('#price_label').textContent = donnees.EUR.last;
  }
}

setInterval(recupererPrix, 1000);