console.log("Conheça aqui o rank dos personagens e personalidades mais aleatórios: ")

let jogadoresInfo = [
    ["Axel Rose", 0.645],
    ["Renato Russo", 1.354],
    ["Alcione", 2.500],
    ["Rita Lee", 6.073],
    ["Harry Potter", 7.999],
    ["Rafael Bittencurt", 8.654],
    ["Xuxa", 9.543],
    ["Mestre Yoda", 12.765],
    ["Homem-aranha", "melhor jogador!"]
]




for (let x = 0; x < jogadoresInfo.length; x ++){
    let jogador = jogadoresInfo[x][0]
    let jogadorXP = jogadoresInfo[x][1]

    let rank = ""

    if (jogadorXP < 1.000){
        rank = "Ferro"
    } else if (jogadorXP > 1.001 && jogadorXP < 2.000) {
        rank = "Bronze"
    } else if (jogadorXP > 2.001 && jogadorXP < 5.000) {
        rank = "Prata"
    } else if (jogadorXP > 5.001 && jogadorXP < 7.000 ) {
        rank = "Ouro"
    } else if (jogadorXP > 7.001 && jogadorXP < 8.000) {
        rank = "Platina"
    } else if (jogadorXP > 8.001 && jogadorXP < 9.000) {
        rank = "Ascendente"
    } else if (jogadorXP > 9.001 && jogadorXP < 10.000) {
        rank = "Imortal"
    } else if (jogadorXP > 10.001) {
        rank = "Radiante"
    } else {
        rank = "inválido"
    }

    console.log("O(A) jogador(a): " + jogador + " está no rank: " + rank)
}





