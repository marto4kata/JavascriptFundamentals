function solve(product, quantity) {
    const productPrice = {
        coffee: 1.5,
        water : 1,
        coke : 1.4,
        snacks : 2
    }

    return (productPrice[product] * quantity).toFixed(2)
}

console.log(solve("coffee",2))
