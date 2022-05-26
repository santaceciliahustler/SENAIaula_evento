var eventos = ["Evento"]


let listaParticipantes = ['Participante 1', 'Participante 2', 'Participante 3', 'Participante 4', 'Participante 5'];
let listaPalestrantes = ['Palestrante 1', 'Palestrante 2'];

var dataEvento1 = new Date("2023-09-15")
var dataAtual = new Date();


if (dataAtual < dataEvento1) {
    console.log("Data atual é menor que data evento. Cadastro permitido.");
    console.log("Qual a sua idade?")
    var idade = 18;
        if (idade >= 18) {
            console.log("Idade permitida. Você pode acessar o sistema.")
            var qtdDeParticipantes = 97;
                if (qtdDeParticipantes < 100) {
                    console.log("Temos menos de 100 participantes, você pode se cadastrar")
                    qtdDeParticipantes = qtdDeParticipantes + 1;
                } else {
                    console.log("Chegamos ao limite para este evento. Cadastro não permitido.")
                }
        } else {
            console.log("Evento proibido para menores. Cadastro não permitido.")
        }

} 

else {
    console.log("Data atual é maior que data evento. Cadastro não permitido")
}