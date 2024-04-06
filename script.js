let n1_global = 0
let n2 = 0
let operador_global = ""


function resultado(){
    const n2 = document.querySelector(".tela_input").placeholder
    const n2_formatado = parseInt(n2)
    document.querySelector(".tela_input").placeholder = ""
    console.log("Segundo número:",n2_formatado)

    if (operador_global=="+"){
        n1_global = n1_global + n2_formatado
        console.log(n1_global)
        document.querySelector(".tela_input").placeholder = n1_global
        
    }

    if (operador_global=="-"){
        n1_global = n1_global - n2_formatado
        console.log(n1_global)
        document.querySelector(".tela_input").placeholder = n1_global
        
    }

    if (operador_global=="/"){
        n1_global = n1_global / n2_formatado
        console.log(n1_global)
        document.querySelector(".tela_input").placeholder = n1_global
        
    }

    if (operador_global=="*"){
        n1_global = n1_global * n2_formatado
        console.log(n1_global)
        document.querySelector(".tela_input").placeholder = n1_global
    }
    
}
//ENVIAR NUMEROS DO HTML DE ACORDO COM A OPERAÇÃO ESCOLHIDA

function somar(){
    
    const operador = document.querySelector(".somar").innerHTML
    operador_global = operador

    const n1 = document.querySelector(".tela_input").placeholder 
    const n1_formatado = parseInt(n1)
    n1_global = n1_formatado

    console.log("Primeiro número:",n1_formatado)
    document.querySelector(".tela_input").placeholder = ""
    
}

function dividir(){
    const operador = document.querySelector(".dividir").innerHTML
    operador_global = operador

    const n1 = document.querySelector(".tela_input").placeholder 
    const n1_formatado = parseInt(n1)
    n1_global = n1_formatado

    console.log("Primeiro número:",n1_formatado)
    document.querySelector(".tela_input").placeholder = ""
}

function multiplicar(){
    const operador = document.querySelector(".multiplicar").innerHTML
    operador_global = operador

    const n1 = document.querySelector(".tela_input").placeholder 
    const n1_formatado = parseInt(n1)
    n1_global = n1_formatado

    console.log("Primeiro número:",n1_formatado)
    document.querySelector(".tela_input").placeholder = ""
}

function subtrair(){
    const operador = document.querySelector(".subtrair").innerHTML
    operador_global = operador

    const n1 = document.querySelector(".tela_input").placeholder 
    const n1_formatado = parseInt(n1)
    n1_global = n1_formatado

    console.log("Primeiro número:",n1_formatado)
    document.querySelector(".tela_input").placeholder = ""
}

function apagar_um(){
    numero = document.querySelector(".tela_input").placeholder

    if (numero.length > 0){
        novo_numero = numero.substring(0,numero.length - 1);
        document.querySelector(".tela_input").placeholder = novo_numero
    }
    
   
}

function apagar_tudo(){
    document.querySelector(".tela_input").placeholder = ""
}



//func para adicionar numeros

function adicionar1(){
    const num = 1
    document.querySelector(".tela_input").placeholder += num
    console.log(num)
}

function adicionar2(){
    const num = 2
    document.querySelector(".tela_input").placeholder += num
    console.log(num)
}

function adicionar3(){
    const num = 3
    document.querySelector(".tela_input").placeholder += num
    console.log(num)
}

function adicionar4(){
    const num = 4
    document.querySelector(".tela_input").placeholder += num
    console.log(num)
}

function adicionar5(){
    const num = 5
    document.querySelector(".tela_input").placeholder += num
    console.log(num)
}

function adicionar6(){
    const num = 6
    document.querySelector(".tela_input").placeholder += num
    console.log(num)
}

function adicionar7(){
    const num = 7
    document.querySelector(".tela_input").placeholder += num
    console.log(num)
}

function adicionar8(){
    const num = 8
    document.querySelector(".tela_input").placeholder += num
    console.log(num)
}

function adicionar9(){
    const num = 9
    document.querySelector(".tela_input").placeholder += num
    console.log(num)
}

function adicionar0(){
    const num = 0
    document.querySelector(".tela_input").placeholder += num
    console.log(num)
}

