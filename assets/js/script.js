function toggleMode() {
    const html = document.documentElement;
    html.classList.toggle("light");//Podemos reduzir o if para adicionar ou remover a classe usando toggle

    const img = document.querySelector("#profile img");

    if (html.classList.contains("light")) {
        img.setAttribute("src", "./assets/images/avatar-light.png");
        img.setAttribute("alt", "Foto de Mayk Brito sorrindo, usando óculos escuros e camisa preta, barba e fundo amarelo.");
    } else {
        img.setAttribute("src", "./assets/images/avatar.png");
        img.setAttribute("alt", "Foto de Mayk Brito sorrindo, usando óculos e camisa preta, barba e fundo amarelo.");
    }
}