let campos = [
	"form-field-field_70055ce-0",
	"form-field-field_70055ce-1",
	"form-field-field_aa30df5-0",
	"form-field-field_aa30df5-1",		
	"form-field-field_998b27a-0",
	"form-field-field_998b27a-1",
	"form-field-field_c66611a-0",
	"form-field-field_c66611a-1",
	"form-field-field_cfbc122-0",
	"form-field-field_cfbc122-1",
];

let imagem = document.querySelector('img.wp-image-908');

// Adicionar classe para fixar o tamanho
imagem.classList.add('tamanho-fixo');

// Guardar as dimensões originais
let larguraOriginal = imagem.offsetWidth;
let alturaOriginal = imagem.offsetHeight;

// Cria um estilo para a classe da imagem e para os elementos de linha
let estilo = document.createElement('style');
estilo.textContent = `
    .tamanho-fixo {
        width: ${larguraOriginal}px !important;
        height: ${alturaOriginal}px !important;
        object-fit: cover !important;
        transition: all 0.3s ease !important;
    }
    
    /* Estilo para aumentar a área clicável */
    .elementor-field-type-radio .elementor-field-subgroup .elementor-field-option {
        position: relative;
        cursor: pointer;
    }
    
    .elementor-field-type-radio .elementor-field-subgroup .elementor-field-option::after {
        content: '';
        position: absolute;
        top: 0;
        left: 0;
        right: -200px; /* Estende à direita para cobrir o texto */
        bottom: 0;
        z-index: 1;
    }
`;
document.head.appendChild(estilo);

let imagemOriginal = imagem.srcset;

// Função para obter o elemento pai de opção do rádio
function getRadioOption(id) {
    let radio = document.getElementById(id);
    if (radio) {
        // Buscar o elemento pai que é a opção do rádio (contém o texto)
        return radio.closest('.elementor-field-option');
    }
    return null;
}

// Aplicar eventos nos elementos pais que contêm os radios e textos
campos.forEach(id => {
    let radioOption = getRadioOption(id);
    if (radioOption) {
        radioOption.addEventListener("mouseover", function () {
            imagem.srcset = "https://lthelicoides.com.br/wp-content/uploads/2025/03/FOTO5-min.png";
        });
        
        radioOption.addEventListener("mouseout", function () {
            imagem.srcset = imagemOriginal;
        });
    }
});