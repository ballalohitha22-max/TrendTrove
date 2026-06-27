const cartContainer =
document.getElementById("cartItems");

const product =
JSON.parse(
localStorage.getItem("cartProduct")
);

if(product){

cartContainer.innerHTML = `

<div class="product-card">

<img src="${product.image}">

<h2>${product.name}</h2>

<p>${product.description}</p>

<p>⭐ ${product.rating}</p>

<h3>₹${product.price}</h3>

<button onclick="buyNow()">
Buy Now
</button>

</div>

`;

}
function buyNow(){

window.location.href =
"checkout.html";

}