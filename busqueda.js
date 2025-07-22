function filtrarResultados() {
    const input = document.getElementById('searchInput').value.toLowerCase();
    const cards = document.querySelectorAll('#resultados .col');
    cards.forEach(card => {
        const titulo = card.getAttribute('data-title').toLowerCase();
        card.style.display = titulo.includes(input) ? '' : 'none';
    });
}
