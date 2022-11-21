/*
Cifra de Cesar:

A B C D E F G H J I 
0 1 2 3 4 5 6 7 8 9

K  L  M  N  O  P  Q  R  S  T  U  V  W  X  Y  Z
10 11 12 13 14 15 16 17 18 19 20 21 22 23 24 25

*/

let estilo = document.documentElement.style                 //var para mudar todas as cores com vermelho ou violeta
let videoBack = document.querySelector("#video")            //var para mudar o background de fundo
var codigo = document.getElementById('msgInput')            //var que armazena o código digitado pelo usuário
let letraBotãoInput = document.getElementById('btnInput')   //var para mudar o texto do botão de input
let saida = document.querySelector('#saída')                //var para mudar a saída do código
let btnSwitch = document.querySelector('#CHK')              //var que verifica se é codificador ou decodificador
var flagCodCesar = true                                     //var que verifica se é base64 ou cifra de Cesar

function mudarCorBase(){ //muda as cores de vermelho para violeta
    setTimeout(function(){
        videoBack.setAttribute('src', '/includes/Footage Background Massive Violet Bokeh.mp4')
        estilo.setProperty('--corDeMudança','blueviolet')
    }, 2000);
    flagCodCesar = false
}

function mudarCorCesar(){ //muda as cores de violeta pra vermelho
    setTimeout(function(){
        videoBack.setAttribute('src', '/includes/Red Spinning Particles - HD Background Loop.mp4')
        estilo.setProperty('--corDeMudança','red')
    }, 2000);
    flagCodCesar = true
}

function escolherSwitch(){ //Joga no botão o texto caso seja decodificação ou codificação
    if(btnSwitch.checked){
        letraBotãoInput.innerHTML = 'Decodificar'
    }else{
        letraBotãoInput.innerHTML = 'Codificar'
    }
}


function escolhercodigo(){ //Chave seletora do código cesar ou base64 de acordo com a seleção dos botões
    if(flagCodCesar == true){
        codificadorCesar()
    }else{
        codificadorBase64()
    }

}

function codificadorCesar(){ //algoritmo da cifra de cesar
    if(btnSwitch.checked ){
        saida.innerHTML = ''
        let valorcodigo = codigo.value
        if((valorcodigo !=="") && (valorcodigo !== null) && (valorcodigo !== undefined)){
            for (let i = 0; i < valorcodigo.length; i++){
                let letra = valorcodigo.toLocaleUpperCase()[i]
                var code = ((letra.charCodeAt(0) - 65 - 7 ) % 26) + 65
            saida.innerHTML += String.fromCharCode(code)
            }  
        }  
    }else{
        saida.innerHTML = ''
        let valorcodigo = codigo.value
        if((valorcodigo !=="") && (valorcodigo !== null) && (valorcodigo !== undefined)){
            for (let i = 0; i < valorcodigo.length; i++){
                let letra = valorcodigo.toLocaleUpperCase()[i]
                var code = ((letra.charCodeAt(0) - 65 + 7 ) % 26) + 65
            saida.innerHTML += String.fromCharCode(code)
            }  
        }
    }
    
}

function codificadorBase64() { //algoritmo da base64
    let valorcodigo = codigo.value
    if (btnSwitch.checked) {
        saida.innerHTML = ''
        let codificado = btoa(valorcodigo)
        saida.innerHTML += codificado
    }else{
        saida.innerHTML = ''
        let decodificado = atob(valorcodigo)
        saida.innerHTML += decodificado
    }
  }
