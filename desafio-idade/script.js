function clicar(){
    var data = new Date()
    var ano_atual = data.getFullYear()
    var form_ano = document.getElementById('iano')
    var res = document.getElementById('res')
    if(form_ano.value.length == 0 || Number(form_ano.value) > ano_atual){ //se digitar nada ou for maior q o ano atual vai dar erro
        alert('[ERRO] Verifique os dados e tente novamente!')
    }else{
        var fsex = document.getElementsByName('radsex')
        var idade = ano_atual - Number(form_ano.value) // valor do ano atual menos o ano de nascimento digitado no input
        var genero = ''
        var img = document.createElement('img') // vai criar uma tag img no html
        img.setAttribute('id', 'foto') // vai adicionar id e nome pra tag img
        img.style.padding = 20
        if(fsex[0].checked){ //se marcar a primeira bolinha...
            genero = 'Homem'
            if(idade >= 5 && idade < 12){
                //criança
                img.setAttribute('src', 'imagens/crianca_homem.png')
            } else if(idade < 21){
                //jovem
                img.setAttribute('src', 'imagens/jovem-homem.png')
            } else if(idade < 50){
                //adulto
                img.setAttribute('src', 'imagens/adulto-homem.png')
            } else{
                //idoso
                img.setAttribute('src', 'imagens/idoso-homem.png')
            }
        }else if(fsex[1].checked){ // se marcar a segunda bolinha...
            genero = 'Mulher'
            if(idade >= 5 && idade < 12){
                //criança
                img.setAttribute('src', 'imagens/crianca_mulher.png')
            } else if(idade < 21){
                //jovem
                img.setAttribute('src', 'imagens/jovem-mulher.png')
            } else if(idade < 50){
                //adulto
                img.setAttribute('src', 'imagens/adulto-mulher.png')
            } else{
                //idoso
                img.setAttribute('src', 'imagens/idoso-mulher.png')
            }
        }
        res.innerHTML = `<p>Detectamos <strong>${genero}</strong> com <strong>${idade}</strong> anos.</p>`
        res.appendChild(img) // vai adicionar a imagem depois da frase acima
    }
}