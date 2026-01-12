document.getElementById("cart-button").addEventListener("click", function(){
    document.getElementById("cart").classList.toggle("hidden")
})

//funksjon for produktopplistning:
function fetchProducts(){
    let productHTML = ""
    products.map(p => productHTML += `<article class="product-card">
                <img src="website_images/PROD_${p.imagefile}" alt="${p.title}" />
                <a href="#">${p.category}</a>
                <h3>${p.title}</h3>
                <p>kr. ${p.price},-</p>
                <button onClick="addToCart(${p.prodid})">Legg til handlevogn</button>
            </article>`)
            document.getElementById("product-list").innerHTML = productHTML
}
fetchProducts()

//Legg til i handlevogn
function addToCart(prodid){
    console.log("legg til produkt med id:" + prodid)
    cart.push(prodid)
    console.log(cart)
    document.getElementById("cart-quantity").innerHTML = cart.length
}