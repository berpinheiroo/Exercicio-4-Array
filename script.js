/* Crie um algoritmo que pede um número inteiro positivo para o usuário. Em
seguida, popule uma array com os números de Fibonacci, na hora de somar com
os termos anteriores, some com elementos anteriores do array. Faça com que o
array tenha no máximo 10 elementos, para iniciar a sequência use o número que
o usuário inseriu -1.
Ex.: inseriu o número 8,
a sequência deve começar da seguinte maneira 7 8 15 23  */

var fi = []
var num = parseInt(prompt("Insira um numero"))

fi[0] = num - 1
fi[1] = num

for (var fibo = 2; fibo < 10; fibo++) {
  fi[fibo] = fi[fibo - 1] + fi[fibo - 2]
}
console.log(fi)
