

// Lista Tabela
function listaPreços(){
var telefone= sessionStorage.getItem('teladmin')
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
var produtosRef = db.collection(`Desktop`);
produtosRef.get().then((querySnapshot) => {
querySnapshot.forEach(doc => {
var doc = doc.data();
var itens = querySnapshot.size;

var div= document.createElement('div');
var div2= document.createElement('div');
var div3= document.createElement('div');
var div4= document.createElement('div');
var div5= document.createElement('div');
var img= document.createElement('img')
var label= document.createElement('label');
var label2= document.createElement('label');
var label3= document.createElement('label');
var label4= document.createElement('label');
var label5= document.createElement('p');
var botão= document.createElement('button');
var pr=document.createElement('p');
div.id='divid'
div2.id='divid2'
div3.id='divid3'
div4.id='divid3'
div5.id='divid3'
label.id='labelid'
label2.id='labelid2'
label3.id='labelid3'
label4.id='labelid4'
label5.id='labelid5'
botão.id='botaoid'
pr.id='paragrafo'
img.id='imgid'

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
label4.textContent=`Promoção: (R$: ${doc.Desconto})`;
}
if(!doc.OBS||doc.OBS==''){
label5.textContent=``;
}else{
label5.textContent=`${doc.OBS}`;
}
botão.className='fa-brands fa-whatsapp';
pr.textContent=`ID: ${doc.ID}`;

div3.appendChild(img)

div4.appendChild(label);
div4.appendChild(document.createElement('br'));
div4.appendChild(label2);
div4.appendChild(document.createElement('br'));
div4.appendChild(label3);
div4.appendChild(document.createElement('br'));
div4.appendChild(label4);
div4.appendChild(document.createElement('br'));
div4.appendChild(label5);
div5.appendChild(document.createElement('br'));
div5.appendChild(botão)
div5.appendChild(document.createElement('br'));
div5.appendChild(pr);
div2.appendChild(div3);
div2.appendChild(div4);
div2.appendChild(div5);
div.appendChild(pr);
div.appendChild(document.createElement('br'));
div.appendChild(div2);
listTab.appendChild(div)

//setTimeout(function(){
//Swal.fire(`${itens}`,`quantidade de serviços: ${itens} `,'')
//},2000)

botão.addEventListener('click',function(){
   var pag = encodeURIComponent("https://rd-reparos-domicilio.netlify.app");
var codigo= sessionStorage.getItem('codigo')    
var data= sessionStorage.getItem('data')
var hora= sessionStorage.getItem('hora')
 var numero = `+55${telefone}`; // Substitua pelo número de destino, incluindo o código do país
  var text=`✅Reparos a Domicílio\n---------------------------------\n👉 Ref: ${doc.ID}\n-----------------------------\nProduto: ${doc.Titulo}\n-------------------------------\n👉 Data e Hora: ${data} - ${hora}\n\n`
var url = "https://wa.me/"+`${numero}?text= ${encodeURIComponent(text)}✅  Página web: ${pag}`;
window.open(url, "_blank");
})
pr.addEventListener('click',function(){
   var pag = encodeURIComponent("https://rd-reparos-domicilio.netlify.app");
var codigo= sessionStorage.getItem('codigo')   
var data= sessionStorage.getItem('data')
var hora= sessionStorage.getItem('hora')
var numero = `+55${telefone}`; // Substitua pelo número de destino, incluindo o código do país
  var text=`✅Reparos a Domicílio\n---------------------------------\n👉 Ref: ${doc.ID}\n-----------------------------\nProduto: ${doc.Titulo}\n-------------------------------\n👉 Data e Hora: ${data} - ${hora}\n\n`
var url = "https://wa.me/"+`${numero}?text= ${encodeURIComponent(text)}✅  Página web: ${pag}`;
window.open(url, "_blank");
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

//abrir tabela
function tabela(){
document.getElementById('divTabela').style.display='block';
document.getElementById('a_inicio').click()
listaPreços()
Menu() 
};


//fechar tabela

function fecharTabela(){
document.getElementById('divTabela').style.display='none'
};

var telefone= sessionStorage.getItem('teladmin')
function ZAP(){
var url = encodeURIComponent("https://rd-reparos-domicilio.netlify.app");
var numero = `+55${telefone}`; // Substitua pelo número de destino, incluindo o código do país
var msm=` R.D - Reparos a Domicílio (pedido de contato) \n\n`
var Url = "https://wa.me/"+`${numero}?text=${encodeURIComponent(msm)}✅  Página web: ${url} `;
window.open(Url, "_blank");
}

//Orçamento
function falecom(){
var sev= 'Desktop'
var telefone= sessionStorage.getItem('teladmin')
gerarCodigo()

setTimeout(function(){
var pag = encodeURIComponent("https://rd-reparos-domicilio.netlify.app");
var codigo= sessionStorage.getItem('codigo')
var data= sessionStorage.getItem('data')
var hora= sessionStorage.getItem('hora')
var text=` 📝 Pedido de orçamento:\n👉 Serviço de ${sev}\n----------------------------------\n 👉 Data e Hora: ${data} - ${hora}\n\n`
var numero = `+55${telefone}`; // Substitua pelo número de destino, incluindo o código do país
var url = "https://wa.me/"+`${numero}?text=${encodeURIComponent(text)}✅  Página web: ${pag}`;
window.open(url, "_blank");
},1000)
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

function serviçosClick(){
  document.getElementById('divTabela').style.display='block'
listaPreços()
}
function Orçamento(){
  Menu()
   
}
function Returpag(){
 window.open('../index.html','_self')
}
function inicio_(){
    document.getElementById('a_inicio').click()
}

function inicio_(){
Menu()
}
document.getElementById('divTabela').style.display='none'