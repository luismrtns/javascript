function tabuada(){
    let num = document.getElementById('inum')
    let tab = document.getElementById('itab')
    if(num.value.length == 0){
        alert('Por favor, digite um número!')
    } else{
        let n = Number(num.value)
        let cont = 1
        tab.innerHTML = '' // vai limpar a tabuada antes de mostrar outra
        while(cont<=10){
            let item = document.createElement('option')
            item.text = `${n} x ${cont} = ${n*cont}`
            item.value = `tab${cont}` // útil pro PHP
            tab.appendChild(item)
            cont+=1
        }
    }
    
}