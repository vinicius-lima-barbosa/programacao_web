const button = document.querySelector(".button");
const result = document.querySelector(".resultados");
const input = document.querySelector(".input-area");

const searchCEP = async (cep) => {
  if (cep.length !== 8 || isNaN(cep)) {
    alert("Requisiçao invalida");
    return;
  }

  try {
    const response = await fetch(`https://viacep.com.br/ws/${cep}/json/`);
    if (!response.ok) throw new Error("erro no fetch");
    const data = await response.json();

    if (data.erro) {
      alert("CEP nao encontrado");
      return;
    }

    result.innerHTML = `
                <h3>Resultados</h3>
                <p><b>Rua</b>: <span class="content">${data.logradouro}</span></p>
                <p><b>Bairro</b>: <span class="content">${data.bairro}</span></p>
                <p><b>Cidade</b>: <span class="content">${data.localidade}</span></p>
                <p><b>Estado</b>: <span class="content">${data.estado}</span></p>
                <p><b>UF</b>: <span class="content">${data.uf}</span></p>
            `;
  } catch (e) {
    alert(`Erro: ${e}`);
  }
};

button.addEventListener("click", () => {
  const cep = input.value;
  searchCEP(cep);
});

input.addEventListener("keypress", (e) => {
  if (e.code === "Enter") {
    const cep = input.value;
    searchCEP(cep);
  }
});
