//variaveis que armazenam os botões pelos seus id
const turnOn = document.getElementById ( 'turnOn' );  
const turnOff = document.getElementById ( 'turnOff' );
const trocar = document.getElementById ( 'change' );

//variavel que armazena a img inicial para depois verificar quando o mouse passar por cima
const lamp = document.getElementById ( 'lamp' );

//variavel que armazena o numero de vezes que a lâmpada foi quebrada
const quebradas = document.getElementById ( 'contador' );
let contador = 0;
quebradas.innerHTML = contador;

//funções que verifica o estado da lâmpada
/*o metodo indexOf retorna -1 caso o valor não seja encontrado, nesse caso a itenção é que retorne
apenas se encontrar, então no final acrescenta-se > -1*/
function isLampBroken () {
    return lamp.src.indexOf ( 'quebrada' ) > -1 
}
function isLampOn () {
    return lamp.src.indexOf ( 'ligada' ) > -1
    /*indexOf procura na string porém da conflito pois o nome das imagens eram "ligada", "desligada"
    ou seja, ele verificava que nos dois nomes exitia o trecho 'ligada' e retornava true para ambas,
    tentei resolver com if porém não obtive sucesso, a solução foi renomear o arquivo para "off.jpg*/
    //  if (lamp.src.indexOf ('ligada')){
    //      return true;
    //  } else{
    //      return false;
    //  }
}
//funções de ação
//ligar
function lampOn () {
    if ( !isLampBroken () ) { //se a função isLampBroken não for > -1 pode executar a ação
        lamp.src = './img/ligada.jpg'; //ação de ligar a lampada, (troca a imagem 'off' para a imagem 'ligada')
    }
}
//desligar
function lampOff () {
    if ( !isLampBroken () ) { //se a função isLampBroken não for > -1 pode executar a ação
        lamp.src = './img/off.jpg'; //ação de desligar a lampada, (troca a imagem 'ligada' para a imagem 'off')
    }
}
//trocar a lâmpada
function lampNew () {
    if ( !isLampOn () ) { //se a função isLampOn não for > -1 pode executar a ação
    lamp.src = './img/off.jpg'; //ação de trocar a lampada, (troca a imagem 'quebrada' para a imagem 'off')
    }
    else {
        alert("desligue a lâmpada para troca-la");
    }
    
}
//quebrar a lâmpada
function lampBroken () {
    lamp.src = './img/quebrada.jpg'; //ação de quebrar a lampada, (troca a imagem 'off/ligada' para a imagem 'quebrada')
    quebradas.innerHTML = ++contador; //innerHTML altera o elemento na página html, nesse caso ele está
    //incrementando 1 no contador.
}
//addEventListener fica observado a espera de um evento para executar algo,
//sua estrutura é id.addEventListener('evento', function);
turnOn.addEventListener ( 'click', lampOn ); //quando o evento de tunOn(id do botão ligar) for um click, executa a função(lampOn)
turnOff.addEventListener ( 'click', lampOff ); //quando o evento de tunOff(id do botão desligar) for um click, executa a função(lampOff)
trocar.addEventListener ('click', lampNew ); //quando o evento de tunOn(id do botão trocar) for um click, executa a função(lampNew)
lamp.addEventListener ( 'mouseover', lampOn ); //quando o evento de lamp(id da imagem inicial) for passar o mouse em cima, executa a função(lampOn)
lamp.addEventListener ( 'mouseleave', lampOff ); //quando o evento de lamp(id da imagem inicial) for tirar o mouse de cima, executa a função(lampOff)
lamp.addEventListener ( 'dblclick', lampBroken); //quando o evento de lamp(id da imagem inicial) for click duplo, executa a função(lampBroken)
   

