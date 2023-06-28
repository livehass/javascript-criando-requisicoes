import { conectaApi } from "./conectaApi.js";

async function buscarVideo(){
    const dadosDePesquisa = document.querySelector("[data-pesquisa]");
    const busca = await conectaApi.buscaVideo(dadosDePesquisa);
}

const botaoDePesquisa = document.querySelector("data-botao-pesquisa");