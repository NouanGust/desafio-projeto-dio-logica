let jogadoresInfo = [
    ["Axel Rose", 20, 30],
    ["Renato Russo", 54, 14],
    ["Alcione", 63, 7],
    ["Rita Lee", 90, 2],
    ["Harry Potter", 222, 130],
    ["Rafael Bittencurt", 221, 34],
    ["Xuxa", 325, 37],
    ["Mestre Yoda", 540, 2]
]




function calculadoraDeRank (vitorias, derrotas, jogador) {

    let saldoVitorias
    let rank
    saldoVitorias = vitorias - derrotas

    if (saldoVitorias <= 10) {
        rank = "Ferro"
    } else if (saldoVitorias >= 11 && saldoVitorias <= 20) {
        rank = "Bronze"
    } else if (saldoVitorias >= 21 && saldoVitorias <= 50) {
        rank = "Prata"
    } else if (saldoVitorias >= 51 && saldoVitorias <= 80) {
        rank = "Ouro"
    } else if (saldoVitorias >= 81 && saldoVitorias <= 90) {
        rank = "Diamante"
    } else if (saldoVitorias >= 91 && saldoVitorias <= 100) {
        rank = "Lendário"
    } else if (saldoVitorias >= 101) {
        rank = "Imortal"
    } else {
        rank = "Não existem pontos para essas lendas!"
    }

    console.log(`O jogador: ${jogador} tem saldo de ${saldoVitorias} e está no rank ${rank}`)
}

function escolheJogador (jogadoresInfo) {

    for (let x = 0; x < jogadoresInfo.length; x ++){
        let jogador = jogadoresInfo[x][0]
        let jogadorVitorias = jogadoresInfo[x][1]
        let jogadorDerrotas = jogadoresInfo[x][2]

        calculadoraDeRank(jogadorVitorias, jogadorDerrotas, jogador)
    }

}

//calculadoraDeRank(vitorias, derrotas, jogador)
escolheJogador(jogadoresInfo)