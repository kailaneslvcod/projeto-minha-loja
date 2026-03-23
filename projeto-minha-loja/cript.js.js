// Seleciona todos os botões de comprar
const botoesComprar = document.querySelectorAll('.btn-comprar');

botoesComprar.forEach(botao => {
    botao.addEventListener('click', () => {
        // Pega o nome do produto que está no mesmo card que o botão
        const nomeProduto = botao.parentElement.querySelector('h2').innerText;
        
        // Simulação de interatividade
        alert(`Ovo ${nomeProduto} adicionado ao carrinho da Kat Candy! 🍫✨`);
        
        // Efeito visual no botão
        botao.innerText = "Adicionado!";
        botao.style.backgroundColor = "#27ae60"; // Muda para verde temporariamente
        
        setTimeout(() => {
            botao.innerText = "Comprar";
            botao.style.backgroundColor = ""; // Volta ao original
        }, 2000);
    });
});