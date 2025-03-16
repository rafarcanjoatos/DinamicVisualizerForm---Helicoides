<script>
    
// NEXTEP - CONSULTORIA E DESENVOLVIMENTO DE SOFTWARE >>>
// Desenvolvido por Rafael Arcanjo - (47)99168-6307 - rafarcanjoatos@gmail.com
// Formulário com seletores de imagens dinâmicos
// Qualquer alteração deve ser informada a consultoria previamente


// Ids de cada radio button do formulário
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
        sem: document.getElementById('form-field-field_70055ce-1')
    },
    eixo: {
        com: document.getElementById('form-field-field_cfbc122-0'),
        sem: document.getElementById('form-field-field_cfbc122-1')
    },
    ponteira: {
        com: document.getElementById('form-field-field_aa30df5-0'),
        sem: document.getElementById('form-field-field_aa30df5-1')
    },
    furo: {
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
        let tubo = seletores.tubo.com?.checked ? 'CTE' : 'STE';
        let eixo = seletores.eixo.com?.checked ? 'CE' : 'SE';      
        let ponteira = seletores.ponteira.com?.checked ? 'CP' : 'SP';
        let furo = seletores.furo.com?.checked ? 'CF' : 'SF';
        let material = seletores.material.aco_carbono?.checked ? 'AÇO' : 'INOX';
        
        return { nome: `${sentido}%20${tubo}%20${eixo}%20${ponteira}%20${furo}%20${material}.jpg` };
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

// Inicializar a imagem ao carregar a página
window.addEventListener('DOMContentLoaded', atualizarImagem);

</script>