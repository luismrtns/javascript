function fatorial(n){
    let fat = 1
    for(let cont = n;cont > 1;cont-=1){ // vai diminuir 1 enquanto o contador for maior que 1
        fat *= cont // multiplica pq vai diminuindo de 1 em 1 e vai multiplicando pelo valor atual do "cont"
    }
    return fat
}

console.log(fatorial(5))