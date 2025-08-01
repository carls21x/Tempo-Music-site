
document.getElementById('notiBell').addEventListener('click', function() {
    var modal = new bootstrap.Modal(document.getElementById('notiModal'));
    modal.show();
});

// Filtrar tarjetas por título
function filtrarTarjetas() {
    const filtro = document.getElementById('searchBar').value.toLowerCase();
    // Selecciona todas las tarjetas de ambas secciones
    const tarjetas = document.querySelectorAll('.card-custom');
    tarjetas.forEach(card => {
        const titulo = card.querySelector('.card-title')?.textContent.toLowerCase() || '';
        if (titulo.includes(filtro) || filtro === '') {
            card.parentElement.style.display = '';
        } else {
            card.parentElement.style.display = 'none';
        }
    });
}