function mostrarMensagem(id) {
    const mensagens = ['msg1', 'msg2', 'msg3', 'msg4'];

    mensagens.forEach(function(mensagemId) {
        document.getElementById(mensagemId).hidden = (mensagemId !== id);
    });
}