document.getElementById("form-contato").addEventListener("submit", function (event) {
    event.preventDefault();

    const nome = document.getElementById("nome").value;
    const email = document.getElementById("email").value;
    const mensagem = document.getElementById("mensagem").value;

    const mensagemEnviada = `Obrigado, ${nome}! Sua mensagem foi recebida. Responderemos no email ${email} o mais breve possível.`;
    document.getElementById("mensagem-enviada").textContent = mensagemEnviada;

    // Limpar o formulário
    document.getElementById("form-contato").reset();
});
