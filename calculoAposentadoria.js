//Obs.: Esse cálculo é fictício, dentro da aposentadoria existem muitos
//outros fatores para serem levados em conta

const nome = "Nicole"
const sexo = "F"
const idade = 48
const contribuicao = 23
const aposentadoria = idade + contribuicao

if (sexo === "F" && aposentadoria >= 85) {
    console.log(`${nome}. Você pode se aposentar`)
} else if (sexo === "F" && aposentadoria < 85) {
    console.log(`${nome}. você contribuiu com ${aposentadoria} anos. Ainda não pode se aposentar`)
}

if (sexo === "M" && aposentadoria >= 90) {
    console.log(`${nome}. Você pode se aposentar`)
} else if (sexo === "M" && aposentadoria < 90) {
    console.log(`${nome}. Você contribuiu com ${aposentadoria} anos. Ainda não pode se aposentar`)
}