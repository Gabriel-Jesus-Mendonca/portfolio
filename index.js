document.addEventListener('DOMContentLoaded', function() {
    const formulario = document.querySelector('form');
    
    formulario.addEventListener('submit', function(event) {
        event.preventDefault();
        validarFormulario();
    });
});

function validarFormulario() {
    const nome = document.getElementById('nome').value.trim();
    const email = document.getElementById('email').value.trim();
    const mensagem = document.getElementById('mensagem').value.trim();
    
    let erros = [];
    
    // Validação do campo nome
    if (nome === '') {
        erros.push('Por favor, insira seu nome');
    }
    
    // Validação do campo email
    if (email === '') {
        erros.push('Por favor, insira seu e-mail');
    } else if (!validarEmail(email)) {
        erros.push('Por favor, insira um e-mail válido');
    }
    
    // Validação do campo mensagem
    if (mensagem === '') {
        erros.push('Por favor, insira sua mensagem');
    } else if (mensagem.length < 10) {
        erros.push('A mensagem deve ter pelo menos 10 caracteres');
    }
    
    // Se houver erros, mostra todos em um único alert
    if (erros.length > 0) {
        alert('Erros no formulário:\n\n' + erros.join('\n'));
    } else {
        alert('Mensagem enviada com sucesso!');
    }
}

// Função auxiliar para validar formato de e-mail
function validarEmail(email) {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(email);
}
