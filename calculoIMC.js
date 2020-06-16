const nome = 'Marcelo'
const peso = 75
const altura = 1.70
const imc = peso / (altura * altura)

if (imc >= 30) {
    console.log(`${nome} você está com o imc de ${imc}. Está muito acima do peso`)
} else if (imc <= 29.9) {
    console.log(`${nome} você está com o imc de ${imc}. Não está acima do peso mas cuidado!`)
}