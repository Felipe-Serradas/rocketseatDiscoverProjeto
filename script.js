function toogleMode() {
  const html = document.documentElement;

  //  if (html.classList.contains("light")) {
  //    html.classList.remove("light");
  //  } else {
  //    html.classList.add("light");
  //  }
  html.classList.toggle("light");

  // pegar a tag img
  const img = document.querySelector("#profile img");

  if (html.classList.contains("light")) {
    // se tiver light mode, adicionar a imagem light
    img.setAttribute("src", "./assets/perfil-light.png");
    img.setAttribute(
      "alt",
      "Foto de Mayk Brito sorrindo, usando óculos de sol e camisa preta, sem barba e fundo gradiente entre roxo e azul."
    );
  } else {
    // se tiver sem light mode, manter a imagem normal
    img.setAttribute("src", "./assets/perfil-night.png");
    img.setAttribute(
      "alt",
      "Foto de Mayk Brito sorrindo, usando óculos e camisa preta, sem barba e fundo gradiente entre roxo e azul."
    );
    
  }
}