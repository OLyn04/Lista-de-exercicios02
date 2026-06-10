
let ham = 0;
let piz = 0;
let ref = 0;
let flag = ' 1';

let votos = 0;
let alv = 0;
let btu = 0;
let cet = 0;
let ver = 1;

let cal = 0;
let cam = 0;
let sap = 0;
let flag2 = ' 1';



// Exercício 1
function Despertador(){
  let n1 = parseInt(document.getElementById('in01').value);
  let res01 = 0; 
  
  if(isNaN(n1)){
    res01 = 'Informe um número VÁLIDO!';
  } else {
    switch (n1) {
      case 1: 
        res01 = 'Hoje é o dia mais perto do inferno';
        break;
      case 2: 
        res01 = 'hoje é o inferno';
        break;
      case 3: 
        res01 = 'Hoje é um inferno, menos inferno';
        break;
      case 4: 
        res01 = 'Hoje não é bom e nem ruim, é meio termo';
        break;
      case 5: 
        res01 = 'Hoje está perto do fim, mas não é o fim......';
        break;
      case 6: 
        res01 = 'Hoje.........finalmente.....acabou...... ';
        break;
      case 7: 
        res01 = 'shhhh nao grita';
        break;
      default:
        res01 = 'Informe um número do dia da semana válido (1 - 7)';
    }
  }
  document.getElementById('out01').textContent = res01;
}

// Exercício 2
function Calc_Padeiro(){
  let n2 = parseInt(document.getElementById('in02').value);
  let n3 = parseInt(document.getElementById('in03').value);
  let res02 = 0;
  
  if(isNaN(n2) || isNaN(n3)){
    res02 = 'Informe a quantidade válida';
  } else {
    let valor_paes = n2 * 0.5;
    let valor_broas = n3 * 1.5;
    res02 = 'Total das vendas do dia: R$' + (valor_broas + valor_paes);
  }
  document.getElementById('out02').textContent = res02;
}

// Exercício 3
function Calc_Altura(){
  let n4 = parseInt(document.getElementById('in04').value);
  let res03 = 0;
  let altura = 2;
  
  if(isNaN(n4)){
    res03 = 'Informe uma idade válida';
  } else {
    if(n4 <= 0){
      res03 = 'Tem que ser maior que 0';
    } else {
      for(let i = 1; i < n4; i++){
        altura = altura * 2;
      }
      res03 = 'A árvore tem ' + altura + ' metros de altura';
    }
  }
  document.getElementById('out03').textContent = res03;
}

// Exercício 4
function Verificar_senha(){
  let n5 = parseInt(document.getElementById('in05').value);
  let res04 = 0;
  let senha = 4004;
  
  if(n5 == senha){
    res04 = 'Acesso Liberado';
  } else {
    res04 = 'Acesso NEGADO';
  }
  document.getElementById('out04').textContent = res04;
}

// Exercício 5
function Adicionar_Pedido(){
  let n6 = parseInt(document.getElementById('in06').value);
  let res05 = '';
  let total = '';
  
  if(flag){
    switch(n6){
      case 1: 
        ham++;
        res05 = '1 Hambúrguer adicionado ao carrinho.';
        break;
      case 2:
        piz++;
        res05 = '1 Pizza adicionada ao carrinho.';
        break;
      case 3:
        ref++;
        res05 = '1 Refrigerante adicionado ao carrinho.';
        break;
      case 4:
        total = 'Pedido finalizado: <br>';
        total = total + 'Hambúrguer(es):' + ham + '<br>';
        total = total + 'Pizza(s):' + piz + '<br>';
        total = total + 'Refrigerante(s):' + ref + '<br>';
        total = total + 'Total a pagar: R$';
        total = total + ((ham * 12) + (piz * 20) + (ref * 5));
        res05 = total;
        flag = 0;
    }
    document.getElementById('out05').innerHTML = res05;
  }
}

// Exercício 6
function votar(){
  let n7 = parseInt(document.getElementById('in07').value);
  let res06 = ' ';
  
  if(ver){
    switch(n7){
      case 1: 
        alv++;
        res06 = 'Voto nº ' + votos + ' foi registrado';
        votos++;
        document.getElementById('in07').value = '';
        break;
      case 2:
        btu++;
        res06 = 'Voto nº ' + votos + ' foi registrado';
        votos++;
        document.getElementById('in07').value = '';
        break;
      case 3:
        cet++;
        res06 = 'Voto nº ' + votos + ' foi registrado';
        votos++;
        document.getElementById('in07').value = '';
        break;
      case 0:
        ver = 0;
        res06 = 'Votação encerrada <br>';
        res06 = res06 + 'Alvo recebeu ' + alv + ' votos('+(alv/votos*100)+'%) <br>';
        res06 = res06 + 'Btus recebeu ' + btu + ' votos('+(btu/votos*100)+'%) <br>';
        res06 = res06 + 'Cetas recebeu ' + cet + ' votos('+(cet/votos*100)+'%) <br>';
        res06 = res06 + 'Total de votos ';
        res06 = res06 + (alv + btu + cet);
    }
    document.getElementById('out06').innerHTML = res06;
  }
}

// Exercício 7
function Adicionar_item(){
  let n8 = parseInt(document.getElementById('in08').value);
  let res07 = '';
  let totar = '';
  
  if(flag2){
    switch(n8){
      case 1: 
        cal++;
        res07 = '1 calcinha adicionada ao carrinho.';
        break;
      case 2:
        cam++;
        res07 = '1 camiseta adicionada ao carrinho.';
        break;
      case 3:
        sap++;
        res07 = '1 sapato adicionado ao carrinho.';
        break;
      case 0:
        totar = 'Compra finalisada: <br>';
        totar = totar + 'Calzinha(s):' + cal + '<br>';
        totar = totar + 'Camiseta(s):' + cam + '<br>';
        totar = totar + 'Sapato(s):' + sap + '<br>';
        totar = totar + 'Total a pagar: R$';
        totar = totar + ((cal * 25) + (cam * 20) + (sap * 100));
        res07 = totar;
        flag2 = 0;
    }
    document.getElementById('out07').innerHTML = res07;
  }
}

// Exercício 8
function Decompor(){
  let n9 = parseInt(document.getElementById('in09').value);
  let res08 = '';
  let uni, dez, cen, uni_m, dez_m, cen_m;
  
  if(n9 >= -999999 && n9 <= 999999){
    uni = n9 % 10; 
    n9 = (n9 - uni) / 10; 
    dez = n9 % 10; 
    n9 = (n9 - dez) / 10; 
    cen = n9 % 10; 
    n9 = (n9 - cen) / 10; 
    uni_m = n9 % 10; 
    n9 = (n9 - uni_m) / 10; 
    dez_m = n9 % 10; 
    n9 = (n9 - dez_m) / 10; 
    cen_m = n9 % 10; 
    
    res08 = 'Unidade(s): ' + uni + '<br>';
    res08 = res08 + 'Dezena(s): ' + dez + '<br>';
    res08 = res08 + 'Centena(s): ' + cen + '<br>';
    res08 = res08 + 'Unidade(s) de Milhar: ' + uni_m + '<br>';
    res08 = res08 + 'Dezena(s) de Milhar: ' + dez_m + '<br>';
    res08 = res08 + 'Centena(s) de Milhar: ' + cen_m + '<br>';
  } else {
    res08 = 'Valores válidos devem ser de -999999 até 999999';
  }
  document.getElementById('out08').innerHTML = res08;
}

// Exercício 9
function calcular(){
  let n10 = parseInt(document.getElementById('in10').value);
  let ovo = 0.6;
  let res09 = '';
  
  if((n10)<=0 || isNaN(n10)){
    res09 = 'Digite um valor válido e maior que 0.';
  } else {
    res09 = 'A quantidade de ovos necessários é de: ' + ovo * n10;
  }
  document.getElementById('out09').textContent = res09;
}

// Exercício 10
function VerificarP(){
  let n11 = parseInt(document.getElementById('in11').value);
  let n12 = parseInt(document.getElementById('in12').value);
  let n13 = parseInt(document.getElementById('in13').value);
  let n14 = parseInt(document.getElementById('in14').value);
  let n15 = parseInt(document.getElementById('in15').value);
  let n16 = parseInt(document.getElementById('in16').value);
  let res10 = '';
      
  if(isNaN(n11) || isNaN(n12) || isNaN(n13) || isNaN(n14) || isNaN(n15) || isNaN(n16) ){
    res10 = 'Digite um valor válido. Zero se houver uma vaga vazia';
  }
  document.getElementById('out10').textContent = res10;
}

// Exercício 11
let P5 = 10;
let P100 = 5;
function Usar_desconto(){
  let n17 = parseInt(document.getElementById('in17').value);
  let res11= '';
  
  if(isNaN(n17)){
    res11 = 'Insira um valor válido';
  } else {
    if(n17 >= 50){
      n17 = n17/100 * P5;
      res11 = n17;
    } else {
      if(n17 >= 100){
       
        n17 = n17/100 * P100; 
        res11 = n17;
      }
    }
  }
  document.getElementById('out11').textContent = res11;
}

// Exercício 12
function averiguar(){
  let res12 = '';
  let n18 = parseInt(document.getElementById('in18').value);
  
  if(isNaN(n18)){
    res12 = 'Insira um número válido';
  } else {
    if(n18 % 2 == 0 && n18 % 7 == 0){
      res12 = 'o numero '+ n18 + ' é suspeito';
    } else {
      res12 = 'o numero ' + n18 + ' nao é suspeito';
    }
  }
  document.getElementById('out12').textContent = res12; 
}   

// Exercício 13
function contar(){
  let n19 = parseInt(document.getElementById('in19').value);
  let n20 = parseInt(document.getElementById('in20').value);
  let res13 = '';
  
  if(isNaN(n19) || isNaN(n20)){
    res13 = 'informe dois números válidos!';
  } else {
    if(n19 == n20){
      res13 = n19;
    } else {
      if(n19 > n20){
        for(let i = n19; i >= n20; i--){
          res13 = res13 + i + ' ';
        }
      } else {
        for(let i = n19; i <= n20; i++){
          res13 = res13 + i + ' ';
        }
      }
    }
  }
  document.getElementById('out13').textContent = res13;
}

// Exercício 14
function sacar() {
  let in21 = parseInt(document.getElementById('in21').value);
  let res14 = '';

  if (isNaN(in21) || in21 < 5 || in21 % 5 !== 0) {
    res14 = 'Valor inválido. Digite um valor múltiplo de 5.';
  } else {
    let notas100 = parseInt(in21 / 100);
    in21 = in21 % 100;

    let notas50 = parseInt(in21 / 50);
    in21 = in21 % 50;

    let notas20 = parseInt(in21 / 20);
    in21 = in21 % 20;

    let notas10 = parseInt(in21 / 10);
    in21 = in21 % 10;

    let notas5 = parseInt(in21 / 5);
    in21 = in21 % 5;

    res14 += 'Notas de R$100: ' + notas100 + '<br>';
    res14 += 'Notas de R$50: ' + notas50 + '<br>';
    res14 += 'Notas de R$20: ' + notas20 + '<br>';
    res14 += 'Notas de R$10: ' + notas10 + '<br>';
    res14 += 'Notas de R$5: ' + notas5;
  }
  document.getElementById('resultado1').innerHTML = res14;
}

// Exercício 15
function checar() {
  let v = document.getElementById("num").value;
  let n = parseInt(v);
  let m = "";
  let c = "black";

  if (isNaN(n) || n <= 0 || n > 999999) {
    m = "Entrada inválida. Use um número entre 1 e 999999.";
  } else {
    let o = n.toString();
    let i = o.split("").reverse().join("");

    if (o === i) {
      m = `Sim, ${n} é um palíndromo.`;
    } else {
      m = `Não, ${n} não é um palíndromo.`;
    }
  }

  let r = document.getElementById("msg");
  r.textContent = m;
  r.style.color = c;
}
