//O principal objetivo deste desafio é fortalecer suas habilidades em lógica de programação. Aqui você deverá desenvolver a lógica para resolver o problema.
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
}