document.getElementById("cart-button").addEventListener("click", ()=> {
    handleVogn("cart")
})
document.getElementById("cart-btn2").addEventListener("click", ()=> {
    handleVogn("cart")
})
//ekstern funskjon til handlevogn
function handleVogn(id){
    document.getElementById(id).classList.toggle("hidden")
}

//funksjon for produktopplistning:
function fetchProducts(){
    let productHTML = ""
    products.map(p => productHTML += `<article class="product-card">
                <img src="website_images/PROD_${p.imagefile}" alt="${p.title}" />
                <a href="#">${p.category}</a>
                <h3>${p.title}</h3>
                <p>kr. ${p.price},-</p>
                <p>Storage: ${p.storage}</p>
                <button onClick="addToCart(${p.prodid})">Legg til handlevogn</button>
            </article>`)
            document.getElementById("product-list").innerHTML = productHTML
}
//Slik at chart viser riktig opplysninger
fetchProducts()
//Legg til i handlevogn
function addToCart(prodid){
    //når p.storage er null kan ikke blitt adda
    let print = "<p>Din Handlevogn</p>"
    let total = 0
    products.forEach((p)=>{
        if(p.storage >= 1){
            if(p.prodid == prodid){
                //hvis storage har 1 eller flere produkter kan den bli lagt inn i cart
                console.log("legg til produkt med id:" + prodid)
                cart.push(prodid)
                document.getElementById("cart-quantity").innerHTML = cart.length
                p.storage--
            }
        }
        if(cart.includes(p.prodid)){
                let each = cart.filter((id) => id === p.prodid).length
                print += `<tr><td>${p.title}</td><td>${p.price}, -</td><td>x${each}</td><td class="delete"><button onclick=deleCart(${p.prodid})>X</button></td>`
                total += Number(p.price) * each 
            }
        if(p.storage <= 0){
            p.storage = 0
        }
    })
     document.getElementById("cart").innerHTML = `<table>${print}<tr><td>Totalt: kr ${total},-</td></tr></table>`
     fetchProducts()
    }
//fjerne ifra cart
function deleCart(prodid){
    let index = cart.indexOf(prodid)
    console.log("fjern produkt med id" + index)
    cart.splice(index, 1)
    addToCart(prodid)
    //oppdatere statues til cart antall
    document.getElementById("cart-quantity").innerHTML = cart.length
}
