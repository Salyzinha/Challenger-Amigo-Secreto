# Sorteio de Amigo Secreto

Este projeto faz parte de um **Desafio (Challenge)** proposto pelo curso da Oracle em parceria com a Alura. O objetivo do desafio é aplicar os conhecimentos adquiridos durante o curso para criar uma aplicação prática e funcional. É um projeto simples e interativo para realizar sorteios de amigo secreto diretamente no navegador. Ele permite adicionar amigos a uma lista, exibir os participantes e sortear um deles de forma aleatória.

## Sobre o Desafio
Este projeto foi desenvolvido como parte do programa de aprendizado promovido pela Oracle e Alura, que incentiva os alunos a aplicarem conceitos fundamentais de **JavaScript** em um projeto real. 

O foco do desafio é estimular o aprendizado prático através da criação de um site que permita organizar sorteios de amigo secreto de maneira simples e eficiente.

## 🛠 Funcionalidades

- **Adicionar amigos**: Insira os nomes dos participantes para criar a lista.
- **Exibir lista de amigos**: Atualize e visualize os amigos adicionados em tempo real.
- **Sortear**: Escolha aleatoriamente um amigo da lista para ser o "amigo secreto".

## Detalhes do Código

### JavaScript

1. **Array para armazenar os amigos**:
   - Utiliza um array chamado `amigos` para salvar os nomes dos participantes.

2. **Adicionar amigo**:
   - A função `adicionarAmigo()` adiciona o nome digitado ao array após validar que o campo não está vazio. A lista é atualizada dinamicamente com a função `atualizarLista()`.

3. **Atualizar a lista**:
   - A função `atualizarLista()` exibe os amigos em uma lista HTML utilizando o método `map()`.

4. **Sortear amigo**:
   - A função `sortearAmigo()` seleciona um amigo aleatório da lista com `Math.random()` e `Math.floor()` e exibe o resultado.

### Regras
- Pelo menos **dois amigos** devem ser adicionados antes de realizar o sorteio.
- O campo de entrada deve ser preenchido corretamente para adicionar um novo amigo.

## Como utilizar

1. Certifique-se de incluir os arquivos `index.html` (ou equivalente), `style.css` (se aplicável) e `app.js` no mesmo diretório.
2. Abra o arquivo HTML no navegador.
3. Adicione nomes, visualize a lista e sorteie o amigo secreto.

## Exemplo de Fluxo
- Insira os nomes no campo de entrada e clique em **Adicionar**.
- A lista será exibida abaixo.
- Clique em **Sortear Amigo** para ver o amigo secreto sorteado.

## 📌 Observações
Este projeto é funcional apenas no navegador e não requer configuração adicional. Ele é ideal para organizar sorteios de forma descontraída.

