let num = document.getElementById('inum')
let lista = document.getElementById('ilista')
let res = document.getElementById('res')
let valores = []

function isnumero(n){
    if(Number(n) >= 1 && Number(n) <= 100){
        return true
    } else{
        return false
    }
}

function inlista(n, list){
    if(list.indexOf(Number(n)) != -1){ // se der -1, significa que o valor não foi encontrado na lista
        return true
    } else{
        return false
    }
}

function adicionar(){
    if(isnumero(num.value) && !inlista(num.value, valores)){//só vai adicionar o número se realmente for um número e se não estiver na lista
        valores.push(Number(num.value)) //vai adicionar o número na lista "valores"
        let item = document.createElement('option')
        item.text = `Valor ${num.value} foi adicionado!`
        lista.appendChild(item)
        res.innerHTML = '' // vai limpar depois que eu adicionar algum número depois de finalizar
        }
    else{
        alert('número repetido ou inválido, por favor insira outro!')
    }
    num.value = '' // vai limpar depois que adicionar um número
    num.focus() // vai focar na caixainha do número para não precisar ficar clicando sempre pra digitar
}

function resultado(){
    if(valores.length == 0){
        alert('insira algum valor antes de finalizar!')
    }else{
        let total = valores.length
        let maior = valores[0]
        let menor = valores[0]
        let soma = 0
        let media = 0
        for(let pos in valores){
            soma += valores[pos]
            if(valores[pos] > maior)
                maior = valores[pos]

            if(valores[pos] < menor)
                menor = valores[pos]
        }
        media = soma / total
        res.innerHTML = ''
        res.innerHTML += `<p>Ao total, temos ${total} valores cadastrados!</p>`
        res.innerHTML += `<p>O maior valor cadastrado foi ${maior}!</p>`
        res.innerHTML += `<p>O menor valor cadastrado foi ${menor}!</p>`
        res.innerHTML += `<p>A soma de todos os valores é ${soma}!</p>`
        res.innerHTML += `<p>A média dos valores é ${media}!</p>`
    }
}