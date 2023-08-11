function carregar(){
    var msg = document.getElementById('msg')
    var img = document.getElementById('imagem')
    var data = new Date()
    var hora = data.getHours()
    msg.innerHTML = `Agora são ${hora} horas!`
    if(hora >= 0 && hora < 12){
        //Bom dia
        img.src = 'imagens/manhazinha.png'
        document.body.style.backgroundColor = '#0396A6'
    } else if(hora >= 12 && hora < 18){
        //Boa tarde
        img.src = 'imagens/tardinha.png'
        document.body.style.backgroundColor = '#F25C05'
    } else{
        //Boa noite
        img.src = 'imagens/noitinha.png'
        document.body.style.backgroundColor = '#011126'
    }
}

