///Array para os nomes
let amigos = [];

function adicionarAmigo() {
   let entradaNome = document.querySelector('#amigo');
   let nome = entradaNome.value.trim();
   
   //Verificar se o campo está vazio
   if (nome === '') {
    alert('Por favor, preencha o campo com o nome de seu amigo!');
    return;
   }

   //Adicionar o nome do amigo no array
   amigos.push(nome);

   //Limpar o campo
   entradaNome.value = '';

   atualizarLista();
}

function atualizarLista() {
   let lista = document.querySelector('#listaAmigos');
   if (lista) {
      lista.innerHTML = amigos.map(amigo => `<li>${amigo}</li>`).join('');
   }
   
   }

   function sortearAmigo() {
      ///Verificar se há pelo menos um amigo na lista
      if (amigos.length === 0) {
         alert('Adicione pelo menos dois amigo antes de sortear!');
         return;
      }

      ///Sortear um amigo aleatório
      let amigoSorteado = amigos[Math.floor(Math.random() * amigos.length)];
      let resultado = document.getElementById('resultado');
      resultado.innerHTML = `O amigo sorteado é: ${amigoSorteado}`;
   }