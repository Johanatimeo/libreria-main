// Asegúrate de que la declaración de importación esté al nivel superior
import { miComponenteWeb } from './component.js';

// Define el elemento personalizado
window.customElements.define('custom-tag', miComponenteWeb);
 // subcategoria

function updateHeader(event) {
    const subcategory = event.target.getAttribute('data-value');
    document.getElementById('subcategoria').innerText = subcategory;
}
document.querySelectorAll('#lista li').forEach(item => {
    item.addEventListener('click', updateHeader);
});

// Comprobación de autenticación
const urlauth = new URLSearchParams(window.location.search);
const authen = urlauth.get('auth');
if (!authen) {
    alert('Registrate');
    window.location = 'login.html';
}

// Evento para cuando el DOM esté completamente cargado
document.addEventListener('DOMContentLoaded', function () {
    const contenedorlib = document.getElementById('containerlib');
    const lista = document.getElementById('menu');

    // Al iniciar, carga los artículos de 'Biografia'
    cargarArticulos();

    function cargarArticulos() {
        fetch('/static/libros.json')
            .then(response => response.json())
            .then(data => {
                renderizarArticulos(data.Biografia);
                agregarEventosFiltros(data);
            })    
            .catch(error => console.error('Error al cargar los artículos:', error)); // Añade manejo de errores
    }

  function renderizarArticulos(articulos) {
    contenedorlib.innerHTML = ''; // Refresca el contenedor
    // Por cada artículo, crea un 'custom-tag'
    articulos.forEach(articulo => {
        const articleElement = document.createElement('custom-tag');
        articleElement.setAttribute('image-src', articulo.image);
        articleElement.setAttribute('labels', articulo.title);

        contenedorlib.appendChild(articleElement);
    });
}
    // Filtra los artículos por categoría
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
});
updateHeader()
