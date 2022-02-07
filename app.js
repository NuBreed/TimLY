const cartBtn = document.querySelector('.fa-cart-plus')
const cart = document.querySelector('.cart')

cartBtn.addEventListener('click', () => {
    cart.classList.toggle('show')
})

const addToCarts = document.querySelectorAll('.addtocart')
const cartBox = []
const kolo = {}

const cartDetails = document.querySelector('.cart-details')

addToCarts.forEach((addToCart) => {
    addToCart.addEventListener('click', function() {
        cart.classList.add('show')
        kolo.price = addToCart.parentElement.children[2].textContent.slice(0)
        kolo.productName = addToCart.parentElement.children[1].textContent
        kolo.img = addToCart.parentElement.children[0]['src']
        console.log(kolo)
        cartDetails.innerHTML = `
                        <img src="${kolo.img}" alt="" class="cart-img">
                        
                        <span class="item-price">${kolo.price}</span>
                       
                       
                        <i class="fas fa-trash-alt"></i>`
    })
    cartBox.push(cartDetails)
})

// const products = document.querySelectorAll('.product-card')
// const price = products.forEach((product) => {
//     product.children[2].textContent
// })
// const productName = products.forEach((product) => {
//     console.log(product.children[1].textContent)
// })
// document.addEventListener('click', function(e) {
//     if (e.target.classList.contains('addtocart')) {
//         const name = e.target.parentElement.children[1].textContent.slice(0)
//         const price = e.target.parentElement.children[2].textContent.slice(0)
//         console.log(name, price)
//     }
// })