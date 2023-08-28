// fatorial de maneira recursiva, que é quando a função chama ela mesma

function fatorial(n){
    if (n==1){
        return 1
    }else{
        return n * fatorial(n-1)
    }
}

console.log(fatorial(6))

/*
5! = 5*4*3*2*1
tbm pode ser 5! = 5*4!

n! = n * (n-1)!
1! = 1

*/