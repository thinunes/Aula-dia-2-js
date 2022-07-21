const products = require("./products");

products.push({name:'óculos', price: 200, quantity: 56, colors: ['blue', 'green', 'black']})


let produtosComEstoque = products.filter((qnt)=>{
    return qnt.quantity > 0
})
console.log(produtosComEstoque)


const totalDoStoque = products.reduce((i , produto) => {
    i += produto.quantity
    return i
  }, 0)
  console.log(totalDoStoque);



  let valorMaiorQue = products.filter((vlr)=>{
    return vlr.price >= 100
 })
console.log(valorMaiorQue)


function acharProdutoPorLetra (products, letra) {
    return products.filter((product) => product.name.includes(letra))
  }
  console.log(acharProdutoPorLetra(products, 'o'));
