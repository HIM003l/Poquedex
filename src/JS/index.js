const botao_tema = document.getElementById("botao-alterar-tema");

const body = document.querySelector("body");

const imagem_tema = document.querySelector(".imagem-botao");

// aero fuctions
botao_tema.addEventListener("click",() => {

    // verifica se o modo escuro esta ativo
        const modo_escuro_ativo = body.classList.contains("modo-escuro")

        // para simplificar o add e o remove do modo escuro
        body.classList.toggle("modo-escuro")
    
        if( modo_escuro_ativo == true){

            // usamos o remove para remover a class especificada
           
            // body.classList.remove("modo-escuro")

            imagem_tema.setAttribute('src', "src/imagens/sun.png")
        }else{

            // codigo usado para adicionar uma classe para um elemento
           
            // body.classList.add("modo-escuro");
        
            // imagem do botao trocar tema
        
            /* nos usamos o steAtribute pra trocar um elemento especifico do 
            html: O src especifica que e pra troca o o caminho do atributo*/
            imagem_tema.setAttribute('src', "src/imagens/moon.png")
        }

   
});
