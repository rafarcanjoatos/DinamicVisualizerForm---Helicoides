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