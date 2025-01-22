//   richiamo la variabile per output

const outputEl = document.getElementById('outputElement');


// creo ciclo per generare 10 mail diverse
for (let i = 0; i < 10; i++) {

// generazione email random tramite API

axios.get("https://flynn.boolean.careers/exercises/api/random/mail")
.then((response) => {
let result = response.data;
  // stampo in console le email
  console.log("Indirizzo email:", result.response); 

   // stampo in pagina le mail
  outputEl.innerHTML += `
  <div class="p-3 text-primary-emphasis bg-primary-subtle border border-primary-subtle rounded-3">
   ${"Indirizzo email:"} ${ result.response } 
   </div>
`;
})
 
// in caso di errore stampo in console l'errore

.catch(error => {
  console.error(error);
});
}







