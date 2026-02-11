
sessionStorage.setItem('TValor', 0)
window.onload = function () {
// Captura o parâmetro da URL
var params = new URLSearchParams(window.location.search);
var codigo = params.get("codigo");

if (codigo) {
//wal("Código capturado: " + codigo);
sessionStorage.setItem("MeuOrçamento",codigo);
} else {
console.log("Nenhum código encontrado na URL.");
//wal("Nenhum código encontrado!");
}
// Exibe o código capturado (se existir)
// Aguarda 3 segundos e busca no Firestore
setTimeout(function () {
var orcamento = sessionStorage.getItem("MeuOrçamento");
var firebaseConfig = {
apiKey: "AIzaSyBCvQECt03lGjQv6rMCPnP19uI8inxgKxQ",
authDomain: "reparos-a-domicilio.firebaseapp.com",
projectId: "reparos-a-domicilio",
storageBucket: "reparos-a-domicilio.firebasestorage.app",
messagingSenderId: "2081562439",
appId: "1:2081562439:web:ea76d63f3e320c8577f662",
measurementId: "G-M7YCZXPYGM"
};
firebase.initializeApp(firebaseConfig);
var db = firebase.firestore();
db.collection("Orçamentos").doc(orcamento).get().then((doc) => {
if (doc.exists) {
var dados = doc.data();
//alert("Orçamento encontrado:\nCódigo: " + dados.Codigo + "\nCliente: " + dados.Cliente);
document.getElementById("codigoCliente").innerHTML =`Código: <b id='BB'>${dados.Código}</b>`
document.getElementById('codigoCliente').value=dados.Código;
document.getElementById("nomeCliente").innerHTML = `Cliente: <b id='BB2'>${dados.Cliente}</b>`;
document.getElementById("FinalnomeClie").innerHTML = `Cliente: <b id='BB2'>${dados.Cliente}</b>`;
document.getElementById("nomeCliente").value=dados.Cliente;
document.getElementById("telCliente").innerHTML = `Contato (Whats): <b id='BB2'>${dados.Tel_Cliente}</b>`;
document.getElementById("telCliente").value=dados.Tel_Cliente
document.getElementById("cpfCliente").innerHTML = `CPF: <b id='BB2'>${dados.CPF_Cliente}</b>`;
document.getElementById("FinalCPFClie").innerHTML = `CPF: <b id='BB2'>${dados.CPF_Cliente}</b>`;
document.getElementById('cpfCliente').value=dados.CPF_Cliente
document.getElementById("rua").innerHTML = `Rua: <b id='BB2'>${dados.Rua}</b>`;
document.getElementById("numero").innerHTML = `Nº: <b id='BB2'> ${dados.Número}</b>`;
document.getElementById("bairro").innerHTML = `Bairro: <b id='BB2'>${dados.Bairro}</b>`;
document.getElementById("cidade").innerHTML = `Cidade: <b id='BB2'> ${dados.Cidade}</b>`;
document.getElementById("estado").innerHTML = `Estado: <b id='BB2'> ${dados.Estado}</b>`;
document.getElementById("cep").innerHTML = `CEP: <b id='BB2'> ${dados.CEP}</b>`;
document.getElementById("ref").innerHTML = `Referência: <b id='BB2'> ${dados.EndREF}</b>`;
// document.getElementById('').value=
//colaboraor
document.getElementById("nome_Clob").innerHTML = `Prestador: <b id='BB2'> ${dados.Prestador}</b>`;
document.getElementById('nome_Clob').value=dados.Prestador
document.getElementById("RE_Clob").innerHTML = `Nº de registro: <b id='BB2'> ${dados.NRE}</b>`;
document.getElementById('RE_Clob').value=dados.NRE
sessionStorage.setItem('REE',dados.NRE)
document.getElementById("Tel_Clob").innerHTML = `Contato (Whats): <b id='BB2'> ${dados.Tel_Prestador}</b>`;
document.getElementById('Tel_Clob').value=dados.Tel_Prestador
document.getElementById('h3Servi').innerHTML=`Serviço de  <b id='BBb'> ${dados.Serviço}</b>`
document.getElementById('divGeral').style.display='block';
} else {
document.getElementById('divGeral').style.display='none';
Swal.fire({ 
title: "Orçamento não encontrado!", 
text: "Não foi possível localizar o orçamento com o código fornecido.", 
icon: "error", 
color: '#ffffffff',
iconColor: "#c40000ff",
background: "#001813ff",
customClass: { 
popup: 'popup-class', 
title: 'title-class', 
htmlContainer: 'text-class' }
})
setTimeout(function(){
window.open('../index.html', '_self')
// document.getElementById('divInit').style.display='none';
},4000)
}
});
}, 2000);
};
// lista de orçamento para cliente
document.getElementById('divOrçar').style.display='none';
function list(){
  clientelist()
var resp=document.getElementById('divOrçar').style.display;
if(resp=='none'){
document.getElementById('divOrçar').style.display='block';
document.getElementById('divOrçarHeader').style.display='none';
}else{
document.getElementById('divOrçar').style.display='none';
document.getElementById('divOrçarHeader').style.display='none';
}
}
// botão orçar
sessionStorage.setItem('Tranca','');
function OrçarServ(){
var NomeP=sessionStorage.getItem('PresNome')
var passw=sessionStorage.getItem('PresSenha')
var REP= sessionStorage.getItem('PresRE')
var imagemP= sessionStorage.getItem('imgPrest')
var tranca= sessionStorage.getItem('Tranca');
var cadeado=document.getElementById('cadeado');
if(!tranca|| tranca==''){
  document.getElementById('divOrçar').style.display='none';
Swal.fire({
title: '<i class="fa-sharp-duotone fa-solid fa-lock"></i> Password do Prestador!',
html: `
<p id='ppo'>Password <i id='verpassw' class="fa-solid fa-eye"></i></p>
<div id='myFlex'>
<input id='inputPassw' type='password' placeholder='password...'> 
<button id="enterPassw" title="senha">✅OK </button>
</div>
`,
background: '#003153',
color: '#ffffffff',
showCancelButton: true,
showConfirmButton: false,
customClass: {
popup: 'my-customAddServ_'
},
didOpen: () => {
document.body.style.paddingRight = '0px';
}
});
document.getElementById('verpassw').addEventListener('click',function() {
var btn= document.getElementById('inputPassw');
var visão= document.getElementById('verpassw');
if(btn.type=='text'){
btn.type='password'
visão.className='fa-solid fa-eye'
} else{
btn.type='text'
visão.className='fa-solid fa-eye-low-vision'
}
})
document.getElementById('enterPassw').addEventListener('click',function(){
var senhaInput=document.getElementById('inputPassw').value;
if(senhaInput==passw){
cadeado.className='fa-sharp-duotone fa-solid fa-unlock'
swal(`RE: ${REP}`,`Prestador: ${NomeP}`,`${imagemP}`)
setTimeout(function(){
Swal.close()
novoOrçamento()
clientelist()
sessionStorage.setItem('Tranca','logado');
},3000)
}else{
swal('','Prestador não encontrado ','error')
cadeado.className='fa-sharp-duotone fa-solid fa-lock'
}
})
} else{
novoOrçamento()
}
}
function novoOrçamento(){
  document.getElementById('divOrçarHeader').style.display='block';
document.getElementById('divFinalizar').style.display='none'
var resp_=document.getElementById('divOrçar').style.display;
if(resp_=='block'){
document.getElementById('divOrçar').style.display='none'
}else{
document.getElementById('divOrçar').style.display='block'
}
}
// botão finalizar
function finalizar(){
var resp1=document.getElementById('inicioServ').value;//`2000-01-01`
 var resp2=document.getElementById('terminoServ').value;//`2000-01-01`
 if(!resp1|| resp1==`0000-00-00`||!resp2|| resp2==`0000-00-00`){
    swal('Atenção!','Preencha os campos "data inicial e data de tèrmino"')
   }else{
var resp=document.getElementById('divFinalizar').style.display;
if(resp=='block'){
document.getElementById('divFinalizar').style.display='none'
}else{
document.getElementById('divFinalizar').style.display='block'
document.getElementById('a_finalit').click()
}
 }
}
function ADM(){
   var passw=sessionStorage.getItem('PresSenha')
  var REP= sessionStorage.getItem('PresRE')
   var resp1= sessionStorage.getItem('PassW01')
var resp2= sessionStorage.getItem('PassW02')
 Swal.fire({
title: '<i class="fa-sharp-duotone fa-solid fa-lock"></i> Administração!👨‍💼',
html: `
<p id='ppo'>Password <i id='verpassw' class="fa-solid fa-eye"></i></p>
<div id='myFlex'>
<input id='inputPassw' type='password' placeholder='password...'> 
<button id="enterPassw" title="senha">✅OK </button>
</div>
`,
background: '#3d0055',
color: '#ffffffff',
showCancelButton: true,
showConfirmButton: false,
customClass: {
popup: 'my-customAddServ_'
},
didOpen: () => {
document.body.style.paddingRight = '0px';
}
});
document.getElementById('verpassw').addEventListener('click',function() {
var btn= document.getElementById('inputPassw');
var visão= document.getElementById('verpassw');
if(btn.type=='text'){
btn.type='password'
visão.className='fa-solid fa-eye'
} else{
btn.type='text'
visão.className='fa-solid fa-eye-low-vision'
}
})
document.getElementById('enterPassw').addEventListener('click',function(){
var pass = document.getElementById('inputPassw').value;
if(pass== resp1|| pass== resp2){
swal('Sucesso','','success');
document.getElementById('PDF_Final').style.display='block';
 document.getElementById('divBody').style.display='Block';
    document.getElementById('finalitDiv').style.display='none';
}else{
swal('Senha incorreta!','','error');
}
})
}
// botão add serviço
document.addEventListener("DOMContentLoaded", () => {
const campoValorEl = document.getElementById("valorTarefa");
const btnAddMais = document.getElementById("addMais");
const inputTarefa = document.getElementById("inputTarefa");
// restaura valor salvo ao recarregar
if (sessionStorage.getItem('campoV')) {
campoValorEl.value = sessionStorage.getItem('campoV');
}
// adiciona listener uma única vez
campoValorEl.addEventListener("input", () => {
let valor = campoValorEl.value.replace(/\D/g, "");
if (valor) {
let numero = (parseInt(valor, 10) / 100).toFixed(2);
campoValorEl.value = new Intl.NumberFormat("pt-BR", {
style: "currency",
currency: "BRL"
}).format(numero);
}
sessionStorage.setItem('campoV', campoValorEl.value);
});
// botão AddMais
btnAddMais.addEventListener("click", () => { 
const valorFormatado = sessionStorage.getItem('campoV');
const tarefa = inputTarefa.value;
let apenasNumeros = valorFormatado.replace(/\D/g, "");
let numero = parseFloat(apenasNumeros) / 100;

// pega subtotal do h2
let subT = document.getElementById('h2ValorTotal').innerText.replace(/\D/g, "");
subT = subT ? parseFloat(subT) / 100 : 0;
let TotalValor = subT + numero;
// salva no Firebase
var data = localStorage.getItem('data');
var hora = localStorage.getItem('hora');
var IDd = document.getElementById("codigoCliente").value;
var NovaTarefa=document.getElementById('inputTarefa').value;
Swal.fire(`${valorFormatado}`, `${NovaTarefa}`, `success`);
var firebaseConfigure = {
apiKey: "AIzaSyBCvQECt03lGjQv6rMCPnP19uI8inxgKxQ",
authDomain: "reparos-a-domicilio.firebaseapp.com",
projectId: "reparos-a-domicilio",
storageBucket: "reparos-a-domicilio.firebasestorage.app",
messagingSenderId: "2081562439",
appId: "1:2081562439:web:ea76d63f3e320c8577f662",
measurementId: "G-M7YCZXPYGM"
};
firebase.initializeApp(firebaseConfigure);
var dbl = firebase.firestore();
dbl.collection(`${IDd}`).doc(`${IDd}-${hora}`).set({
Valor: valorFormatado,
Tarefa:NovaTarefa,
valorItem:numero,
ID: `${IDd}-${hora}`,
Data:data,
Hora:hora,
Cód: IDd,
});
// atualiza subtotal formatado
var dblV = firebase.firestore();
dblV.collection(`OrçamentoValorTotal`).doc(`${IDd}`).set({
Valor: valorFormatado,
Tarefa:NovaTarefa,
valorTotal:TotalValor,
ID: `${IDd}-${hora}`,
Data:data,
Hora:hora,
Cód: IDd,
});
document.getElementById('inputTarefa').value='';
document.getElementById('valorTarefa').value='';
var list= document.getElementById('listaserv');
list.innerHTML='';
var firebaseConfigure = {
apiKey: "AIzaSyBCvQECt03lGjQv6rMCPnP19uI8inxgKxQ",
authDomain: "reparos-a-domicilio.firebaseapp.com",
projectId: "reparos-a-domicilio",
storageBucket: "reparos-a-domicilio.firebasestorage.app",
messagingSenderId: "2081562439",
appId: "1:2081562439:web:ea76d63f3e320c8577f662",
measurementId: "G-M7YCZXPYGM"
};
firebase.initializeApp(firebaseConfigure);
var db = firebase.firestore();
var produtosRef = db.collection(`${IDd}`);
produtosRef.get().then((querySnapshot) => {
querySnapshot.forEach(doc => {
var doc = doc.data();
var li=document.createElement('div')
var div=document.createElement('div')
var div2=document.createElement('div')
var label=document.createElement('label')
var label2=document.createElement('label')
var botão=document.createElement('button')
li.id='listadiv'
div.id='div1l'
div2.id='div2_L'
label.id='labelV';
label2.id='label_v2';
botão.id='btnV';
label.textContent=`${doc.Tarefa}`;
label2.textContent=`${doc.Valor}`
botão.className='fa-solid fa-trash'
div.appendChild(label)
div2.appendChild(document.createElement('br'));
div2.appendChild(label2)
div2.appendChild(botão)
li.appendChild(div)
li.appendChild(div2)
list.appendChild(li)     
document.getElementById('h2ValorTotal').innerText =
new Intl.NumberFormat("pt-BR", { style: "currency", currency: "BRL" }).format(TotalValor);
sessionStorage.setItem('TValor',TotalValor)
document.getElementById('totalPag').innerHTML=
new Intl.NumberFormat("pt-BR", { style: "currency", currency: "BRL" }).format(TotalValor);
document.getElementById('totalPag').value=new Intl.NumberFormat("pt-BR", { style: "currency", currency: "BRL" }).format(TotalValor);
botão.addEventListener('click',function(){
  var passw=sessionStorage.getItem('PresSenha')
  var REP= sessionStorage.getItem('PresRE')
  Swal.fire({
title: '<i class="fa-sharp-duotone fa-solid fa-lock"></i> Passworddo Prestador!',
html: `
<p id='ppo'>Password <i id='verpassw' class="fa-solid fa-eye"></i></p>
<div id='myFlex'>
<input id='inputPassw' type='password' placeholder='password...'> 
<button id="enterPassw" title="senha">✅OK </button>
</div>
`,
background: '#003153',
color: '#ffffffff',
showCancelButton: true,
showConfirmButton: false,
customClass: {
popup: 'my-customAddServ_'
},
didOpen: () => {
document.body.style.paddingRight = '0px';
}
});
document.getElementById('verpassw').addEventListener('click',function() {
var btn= document.getElementById('inputPassw');
var visão= document.getElementById('verpassw');
if(btn.type=='text'){
btn.type='password'
visão.className='fa-solid fa-eye'
} else{
btn.type='text'
visão.className='fa-solid fa-eye-low-vision'
}
})
document.getElementById('enterPassw').addEventListener('click',function(){
  var respp= document.getElementById('inputPassw').value
  if(respp==passw){
var valor_= sessionStorage.getItem('1Valor_V')
var tarefa_=sessionStorage.getItem('2tarefa_V')
var id_= sessionStorage.getItem('3ID_V')
var cod_= sessionStorage.getItem('4cod_V')
var data_=sessionStorage.getItem('5data_V')
var hora_ =sessionStorage.getItem('6hora_V')
var valortt= sessionStorage.getItem('TValor')
var result=valortt- doc.valorItem
//alert(`valortt ${valortt}__valorDoc ${doc.valorItem}__Resultado: ${result}`)
var dblEx = firebase.firestore();
dblEx.collection(doc.Cód).doc(doc.ID).delete();
var dblx = firebase.firestore();
dblx.collection(`OrçamentoValorTotal`).doc(`${cod_}`).set({
Valor: valor_,
Tarefa:tarefa_,
valorTotal:result,
ID: id_,
Data:data_,
Hora:hora_,
Cód: cod_,
});
setTimeout(function(){
novoOrçamento()
clientelist()
},1000)
Swal.fire('Sucesso!','Taréfa e valor excluidos!','success')
  } else{
    Swal.fire('error','A senha dígitada não confere!','error')
  }
})
});
})
});
})
})
function clientelist(){
var código= document.getElementById('codigoCliente').value;
var list= document.getElementById('listaserv');
list.innerHTML='';
var firebaseConfigure = {
apiKey: "AIzaSyBCvQECt03lGjQv6rMCPnP19uI8inxgKxQ",
authDomain: "reparos-a-domicilio.firebaseapp.com",
projectId: "reparos-a-domicilio",
storageBucket: "reparos-a-domicilio.firebasestorage.app",
messagingSenderId: "2081562439",
appId: "1:2081562439:web:ea76d63f3e320c8577f662",
measurementId: "G-M7YCZXPYGM"
};
firebase.initializeApp(firebaseConfigure);
var db = firebase.firestore();
var produtosRef = db.collection(`${código}`);
produtosRef.get().then((querySnapshot) => {
querySnapshot.forEach(doc => {
var doc = doc.data();
var li=document.createElement('div')
var div=document.createElement('div')
var div2=document.createElement('div')
var label=document.createElement('label')
var label2=document.createElement('label')
var botão=document.createElement('button')
li.id='listadiv'
div.id='div1l'
div2.id='div2_L'
label.id='labelV';
label2.id='label_v2';
botão.id='btnV';
label.textContent=`${doc.Tarefa}`;
label2.textContent=`${doc.Valor}`
botão.className='fa-solid fa-trash'
div.appendChild(label)
div2.appendChild(document.createElement('br'));
div2.appendChild(label2)
div2.appendChild(botão)
li.appendChild(div)
li.appendChild(div2)
list.appendChild(li)
botão.addEventListener('click',function(){

 var passw=sessionStorage.getItem('PresSenha')
  var REP= sessionStorage.getItem('PresRE')
  
  Swal.fire({
title: '<i class="fa-sharp-duotone fa-solid fa-lock"></i> Password do Prestador!',
html: `
<p id='ppo'>Password <i id='verpassw' class="fa-solid fa-eye"></i></p>
<div id='myFlex'>
<input id='inputPassw' type='password' placeholder='password...'> 
<button id="enterPassw" title="senha">✅OK </button>
</div>
`,
background: '#003153',
color: '#ffffffff',
showCancelButton: true,
showConfirmButton: false,
customClass: {
popup: 'my-customAddServ_'
},
didOpen: () => {
document.body.style.paddingRight = '0px';
}
});
document.getElementById('verpassw').addEventListener('click',function() {
var btn= document.getElementById('inputPassw');
var visão= document.getElementById('verpassw');
if(btn.type=='text'){
btn.type='password'
visão.className='fa-solid fa-eye'
} else{
btn.type='text'
visão.className='fa-solid fa-eye-low-vision'
}
})
document.getElementById('enterPassw').addEventListener('click',function(){
  var respp= document.getElementById('inputPassw').value
  if(respp==passw){

var valor_= sessionStorage.getItem('1Valor_V')
var tarefa_=sessionStorage.getItem('2tarefa_V')
var id_= sessionStorage.getItem('3ID_V')
var cod_= sessionStorage.getItem('4cod_V')
var data_=sessionStorage.getItem('5data_V')
var hora_ =sessionStorage.getItem('6hora_V')
var valortt= sessionStorage.getItem('TValor')
var result=valortt- doc.valorItem
//alert(`valortt ${valortt}__valorDoc ${doc.valorItem}__Resultado: ${result}`)
var dblEx = firebase.firestore();
dblEx.collection(doc.Cód).doc(doc.ID).delete();
var dblx = firebase.firestore();
dblx.collection(`OrçamentoValorTotal`).doc(`${cod_}`).set({
Valor: valor_,
Tarefa:tarefa_,
valorTotal:result,
ID: id_,
Data:data_,
Hora:hora_,
Cód: cod_,
});
setTimeout(function(){
novoOrçamento()
clientelist()
},1000)
Swal.fire('Sucesso!','Taréfa e valor excluidos!','success')
}else{
   Swal.fire('error','A senha dígitada não confere!','error')
}
})
})
});
var firebaseConfigi = {
apiKey: "AIzaSyBCvQECt03lGjQv6rMCPnP19uI8inxgKxQ",
authDomain: "reparos-a-domicilio.firebaseapp.com",
projectId: "reparos-a-domicilio",
storageBucket: "reparos-a-domicilio.firebasestorage.app",
messagingSenderId: "2081562439",
appId: "1:2081562439:web:ea76d63f3e320c8577f662",
measurementId: "G-M7YCZXPYGM"
};
firebase.initializeApp(firebaseConfigi);
var dbcc = firebase.firestore();
dbcc.collection("OrçamentoValorTotal").doc(código).get().then((doc) => {
if (doc.exists) {
var dados = doc.data();
document.getElementById('h2ValorTotal').innerText =
new Intl.NumberFormat("pt-BR", { style: "currency", currency: "BRL" }).format(dados.valorTotal);
document.getElementById('totalPag').value=new Intl.NumberFormat("pt-BR", { style: "currency", currency: "BRL" }).format(dados.valorTotal);
sessionStorage.setItem('TValor',dados.valorTotal)
sessionStorage.setItem('1Valor_V',dados.valor)
sessionStorage.setItem('2tarefa_V',dados.Tarefa)
sessionStorage.setItem('3ID_V',dados.ID)
sessionStorage.setItem('4cod_V',dados.Cód)
sessionStorage.setItem('5data_V',dados.Data)
sessionStorage.setItem('6hora_V',dados.Hora)
}
})
})
}
//pretador iniciar
function verPrest_(){
  clientelist()
var RE_Prest_= sessionStorage.getItem('REE')
var firebaseConfig = {
apiKey: "AIzaSyBCvQECt03lGjQv6rMCPnP19uI8inxgKxQ",
authDomain: "reparos-a-domicilio.firebaseapp.com",
projectId: "reparos-a-domicilio",
storageBucket: "reparos-a-domicilio.firebasestorage.app",
messagingSenderId: "2081562439",
appId: "1:2081562439:web:ea76d63f3e320c8577f662",
measurementId: "G-M7YCZXPYGM"
};
firebase.initializeApp(firebaseConfig);
var dbP=firebase.firestore();
dbP.collection('Colaboradores').doc(`${RE_Prest_}`).get().then((doc)=>{
var dados= doc.data()
sessionStorage.setItem('PresNome',dados.Nome)
sessionStorage.setItem('PresSenha',dados.Senha)
sessionStorage.setItem('PresRE',dados.RE)
sessionStorage.setItem('imgPrest',dados.Foto)
})
}
setTimeout(function(){
verPrest_()
},3000)
// ver mais prestador
function verPrest(){
var RE_Prest= document.getElementById('RE_Clob').value;
var firebaseConfig = {
apiKey: "AIzaSyBCvQECt03lGjQv6rMCPnP19uI8inxgKxQ",
authDomain: "reparos-a-domicilio.firebaseapp.com",
projectId: "reparos-a-domicilio",
storageBucket: "reparos-a-domicilio.firebasestorage.app",
messagingSenderId: "2081562439",
appId: "1:2081562439:web:ea76d63f3e320c8577f662",
measurementId: "G-M7YCZXPYGM"
};
firebase.initializeApp(firebaseConfig);
var dbc=firebase.firestore();
dbc.collection('Colaboradores').doc(`${RE_Prest}`).get().then((doc)=>{
var doc= doc.data()
Swal.fire({ title: `Nº: ${doc.ID}`,
text: ``, 
html:`Nome do Prestador: <br> ${doc.Nome}<br> --------------------------------<br> <br> Telefone (whatsApp)<br> ${doc.Telefone}<br> ---------------------------<br> <br>`,
imageUrl: `${doc.Foto}`,
background: '#003253',
color: '#fff', // cor do texto });
allowOutsideClick: false,
showConfirmButton: true,
customClass: {
popup: 'my-custom' // Aplica a classe CSS personalizada
},
didOpen: () => {
document.body.style.paddingRight = '0px';  
}
})
})
}
// falar por whats com cliente
function telCliente(){
var nomeCliente= document.getElementById('nomeCliente').value;
var Tel_Cliente= document.getElementById('telCliente').value.replace(/\D/g, '');
var nomePrest= document.getElementById('nome_Clob').value;
var RE_Prest= document.getElementById('RE_Clob').value;
var código= document.getElementById('codigoCliente').value;
//alert(Tel_Cliente)
Swal.fire({
title: `Contato Cliente  <i class="fa-brands fa-whatsapp"></i>`,
html: `
<button id="whats" title="">WhatsApp <i id='i_whats_start' class="fa-brands fa-whatsapp"></i></button>            

`,
background: 'rgb(255, 255, 255)', // Cor de fundo
color: 'black', // Cor do texto// Cor do texto
showCancelButton: true,
showConfirmButton: false,
customClass: {
popup: 'my-custom_compartilhar' // Aplica a classe CSS personalizada
},
didOpen: () => {
document.body.style.paddingRight = '0px';
}
});
document.getElementById('whats').addEventListener('click',function(){
var url=encodeURIComponent(`https://rd-reparos-domicilio.netlify.app/html/orcaserv.html?codigo=${código}`) ;
var Pagina = encodeURIComponent("https://rd-reparos-domicilio.netlify.app");
var numero = `+55${Tel_Cliente}`; // Substitua pelo número de destino, incluindo o código do país
var msm=`📞(pedido de contato) \n\n👨‍💼 Nosso prestador de serviço ${nomePrest}\n Nº de registro ${RE_Prest}\nGostaria de estabelecer contato referente ao orçamento ou serviço solicitado\n------------------------------------------------\n🛠️RD- Serviço com qualidade e segurança para sua casa!\n\n`;
var Url = "https://wa.me/"+`${numero}?text=${encodeURIComponent(msm)}✅link: 👉 ${url}`;
window.open(Url,"_blank" );
});
}
// falar por whats com Prestador
function telPrestador(){
var nomeCliente= document.getElementById('nomeCliente').value;
var Tel_Cliente= document.getElementById('telCliente').value.replace(/\D/g, '');
var cpfCliente=document.getElementById('cpfCliente').value;
var nomePrest= document.getElementById('nome_Clob').value;
var Tel_Prestador= document.getElementById('Tel_Clob').value.replace(/\D/g, '');
var RE_Prest= document.getElementById('RE_Clob').value;
var código= document.getElementById('codigoCliente').value;
//alert(Tel_Cliente)
Swal.fire({
title: `Contato prestador  <i class="fa-brands fa-whatsapp"></i>`,
html: `
<button id="whats" title="">WhatsApp <i id='i_whats_start' class="fa-brands fa-whatsapp"></i></button>            
`,
background: 'rgb(255, 255, 255)', // Cor de fundo
color: 'black', // Cor do texto// Cor do texto
showCancelButton: true,
showConfirmButton: false,
customClass: {
popup: 'my-custom_compartilhar' // Aplica a classe CSS personalizada
},
didOpen: () => {
document.body.style.paddingRight = '0px';
}
});

document.getElementById('whats').addEventListener('click',function(){
var url=encodeURIComponent(`https://rd-reparos-domicilio.netlify.app/html/orcaserv.html?codigo=${código}`);
var Pagina = encodeURIComponent("https://rd-reparos-domicilio.netlify.app");
var numero = `+55${Tel_Prestador}`; // Substitua pelo número de destino, incluindo o código do país
var msm=`📞(pedido de contato) \n\n👨‍💼 Nosso Cliente ${nomeCliente}\n CPF ${cpfCliente}\nGostaria de estabelecer contato referente ao orçamento ou serviço solicitado\n------------------------------------------------\n🛠️RD- Serviço com qualidade e segurança para sua casa!\n\n`;
var Url = "https://wa.me/"+`${numero}?text=${encodeURIComponent(msm)}✅link: 👉 ${url}`;
window.open(Url,"_blank" );
});
}
// Função de alerta personalizada carregar
// Exibe o alerta por 5 segundos
function AlertaInicial(){
Swal.fire({
title: ``,
text: ``,
html:` <h2>Aguarde o Carregamento...</h2>
`,
background: 'rgba(255, 255, 255, 0)', // Cor de fundo
color: '#001b0eff', // Cor do texto
allowOutsideClick: false,
showConfirmButton: false,
customClass: {
popup: 'my-custom_alert' // Aplica a classe CSS personalizada
},
didOpen: () => {
document.body.style.paddingRight = '0px';        
}
}); 
setTimeout(function(set){
document.getElementById('divInit').style.display='none';
Swal.close()
},7000)
}
// Tela Cheia
function toggleFullScreen() {
if ((document.fullScreenElement && document.fullScreenElement !== null) ||
(!document.mozFullScreen && !document.webkitIsFullScreen)) {
if (document.documentElement.requestFullScreen) {
document.documentElement.requestFullScreen();
} else if (document.documentElement.mozRequestFullScreen) {
document.documentElement.mozRequestFullScreen();
} else if (document.documentElement.webkitRequestFullScreen) {
document.documentElement.webkitRequestFullScreen(Element.ALLOW_KEYBOARD_INPUT);
}
} else {
if (document.cancelFullScreen) {
document.cancelFullScreen();
} else if (document.mozCancelFullScreen) {
document.mozCancelFullScreen();
} else if (document.webkitCancelFullScreen) {
document.webkitCancelFullScreen();
}
}
}
AlertaInicial()
function initPage(){
Swal.fire({ 
title: ``,
text: ``, 
html:`
<img src="../src/RDzinho.png" alt="Logo RD Reparos a Domicílio" class="logo-swal" width="70%">
<div id="divInitTime"> 
<button id='btnTime'>⏳</button>
<div id="myProgress" title="Progresso">
<div id="myBar">10%</div>
</div>
</div>
`,
imageUrl: ``,
background: '#00325300',
color: '#fff', // cor do texto });
allowOutsideClick: false,
showConfirmButton: false,
customClass: {
popup: 'my-customTime' // Aplica a classe CSS personalizada
},
didOpen: () => {
document.body.style.paddingRight = '0px';   
}
})
document.getElementById('myProgress').style.display = 'block'
var i = 0;
if (i == 0){
i = 1;
var elem = document.getElementById("myBar");
var width = 1;
var idd = setInterval(frame, 70);
function frame() {
if (width >= 100) {

i = 0;
 document.getElementById('myProgress').style.display = 'none'
 swalclose()
 clearInterval(idd)
//document.getElementById('imgcad').value = `${url_imagem}`
} else {
width++;
elem.style.width = width + "%";
elem.innerHTML = width + "%"; // Atualiza o texto do rótulo
}
}
}
}
function swalclose(){
Swal.close()
}
initPage()

//Data e Hora
setInterval(function() {
const newDate = new Date()
var dia = String(newDate.getDate()).padStart(2, '0');
var mes = String(newDate.getMonth() + 1).padStart(2, '0');
var ano = String(newDate.getFullYear()).padStart(2, '0')
var data = `${dia}/${mes}/${ano}`
const now = new Date();
const hours = now.getHours().toString().padStart(2, '0');
const minutes = now.getMinutes().toString().padStart(2, '0');
const seconds = now.getSeconds().toString().padStart(2, '0');
const timeString = `${hours}:${minutes}:${seconds}`;
// const lbl_data = document.getElementById('lbl-data');
// lbl_data.innerHTML = `${data}`

//lert(resp)

localStorage.setItem('data', data)
localStorage.setItem('hora', timeString)
}, 1000)

document.getElementById("aPDF").addEventListener("click", function() {
var paragrafo=`

1. Objeto do Contrato  
   O presente contrato tem como objeto a prestação de serviços residenciais pela empresa RD – Reparos a Domicílio, conforme orçamento previamente aprovado pelo cliente.<br><br>


2. Execução dos Serviços  
   - Os serviços serão realizados por colaboradores devidamente designados pela empresa.  
   - O prazo de execução será informado no momento da abertura da ordem de serviço.  .<br><br>

3. Obrigações da Empresa  
   - Executar os serviços com qualidade e dentro das normas técnicas aplicáveis.  
   - Garantir a segurança dos colaboradores durante a execução.  
   - Informar previamente ao cliente sobre qualquer necessidade adicional ou alteração no orçamento.  .<br><br>

4. Obrigações do Cliente*  
   - Fornecer acesso adequado ao local de execução dos serviços.  
   - Cumprir com o pagamento acordado no orçamento aprovado.  
   - Informar corretamente seus dados pessoais (nome completo e CPF).  .<br><br>

5. Pagamento 
   O pagamento será realizado conforme condições estabelecidas no orçamento aceito pelo cliente, podendo incluir sinal, parcelamento ou pagamento integral após a conclusão do serviço.
   .<br><br>

6. Garantia  
   Os serviços realizados possuem garantia de 90 (noventa) dias, limitada à execução do serviço contratado. Materiais utilizados seguem a garantia do fabricante.
.<br><br>
7. Rescisão 
   O contrato poderá ser rescindido por qualquer das partes em caso de descumprimento das obrigações aqui estabelecidas, mediante comunicação prévia.
.<br><br>
8. Aceite Eletrônico  
   O cliente declara ter lido e compreendido todas as cláusulas deste contrato e concorda com sua integralidade ao marcar o campo *“Aceito os termos”* na página da empresa.
   .<br><br>
`
Swal.fire('Cláusulas Contratuais',`${paragrafo}`,'info')

});

function AceitarContrato(){
  var resp=sessionStorage.getItem("MeuOrçamento");
  var data = localStorage.getItem('data');
  var hora = localStorage.getItem('hora');
  var nomeCliente= document.getElementById('nomeCliente').value;
  var Tel_Cliente= document.getElementById('telCliente').value.replace(/\D/g, '');
  var cpfCliente=document.getElementById('cpfCliente').value;
  var Adiatamento= document.getElementById('entradaPag').value
  var dataInicio= document.getElementById('inicioServ').value;
  var dataFim= document.getElementById('terminoServ').value
  var Parcelas= document.getElementById('selectParcelas').value
  var valorParcelas= document.getElementById('parcelasPag').value
  var ValorServ=document.getElementById('totalPag').value;
  var Obs=document.getElementById('OBSFinal').value;
  const checkbox = document.getElementById("aceite");
   if (!checkbox.checked) {
    swal("Você precisa aceitar os termos para continuar.",'','error');
     
  } else {
    Swal.fire('Ordem de serviço aberta!','Obrigado pela preferencia e confiança.','success');
    var firebaseConfig = {
apiKey: "AIzaSyBCvQECt03lGjQv6rMCPnP19uI8inxgKxQ",
authDomain: "reparos-a-domicilio.firebaseapp.com",
projectId: "reparos-a-domicilio",
storageBucket: "reparos-a-domicilio.firebasestorage.app",
messagingSenderId: "2081562439",
appId: "1:2081562439:web:ea76d63f3e320c8577f662",
measurementId: "G-M7YCZXPYGM"
};
firebase.initializeApp(firebaseConfig);
var dbf = firebase.firestore();
dbf.collection('Orçamentos_Finalizados').doc(`${resp}`).set({
Aceite:'Sim',
Cód: resp,
Data:data,
Hora:hora,
Cliente:nomeCliente,
Tel_Cliente:Tel_Cliente,
CPF_Cliente:cpfCliente,
LinkPDF:'',
Contrato:'',
valorServiço:ValorServ,
Adiantamento:Adiatamento,
Data_inicio:dataInicio,
Data_fim:dataFim,
Parcelas:Parcelas,
Valor_Parcelas:valorParcelas,
OBS:Obs,
})
setTimeout(function(){
window.location.reload()
},1000)
}}

setTimeout(function(){
    var resp=sessionStorage.getItem("MeuOrçamento");
 
  var firebaseConfig = {
apiKey: "AIzaSyBCvQECt03lGjQv6rMCPnP19uI8inxgKxQ",
authDomain: "reparos-a-domicilio.firebaseapp.com",
projectId: "reparos-a-domicilio",
storageBucket: "reparos-a-domicilio.firebasestorage.app",
messagingSenderId: "2081562439",
appId: "1:2081562439:web:ea76d63f3e320c8577f662",
measurementId: "G-M7YCZXPYGM"
};
firebase.initializeApp(firebaseConfig);
var dbf = firebase.firestore();
dbf.collection('Orçamentos_Finalizados').doc(`${resp}`).get().then((doc)=>{
var dados= doc.data()
document.getElementById("vigentNome").innerHTML=`Cliente: ${dados.Cliente}`
document.getElementById("vigentID").innerHTML=`ID: ${dados.Cód}`
document.getElementById("vigentCPF").innerHTML=`CPF: ${dados.CPF_Cliente}`
document.getElementById("aPDFvigente").href=` ${dados.LinkPDF}`
document.getElementById('vigentValor').innerHTML=`Total:  ${dados.valorServiço}`
document.getElementById('entradaPag').value= dados.Adiantamento
document.getElementById('inicioServ').value=dados.Data_inicio
document.getElementById('terminoServ').value=dados.Data_fim
document.getElementById('selectParcelas').value=dados.Parcelas
document.getElementById('parcelasPag').value=dados.Valor_Parcelas
document.getElementById('totalPag').value=dados.valorServiço
document.getElementById('OBSFinal').value=dados.OBS

if( dados.Aceite=='Sim'){
   document.getElementById('finalitDiv').style.display='block';
document.getElementById('divBody').style.display='none';
document.getElementById('btnMenu').style.display='block';
swal('Orçamento APROVADO!',`Data e Hora: ${dados.Data} às ${dados.Hora}`,'success')
  
}else{
  document.getElementById('divBody').style.display='Block';
    document.getElementById('finalitDiv').style.display='none';
    document.getElementById('btnMenu').style.display='none';
  
}
})
},7000);
function divclick(){
  var nome = document.getElementById('vigentNome').innerText;
  var id = document.getElementById('vigentID').innerText;
  var cpf = document.getElementById('vigentCPF').innerText;
  var valor = document.getElementById('vigentValor').innerText;
  var dataInicio= document.getElementById('inicioServ').value;
  var dataFim= document.getElementById('terminoServ').value;
  
  Swal.fire({
    title: `Detalhes do Orçamento`,
    html: `${nome}<br>${id}<br>${cpf}<br>${valor}<br><br>Inicio: ${dataInicio}<br>Termino: ${dataFim}`,
    background: '#003253',
    color: '#fff', // cor do texto
    allowOutsideClick: true,
    showConfirmButton: true,
    customClass: {
      popup: 'my-custom' // Aplica a classe CSS personalizada
}
  });
}
function gerarPDF_(){
document.getElementById('PDF_Final').style.display='none';
document.getElementById('btnAceitar').style.display='none';
  setTimeout(function(){
gerarPDF()
  },1000);
}
//forma de pagamento
document.getElementById('inicioServ').value=`0000-00-00`
document.getElementById('terminoServ').value=`2000-00-00`

var firebaseConfig = {
apiKey: "AIzaSyBCvQECt03lGjQv6rMCPnP19uI8inxgKxQ",
authDomain: "reparos-a-domicilio.firebaseapp.com",
projectId: "reparos-a-domicilio",
storageBucket: "reparos-a-domicilio.firebasestorage.app",
messagingSenderId: "2081562439",
appId: "1:2081562439:web:ea76d63f3e320c8577f662",
measurementId: "G-M7YCZXPYGM"
};
firebase.initializeApp(firebaseConfig);
var adbb = firebase.firestore();
var produtosRef = adbb.collection(`Admin`);
produtosRef.get().then((querySnapshot) => {
querySnapshot.forEach(doc => {
var doc = doc.data();
var coment = querySnapshot.size
sessionStorage.setItem('PassW01', doc.Passw01)
sessionStorage.setItem('PassW02', doc.Passw02)
sessionStorage.setItem('teladmin',doc.Telefone)
//alert(doc.Telefone)
setTimeout(function(){
},2000)
})
})
// forma de pagamento
function calcularentrada(){
  var valor1= document.getElementById('entradaPag').value.replace(/\D/g, "");
  valor1= parseFloat(valor1)/100;
  document.getElementById('entradaPag').value=new Intl.NumberFormat("pt-BR", { style: "currency", currency: "BRL" }).format(valor1);
};
function calcularParcelas(){
   var valor2= document.getElementById('parcelasPag').value.replace(/\D/g, "");
  valor2= parseFloat(valor2)/100;
  document.getElementById('parcelasPag').value=new Intl.NumberFormat("pt-BR", { style: "currency", currency: "BRL" }).format(valor2);
}