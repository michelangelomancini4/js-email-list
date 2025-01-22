// generazione email random tramite API

fetch("https://flynn.boolean.careers/exercises/api/random/mail")
  .then(response => response.json()) 
  .then(data => {

    // stampo in console l'email
    console.log("Indirizzo email:", data.response); 
  })
  .catch(error => {
    console.error(error);
  });