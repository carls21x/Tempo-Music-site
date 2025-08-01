function mostrarMensajeRegistro(texto, tipo) {
    let msg = document.getElementById('registerMsg');
    if (!msg) {
        msg = document.createElement('div');
        msg.id = 'registerMsg';
        msg.className = 'mt-3';
        document.querySelector('.register-card').appendChild(msg);
    }
    msg.innerHTML = `<div class="alert alert-${tipo}">${texto}</div>`;
}

document.querySelector('form').addEventListener('submit', function(e){
    e.preventDefault();
    const name = document.getElementById('regName').value.trim();
    const email = document.getElementById('regEmail').value.trim().toLowerCase();
    const password = document.getElementById('regPassword').value;

    let usuarios = JSON.parse(localStorage.getItem('usuarios') || '[]');

    if (usuarios.some(u => u.email === email)) {
        mostrarMensajeRegistro('Este correo ya está registrado.', 'danger');
        return;
    }

    usuarios.push({ name, email, password });
    localStorage.setItem('usuarios', JSON.stringify(usuarios));

    mostrarMensajeRegistro('Registro exitoso', 'success');
    setTimeout(() => window.location.href = "login.html", 1200);
});