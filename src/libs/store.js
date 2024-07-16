import { miComponenteWeb } from './component.js';
window.customElements.define('custom-tag', miComponenteWeb);


document.addEventListener("DOMContentLoaded", function () {
    const categoryLinks = document.querySelectorAll("#menu a");
    const subcategoriaElement = document.getElementById("subcategoria");

    // subctegoria 
    const initialCategoryLink = categoryLinks[0];
    const initialCategoryValue = initialCategoryLink.getAttribute("data-value");
    subcategoriaElement.textContent = initialCategoryValue;

    categoryLinks.forEach(link => {
        link.addEventListener("click", function (event) {
            event.preventDefault();
            const categoryValue = event.target.getAttribute("data-value");
            subcategoriaElement.textContent = categoryValue;
        });
    });

    const contenedorlib = document.getElementById('containerlib');
    const lista = document.getElementById('menu');

    cargarArticulos();

    function cargarArticulos() {
        fetch('../../static/libros.json')
            .then(response => response.json())
            .then(data => {
                renderizarArticulos(data.Biografia);
                agregarEventosFiltros(data);   
            })
            .catch(error => console.error('Error al cargar los artículos:', error));
    }

    function renderizarArticulos(articulos) {
        contenedorlib.innerHTML = '';
        articulos.forEach(articulo => {
            const articleElement = document.createElement('custom-tag');
            articleElement.setAttribute('image-src', articulo.image);
            articleElement.setAttribute('labels', articulo.title);
            contenedorlib.appendChild(articleElement);
        });
    }

    function agregarEventosFiltros(data) {
        lista.addEventListener('click', function (event) {
            event.preventDefault();
            if (event.target.tagName === 'A') {
                const categoria = event.target.dataset.category;
                const articulosFiltrados = data[categoria];
                renderizarArticulos(articulosFiltrados);
            }
        });
    }

    updateCartCount();
});

function updateCartCount() {
    const cart = JSON.parse(localStorage.getItem('cart')) || [];
    document.getElementById('cart-count').innerText = cart.length;
}

document.getElementById('cestara').addEventListener('click', function() {
    window.location.href = 'cesta.html'; 
});

