// Selecionando elementos relevantes
const cookieBox = document.querySelector(".wrapper");
const buttons = document.querySelectorAll(".button");

// Função para executar as ações relacionadas a cookies
const executeCodes = () => {
  // Se o cookie contiver "codinglab", não será executado nada abaixo
  if (document.cookie.includes("codinglab")) return;

  // Adicionando a classe "show" para exibir a caixa de cookies
  cookieBox.classList.add("show");

  // Adicionando evento de clique para os botões
  buttons.forEach((button) => {
    button.addEventListener("click", () => {
      // Removendo a classe "show" para esconder a caixa de cookies
      cookieBox.classList.remove("show");

      // Se o botão tiver o id "acceptBtn"
      if (button.id == "acceptBtn") {
        // Definindo o cookie para expirar em 1 mês (em segundos)
        document.cookie = "cookieBy=codinglab; max-age=" + 60 * 60 * 24 * 30;
      }
    });
  });
};

// A função executeCodes será chamada quando a página carregar
window.addEventListener("load", executeCodes);
