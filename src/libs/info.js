async function verificarlabels() {
    // Inspeccionar URL para obtener labels
    const urlauth = new URLSearchParams(window.location.search);
    const labels = urlauth.get('labels');
    if (!labels) {
        alert('Seleccione un libro');
        window.location = 'store.html';
        return;
    }

    // Fetch
    try {
        const response = await fetch("/static/libros.json");
        if (!response.ok) {
            throw new Error('Error al cargar el archivo JSON: ' + response.statusText);
        }

        const data = await response.json();

        const articulos = [
            ...data.Biografia,
            ...data.Historia,
            ...data.Ciencia,
            ...data.InfantilYJuvenil,
            ...data.Autoayuda,
            ...data.CienciaFiccion,
            ...data.Misterio,
            ...data.Romantica,
            ...data.LibrosDeTexto,
            ...data.Gastronomia,
            ...data.Viajes
        ]; 

        // Contrastar info con labels
        const labelsArray = labels.split(' '); // Asumiendo que los labels están separados por comas en la URL
        const articuloEncontrado = articulos.find(articulo => 
            labelsArray.every(title => articulo.title.includes(title))
        );

        console.log('Artículos:', articulos);
        console.log('Artículo encontrado:', articuloEncontrado);
        if (articuloEncontrado) {
            //------------------------------------------------------------------------------arctualizar
               document.getElementById("imagen").src = articuloEncontrado.image;
               document.getElementById("title").textContent = articuloEncontrado.title;
               document.getElementById("publish_date").textContent = articuloEncontrado.publish_date;
               document.getElementById("author").textContent = articuloEncontrado.author;
               document.getElementById("resume").textContent = articuloEncontrado.resume;
           } else {
               alert('No se encontró ningún artículo con la etiqueta especificada.');
           }
           
    } catch (error) {
        console.error('Error al cargar el archivo JSON:', error);
        alert('Hubo un problema al cargar los datos. Por favor, inténtalo de nuevo más tarde.');
    }
}
//cerrar articulo 
document.getElementById('cerrar').addEventListener('click', function() {
    window.location.href = 'store.html?auth=Ok'; 
});
verificarlabels();







