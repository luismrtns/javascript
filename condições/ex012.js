var idade = 12
console.log(`você tem ${idade} anos`)
if(idade<16){
    console.log('então não vota')
}else if(idade>=16 && idade<18 || idade > 65){
        console.log('então o voto não é obrigatório')
    }else{
        console.log('então o voto é obrigatório')
    }