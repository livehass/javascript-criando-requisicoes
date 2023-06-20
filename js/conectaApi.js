async function listaVideos(){
    const conexao = await fetch("http://localhost:3000/videos");
    const conexaoConvertida = await conexao.json();
    
    return conexaoConvertida;
}
async function criaVideo(){
    const conexaoVideo = await fetch("http://localhost:3000/videos", {
        method: "POST",
    });
}

export const conectaApi = {
    listaVideos
}

