//Esther Pautrel
// NOTE: 
// This is the starter file for a blog post "How to build a calculator". You can follow the lesson at https://zellwk.com/blog/calculator-part-1

// # START EDITING YOUR JAVASCRIPT HERE
// ===============

window.addEventListener("load", () => {
    //let elements = document.getElementsByClassName("calculator__keys")
    let elements = document.querySelectorAll(".calculator__keys button")
    elements.forEach((e)=> e.addEventListener("click", () => console.log(e.textContent)))
  })

//ETAPES A FAIRE
//pouvoir clicker sur les chiffres : console.log => attraper evt click
//affichage là haut : nb à un chiffre
//puis nb à deux chiffres
//après faire le +
// que seul 5 s'affiche quand y'a 000005
//faire le clear AC

//attention: on termine par le décimal, le . ce n'est que pour la fin!!
//commiter à chaque fois à partir de chaque étape
