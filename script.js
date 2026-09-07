document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('useless-form');
    const modal = document.getElementById('funny-modal');
    const modalMessage = document.getElementById('modal-message');
    const closeModalBtn = document.getElementById('close-modal');

    // Lista de respostas cômicas aleatórias
    const messages = [
        "Sua solicitação foi processada com sucesso! Seu Garfo Para Tomar Sopa está sendo fabricado com os melhores furos do mercado.",
        "Parabéns! Enviamos uma Pedra de Estimação via Sedex. Lembre-se de dar banho e levá-la para passear diariamente.",
        "Sucesso! Seu Protetor de Tela Impresso em Folha A4 chegará em breve. Não dobre a folha ao colar no monitor!",
        "Cadastro realizado! Seus dados foram guardados no nosso cofre de papelão super seguro. Seu brinde inútil chegará em até 99 anos úteis."
    ];

    form.addEventListener('submit', (e) => {
        // Previne o envio real do formulário
        e.preventDefault();

        const nomeInput = document.getElementById('nome').value;

        // Seleciona uma mensagem aleatória
        const randomMsg = messages[Math.floor(Math.random() * messages.length)];

        // Exibe a mensagem no modal
        modalMessage.innerHTML = `Olá <strong>${nomeInput}</strong>!<br><br>${randomMsg}`;
        modal.classList.remove('hidden');

        // Limpa o formulário
        form.reset();
    });

    closeModalBtn.addEventListener('click', () => {
        modal.classList.add('hidden');
    });
});
