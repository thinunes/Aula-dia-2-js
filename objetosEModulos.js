const products = require("./products");

for(let i =0; i<products.length; i++){
    products[i].id= i+1 
}

//console.log(products)

//products.forEach((nome)=> console.log(nome.name))



//console.log(products.find((product) => product.id === 3));

//console.log(products.filter((product) => product.colors.find((color) => color === 'black')));

console.log(products.filter((product) => product.colors.length === 0));