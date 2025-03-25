<script>
    
// NEXTEP - CONSULTORIA E DESENVOLVIMENTO DE SOFTWARE >>>
// Desenvolvido por Rafael Arcanjo - (47)99168-6307 - rafarcanjoatos@gmail.com
// Formulário com seletores de imagens dinâmicos
// Qualquer alteração deve ser informada a consultoria previamente


// Ids de cada radio button do formulário
// id da imagem principal na home

const observer = new MutationObserver(() => {
    const imagemPrincipal = document.querySelector('img.wp-image-908');
    const buttonReturn = document.querySelector('.e-form__buttons__wrapper__button-previous');

    if (imagemPrincipal && buttonReturn) {
        const imagemOriginal = imagemPrincipal.src; // Guarda o src original da imagem

        function restaurarImagem() {
            console.log("Imagem antes da restauração:", imagemPrincipal.src);
            imagemPrincipal.src = imagemOriginal; // Restaura a imagem original
            imagemPrincipal.srcset = imagemOriginal; // Restaura a imagem original
            console.log("Imagem restaurada:", imagemPrincipal.src);
        }

        buttonReturn.onclick = restaurarImagem; // Atribui a função corretamente
        observer.disconnect(); // Para de observar após encontrar o botão
    }
});

observer.observe(document.body, { childList: true, subtree: true });

const seletores = {
    sentido: {
        esquerda: document.getElementById('form-field-field_c66611a-0'),
        direita: document.getElementById('form-field-field_c66611a-1')
    },
    material: {
        aco_carbono: document.getElementById('form-field-field_998b27a-0'),
        aco_inox: document.getElementById('form-field-field_998b27a-1')
    },
    tubo: {
        com: document.getElementById('form-field-field_70055ce-0'),
        calha: document.getElementById('form-field-field_70055ce-2'),
        sem: document.getElementById('form-field-field_70055ce-1')
    },
    eixo: {
        com: document.getElementById('form-field-field_cfbc122-0'),
        sem: document.getElementById('form-field-field_cfbc122-1'),
        passo: document.getElementById('form-field-field_cfbc122-2')
    },
    ponteira: {
        com: document.getElementById('form-field-field_aa30df5-0'),
        sem: document.getElementById('form-field-field_aa30df5-1')
    },
    flanges: {
        com: document.getElementById('form-field-field_129e64b-0'),
        sem: document.getElementById('form-field-field_129e64b-1')
    },
    passo: {
        com: document.getElementById('form-field-field_d6d0a16-0'),
        sem: document.getElementById('form-field-field_d6d0a16-1')
    }
};

// pasta onde estão salvas as imagens no servidor
const pastaDasImagens = 'https://lthelicoides.com.br/wp-content/uploads/img/img/';

// id da imagem principal na home
const imagemPrincipal = document.querySelector('img.wp-image-908');    
let imagemOriginal = imagemPrincipal ? imagemPrincipal.src : '';

// Função para encontrar o nome do arquivo com base nas seleções
function gerarNomeImagem() {
    try {
        let sentido = seletores.sentido.esquerda?.checked ? 'HE' : 'HD';
        
        let tubo = 'CC';
        if (seletores.tubo.com?.checked) {
            tubo = 'CTE';
        } else if (seletores.tubo.calha?.checked) {
            tubo = 'STE';
        }

        let eixo = 'SE';
        if (seletores.eixo.com?.checked) {
            eixo = 'CE';
        } else if (seletores.eixo.passo?.checked) {
            eixo = 'PP';
        }

        let flanges = seletores.flanges.com?.checked ? 'CF' : 'SF';
        let passo = seletores.passo.com?.checked ? '%20PP' : '';
        let ponteira = seletores.ponteira.com?.checked ? 'CP' : 'SP';
        let material = seletores.material.aco_carbono?.checked ? 'AÇO' : 'INOX';

        return { nome: `${sentido}%20${tubo}%20${eixo}%20${ponteira}%20${flanges}${passo}%20${material}.jpg`};

    } catch (error) {
        console.error('Erro ao gerar nome da imagem:', error);
        return { nome: '' };
    }
}

// Função para atualizar a imagem
function atualizarImagem() {
    if (!imagemPrincipal) return;
    let { nome } = gerarNomeImagem();
    if (!nome) return;

    let novoSrc = pastaDasImagens + nome;
    let erroSrc = pastaDasImagens + "error.jpg";

    // Verificar se a imagem existe
    const img = new Image();
    
    // Mensagem de Erro na carga da imagem
    img.onerror = function() {
    console.log("Erro ao carregar a imagem:", novoSrc);
    imagemPrincipal.src = erroSrc;
    imagemPrincipal.srcset = erroSrc;
    };
    
    
    
    // Mensagem de Sucesso na carga da imagem
    img.onload = function() {
    console.log("Imagem carregada com sucesso:", novoSrc);
    imagemPrincipal.src = novoSrc;
    imagemPrincipal.srcset = novoSrc;
    };
    
    // Importante: definir o src depois de configurar os manipuladores de eventos
    img.src = novoSrc;
}

// Adicionar eventos aos radio buttons
Object.values(seletores).forEach(categoria => {
    Object.values(categoria).forEach(radio => {
        if (radio) {
            radio.addEventListener('change', atualizarImagem);
            radio.addEventListener('mouseover', atualizarImagem);
        }
    });
});







//////////CÓDIGO 2





(function () {
    console.log("Script de Hover nas réguas iniciado!");

    // Obtém a imagem e suas dimensões
    const imagem = document.querySelector("img.wp-image-908"); // Ajuste o seletor conforme necessário
    if (!imagem) {
        console.error("Imagem não encontrada!");
        return;
    }

    // Cria um container para as overlays
    const container = document.createElement("div");
    container.style.position = "relative";
    container.style.display = "inline-block";
    imagem.parentNode.insertBefore(container, imagem);
    container.appendChild(imagem);

    // Lista de campos com seus IDs e posição na imagem (ajuste os valores conforme necessário)
    const campos = [
        
        // C - Comprimento
        { id: "form-field-name", top: "48%", left: "-56%", width: "131%", height: "5%", rotacao: true },

        // P - Passo
        { id: "form-field-field_82ecc00", top: "46%", left: "76%", width: "40%", height: "5%",  rotacao: true },  

        // E - Espessura
        { id: "form-field-field_3e416a9", top: "10%", left: "84%", width: "24%", height: "5%",  rotacao: true},  

        // d - Diâmetro interno
        {id: "form-field-field_10bc111", top: "0%", left: "36%", width: "26%", height: "5%",  rotacao: false},   

        // D - Diâmetro Externo
        { id: "form-field-field_3393277", top: "93%", left: "20%", width: "59%", height: "5%",  rotacao: false }   
    ];

     // Cria as divs de overlay
    campos.forEach(campo => {
        let overlay = document.createElement("div");
        overlay.style.position = "absolute";
        overlay.style.top = campo.top;
        overlay.style.left = campo.left;
        overlay.style.width = campo.width;
        overlay.style.height = campo.height;
        overlay.style.backgroundColor = "rgba(255, 165, 0, 0.5)"; // Laranja translúcido
        overlay.style.opacity = "0";
        overlay.style.transition = "opacity 0.3s ease-in-out";
        overlay.style.pointerEvents = "none"; // Não impede interação com a imagem
        
        // Aplica a rotação se necessário
        if (campo.rotacao) {
            overlay.style.transform = "rotate(90deg)";
            overlay.style.transformOrigin = "center";
        }

        container.appendChild(overlay);

        // Encontra o input pelo ID
        let input = document.getElementById(campo.id);

        if (input) {
            input.addEventListener("mouseenter", () => overlay.style.opacity = "1");
            input.addEventListener("mouseleave", () => overlay.style.opacity = "0");
        } else {
            console.warn(`Campo com ID "${campo.id}" não encontrado!`);
        }
    });

    console.log("Script finalizado com sucesso!");
})();



</script>