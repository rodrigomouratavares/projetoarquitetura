const setaEsquerda = document.querySelector("#seta-esquerda");
const setaDireita = document.querySelector("#seta-direita");
const imagemarquiteturaSala = document.querySelector("#arquitetura-Sala")
const imagemArquiteturaQuarto = document.querySelector("#arquitetura-Quarto")
function setaCarrocelDireita(){
    setaDireita.style.display = "none";
    setaEsquerda.style.display = "flex";
    imagemarquiteturaSala.style.display = "none";
    imagemArquiteturaQuarto.style.display = "flex";


}
function setaCarrocelEsquerda(){
    setaDireita.style.display = "flex";
    setaEsquerda.style.display = "none";
    imagemarquiteturaSala.style.display = "flex";
    imagemArquiteturaQuarto.style.display = "none";


}