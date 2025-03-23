//Esther Pautrel
// NOTE: 
// This is the starter file for a blog post "How to build a calculator". You can follow the lesson at https://zellwk.com/blog/calculator-part-1

// # START EDITING YOUR JAVASCRIPT HERE
// ===============

/* */
window.addEventListener("load", () => {
    //let elements = document.getElementsByClassName("calculator__keys")
    let elements = document.querySelectorAll(".chiffre")

    let operateur = "aucun"
    console.log(operateur)
    let resultat = 0

    elements.forEach((e)=> e.addEventListener("click", () => {
      if (operateur == "aucun"){
        updateDisplayFromContext(e.textContent)
      }
      else if (operateur == "plus") {
        let terme = document.getElementById("ecran").innerHTML;
        resultat = (+terme) + (+e.textContent);
        console.log(resultat)
        document.getElementById("ecran").innerHTML = e.textContent
      }
      else if (operateur == "moins") {
        let terme = document.getElementById("ecran").innerHTML;
        resultat = (+terme) - (+e.textContent);
        document.getElementById("ecran").innerHTML = e.textContent
      }
      operateur = "aucun"
    }))

    let plus = document.querySelector("[data-action='add']");

    plus.addEventListener("click", () => {
      operateur = "plus"
    })

    let moins = document.querySelector("[data-action='subtract']");

    moins.addEventListener("click", () => {
      operateur = "moins"
    })


    let equal = document.querySelector("[data-action='calculate']");
    equal.addEventListener("click", () => {
      document.getElementById("ecran").innerHTML = resultat
    })

    function updateDisplayFromContext(a) {
        let affichage = document.getElementById("ecran").innerHTML
        if (affichage == 0) {
         document.getElementById("ecran").innerHTML = a} 
       else {document.getElementById("ecran").innerHTML += a}
      }

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