// Cesta con localStorage array vacio
const cart = JSON.parse(localStorage.getItem('cart')) || [];
const cartDetails = document.getElementById('cart-details');

//appendchild de cesta
function renderCart() {
    cartDetails.innerHTML = '';
    // bucle por cada carta
    cart.forEach((item, index) => {
        const li = document.createElement('li');
        li.innerText = `${item.name} - Cantidad: ${item.quantity}`;

        const incrementButton = document.createElement('button');
        incrementButton.innerText = '+';
        incrementButton.addEventListener('click', () => {
            incrementItem(index);
        });

        const decrementButton = document.createElement('button');
        decrementButton.innerText = '-';
        decrementButton.addEventListener('click', () => {
            decrementItem(index);
        });

        const deleteButton = document.createElement('button');
        deleteButton.innerText = 'Eliminar';
        deleteButton.addEventListener('click', () => {
            deleteItem(index);
        });

        li.appendChild(incrementButton);
        li.appendChild(decrementButton);
        li.appendChild(deleteButton);
        cartDetails.appendChild(li);
    });

    // Cesta actualizado en localStorage
    localStorage.setItem('cart', JSON.stringify(cart));
}

// SUMAR
function incrementItem(index) {
    cart[index].quantity++;
    renderCart();
}

// RESTAR
function decrementItem(index) {
    if (cart[index].quantity > 1) {
        cart[index].quantity--;
    } else {
        cart.splice(index, 1); // Eliminar el elemento si la cantidad es 1
    }
    renderCart();
}

// ELIMINAR
function deleteItem(index) {
    cart.splice(index, 1);
    renderCart();
}

//RENDERIZA TODO EL CARRO 
renderCart();

// RESETEAR 
const resetButton = document.getElementById('resetButton');
resetButton.addEventListener('click', () => {
    cart.length = 0; 
    renderCart();
});


    