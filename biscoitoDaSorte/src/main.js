const button = window.document.getElementById("biscoito")
const button2 = window.document.querySelector(".screen2")
const voltar = window.document.getElementById("jogarNovamente")

button.addEventListener('click', function(){
    let frases = ["A vida trará coisas boas se tiver paciência",
              "Demonstre amor e alegria em todas as oportunidades e verá que a paz nasce dentro de si.",
              "Não compense na ira o que lhe falta na razão.",
              "Defeitos e virtudes são apenas dois lados da mesma moeda"]

    let sorteio = Math.floor(Math.random() * frases.length)
   
    console.log("entrou")
    window.document.querySelector(".screen1").classList.add("hide")
    button2.classList.remove("hide")

    window.document.getElementById("p").innerHTML = frases[sorteio]
})

voltar.addEventListener('click', function(){
    window.document.querySelector(".screen1").classList.remove("hide")
    button2.classList.add("hide")
})