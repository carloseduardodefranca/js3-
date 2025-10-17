let contadora = 0
let acumuladora = 0 

while (contadora < 5) {
let numero = Number(prompt("digite um numero"))
acumuladora = acumuladora +  numero
contadora ++
}
 
let media = acumuladora/5

console.log(`a media dos numero é ${media} `)
