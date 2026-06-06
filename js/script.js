




function alternarDarkMode() {
    const body = document.body;
    const botao = document.getElementById("btnDarkMode");

    body.classList.toggle("dark-mode");

    if (body.classList.contains("dark-mode")) {
        botao.textContent = "Light Mode";
    } else {
        botao.textContent = "Dark Mode";
    }
}














// Função 1: Botão para pausar ou tocar o vídeo
function controlarVideo() {
    const video = document.querySelector("video");
    const botao = document.getElementById("btnVideo");

    if (video.paused) {
        video.play();
        botao.textContent = "Pausar vídeo";
    } else {
        video.pause();
        botao.textContent = "Tocar vídeo";
    }
}


// Ativa a troca automática do banner quando a página carregar
window.onload = function() {
    trocarBannerAutomatico();
};


