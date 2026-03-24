

console.log([...produtosUnicos]);
// ['Teclado', 'Mouse', 'Monitor', 'Mousepad']



QUESTAO 2: const mapaProdutos = new Map();

vendasRaw.forEach(item => {
    mapaProdutos.set(item.produto, item.preco);
});

console.log(mapaProdutos);
// Map(4) { 'Teclado' => 150, 'Mouse' => 80, 'Monitor' => 900, 'Mousepad' => 30 }  



QUESTAO 3 : let total = 0;

for (const item of vendasRaw) {
    total += item.preco;
}

console.log(total);
// 1160