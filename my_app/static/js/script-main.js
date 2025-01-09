// JS: MAIN 
// ==================================================================================
// Carrossel 1 imagem por vêz:
$(document).ready(function(){
    $('.portfolio-carousel_1img').slick({
        dots: true,
        infinite: true,
        speed: 3000,
        slidesToShow: 1,
        adaptiveHeight: true,
        autoplay: true,       // Adiciona a reprodução automática
        autoplaySpeed: 3000,  // Define o tempo (em ms) entre cada troca de slide
    });
});
// ===================================================================================
// Carrossel 3 imagens por vêz:
$(document).ready(function(){
    $('.portfolio-carousel_3img').slick({
        dots: true,
        infinite: true,
        speed: 3000,
        slidesToShow: 3,      // Mostrar 3 imagens de uma vez
        slidesToScroll: 3,    // Mover 3 imagens por vez
        autoplay: true,       // Adiciona a reprodução automática
        autoplaySpeed: 2000,  // Define o tempo (em ms) entre cada troca de slide
        // rtl: false,
        // centerMode: true,
        // variableWidth: true,
    });
});
// ==================================================================================
// Carrossel 3 imagens por vêz e girando para esquerda (movimento contínuo e suave):
$(document).ready(function(){
    $('.portfolio-carousel_3imgMov').slick({
        dots: false,
        infinite: true,
        speed: 5000,          // Ajusta a velocidade da animação
        slidesToShow: 3,      // Mostrar 3 imagens de uma vez
        slidesToScroll: 1,    // Mover 1 imagem por vez para suavizar o movimento
        autoplay: true,       // Adiciona a reprodução automática
        autoplaySpeed: 0,     // Define o intervalo de tempo entre cada slide (0 para movimento contínuo)
        cssEase: 'linear',    // Movimento linear para suavidade
        rtl: false,
        centerMode: true,
        variableWidth: true,
    });
});
// ===================================================================================
// Carrossel 3 imagens por vêz e girando para direita (movimento contínuo e suave):
$(document).ready(function(){
    $('.portfolio-carousel_3imgMovDir').slick({
        dots: false,
        infinite: true,
        speed: 5000,          // Ajusta a velocidade da animação
        slidesToShow: 3,      // Mostrar 3 imagens de uma vez
        slidesToScroll: 1,    // Mover 1 imagem por vez para suavizar o movimento
        autoplay: true,       // Adiciona a reprodução automática
        autoplaySpeed: 0,     // Define o intervalo de tempo entre cada slide (0 para movimento contínuo)
        cssEase: 'linear',    // Movimento linear para suavidade
        // rtl: true,
        rtl: false,           // Desativar rtl para evitar conflitos
        centerMode: true,     // Centralizar os itens
        variableWidth: true,   // Permitir larguras variáveis para que a animação funcione
    });
    // Invertendo a direção através do CSS
    $('.portfolio-carousel_3imgMovDir').addClass('slick-rtl');

});
// ==================================================================================
// Página 02: CORRIGIDO
// Efeito de Máquina de Escrever (Typewriter Effect) - Exemplo:
const textoContainer = document.getElementById('texto-typewriter');
const paragrafos = textoContainer.getElementsByTagName('p'); // Obtém todos os parágrafos dentro do container
const textoCompleto = []; // Array para armazenar cada linha de texto

// Extrair o texto completo preservando a formatação
for (let i = 0; i < paragrafos.length; i++) {
    textoCompleto.push(paragrafos[i].textContent.trim()); // Adiciona cada parágrafo ao array, removendo espaços em branco
}

let linhaAtual = 0; // Índice para acompanhar a linha de texto atual
let posicaoAtual = 0; // Índice para acompanhar a posição de caracteres atual na linha
let currentText = ''; // Texto digitado até o momento

// Função para simular a digitação
function typeWriter() {
    // Adicionar um caractere por vez
    currentText += textoCompleto[linhaAtual][posicaoAtual];

    // Substituir o texto na div com o texto digitado
    textoContainer.innerHTML = currentText;

    // Verificar se ainda há caracteres para digitar na linha atual
    if (posicaoAtual < textoCompleto[linhaAtual].length - 1) {
        // Avançar para o próximo caractere na mesma linha
        posicaoAtual++;

        // Definir um tempo para o próximo caractere
        setTimeout(typeWriter, 30); // Ajuste a velocidade aqui (ms)
    } else {
        // Verificar se há mais linhas de texto para digitar
        if (linhaAtual < textoCompleto.length - 1) {
            // Avançar para a próxima linha de texto
            linhaAtual++;
            // Adicionar uma quebra de linha
            currentText += '<br><br>';
            // Resetar a posição de caracteres para o início da nova linha
            posicaoAtual = 0;
            // Chamar a função typeWriter para a próxima linha de texto
            setTimeout(typeWriter, 100); // Aguardar um pouco antes de passar para a próxima linha
        } else {
            // Digitação completa!
            console.log('Texto digitado com sucesso!');
        }
    }
}
// Iniciar a digitação
typeWriter();

// =====================================================
// Animação Página 03 - Fade In
document.addEventListener("DOMContentLoaded", function() {
    const badges = document.querySelectorAll('.container-badges img');
    const options = {
        threshold: 0.5
    };

    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('fade-in');
                observer.unobserve(entry.target);
            }
        });
    }, options);

    badges.forEach(badge => {
        observer.observe(badge);
    });
});
// ==============================================================================
// Mostrar Footer - Detecta Mov Mouse
document.addEventListener('mousemove', function(e) {
    const footer = document.getElementById('site-footer');
    if ((window.innerHeight - e.clientY) < 50) {
        // Se o mouse estiver a menos de 50px da parte inferior da janela
        footer.style.bottom = '0';
    } else {
        // Se o mouse estiver a mais de 50px da parte inferior da janela
        footer.style.bottom = '-100px';
    }
});
// ================================================================================





// ================================================================================


// ================================================================================


// ================================================================================


// ================================================================================


// ================================================================================


// ================================================================================