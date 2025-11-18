const user = {
    name: "Bhavy",
    email: "Bhavy@org.com",
    isActive: true,
    contact: 99283
}

function createUser({ name, isPaid }: { name: string, isPaid: boolean }) {

}

let newUser = {
    name: "Ashihs",
    isPaid: false,
    email: "H@ggag"
}

// createUser({ name: "Ashish", isPaid: true })
// createUser({ name: "Ashish", isPaid: true,email:"hello" })
createUser(newUser)

function returnObject({ name, isPaid, price }: { name: string, isPaid: boolean, price: number }): { name: string, price: number, isPaid: boolean } {
    return { name: "a", price: 233, isPaid: true }
}

type product = {
    name: string,
    price: number,
    isAvalable: boolean
}

function createProduct(product: product): product {
    // product.name = "demo",
    // product.price = 200,
    // product.isAvalable = true

    return product;
}

createProduct({ name: "demo2", price: 300, isAvalable: true })

export { }