const viagem = {
    econômica : "ec",
    executiva : "ex",
    primeira_classe : "pc"

}
let a = Object.keys(viagem)
for (chave in viagem) {
    console.log(chave)
}