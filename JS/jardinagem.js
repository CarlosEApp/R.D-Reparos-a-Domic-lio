
//limpar formulário
function liparFormulario(){
 document.getElementById('inputNome').value=''
 document.getElementById('inputCPF').value=''
 document.getElementById('inputTel').value=''
 document.getElementById('Input_rua').value=''
 document.getElementById('Input_numero').value=''
 document.getElementById('Input_bairro').value=''
 document.getElementById('Input_cidade').value=''
 document.getElementById('Input_estado').value=''
 document.getElementById('inputemail').value=''
 document.getElementById('Input_cep').value=''
 document.getElementById('Input_Ref').value=''
}
// format CPF cliente
function CPF_Cliente(event) {
let input = event.target;
let value= input.value.replace(/\D/g, ''); // Remove caracteres não numéricos
if (value.length > 11) value = value.slice(0, 11); // Limita ao tamanho correto
let formattedValue = value.replace(/^(\d{3})(\d{3})(\d{3})(\d{2})$/, '$1.$2.$3-$4');
input.value = formattedValue;
}
// format Tel cliente
document.getElementById('inputTel').addEventListener('input', function (e) {
let value = e.target.value.replace(/\D/g, ''); // Remove caracteres não numéricos
if (value.length > 11) value = value.slice(0, 11); // Limita ao tamanho correto
let formattedValue = value.replace(/^(\d{2})(\d)/, '($1) $2')
   .replace(/(\d{4})(\d{4})$/, '$1-$2');
e.target.value = formattedValue;
});
// format cep
function formatarCEP(cep) {
cep = cep.replace(/\D/g, ""); // Remove caracteres não numéricos
cep = cep.replace(/(\d{5})(\d)/, "$1-$2"); // Adiciona o hífen no formato XXXXX-XXX
return cep;
}
function aplicarMascaraCEP(event) {
event.target.value = formatarCEP(event.target.value);
}
sessionStorage.setItem('SERV','')
//Enviar formuylario
function falecom_bt(){
var data= localStorage.getItem('data')
var hora= localStorage.getItem('hora')
var inp1= document.getElementById('inputNome').value;
var inp2= document.getElementById('inputCPF').value;
var inp3= document.getElementById('inputTel').value;
var inp4= document.getElementById('Input_rua').value;
var inp5= document.getElementById('Input_numero').value;
var inp6= document.getElementById('Input_bairro').value;
var inp7= document.getElementById('Input_cidade').value;
var inp8= document.getElementById('Input_estado').value;
// Opcionais
var inp9= document.getElementById('inputemail').value;
var inp10= document.getElementById('Input_cep').value;
var inp11= document.getElementById('Input_Ref').value;
var serv=sessionStorage.getItem('SERV');

 if(!inp1||inp1==''){
  document.getElementById('inputNome').style.borderColor='red'
 }else{
   document.getElementById('inputNome').style.borderColor='#0f8000'
 };
  if(!inp2||inp2==''){
  document.getElementById('inputCPF').style.borderColor='red'
 }else{
   document.getElementById('inputCPF').style.borderColor='#0f8000'
 };
  if(!inp3||inp3==''){
  document.getElementById('inputTel').style.borderColor='red'
 }else{
   document.getElementById('inputTel').style.borderColor='#0f8000'
 };
  if(!inp4||inp4==''){
  document.getElementById('Input_rua').style.borderColor='red'
 }else{
   document.getElementById('Input_rua').style.borderColor='#0f8000'
 };
   if(!inp5||inp5==''){
  document.getElementById('Input_numero').style.borderColor='red'
 }else{
   document.getElementById('Input_numero').style.borderColor='#0f8000'
 };
   if(!inp6||inp6==''){
  document.getElementById('Input_bairro').style.borderColor='red'
 }else{
   document.getElementById('Input_bairro').style.borderColor='#0f8000'
 };
    if(!inp7||inp7==''){
  document.getElementById('Input_cidade').style.borderColor='red'
 }else{
   document.getElementById('Input_cidade').style.borderColor='#0f8000'
 };
     if(!inp8||inp8==''){
  document.getElementById('Input_estado').style.borderColor='red'
 }else{
   document.getElementById('Input_estado').style.borderColor='#0f8000'
 };
  if(!inp1||inp1==''||!inp2||inp2==''||!inp3||inp3==''||!inp4||inp4==''||!inp5||inp5==''||!inp6||inp6==''||!inp7||inp7==''||!inp8||inp8==''){
 
  Swal.fire('','Cadastro incompleto','error')
  setTimeout(function(){
Swal.close()
  },2000)
} else{
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
 var dbf=firebase.firestore();
  dbf.collection(`PDO_${serv}`).doc(`${inp2}`).set({
 Nome:inp1,
 CPF:inp2,
 Tel:inp3,
 Rua:inp4,
 Numero:inp5,
 Bairro:inp6,
 Cidade:inp8,
 Email:inp9,
 CEP:inp10,
 REF:inp11,
 SERV: serv,
 Data:data,
 Hora:hora,
 })
 Swal.fire('','Cadastro completo!','success')
   setTimeout(function(){
Swal.close()
var TelAD=sessionStorage.getItem('teladmin')
var pagina =`https://rd-reparos-domicilio.netlify.app`;
var NTF = `+55${TelAD}`;
//var url = "https://rd-reparos-domicilio.netlify.app/html/orcaserv.html?codigo=" + inp9;
var whatsappMessage =`📝Pedido de Orçamento:\n🛠️ Serv: ${serv}\n-----------------------------------\n👍 Cliente: ${inp1}\n👉 CPF: ${inp2}\n📞 Tel: ${inp3}\n👉 Emal: ${inp9}\n-------------------------------------\n
📄 Endereço:\n--------------------------------\nRua: ${inp4}\nNº: ${inp5}\nBairro: ${inp6}\nCidade: ${inp7}\nEstado: ${inp8}\nCep: ${inp10}\n REF: ${inp11}\n\n✅ Pagina: ${pagina}`;
var whatsappLink = "https://wa.me/"+`${NTF}?text=${encodeURIComponent(whatsappMessage)}`;
window.open(whatsappLink, "_blank");
liparFormulario()
  },2000)
}
}
// Lista Tabela
function listaPreços(){
var telefone=sessionStorage.getItem('teladmin')
gerarCodigo()
var itens= 0
var listTab = document.getElementById('ListTabela');
listTab.innerHTML = ''
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
var db = firebase.firestore()
var produtosRef = db.collection(`Jardinagem`);
produtosRef.get().then((querySnapshot) => {
querySnapshot.forEach(doc => {
var doc = doc.data();
var itens = querySnapshot.size;
var div= document.createElement('div');
var div2= document.createElement('div');
var img= document.createElement('img')
var label= document.createElement('label');
var label2= document.createElement('label');
var label3= document.createElement('label');
var label4= document.createElement('label');
var pr=document.createElement('p');
div.id='div1'
div2.id='div2'
label.id='label'
label2.id='label2'
label3.id='label03'
label4.id='label4'
pr.id='paragrafo'
img.id='img'
img.src=`${doc.Imagem}`
label.textContent=`${doc.Titulo}`;
if(!doc.SubT||doc.SubT==''){
label2.textContent=``;
}else{
label2.textContent=`${doc.SubT}`;
}
label3.textContent=`R$: ${doc.Valor}`;
if(!doc.Desconto||doc.Desconto==''){
label4.textContent=``;
}else{
label3.id='label3'
label4.textContent=`Promoção: R$: ${doc.Desconto}`;
}
pr.textContent=`✅`;
div.appendChild(img)
div2.appendChild(label);
div2.appendChild(document.createElement('br'));
div2.appendChild(label2);
div2.appendChild(document.createElement('br'));
div2.appendChild(label3);
div2.appendChild(label4);
div.appendChild(div2);
div.appendChild(pr);
listTab.appendChild(div)
sessionStorage.setItem('SERV',doc.Lista)
//setTimeout(function(){
//Swal.fire(`${itens}`,`quantidade de serviços: ${itens} `,'')
//},2000)
div.addEventListener('click', function(){
Swal.fire({ title: ` ${doc.Titulo}`,
text: ``, 
html:`Valor prod: ${doc.Valor} R$<br>Promoção: ${doc.Desconto} R$<br> -----------------------<br><br>
<button id='btnnbt1'> <i class="fa-brands fa-whatsapp"></i> Peça já </button>
<label id='sairnnlbl'>Sair, Exit</label>
<br> <br><br>Nº: ${doc.ID}
`,
imageUrl: `${doc.Imagem} `,
background: '#003253',
color: '#fff', // cor do texto });
allowOutsideClick: false,
showConfirmButton: false,
customClass: {
popup: 'my-custom' // Aplica a classe CSS personalizada
},
didOpen: () => {
document.body.style.paddingRight = '0px';   
}
})
document.getElementById('sairnnlbl').addEventListener('click',function(){
Swal.close()
})
document.getElementById('btnnbt1').addEventListener('click',function(){
var telefone= sessionStorage.getItem('teladmin')
if(!telefone || telefone==''){
  var telefone=sessionStorage.getItem('teladmin')
}
var Url = encodeURIComponent("https://rd-reparos-domicilio.netlify.app/html/jardinagem.html");
var codigo= sessionStorage.getItem('codigo')
var data= sessionStorage.getItem('data')
var hora= sessionStorage.getItem('hora')
var text=`🛠️ Serviço de: ${doc.Lista}\n------------------------------\n👉 Produto: ${doc.Titulo}\n------------------------------\n✅ Código: ${doc.ID}\n------------------------------\n\n`
var numero = `+55${telefone}`; // Substitua pelo número de destino, incluindo o código do país
var url = "https://wa.me/"+`${numero}?text=${encodeURIComponent(text)} ✅ Link: ${Url}`;
window.open(url, "_blank");
})
})
})
})
};
listaPreços()
function gerarCodigo() {
const caracteres = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ123456789';
let codigo = '';
for (let i = 0; i < 8; i++) {
codigo += caracteres.charAt(Math.floor(Math.random() * caracteres.length));
}
//document.getElementById('codigo').innerText = codigo;
sessionStorage.setItem('codigo',codigo)
}
//Menu lateral
sessionStorage.setItem('MENULateral','')
function Menu() {
var BTN=document.getElementById('IMenu');
var MENU_= sessionStorage.getItem('MENULateral')
if(!MENU_|| MENU_==''){
BTN.className='fa-solid fa-delete-left'
sessionStorage.setItem('MENULateral','Aberto')
document.getElementById("menu_lateral").classList.add("menu-ativo");
fecharTabela()
}else{
BTN.className='fa-solid fa-bars'
sessionStorage.setItem('MENULateral','')
document.getElementById("menu_lateral").classList.remove("menu-ativo");
}
};
function fecharMenu() {
Menu() 
};
function init(){
Menu() 
};
var telefone= sessionStorage.getItem('teladmin')
function ZAP(){
var url = encodeURIComponent("https://rd-reparos-domicilio.netlify.app");
var numero = `+55${telefone}`; // Substitua pelo número de destino, incluindo o código do país
var msm=` solicitação de contato\n\n`
var Url = "https://wa.me/"+`${numero}?text=${encodeURIComponent(msm)}✅  Página web: ${url}`;
window.open(Url, "_blank");
}
function falecom(){
ZAP()
}
function inicio(){
document.getElementById('a_inicio').click()
}
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
sessionStorage.setItem('data', data)
sessionStorage.setItem('hora', timeString)
}, 1000)
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
function Orçamento(){
Menu()
var el= document.getElementById('divOrçar')
el.style.borderWidth = '3px'; 
el.style.borderStyle = 'solid'; 
el.style.borderColor = 'rgba(0, 172, 23, 1)';
}
function Returpag(){
window.open('../index.html','_self')
}
function inicio_(){
Menu()
}
//document.getElementById('divTabela').style.display='none'
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
localStorage.setItem('data', data)
localStorage.setItem('hora', timeString)
}, 1000)

function initPage(){
    Swal.fire({ 
title: ``,
text: ``, 
html:`
 <div id="divInit"> 
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
var id = setInterval(frame, 55);
function frame() {
if (width >= 100) {

i = 0;
document.getElementById('myProgress').style.display = 'none'
 swalclose()
 clearInterval(id)
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
