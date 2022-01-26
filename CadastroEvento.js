let dataEvento = new Date("05/30/2022")
let idadeCadastrante = 22
let nomeCadastrante = "Fernando"
let Lista = ["Joao", "Augusto", "Pedro"]
let dataAtual = new Date()
if (dataEvento >= dataAtual) {

    if (idadeCadastrante >= 18) {

        if (Lista.length < 100) {


            for (let index = 0; index < Lista.length; index++) {
                console.log(Lista[index])
                
                
            }

            Lista.push(nomeCadastrante)
            console.log("Cadastrado no evento com sucesso.")
            
        } else {

            console.log("impossível cadastrar. Número de participantes acima do limite")
            
        }
        
    } else {

        console.log("Cadastro não permitido pela idade")
    }
    
    
}else{
    console.log("Data do evento inválida")
}