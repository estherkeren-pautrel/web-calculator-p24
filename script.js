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
    let resultat = 0
    let debut = true

    elements.forEach((e)=> e.addEventListener("click", () => {
        updateDisplayFromContext(e.textContent)
      console.log(resultat)
    }))


    let decimal = document.querySelector("[data-action='decimal']");
    decimal.addEventListener("click", () => {
      document.getElementById("ecran").innerHTML += "." //checker les types pour que cela fasse le calcul!! avec .!!
      operateur = "decimal" //check
      console.log(resultat)
      debut = false //check
    })

    let plus = document.querySelector("[data-action='add']");
    plus.addEventListener("click", () => {
      calcul()
      operateur = "plus"
      console.log(resultat)
      debut = false
      document.getElementById("ecran").innerHTML = ""
    })

    let moins = document.querySelector("[data-action='subtract']");
    moins.addEventListener("click", () => {
      calcul()
      operateur = "moins"
      console.log(resultat)
      debut = false
      document.getElementById("ecran").innerHTML = ""
    })

    let fois = document.querySelector("[data-action='multiply']");
    fois.addEventListener("click", () => {
      calcul()
      operateur = "fois"
      console.log(resultat)
      debut = false
      document.getElementById("ecran").innerHTML = ""
    })

    let diviser = document.querySelector("[data-action='divide']");
    diviser.addEventListener("click", () => {
      calcul()
      operateur = "diviser"
      console.log(resultat)
      debut = false
      document.getElementById("ecran").innerHTML = ""
    })
    //empêcher la division par 0...

    let clear = document.querySelector("[data-action='clear']");
    clear.addEventListener("click", () => {
      resultat = 0
      document.getElementById("ecran").innerHTML = resultat
      operateur = "aucun"
      debut = true
    })

    let equal = document.querySelector("[data-action='calculate']");
    equal.addEventListener("click", () => {
      if (operateur == "aucun"){
        document.getElementById("ecran").innerHTML = 0
      }
      else {
        calcul()
        console.log(resultat)
        document.getElementById("ecran").innerHTML = resultat 
      }
    })

    function calcul() {
      if (debut) {
        let terme = document.getElementById("ecran").innerHTML;
        resultat = (+terme);
      }
      else if (operateur == "plus") {
        let terme = document.getElementById("ecran").innerHTML;
        resultat += (+terme);
        console.log(resultat)
      }
      else if (operateur == "moins") {
        let terme = document.getElementById("ecran").innerHTML;
        resultat = resultat - (+terme);
      }
      else if (operateur == "fois") {
        let terme = document.getElementById("ecran").innerHTML;
        resultat = resultat * (+terme);
      }
      else if (operateur == "diviser") {
        let terme = document.getElementById("ecran").innerHTML;
        if (+terme === 0) {
          alert("Erreur : Division par zéro impossible.");
          resultat = 0;
      } else {
          resultat = resultat / (+terme);
      }
      }
    }


    function updateDisplayFromContext(a) {
        let affichage = document.getElementById("ecran").innerHTML
        if (affichage == 0 || affichage == "") {
         document.getElementById("ecran").innerHTML = a} 
       else {document.getElementById("ecran").innerHTML += a}
      }

  })
    

//ETAPES A FAIRE
//jpp continuer le calcul après le =... 
//gérer avec nlle var que ca fasse pas moche après un opérateur... 
//on termine par le décimal, le . ce n'est que pour la fin!!
//commiter à chaque fois à partir de chaque étape