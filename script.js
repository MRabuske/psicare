const hoje = new Date();
const dataFormatada = hoje.toLocaleDateString('pt-BR');
document.getElementById('data-hoje').textContent = `Data: ${dataFormatada}`;

let humorSelecionado = "";
const emojis = document.querySelectorAll(".humor-option");
const descricaoInput = document.getElementById("descricao");

const editar = localStorage.getItem("registroEdicao");
if (editar === "true") {
  const dados = JSON.parse(localStorage.getItem("registroPsiCare"));
  if (dados) {
    descricaoInput.value = dados.descricao;
    emojis.forEach(e => {
      if (e.textContent === dados.humor) {
        e.classList.add("selected");
        humorSelecionado = dados.humor;
      }
    });
  }
  localStorage.removeItem("registroEdicao");
}

emojis.forEach(emoji => {
  emoji.addEventListener("click", () => {
    emojis.forEach(e => e.classList.remove("selected"));
    emoji.classList.add("selected");
    humorSelecionado = emoji.textContent;
  });
});

function limpar() {
  descricaoInput.value = "";
  emojis.forEach(e => e.classList.remove("selected"));
  humorSelecionado = "";
}
//atualização da função salvar

async function salvar() {
  const descricao = descricaoInput.value.trim();
  if (!humorSelecionado || !descricao) {
    alert("Selecione um humor e escreva uma descrição.");
    return;
  }

  const registro = {
    data: dataFormatada,
    humor: humorSelecionado,
    descricao: descricao
  };

  try {
    const resposta = await fetch("http://localhost:3000/emocao", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(registro)
    });

    if (resposta.ok) {
      alert("Registro salvo com sucesso!");
      window.location.href = "./historico.html"; // ou o que for adequado
    } else {
      const erro = await resposta.json();
      alert("Erro ao salvar: " + erro.erro);
    }
  } catch (e) {
    alert("Erro de conexão com o servidor.");
    console.error(e);
  }
}
