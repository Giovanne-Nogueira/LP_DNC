var leo = window.document.getElementById("leo")
var bruna = window.document.getElementById("bruna")
var saman = window.document.getElementById("saman")
var setaEsq = window.document.getElementById("seta-esquerda")
var setaDir = window.document.getElementById("seta-direita")
function rolarparadireita(){
    leo.style = "display:none"
    saman.style = "display:flex"
    bruna.style = "display:flex"
    setaEsq.style = "display:none"
    setaDir.style = "display:flex"
}
function rolarparaesquerda(){
    leo.style = "display:flex"
    saman.style = "display:flex"
    bruna.style = "display:none"
    setaDir.style = "display:none"
    setaEsq.style = "display:flex"
}