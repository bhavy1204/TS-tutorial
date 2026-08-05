import * as readline from "readline/promises";
import { stdin as input, stdout as output } from "process";
const rl = readline.createInterface({ input, output });
var Category;
(function (Category) {
    Category["clothing"] = "clothing";
    Category["electric"] = "electric";
    Category["accessories"] = "accessories";
})(Category || (Category = {}));
let products = [];
let ids = 100;
function addProduct(title, description, price, stock, images, category) {
    const product = {
        id: String(ids),
        sellerId: String(ids++),
        title,
        description,
        category,
        price,
        stock,
        images,
    };
    products.push(product);
    return "product added";
}
function listProducts() {
    console.log(products);
}
function addDiscount(id, price) {
    const product = products.find((product) => product.id === id);
    if (!product) {
        throw new Error("Product not found");
    }
    if (product.price <= price || price <= 0) {
        console.log("pagal samja hai kya?");
        return -1;
    }
    return product.price - price;
}
function deleteProduct(id) {
    const initialLength = products.length;
    products = products.filter((p) => p.id !== id);
    if (products.length === initialLength) {
        console.log("Product not found");
    }
    else {
        console.log("Product deleted");
    }
}
async function main() {
    let choice = 0;
    do {
        console.log("=======================================");
        console.log("1. add product ");
        console.log("2. list products");
        console.log("3. add discount");
        console.log("4. delete product");
        console.log("5. exit");
        choice = Number(await rl.question("choice >> "));
        if (choice === 1) {
            let title = await rl.question("title : ");
            let description = await rl.question("description : ");
            let price = Number(await rl.question("price : "));
            let stock = Number(await rl.question("stock : "));
            let images = [];
            while (true) {
                let image = await rl.question("Image URL (leave empty to finish): ");
                if (image.trim() === "")
                    break;
                images.push(image);
            }
            console.log("Categories:");
            Object.values(Category).forEach((cat, index) => {
                console.log(`${index + 1}. ${cat}`);
            });
            let categoryChoice = Number(await rl.question("Choose category: "));
            let category = Object.values(Category)[categoryChoice - 1];
            if (category === undefined) {
                console.log("Invalid category");
                continue;
            }
            addProduct(title, description, price, stock, images, category);
        }
        if (choice === 2) {
            console.log("ALL PRODUCTS");
            listProducts();
        }
        if (choice === 3) {
            let id = await rl.question("product id : ");
            let price = Number(await rl.question("amount of discount : "));
            addDiscount(id, price);
        }
        if (choice === 4) {
            let id = await rl.question("id : ");
            deleteProduct(id);
        }
    } while (choice !== 5);
    rl.close();
}
main();
//# sourceMappingURL=product.js.map