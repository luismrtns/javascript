function contar(){
    let ini = document.getElementById('iini')
    let fim = document.getElementById('ifim')
    let pas = document.getElementById('ipas')
    let res = document.getElementById('res')

    if(ini.value.length == 0 || fim.value.length == 0 || pas.value.length == 0){
        alert('[ERRO] Faltam dados!')
        res.innerHTML = 'impossível contar!'
    } else{
        res.innerHTML = 'Contando: <br>'
        let i = Number(ini.value)
        let f = Number(fim.value)
        let p = Number(pas.value)
        if (p<=0){
            alert('Passo inválido! Considerando passo 1')
            p = 1
        }
        if (i < f){
            // contagem crescente
            for(let cont = i; cont <= f; cont += p){
                res.innerHTML += `${cont} \u{1F449}`
            }
        } else {
            // contagem regressiva
            for (let cont = i; cont >= f; cont -= p){
                res.innerHTML += `${cont} \u{1F449}`
            }
        }
        res.innerHTML += `\u{1F3C1}`
    }
}