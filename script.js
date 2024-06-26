// JavaScript for e-commerce functionality

// Open and close cart modal
var cartModal = document.getElementById('cartModal');
var cartBtn = document.getElementById('cart');
var closeModal = document.getElementsByClassName('close')[0];

cartBtn.onclick = function() {
    cartModal.style.display = "block";
}

closeModal.onclick = function() {
    cartModal.style.display = "none";
}

window.onclick = function(event) {
    if (event.target == cartModal) {
        cartModal.style.display = "none";
    }
}

// Add products to cart
var addToCartButtons = document.getElementsByClassName('add-to-cart');
var cartItemsContainer = document.getElementById('cartItems');
var cartTotalAmount = document.getElementById('cartTotalAmount');
var checkoutBtn = document.getElementById('checkoutBtn');
var cart = [];

for (var i = 0; i < addToCartButtons.length; i++) {
    addToCartButtons[i].addEventListener('click', function(event) {
        var button = event.target;
        var product = button.parentElement;
        var productTitle = product.querySelector('h3').innerText;
        var productPrice = parseFloat(product.querySelector('p').innerText.replace('$', ''));

        addToCart(productTitle, productPrice);
        updateCartTotal();
    });
}

function addToCart(title, price) {
    var itemExists = false;
    for (var i = 0; i < cart.length; i++) {
        if (cart[i].title === title) {
            cart[i].quantity++;
            itemExists = true;
            break;
        }
    }
    if (!itemExists) {
        cart.push({ title: title, price: price, quantity: 1 });
    }
    displayCartItems();
}

function displayCartItems() {
    cartItemsContainer.innerHTML = '';
    for (var i = 0; i < cart.length; i++) {
        var item = cart[i];
        var itemElement = document.createElement('div');
        itemElement.innerHTML = `${item.title} - $${item.price} x ${item.quantity}`;
        cartItemsContainer.appendChild(itemElement);
    }
}

function updateCartTotal() {
    var total = 0;
    for (var i = 0; i < cart.length; i++) {
        total += cart[i].price * cart[i].quantity;
    }
    cartTotalAmount.innerText = total.toFixed(2);
}

// Checkout functionality (dummy)
checkoutBtn.addEventListener('click', function() {
    alert('Checkout functionality is not implemented in this example. This is a frontend-only demo.');
});
``
