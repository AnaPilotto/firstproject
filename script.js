function toggleMode() {
  const html = document.documentElement
  html.classList.toggle("light")

  const img = document.querySelector("#profile img")

  if (html.classList.contains("light")) {
    img.setAttribute("src", "./assets/avatar-light.png")
  } else {
    img.setAttribute("src", "./assets/avatar.png")
  }

  if (html.classList.contains("light")) {
    img.setAttribute(
      "alt",
      "Uma foto do rosto de Ana Pilotto, com cabelo roxo, com uma maquiagem leve e sorrindo."
    )
  } else {
    img.setAttribute(
      "alt",
      "Uma foto do rosto de Ana Pilotto, com cabelo rosa, com uma maquiagem leve e sorrindo."
    )
  }
}
