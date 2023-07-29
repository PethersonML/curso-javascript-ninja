/*
Crie uma variável qualquer, que receba um array com alguns valores aleatórios
- ao menos 5 - (fica por sua conta os valores do array).
*/
var arr = ["Petherson", 23, "Isabelly", 13, "14/02"];

/*
Crie uma função que receba um array como parâmetro, e retorne esse array.
*/
function myFunction(array) {
  return array;
}

/*
Imprima o segundo índice do array retornado pela função criada acima.
*/
console.log(myFunction(arr)[1]);

/*
Crie uma função que receba dois parâmetros: o primeiro, um array de valores; e o
segundo, um número. A função deve retornar o valor de um índice do array que foi passado
no primeiro parâmetro. O índice usado para retornar o valor, deve ser o número passado no
segundo parâmetro.
*/
function newFunction(array, number) {
  return array[number];
}

/*
Declare uma variável que recebe um array com 5 valores, de tipos diferentes.
*/
var newVar = ["String", 1234, true, null, undefined];

/*
Invoque a função criada acima, fazendo-a retornar todos os valores do último
array criado.
*/
for (i = 0; i < newVar.length; i++) {
  console.log(newFunction(newVar, i));
}

/*
Crie uma função chamada `book`, que recebe um parâmetro, que será o nome do
livro. Dentro dessa função, declare uma variável que recebe um objeto com as
seguintes características:
- esse objeto irá receber 3 propriedades, que serão nomes de livros;
- cada uma dessas propriedades será um novo objeto, que terá outras 3
propriedades:
    - `quantidadePaginas` - Number (quantidade de páginas)
    - `autor` - String
    - `editora` - String
- A função deve retornar o objeto referente ao livro passado por parâmetro.
- Se o parâmetro não for passado, a função deve retornar o objeto com todos
os livros.
*/
function book(name) {
  var listOfBooks = {
    "O Cortiço": {
      quantidadePaginas: 358,
      autor: "Aluísio Azevedo",
      editora: "B. L. Garnier",
    },
    "Dom Casmurro": {
      quantidadePaginas: 208,
      autor: "Machado de Assis",
      editora: "Livraria Garnier",
    },
    "Dom Quixote": {
      quantidadePaginas: 304,
      autor: "Miguel de Cervantes",
      editora: "Principis",
    },
  };

  if (name !== undefined) {
    return listOfBooks[name];
  }
  return listOfBooks;
}

/*
Usando a função criada acima, imprima o objeto com todos os livros.
*/
console.log(book());

/*
Ainda com a função acima, imprima a quantidade de páginas de um livro qualquer,
usando a frase:
"O livro [NOME_DO_LIVRO] tem [X] páginas!"
*/
console.log(
  "O livro Dom Casmurro tem " +
    book("Dom Casmurro").quantidadePaginas +
    " páginas!"
);

/*
Ainda com a função acima, imprima o nome do autor de um livro qualquer, usando
a frase:
"O autor do livro [NOME_DO_LIVRO] é [AUTOR]."
*/
console.log("O autor do livro O Cortiço é " + book("O Cortiço").autor + ".");

/*
Ainda com a função acima, imprima o nome da editora de um livro qualquer, usando
a frase:
"O livro [NOME_DO_LIVRO] foi publicado pela editora [NOME_DA_EDITORA]."
*/
console.log(
  "O livro Dom Quixote foi publicado pela editora " +
    book("Dom Quixote").editora +
    "."
);
