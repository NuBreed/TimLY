import display from './display.js'
const watches = JSON.parse(localStorage.getItem('watches'))

const cartBtn = document.querySelector('.fa-cart-plus')
const cart = document.querySelector('.cart')

cartBtn.addEventListener('click', () => {
    cart.classList.toggle('show')
})

const init = () => {
    display(watches)
    cardTotal()
}

window.addEventListener('DOMContentLoaded', init())

const addToCarts = document.querySelectorAll('.addtocart')
console.log(addToCarts)
addToCarts.forEach((addToCart) => {
    addToCart.addEventListener('click', function() {
        cart.classList.add('show')
        console.log(addToCart.parentElement.dataset.id)
    })
})

// filtering

const filterInput = document.querySelector('.input')
filterInput.addEventListener('keyup', function() {
    let value = filterInput.value
    const products = document.querySelectorAll('.product-card')
        // products.forEach((product) => {
        //     if (value) {
        //         let textValue = product.children[1].textContent
        //         console.log(!textValue.includes(value))
        //         if (!textValue.includes(value)) {
        //             product.style.display = 'none'
        //         }
        //     }
        // })
    for (let i = 0; i < products.length; i++) {
        if (!products[i].children[1].textContent.toLowerCase().includes(value)) {
            products[i].style.display = 'none'
        }
    }
})
addToCarts.forEach((addToCart) => {
    addToCart.addEventListener('click', function(e) {
        cart.classList.add('show')
        const price = e.target.previousSibling.previousSibling.textContent
        const itemPrice = document.querySelector('.item-price')
        const parent = document.querySelector('.product-card')
        console.log(parent.children[1]['src'])
        const img = document.querySelector('.cart-img')
        console.log(img)
        img.src = this.parent.children[1]['src']
        itemPrice.textContent = price
    })
})
const deleteButtons = document.querySelectorAll('.fa-trash-alt')
console.log(deleteButtons)
deleteButtons.forEach((deleteButton) => {
    deleteButton.addEventListener('click', function(e) {
        let btnTarget = e.target
        btnTarget.parentElement.remove()
        cardTotal()
    })
})

function cardTotal() {
    let cartItems = document.querySelectorAll('.cart-details')
    console.log(cartItems)
    let total = 0
    cartItems.forEach((item) => {
        const price = parseInt(item.querySelector('.item-price').textContent)
        total = total + price
    })
    const cartTotal = document.querySelector('.price-total')
    console.log(cartTotal)
    cartTotal.textContent = `$${total}`
    console.log(total)
}