const watches = JSON.parse(localStorage.getItem('watches'))
const display = (data) => {
    const cartDetails = document.querySelector('.product-cards')
    const newData = watches
        .map((info) => {
            const { img, productName, id, price } = info
            return ` <div class="product-card">
                    <img src="${img}" alt="product-img" class="img product-img">
                    <a href= 'product.html'>

                    <h4 class="product-name">${productName}</h4>
                    </a>
                   
                    <div class="flex" data-id ="${id}"> 
                    <h6>$${price}</h6>                    
                     <i class="fas fa-cart-plus addtocart"></i>
                    </div>        
                </div>`
        })
        .join('')
    cartDetails.innerHTML = newData
}
export default display