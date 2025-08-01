function mostrarMensaje(texto, tipo) {
    let msg = document.getElementById('loginMsg');
    if (!msg) {
        msg = document.createElement('div');
        msg.id = 'loginMsg';
        msg.className = 'mt-3';
        document.querySelector('.login-card').appendChild(msg);
    }
    msg.innerHTML = `<div class="alert alert-${tipo}">${texto}</div>`;
}

document.querySelector('form').addEventListener('submit', function(e){
    e.preventDefault();
    const email = document.getElementById('loginEmail').value.trim().toLowerCase();
    const password = document.getElementById('loginPassword').value;

    let usuarios = JSON.parse(localStorage.getItem('usuarios') || '[]');
    const usuario = usuarios.find(u => u.email === email && u.password === password);

    if (usuario) {
        mostrarMensaje('¡Bienvenido, ' + usuario.name + '!', 'success');
        setTimeout(() => window.location.href = "home.html", 1200);
    } else {
        mostrarMensaje('Correo o contraseña incorrectos', 'danger');
    }
});