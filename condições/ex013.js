var hora_atual = new Date()
var hora = hora_atual.getHours()
var minutos = hora_atual.getMinutes()
console.log(`agora são exatamente ${hora} horas e ${minutos} minutos.`)
if(hora < 12){
    console.log('Bom dia meu patrão')
}else if(hora >= 12 && hora < 17){
    console.log('Boa tarde meu patrão')
}else{
    console.log('Boa noite meu patrão')
}