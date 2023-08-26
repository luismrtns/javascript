let num = [7,77,1910]
//num.sort()
num[3] = 2012  //vai adicionar na posição especificada no colchete
num.push(2004)  //vai adicionar o número 2004 na última posição do array
num.indexOf(55) //vai falar a posição do valor que está nos parênteses
//console.log(`nosso vetor completo é ${num}`)
console.log(`o vetor tem ${num.length} posições`) //vai dizer quantos elementos tem na array

/*console.log('os valores da lista são: ')
for(let pos = 0; pos<num.length; pos+=1){
    console.log(`na ${pos+1}º posição tem o valor: ${num[pos]}`) //"pos" vai iterar a lista e mostrar cada elemento da posição atual do loop
}
for(let pos in num){ //sintaxe que só funciona para arrays
    console.log(`na ${pos}º posição temos o valor ${num[pos]}`)
}*/