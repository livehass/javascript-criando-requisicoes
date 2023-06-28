import { conectaApi } from "./conectaApi.js";

async function buscarVideo(evento){
    evento.preventDedfault();
    const dadosDePesquisa = document.querySelector("[data-pesquisa]");
    const busca = await conectaApi.buscaVideo(dadosDePesquisa);
}

const botaoDePesquisa = document.querySelector("data-botao-pesquisa");
botaoDePesquisa.addEventListener("click", evento => buscarVideo(evento));