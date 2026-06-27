const mongoose = require("mongoose");
const Product = require("./models/product");

mongoose.connect("YOUR_MONGODB_CONNECTION_STRING");

const products = [
    {
        name: "Wireless Headphones",
        price: 1999,
        image: "images/headphones.jpg",
        rating: 4.5,
        description: "High quality wireless headphones",
        category: "Electronics"
    },

    {
        name: "Smart Watch",
        price: 2999,
        image: "images/watch.jpg",
        rating: 4.2,
        description: "Stylish smart watch",
        category: "Electronics"
    },

    {
        name: "Running Shoes",
        price: 2499,
        image: "images/shoes.jpg",
        rating: 4.4,
        description: "Comfortable sports shoes",
        category: "Fashion"
    },

    {
        name: "Laptop Bag",
        price: 999,
        image: "images/bag.jpg",
        rating: 4.1,
        description: "Waterproof laptop bag",
        category: "Fashion"
    }
];

async function seedProducts() {
    await Product.deleteMany({});
    await Product.insertMany(products);

    console.log("Products Added");
    mongoose.connection.close();
}

seedProducts();