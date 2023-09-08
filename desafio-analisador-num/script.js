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
        
    } else{
        alert('número repetido ou inválido, por favor insira outro!')
    }

}