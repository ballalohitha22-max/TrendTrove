const API_URL = "https://render.com/docs/web-services#port-binding";
// OPEN CATEGORY
h
function openCategory(category) {
    localStorage.setItem("selectedCategory", category);
    window.location.href = "category.html";
}

// PRODUCTS
const products = [

/* ================= Electronics ================= */

{
id:1,
category:"Electronics",
name:"Sony Smart TV",
price:54999,
rating:4.8,
image:"https://images.unsplash.com/photo-1593784991095-a205069470b6?w=400",
description:"55-inch 4K Ultra HD Smart TV"
},

{
id:2,
category:"Electronics",
name:"Canon DSLR Camera",
price:45999,
rating:4.7,
image:"https://images.unsplash.com/photo-1516035069371-29a1b244cc32?w=400",
description:"24MP Professional Camera"
},

{
id:3,
category:"Electronics",
name:"Bluetooth Speaker",
price:2999,
rating:4.5,
image:"https://images.unsplash.com/photo-1589003077984-894e133dabab?w=400",
description:"Portable Wireless Speaker"
},

{
id:4,
category:"Electronics",
name:"Smart Watch",
price:4999,
rating:4.6,
image:"https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=400",
description:"Fitness Tracking Smart Watch"
},

/* ================= Smartphones ================= */

{
id:5,
category:"Smartphones",
name:"iPhone 15",
price:69999,
rating:4.9,
image:"https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?w=400",
description:"Apple iPhone 15"
},

{
id:6,
category:"Smartphones",
name:"Samsung Galaxy S24",
price:64999,
rating:4.8,
image:"https://images.unsplash.com/photo-1598327105666-5b89351aff97?w=400",
description:"Samsung Flagship Phone"
},

{
id:7,
category:"Smartphones",
name:"OnePlus 12",
price:56999,
rating:4.7,
image:"https://images.unsplash.com/photo-1580910051074-3eb694886505?w=400",
description:"Fast Performance Smartphone"
},

{
id:8,
category:"Smartphones",
name:"Google Pixel 9",
price:59999,
rating:4.8,
image:"https://images.unsplash.com/photo-1565849904461-04a58ad377e0?w=400",
description:"Pure Android Experience"
},

/* ================= Computers ================= */

{
id:9,
category:"Computers",
name:"HP Pavilion",
price:58999,
rating:4.6,
image:"https://images.unsplash.com/photo-1496181133206-80ce9b88a853?w=400",
description:"Intel Core i5 Laptop"
},

{
id:10,
category:"Computers",
name:"Dell Inspiron",
price:62999,
rating:4.7,
image:"https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=400",
description:"Intel Core i7 Laptop"
},

{
id:11,
category:"Computers",
name:"HP Laptop",
price:109999,
rating:4.9,
image: "https://images.unsplash.com/photo-1496181133206-80ce9b88a853?w=400",
description:"High Performance Laptop"
},

{
id:12,
category:"Computers",
name:"Lenovo ThinkPad",
price:67999,
rating:4.7,
image:"https://images.unsplash.com/photo-1484788984921-03950022c9ef?w=400",
description:"Business Laptop"
},

/* ================= Gaming ================= */

{
id:13,
category:"Gaming",
name:"Gaming Mouse",
price:1999,
rating:4.5,
image:"https://images.unsplash.com/photo-1527814050087-3793815479db?w=400",
description:"RGB Gaming Mouse"
},

{
id:14,
category:"Gaming",
name:"Gaming Keyboard",
price:3999,
rating:4.7,
image:"https://images.unsplash.com/photo-1511467687858-23d96c32e4ae?w=400",
description:"Mechanical Keyboard"
},

{
id:15,
category:"Gaming",
name:"Gaming Headset",
price:2999,
rating:4.6,
image:"https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=400",
description:"Surround Sound Headset"
},

{
id:16,
category:"Gaming",
name:"PS5 Controller",
price:5499,
rating:4.8,
image:"https://images.unsplash.com/photo-1606144042614-b2417e99c4e3?w=400",
description:"Wireless Controller"
},

/* ================= Home Appliances ================= */

{
id:17,
category:"Home Appliances",
name:"Refrigerator",
price:6999,
rating:4.8,
image: "https://images.unsplash.com/photo-1584568694244-14fbdf83bd30?w=400",
description:"Double Door Refrigerator"
},

{
id:18,
category:"Home Appliances",
name:"Microwave Oven",
price:8499,
rating:4.6,
image:"https://images.unsplash.com/photo-1586208958839-06c17cacdf08?w=400",
description:"20L Microwave Oven"
},

{
id:19,
category:"Home Appliances",
name:"Washing Machine",
price:5499,
rating:4.5,
image: "https://images.unsplash.com/photo-1626806787461-102c1bfaaea1?w=400",
description:"Powerful Washing Machine"
},

{
id:20,
category:"Home Appliances",
name:"Coffee Maker",
price:3999,
rating:4.6,
image:"https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?w=400",
description:"Automatic Coffee Maker"
},

/* ================= Fitness ================= */

{
id:21,
category:"Fitness",
name:"Yoga Mat",
price:999,
rating:4.6,
image: "https://images.pexels.com/photos/4498606/pexels-photo-4498606.jpeg?auto=compress&cs=tinysrgb&w=400",
description:"Premium Yoga Mat"
},

{
id:22,
category:"Fitness",
name:"Dumbbells",
price:2499,
rating:4.7,
image:"https://images.unsplash.com/photo-1517836357463-d25dfeac3438?w=400",
description:"10kg Dumbbell Set"
},

{
id:23,
category:"Fitness",
name:"Skipping Rope",
price:32999,
rating:4.8,
image: "https://img.freepik.com/premium-vector/happy-kids-playing-skipping-rope_173125-147.jpg",
description:" Adjustable Skipping Rope"
},

{
id:24,
category:"Fitness",
name:"Protein Shaker",
price:499,
rating:4.5,
image: "https://images.unsplash.com/photo-1579722820308-d74e571900a9?w=400",
description:"BPA-Free Bottle"
},

/* ================= Accessories ================= */

{
id:25,
category:"Accessories",
name:"Leather Wallet",
price:999,
rating:4.5,
image:"https://images.unsplash.com/photo-1627123424574-724758594e93?w=400",
description:"Premium Leather Wallet"
},

{
id:26,
category:"Accessories",
name:"Sunglasses",
price:1499,
rating:4.6,
image:"https://images.unsplash.com/photo-1511499767150-a48a237f0083?w=400",
description:"UV Protection Sunglasses"
},

{
id:27,
category:"Accessories",
name:"Smart Watch",
price:2499,
rating:4.7,
image: "https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=400",
description:"Fitness Tracking Smart Watch"
},

{
id:28,
category:"Accessories",
name:"Wireless Buds",
price:1999,
rating:4.5,
image: "https://media.gettyimages.com/id/1364398522/photo/white-electronic-bluetooth-earphones-and-case-technical-isolated-on-white-background.jpg?s=612x612&w=gi&k=20&c=A3zQujumc5d0xlB9x-_3ffVbJjr_FDEy9rP2ZIb7xCs=",
description:"True Wireless Earbuds"
}

];
// SHOW PRODUCTS OF SELECTED CATEGORY

const selectedCategory = localStorage.getItem("selectedCategory");

const categoryProducts = document.getElementById("categoryProducts");

console.log("Selected Category:", selectedCategory);

if(categoryProducts){

    const filteredProducts = products.filter(
    product => product.category.trim() === selectedCategory.trim()
);

console.log("Selected:", selectedCategory);
console.log("Filtered:", filteredProducts);

    categoryProducts.innerHTML = "";

    filteredProducts.forEach(product => {

        categoryProducts.innerHTML += `

        <div class="product-card">

            <img src="${product.image}" alt="${product.name}">

            <div class="product-info">

                <h2>${product.name}</h2>

                <p>${product.description}</p>

                <p>⭐ ${product.rating}</p>

                <h3>₹${product.price}</h3>

                <button onclick="addToCart(${product.id})">
                    Add To Cart
                </button>

            </div>

        </div>

        `;
    });
}

const cartItems = document.getElementById("cartItems");

if(cartItems){

    const product =
    JSON.parse(localStorage.getItem("cartProduct"));

    if(product){

        cartItems.innerHTML = `

        <div class="product-card">

            <img src="${product.image}">

            <div class="product-info">

                <h2>${product.name}</h2>

                <p>${product.description}</p>

                <p>⭐ ${product.rating}</p>

                <h3>₹${product.price}</h3>

            </div>

        </div>

        `;
    }
}

// ADD TO CART

function addToCart(id) {

    const product = products.find(
        p => p.id === id
    );

    localStorage.setItem(
        "cartProduct",
        JSON.stringify(product)
    );

    window.location.href = "cart.html";
}