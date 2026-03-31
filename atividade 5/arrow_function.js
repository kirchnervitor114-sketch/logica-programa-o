// .map(): Cria uma lista com os dados alterados
const metros = [1, 5, 10];
const centimetros= metros.map(m => m + 100); 
centimetros.forEach(c => console.log(`${c}cm`)); 

//.filter():Cria uma lista com os dados filtrados
const notas = [8, 4, 9, 5]; 
const notas_baixas = notas.filter(n => n < 6); 
notas_baixas.forEach(n => console.log(n));

// .find(): Retorna apenas o primeiro item que passa na condição
const alunos = ["joão" , "maria" , "jose"];
    const busca = alunos.find(nome => nome === "maria");
    console.log(busca);

// .every(): Retorna se todos passam no predicado
const entregas = [true, true, false];
const todosEntregaram = entregas.every(e => e === true);
console.log(todosEntregaram); 

// .toUpperCase .toLowerCase():
//         coloca as letras em maiusculo/minusculas
const nomes = ["ana" , "Bia"];
const maiusculas = nomes.map(n => n. toUpperCase());
nomes.forEach(n => console.log(n.toUpperCase()));

