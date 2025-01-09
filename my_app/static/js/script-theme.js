// =================================================================================
// Código - Tema Claro e Escuro
//? OK .JS Tá trocando cor e texto do botao 
//! Mas precisa ajustar as cores no css

//Configurar o modo estrito = Controle de erros
'use strict'; 

// Para Capturar o Click da Página = Evento Click
const switcher = document.querySelector('.nav-tema');

// Adicionar Manipulador do evento click = Ouvinte
switcher.addEventListener('click', function() {
    document.body.classList.toggle('light-theme');
    document.body.classList.toggle('dark-theme');

    // Atualizar o Rótulo do Botão no click
    const className = document.body.className;

    if (className === "light-theme") {
        document.body.className = "light-theme";
        this.textContent = "Dark";
    } else {
        document.body.className = "dark-theme";
        this.textContent = "Light";
    }
    // Chamada para console.log(Não aparece na Pag Web)
    console.log("current class name: " + className)
});
// ===================================================================================
