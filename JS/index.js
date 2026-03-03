
// Pesquise por orçamento na lateral
function psqOr(){
    var resp = document.getElementById('inputPesqCód').value.toUpperCase(); 
    // força o texto para maiúsculas

    if(resp.length === 11){ 
       // alert(resp);
       
        window.open(`html/orcaserv.html?codigo=${resp}`, '_self');
    } else {
       // alert("O código precisa ter 11 caracteres.");
    }
}
//loja
function Loja(){
    Swal.fire({
title: `Ola, eu sou o RD`,
html: `
<div id='divrdzinho'>
<button id="Loja_RD" title=""><i class="fa-solid fa-shop"></i> Loja RD </button> <br><br>
<button id="mensagemRD" title=""><i class="fa-brands fa-whatsapp"></i> Mensagem </button>            
</div>
`,
imageUrl: `src/RDzinho.png `,
background: 'rgb(0, 87, 75)', // Cor de fundo
color: 'black', // Cor do texto// Cor do texto
showCancelButton: true,
showConfirmButton: false,
customClass: {
popup: 'my-custom_RDzinho' // Aplica a classe CSS personalizada
},
didOpen: () => {
document.body.style.paddingRight = '0px';
}
});
document.getElementById('mensagemRD').addEventListener('click',function(){
falecom()
})
document.getElementById('Loja_RD').addEventListener('click',function(){
    window.open('html/Utilit.html','_self')
//Swal.fire('Em desenvolvimento','A página de utilitários está em fase de desenvolvimento. Em breve estará disponível!','warning')
})
}
//Compartilhar
function Comparltlhar(){
Swal.fire({
title: `Compartilhar <i id='i_compart'  class="fa-solid fa-square-share-nodes"></i>`,
html: `
<button id="face" title="">Facebook <i class="fa-brands fa-facebook-f"></i></button>  
<br><br>
<button id="whats_a" title="">WhatsApp <i id='i_whats_start' class="fa-brands fa-whatsapp"></i></button>            
<br><br><button id='sair_'>Cancelar</button><br>
`,
background: 'rgb(255, 255, 255)', // Cor de fundo
color: 'black', // Cor do texto// Cor do texto
showCancelButton: false,
showConfirmButton: false,
customClass: {
popup: 'my-custom_compartilhar' // Aplica a classe CSS personalizada
},
didOpen: () => {
document.body.style.paddingRight = '0px';
}
});
document.getElementById('sair_').addEventListener('click',function(){
Swal.close()
});
document.getElementById('face').addEventListener('click',function(){
var url = encodeURIComponent("https://rd-reparos-domicilio.netlify.app");
window.open(`https://www.facebook.com/sharer/sharer.php?u=${url}`, target="_blank", rel="noopener noreferrer");
});
document.getElementById('whats_a').addEventListener('click',function(){
var pagina =`https://rd-reparos-domicilio.netlify.app`
var loja=`https://rd-reparos-domicilio.netlify.app/html/utilit`
var whatsappMessage =`✅Visite nossa Página e 🛍️Loja\n--------------------------------------------\n🛠️ Serviço com qualidade e segurança para seu lar!\n----------------------------------------------\n✅ Pagina: ${pagina}`;
var whatsappLink = `https://wa.me/?text=${encodeURIComponent(whatsappMessage)}`;
window.open(whatsappLink, "_blank");
});
}
//Meu Orçamento
function MeuOrçamento(){
Swal.fire({
title: '📝 Acesse seu Orçamento!',
html: `
<div class="menu-container">
<p>Digite ou cole seu código</p>
<input id='confirmaCódigo'  type='text' onkeyup="psqOrr()"  placeholder='Digite o código '>
<br>
<button id="Swalstart" title="">Confirme</button>
<button id="Sair" class="cancelar">Sair</button>
</div>
`,
background: ' rgba(0, 49, 71, 1)',
color: '#ffffffff',
showCancelButton: false,
showConfirmButton: false,
customClass: {
popup: 'my-custom_CadExCód_'
},
didOpen: () => {
document.body.style.paddingRight = '0px';
}
});
document.getElementById('Sair').addEventListener('click', function () {
Swal.close();
});
document.getElementById('Swalstart').addEventListener('click', function () {
// pega o valor do input
var codigo = document.getElementById('confirmaCódigo').value.toUpperCase()
// valida se está vazio
if (!codigo || codigo === '') {
Swal.fire('Atenção!', 'Por favor, insira um código válido.', 'warning');
} else {
// abre a página com o código
window.open(`html/orcaserv.html?codigo=${codigo}`, '_self');
}
});
}
function psqOrr(){
var resposta = document.getElementById('confirmaCódigo').value.toUpperCase(); 
// força o texto para maiúsculas
if(resposta.length === 11){ 
// alert(resp);
codigo = resposta.replace(/\s+/g, "");
window.open(`html/orcaserv.html?codigo=${codigo}`, '_self');
} else {
// alert("O código precisa ter 11 caracteres.");
}
}
//btn alvenaria
function alvenaria(){
window.open('html/alvenaria.html','_self')
}
//btn desktop
function desktop(){
window.open('html/desktop.html','_self')
}
//btn pintura
function pintura(){
window.open('html/pintura.html','_self')
}
//btn hidráulica
function hidraulica(){
window.open('html/hidraulica.html','_self')
};
//BTN Eletrica
function Eletrica(){
window.open('html/eletrica.html','_self')
};
// BTN Jardinagem
function jardinagem(){
window.open('html/jardinagem.html','_self')
};
//Pesquisa Header
function ADMINFechar(){
document.getElementById('read2').style.display='none'
};
//logo click
function imgLogo(){
swal('R.D - reparos a domicílio','','src/rd_logo_capacete_png.png')
}
//Colaboradores
function Colab(){
document.getElementById("divColaboradores").classList.add("divColaboradores-ativo");
}
//fechar colab
function fecharcolab(){
document.getElementById("divColaboradores").classList.remove("divColaboradores-ativo");
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
}else{
BTN.className='fa-solid fa-bars'
sessionStorage.setItem('MENULateral','')
document.getElementById("menu_lateral").classList.remove("menu-ativo");
}
}
function fecharMenu() {
Menu() 
}
function init(){
Menu() 
}
function sobre(){
Menu() 
}
//inicio btn footer
function inicio(){
document.getElementById('aa_inicio').click()
}
//stars
//localStorage.setItem('AvaliaçãoStar','')
//localStorage.setItem('InfoMSM','')
document.addEventListener('DOMContentLoaded', function () {
const notaAVStars = parseInt(localStorage.getItem('AvaliaçãoStar'));
if (notaAVStars) {
const estrelasAtivas = notaAVStars / 2;
const labels = document.querySelectorAll('.label-estrela');
labels.forEach((label, index) => {
label.style.color = index < estrelasAtivas ? '#fc0' : '#ccc';
document.getElementById('lblNotaAV').innerHTML=`Nota ${notaAVStars}`
});
}
});
const estrelas = document.querySelectorAll('.estrelas input');
const labels = document.querySelectorAll('.label-estrela');
estrelas.forEach((estrela, index) => {
estrela.addEventListener('change', () => {
const nota = (index + 1) * 2;
localStorage.setItem('AvaliaçãoStar', nota);
labels.forEach((label, i) => {
label.style.color = i <= index ? '#fc0' : '#ccc';
});
// swal(`${nota}`, '', 'success');
loginComGoogle()
document.getElementById('lblNotaAV').innerHTML=`Nota ${nota}`
});
});
//login google
var firebaseConfig = {
apiKey: "AIzaSyBCvQECt03lGjQv6rMCPnP19uI8inxgKxQ",
authDomain: "reparos-a-domicilio.firebaseapp.com",
projectId: "reparos-a-domicilio",
storageBucket: "reparos-a-domicilio.firebasestorage.app",
messagingSenderId: "2081562439",
appId: "1:2081562439:web:ea76d63f3e320c8577f662",
measurementId: "G-M7YCZXPYGM"
};
// Inicializa o Firebase apenas uma vez
if (!firebase.apps.length) {
firebase.initializeApp(firebaseConfig);
}
// Referências
var auth = firebase.auth();
var provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: "select_account" }); // força seleção de conta
var db = firebase.firestore();
// Controle para evitar múltiplos popups
let loginEmAndamento = false;
// Função de login
function loginComGoogle() {
var stars= parseInt(localStorage.getItem('AvaliaçãoStar'));
var msm= localStorage.getItem('InfoMSM')
if (loginEmAndamento) return;
loginEmAndamento = true;
auth.signInWithPopup(provider)
.then((result) => {
loginEmAndamento = false;
const user = result.user;
const userData = {
nome: user.displayName,
email: user.email,
foto: user.photoURL,
uid: user.uid,
Stars: stars,
Mensagem:msm,
criadoEm: firebase.firestore.FieldValue.serverTimestamp()
};
// Salva no Firestore
db.collection("UsersPag").doc(user.uid).set(userData)
.then(() => {
console.log("Usuário salvo no Firestore!");
document.getElementById("user-photo").src = user.photoURL;
document.getElementById("user-name").textContent = "Olá, " + user.displayName;
document.getElementById("user-email").textContent = user.email;
document.getElementById('user-photo').style.display='block'
document.getElementById('user-name').style.display='block'
document.getElementById('user-email').style.display='block'
document.getElementById('infoComent').style.display='block'
document.getElementById('verlistInfo').style.display='block'
document.getElementById('avisoinfo').style.display='none'
localStorage.setItem('FotoUser', user.photoURL);
localStorage.setItem('NomeUser', user.displayName);
localStorage.setItem('EmalUser', user.email);
})
.catch((error) => {
console.error("Erro ao salvar no Firestore:", error);
});
})
.catch((error) => {
loginEmAndamento = false;
Swal.fire("Google erro!: " ,`Ops! Não conseguimos autenticar você.`,'error');
console.error("Erro no login:", error);
});
}
//Logado?
setTimeout(function(){
var firebaseConfig = {
apiKey: "AIzaSyBCvQECt03lGjQv6rMCPnP19uI8inxgKxQ",
authDomain: "reparos-a-domicilio.firebaseapp.com",
projectId: "reparos-a-domicilio",
storageBucket: "reparos-a-domicilio.firebasestorage.app",
messagingSenderId: "2081562439",
appId: "1:2081562439:web:ea76d63f3e320c8577f662",
measurementId: "G-M7YCZXPYGM"
};
// Inicializa o Firebase apenas uma vez
if (!firebase.apps.length) {
firebase.initializeApp(firebaseConfig);
}
auth.onAuthStateChanged((user) => {
if (user) {
var stars= parseInt(localStorage.getItem('AvaliaçãoStar'));
var msm= localStorage.getItem('InfoMSM')
if (msm) {
// alert(msm);
var textoFormatado = msm.length > 15 ? msm.substring(0, 30) + '...' : msm;
document.getElementById('user-mensagem').innerHTML = `#${textoFormatado}`;
}
// Usuário já está logado
document.getElementById("user-photo").src = user.photoURL;
document.getElementById("user-name").textContent = "Olá, " + user.displayName;
document.getElementById("user-email").textContent = user.email;
document.getElementById('btnGoogle').style.display='none'
document.getElementById('user-photo').style.display='block'
document.getElementById('user-name').style.display='block'
document.getElementById('user-email').style.display='block'
document.getElementById('infoComent').style.display='block'
document.getElementById('verlistInfo').style.display='block'
document.getElementById('avisoinfo').style.display='none'
localStorage.setItem('FotoUser', user.photoURL);
localStorage.setItem('NomeUser', user.displayName);
localStorage.setItem('EmalUser', user.email);
var dbb = firebase.firestore();
dbb.collection("UsersPag").doc(user.uid).set({
nome: user.displayName,
email: user.email,
foto: user.photoURL,
uid: user.uid,
Stars: stars,
Mensagem:msm,
criadoEm: firebase.firestore.FieldValue.serverTimestamp(),
})
//var itens1= 0
var list = document.getElementById('listInfo');
list.innerHTML = ''
var firebaseConfigures = {
apiKey: "AIzaSyBCvQECt03lGjQv6rMCPnP19uI8inxgKxQ",
authDomain: "reparos-a-domicilio.firebaseapp.com",
projectId: "reparos-a-domicilio",
storageBucket: "reparos-a-domicilio.firebasestorage.app",
messagingSenderId: "2081562439",
appId: "1:2081562439:web:ea76d63f3e320c8577f662",
measurementId: "G-M7YCZXPYGM"
};
firebase.initializeApp(firebaseConfigures);
var dbs = firebase.firestore()
var produtosRef = dbs.collection(`UsersPag`);
produtosRef.get().then((querySnapshot) => {
querySnapshot.forEach(doc => {
var doc = doc.data();
var coment= querySnapshot.size
var div= document.createElement('div')
var div2=document.createElement('div')
var div3=document.createElement('div')
var label=document.createElement('label')
var label2=document.createElement('label')
var label3=document.createElement('label')
var img=document.createElement('img')
img.id='imgInfo'
div.id='divInfo'
div2.id='divInfo2'
div3.id='divInfo3'
label.id='lblInfo'
label2.id='lblInfo2'
label3.id='lblInfo3'
img.src=doc.foto
if(!doc.Stars||doc.Stars==''){
}else if(doc.Stars==2){
label.textContent='🌟'
}else if(doc.Stars==4){
label.textContent='🌟🌟'
}else if(doc.Stars==6){
label.textContent='🌟🌟🌟'
}else if(doc.Stars==8){
label.textContent='🌟🌟🌟🌟'
}else if(doc.Stars==10){
label.textContent='🌟🌟🌟🌟🌟'
}
if(doc.nome){
var textoFormatado_ =  doc.nome.length > 15 ?  doc.nome.substring(0, 37) + '...' : doc.nome;
label2.textContent= ` ${textoFormatado_}`
}
if(doc.Mensagem){
var textoFormatado =  doc.Mensagem.length > 15 ?  doc.Mensagem.substring(0, 40) + '...' : doc.Mensagem;
label3.textContent= `👉 ${textoFormatado}`
}
div2.appendChild(img)
div3.appendChild(label)
div3.appendChild(document.createElement('br'));
div3.appendChild(label2)
div3.appendChild(document.createElement('br'));
div3.appendChild(label3)
div.appendChild(div2)
div.appendChild(div3)
list.appendChild(div)
setTimeout(function(){
//Swal.fire(`${coment}`,'','')
document.getElementById('spanInfoNumero').innerHTML=`(${coment})`
},2000)
div.addEventListener('click',function(){
if(doc.Mensagem){
//Swal.fire('Comentário:',`${doc.Mensagem}`,'success')
Swal.fire({
title: `<h5 id='titeleh5'><i class="fa-solid fa-pen-to-square"></i> Comentário</h5>`,
html:` 
<br> <h4 id='PComent'></h4>
<br><br>
<label id='lblBtn2' title='cancelar'>Sair, Exit</label>
`,
background: 'rgba(46, 82, 60, 1)', // Cor de fundo
color: '#ffffffff', // Cor do texto
allowOutsideClick: false,
showConfirmButton: false,
customClass: {
popup: 'my-custom_infoMSM' // Aplica a classe CSS personalizada
},
didOpen: () => {
document.body.style.paddingRight = '0px';        
}
});
document.getElementById('PComent').innerHTML=`👉 ${doc.Mensagem}`
document.getElementById('lblBtn2').addEventListener('click', function(){
Swal.close()
});
}
})
})
});
} else {
// Usuário não está logado
var resp= parseInt(localStorage.getItem('AvaliaçãoStar'));
if(resp){
document.getElementById('a_stars').click()
//Swal.fire("Entre com sua conta google.",'Termine sua avaliacão, click em entrar com o google!','warning');
document.getElementById('btnGoogle').style.display='block'
}else{
}
}
});
},2000)
//entre com google botão
function EntreGoogle(){
loginComGoogle() 
}
function mensagemInfo(){
Swal.fire({
title: `<h5><i class="fa-solid fa-pen-to-square"></i> Comente</h5>`,
html:` <p>Deixe uma breve mensagem!</p> 
<textarea id='inputInfo'  title='MSM' placeholder= 'Mensagem...'></textarea>
<br>
<label id='lblBtn1' title='Salvar'> Salvar <i class="fa-solid fa-check-double"></i></label> 
<label id='lblBtn2' title='cancelar'>Cancelar</label>
`,
background: 'rgba(46, 82, 60, 1)', // Cor de fundo
color: '#ffffffff', // Cor do texto
allowOutsideClick: false,
showConfirmButton: false,
customClass: {
popup: 'my-custom_infoMSM' // Aplica a classe CSS personalizada
},
didOpen: () => {
document.body.style.paddingRight = '0px';        
}
});
document.getElementById('lblBtn2').addEventListener('click',function(){
Swal.close()
})
document.getElementById('lblBtn1').addEventListener('click',function(){
var resp= document.getElementById('inputInfo').value;
if(resp){
localStorage.setItem('InfoMSM', resp)
// alert(msm);
var textoFormatado = resp.length > 15 ? resp.substring(0, 28) + '...' : resp;
document.getElementById('user-mensagem').innerHTML = `${textoFormatado}`;
setTimeout(function(){
window.location.reload()
},1500)
}else{
}
})
}
function ParagrafoMSM(){
var msm= localStorage.getItem('InfoMSM')
//Swal.fire('Comentário!',`${msm}`,'success')
}
document.getElementById('div_listInfo').style.display='none'
var span=document.getElementById('spanInfo');
span.className=`fa-solid fa-eye`
function verInfolist(){
var display=  document.getElementById('div_listInfo').style.display;
var span=document.getElementById('spanInfo');
if(display=='none'){
document.getElementById('div_listInfo').style.display='block'
span.className=`fa-solid fa-eye-low-vision`
setTimeout(function(){
document.getElementById('div_listInfo').style.display='none'
span.className=`fa-solid fa-eye`
//document.getElementById('a_stars').click()
},700000)
} else{
document.getElementById('div_listInfo').style.display='none'
span.className=`fa-solid fa-eye`
}
}
function avaliar(){
Menu()
}
//tela cad
function Cad(){
window.open('html/cad.html', '_self');
}
//fale conosco
var telefone= sessionStorage.getItem('teladmin')
function falecom(){
  Swal.fire({
title: ``,
html: `
<div id='mpdflex'>
<div id='mpdimg'> <img src="src/Carlos foto.jpg" alt="Falar com Carlos Eduardo, gerente de vendas RD" class="logo-swal" width="100%"></div>
<div> <button id="Gerente_RD" title=""> <i class="fa-brands fa-whatsapp"></i> Fale conosco </button> </div> <br>
</div><p><b id='gvendas'> Gerente de vendas RD, Carlos Eduardo,</b><br>está disponível para te ajudar e tirar suas dúvidas!
`,
imageUrl: ` `,
background: 'rgb(255, 255, 255)', // Cor de fundo
color: 'blackrgb(250, 253, 255)exto// Cor do texto',
showCancelButton: true,
showConfirmButton: false,
customClass: {
popup: 'my-custom_mpw' // Aplica a classe CSS personalizada
},
didOpen: () => {
document.body.style.paddingRight = '0px';
}
});
document.getElementById('Gerente_RD').addEventListener('click', function(){
var telefone=sessionStorage.getItem('teladmin')
var url = encodeURIComponent("https://rd-reparos-domicilio.netlify.app");
var numero = `+55${telefone}`; // Substitua pelo número de destino, incluindo o código do país
var msm=`Solicitação de contato \n\n`
var Url = "https://wa.me/"+`${numero}?text=${encodeURIComponent(msm)} Página web: ${url}`;
window.open(Url,"_blank" );
})
}
function ZAP(){
falecom()
}
// Administrador
document.getElementById('iPasWord').addEventListener('click',function(){
var ii= document.getElementById('iPasWord');
var iPW= document.getElementById('inputAD');
if(iPW.type=='password'){
iPW.type='text'
ii.className='fa-solid fa-eye-low-vision';
} else{
iPW.type='password';
ii.className='fa-solid fa-eye';
}
});
function entreADM(){
var resp1= sessionStorage.getItem('PassW01')
var resp2= sessionStorage.getItem('PassW02')
var pass = document.getElementById('inputAD').value;
if(pass== resp1|| pass== resp2){
swal('Sucesso','Você seráredirecionado(a)!\n (Tela de cadastros!)','success');
setTimeout(function(){
window.open('html/cad.html','_self')
},2000)
}else{
swal('Senha incorreta!','','error');
}
}
// Colaboradores
document.getElementById('iPasWord2').addEventListener('click',function(){
var ii_= document.getElementById('iPasWord2');
var iPW_= document.getElementById('inputColabPW');
if(iPW_.type=='password'){
iPW_.type='text'
ii_.className='fa-solid fa-eye-low-vision';
} else{
iPW_.type='password';
ii_.className='fa-solid fa-eye';
}
});
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
//Adiministrador Geral
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
var adbb = firebase.firestore();0
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
function initPage(){
    Swal.fire({ 
title: ``,
text: ``, 
html:`
<img src="src/RDzinho.png" alt="Logo RD Reparos a Domicílio" class="logo-swal" width="70%">
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
var id = setInterval(frame, 37);
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
function ColaboradorEntrar(){
   swal('Em desenvolvimento','A página de Colaboradores está em fase de desenvolvimento. Em breve estará disponível!','warning')
}
initPage()
//instagran
function instagran(){
window.open('https://www.instagram.com/rd.reparosdomiciliar/','_blank')
}
function insta(){
     instagran()
}
function inicio(){
document.getElementById('a_inicio').click()
}
// lista loja RD inicial
sessionStorage.setItem('Iitens', '')
function MItens(){
setTimeout(function(){
var itens=sessionStorage.getItem('Iitens')
// alert(itens)
if(!itens||itens==''||itens==0){
var resp= sessionStorage.getItem('selectRD')
Swal.fire('',`Ainda não há itens de ${resp} disponiveis para venda.`,'')
var select =document.getElementById('selectRD');
select.value='Diversos'
selectLoja()
}else{
}
},2000)
}
// select
sessionStorage.setItem('selectRD', ``)
function selectLoja(){
sessionStorage.setItem('Iitens', '')
var resp= document.getElementById('selectRD').value;
sessionStorage.setItem('selectRD', `${resp}`)
setTimeout(function(){
if(resp=='Diversos'){
listaInicial()
} else{
 listalojaInicial()
}
},500)
}
function listalojaInicial(){
MItens()
var resp= sessionStorage.getItem('selectRD')
var itens=0
var list= document.getElementById('list');
list.innerHTML ='';
var firebaseConfigur = {
apiKey: "AIzaSyBCvQECt03lGjQv6rMCPnP19uI8inxgKxQ",
authDomain: "reparos-a-domicilio.firebaseapp.com",
projectId: "reparos-a-domicilio",
storageBucket: "reparos-a-domicilio.firebasestorage.app",
messagingSenderId: "2081562439",
appId: "1:2081562439:web:ea76d63f3e320c8577f662",
measurementId: "G-M7YCZXPYGM"
};
firebase.initializeApp(firebaseConfigur);
var db=firebase.firestore();
var produtosRef = db.collection(`Utilitarios`);
produtosRef.get().then((querySnapshot) => {
querySnapshot.forEach(doc => {
var doc = doc.data();
if(resp==doc.ADD1){
// alert(resp)
itens++
var lis = document.createElement('div');
var div = document.createElement('div');
var div2 = document.createElement('div');
var div3 = document.createElement('div');
var div4 = document.createElement('div');
var label = document.createElement('label');
var label2 = document.createElement('label');
var label3 = document.createElement('label');
var label4 = document.createElement('label');
var label5 = document.createElement('label');
var img = document.createElement('img');
var button = document.createElement('button');
var button2 = document.createElement('button');
var whats= document.createElement('i');
lis.id = 'lis';
div.id = 'div';
div2.id = 'div2';
div3.id = 'div3';
div4.id = 'div4';
label.id = 'label';
label2.id = 'label2';
label3.id = 'label3';
label4.id = 'label4';
label5.id = 'label5';
whats.id='whats'
img.id = 'img';
button.id = 'button';
button2.id = 'button2';
img.src = doc.Imagem;
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
button.textContent='Compra Mercado Pago';
 whats.className='fa-brands fa-whatsapp'
button2.appendChild(whats); 
button2.appendChild(document.createTextNode(' Compra por WhatsApp'));
div.appendChild(img);
div2.appendChild(label);
div2.appendChild(document.createElement('br'));
div2.appendChild(label2);
div3.appendChild(label3);
div3.appendChild(document.createElement('br'));
div3.appendChild(label4);
div3.appendChild(document.createElement('br'));
//div3.appendChild(label5);
div4.appendChild(button);
div4.appendChild(document.createElement('br'));
div4.appendChild(button2);
lis.appendChild(div);
lis.appendChild(div2);
lis.appendChild(div3);
lis.appendChild(div4);
list.appendChild(lis);
sessionStorage.setItem('Iitens', itens)
sessionStorage.setItem('MPpag','')
sessionStorage.setItem('TituloMP','')
sessionStorage.setItem('IDRD','')
sessionStorage.setItem('listaRD','')
sessionStorage.setItem('IDMP','')
var telefone= sessionStorage.getItem('teladmin')
if(!telefone || telefone==''){
var telefone=sessionStorage.getItem('teladmin')
}
img.addEventListener('click', function(){
swal('','',`${doc.Imagem}`)
})
button.addEventListener('click', function(){
var rep=document.getElementById('Input_cidade');
rep.value=''
const prefId = doc.ADD2;
verfCad()
sessionStorage.setItem('MPpag',`${prefId}`)
sessionStorage.setItem('TituloMP', doc.Titulo)
sessionStorage.setItem('IDRD', doc.ID)
sessionStorage.setItem('listaRD', doc.ADD1)
sessionStorage.setItem('IDMP', doc.ADD2)
sessionStorage.setItem('VLMP', doc.Desconto)
document.getElementById('lblTTMP').innerHTML=`Você pagará <b id='ppc'>${doc.Desconto} R$</b> - frete gratis <br> 🚚 Chega em até 2 dois dias!`;
var pag=document.getElementById('pagamentos');
pag.className='pagamentos-ativo'
})
button2.addEventListener('click', function(){
  Swal.fire({
title: ``,
html: `
<div id='mpdflex'>
<div id='mpdimg'> <img src="src/Carlos foto.jpg" alt="Falar com Carlos Eduardo, gerente de vendas RD" class="logo-swal" width="100%"></div>
<div><button id="Gerente_RD" title=""><i class="fa-brands fa-whatsapp"></i> Fale conosco </button> </div> <br>
</div><p><b id='gvendas'>Gerente de vendas RD, Carlos Eduardo,</b><br>está disponível para tirar suas dúvidas e ajudar na sua compra!

`,
imageUrl: ` `,
background: 'rgb(255, 255, 255)', // Cor de fundo
color: 'blackrgb(250, 253, 255)exto// Cor do texto',
showCancelButton: true,
showConfirmButton: false,
customClass: {
popup: 'my-custom_mpw' // Aplica a classe CSS personalizada
},
didOpen: () => {
document.body.style.paddingRight = '0px';
}
});
document.getElementById('Gerente_RD').addEventListener('click', function(){
  sessionStorage.setItem('MPpag','')
sessionStorage.setItem('TituloMP','')
sessionStorage.setItem('IDRD','')
sessionStorage.setItem('listaRD','')
sessionStorage.setItem('IDMP','')
var telefone= sessionStorage.getItem('teladmin')
if(!telefone || telefone==''){
var telefone=sessionStorage.getItem('teladmin')
}
var Url = encodeURIComponent("https://rd-reparos-domicilio.netlify.app/html/utilit");
var codigo= sessionStorage.getItem('codigo')
var data= sessionStorage.getItem('data')
var hora= sessionStorage.getItem('hora')
var text=`Loja RD utilitário:\n------------------------------\n👉 Produto: ${doc.Titulo}\n------------------------------\n$ Valor: ${doc.Valor} R$\n------------------------------\n$ Promoção: ${doc.Desconto} R$\n------------------------------\n📝Lista: ${doc.ADD1}\n------------------------------\n✅ Código: ${doc.ID}\n------------------------------\n\n`
var numero = `+55${telefone}`; // Substitua pelo número de destino, incluindo o código do país
var url = "https://wa.me/"+`${numero}?text=${encodeURIComponent(text)} ✅ Link: ${Url}`;
window.open(url, "_blank");
})
})
} else{
}
})
})
}
// lista inicial
function listaInicial(){
var list= document.getElementById('list');
list.innerHTML ='';
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
var db=firebase.firestore();
var produtosRef = db.collection(`Utilitarios`);
produtosRef.get().then((querySnapshot) => {
querySnapshot.forEach(doc => {
var doc = doc.data();
var itens= querySnapshot.size
var lis = document.createElement('div');
var div = document.createElement('div');
var div2 = document.createElement('div');
var div3 = document.createElement('div');
var div4 = document.createElement('div');
var label = document.createElement('label');
var label2 = document.createElement('label');
var label3 = document.createElement('label');
var label4 = document.createElement('label');
var label5 = document.createElement('label');
var img = document.createElement('img');
var button = document.createElement('button');
var button2 = document.createElement('button');
var whats= document.createElement('i');
lis.id = 'lis';
div.id = 'div';
div2.id = 'div2';
div3.id = 'div3';
div4.id = 'div4';
label.id = 'label';
label2.id = 'label2';
label3.id = 'label3';
label4.id = 'label4';
label5.id = 'label5';
whats.id='whats'
img.id = 'img';
button.id = 'button';
button2.id = 'button2';
img.src = doc.Imagem;
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
button.textContent='Compra Mercado Pago';
 whats.className='fa-brands fa-whatsapp'
button2.appendChild(whats); 
button2.appendChild(document.createTextNode(' Compra por WhatsApp'));
div.appendChild(img);
div2.appendChild(label);
div2.appendChild(document.createElement('br'));
div2.appendChild(label2);
div3.appendChild(label3);
div3.appendChild(document.createElement('br'));
div3.appendChild(label4);
div3.appendChild(document.createElement('br'));
//div3.appendChild(label5);
div4.appendChild(button);
div4.appendChild(document.createElement('br'));
div4.appendChild(button2);
lis.appendChild(div);
lis.appendChild(div2);
lis.appendChild(div3);
lis.appendChild(div4);
list.appendChild(lis);
sessionStorage.setItem('MPpag','')
sessionStorage.setItem('TituloMP','')
sessionStorage.setItem('IDRD','')
sessionStorage.setItem('listaRD','')
sessionStorage.setItem('IDMP','')
var telefone= sessionStorage.getItem('teladmin')
if(!telefone || telefone==''){
var telefone=sessionStorage.getItem('teladmin')
}
img.addEventListener('click', function(){
swal('','',`${doc.Imagem}`)
});

button.addEventListener('click', function(){
var rep=document.getElementById('Input_cidade');
rep.value=''
 sessionStorage.setItem('MPpag','')
sessionStorage.setItem('TituloMP','')
sessionStorage.setItem('IDRD','')
sessionStorage.setItem('listaRD','')
sessionStorage.setItem('IDMP','')
var telefone= sessionStorage.getItem('teladmin')
if(!telefone || telefone==''){
var telefone=sessionStorage.getItem('teladmin')
}
verfCad()
const prefId = doc.ADD2;
sessionStorage.setItem('MPpag',`${prefId}`)
sessionStorage.setItem('TituloMP', doc.Titulo)
sessionStorage.setItem('IDRD', doc.ID)
sessionStorage.setItem('listaRD', doc.ADD1)
sessionStorage.setItem('IDMP', doc.ADD2)
sessionStorage.setItem('VLMP', doc.Desconto)
document.getElementById('lblTTMP').innerHTML=`Você pagará <b id='ppc'>${doc.Desconto} R$</b> - frete gratis <br> 🚚 Chega em até 2 dois dias!`;
var pag=document.getElementById('pagamentos');
pag.className='pagamentos-ativo'
});
button2.addEventListener('click', function(){
  Swal.fire({
title: ``,
html: `
<div id='mpdflex'>
<div id='mpdimg'> <img src="src/Carlos foto.jpg" alt="Falar com Carlos Eduardo, gerente de vendas RD" class="logo-swal" width="100%"></div>
<div><button id="Gerente_RD" title=""><i class="fa-brands fa-whatsapp"></i> Fale conosco </button> </div> <br>
</div><p><b id='gvendas'>Gerente de vendas RD, Carlos Eduardo,</b><br>está disponível para tirar suas dúvidas e ajudar na sua compra!

`,
imageUrl: ` `,
background: 'rgb(255, 255, 255)', // Cor de fundo
color: 'blackrgb(250, 253, 255)exto// Cor do texto',
showCancelButton: true,
showConfirmButton: false,
customClass: {
popup: 'my-custom_mpw' // Aplica a classe CSS personalizada
},
didOpen: () => {
document.body.style.paddingRight = '0px';
}
});
document.getElementById('Gerente_RD').addEventListener('click', function(){
  sessionStorage.setItem('MPpag','')
sessionStorage.setItem('TituloMP','')
sessionStorage.setItem('IDRD','')
sessionStorage.setItem('listaRD','')
sessionStorage.setItem('IDMP','')
var telefone= sessionStorage.getItem('teladmin')
if(!telefone || telefone==''){
var telefone=sessionStorage.getItem('teladmin')
}
var Url = encodeURIComponent("https://rd-reparos-domicilio.netlify.app/html/utilit");
var codigo= sessionStorage.getItem('codigo')
var data= sessionStorage.getItem('data')
var hora= sessionStorage.getItem('hora')
var text=`Loja RD utilitário:\n------------------------------\n👉 Produto: ${doc.Titulo}\n------------------------------\n$ Valor: ${doc.Valor} R$\n------------------------------\n$ Promoção: ${doc.Desconto} R$\n------------------------------\n📝Lista: ${doc.ADD1}\n------------------------------\n✅ Código: ${doc.ID}\n------------------------------\n\n`
var numero = `+55${telefone}`; // Substitua pelo número de destino, incluindo o código do país
var url = "https://wa.me/"+`${numero}?text=${encodeURIComponent(text)} ✅ Link: ${Url}`;
window.open(url, "_blank");
})
})
})
})
}
var select =document.getElementById('selectRD');
select.value='Diversos'
selectLoja()
function selectcidade(){
   var VLPM =sessionStorage.getItem('VLMP')
  var resp = document.getElementById('Input_cidade').value;
  if(resp=='Itanhaém'){
    document.getElementById('lblTTMP').innerHTML=`Você pagará <b id='ppc'>${VLPM} R$</b> - frete gratis <br> 🚚 Chega em até 2 dois dias!`;
  }else if(resp=='Peruíbe') {
 document.getElementById('lblTTMP').innerHTML=`Você pagará <b id='ppc'>${VLPM} R$</b> - frete gratis <br> 🚚 Chega em até 2 dois dias!`;
  } else if(resp=='Mongaguá'){
    document.getElementById('lblTTMP').innerHTML=`Você pagará <b id='ppc'>${VLPM} R$</b> - frete gratis <br> 🚚 Chega em até 2 dois dias!`;
  }
}
function verfCad(){
var emailPM=localStorage.getItem('EmalUser');
if(!emailPM || emailPM==''){
var emailPM=localStorage.getItem('EmalMP');
} else{
}
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
 var dbcd=firebase.firestore();
 dbcd.collection('EndereçoMP').doc(`${emailPM}`).get().then((doc)=>{

  if(doc.data()){
    var doc=doc.data()
  Swal.fire('','<b id="bbtb">Encontramos seu cadastro de endereço</b>','success')
  document.getElementById('inputNome').value=doc.Nome;
  document.getElementById('inputTel').value= doc.Tel;
  document.getElementById('Input_rua').value=doc.Rua;
  document.getElementById('Input_numero').value=doc.Numero;
  document.getElementById('Input_bairro').value=doc.Bairro;
  document.getElementById('Input_cidade').value=doc.Cidade;
  document.getElementById('Input_estado').value=doc.Estado;
  document.getElementById('inputemail').value=doc.Email
  document.getElementById('Input_cep').value=doc.Cep;
  document.getElementById('Input_Ref').value=doc.Ref;
  }else{
 //Swal.fire('Não tem Cadastro','','warning')
   document.getElementById('inputNome').value='';
  document.getElementById('inputTel').value='';
  document.getElementById('Input_rua').value='';
  document.getElementById('Input_numero').value='';
  document.getElementById('Input_bairro').value='';
  document.getElementById('Input_cidade').value='';
  document.getElementById('Input_estado').value='';
  document.getElementById('inputemail').value='';
  document.getElementById('Input_cep').value='';
  document.getElementById('Input_Ref').value='';
  }
 })
}
// Comprar PM pag
function comprarMP(){
   //var idMP=sessionStorage.getItem('IDMP')
 var cód=sessionStorage.getItem('MPpag')
 var titulo=sessionStorage.getItem('TituloMP')
 var idRD=sessionStorage.getItem('IDRD')
 var listRD=sessionStorage.getItem('listaRD')
 var data= localStorage.getItem('data')
 var hora= localStorage.getItem('hora')
 var inp2= document.getElementById('inputNome').value;
 var inp3= document.getElementById('inputTel').value;
 var inp4= document.getElementById('Input_rua').value;
 var inp5= document.getElementById('Input_numero').value;
 var inp6= document.getElementById('Input_bairro').value;
 var inp7= document.getElementById('Input_cidade').value;
 var inp8= document.getElementById('Input_estado').value;
 var inp9= document.getElementById('inputemail').value;
 var inp10= document.getElementById('Input_cep').value;
 var inp11= document.getElementById('Input_Ref').value;
 var VLPM =sessionStorage.getItem('VLMP')
if(!inp2||inp2==''||!inp3||inp3==''||!inp4||inp4==''||!inp5||inp5==''||!inp6||inp6==''||!inp7||inp7==''||!inp8||inp8==''||!inp9||inp9==''){
 swal('','Para prosseguir, preencha o cadastro!','')
} else{
  if(!cód||cód==''){
     Swal.fire('Tente mais tarde!','O Item que vc clicou pode não estar disponivel no momento!','warning')
  }else{
 localStorage.setItem('EmalMP',`${inp9}`);

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
 var dbmpend=firebase.firestore();
 dbmpend.collection('EndereçoMP').doc(`${inp9}`).set({
  Nome: inp2,
  Tel:inp3,
  Email:inp9,
  Rua:inp4,
  Numero:inp5,
  Bairro:inp6,
  Cidade:inp7,
  Estado:inp8,
  Cep:inp10,
  Ref:inp11,
  Data:data,
  Hora:hora,
  ID:inp9,
 })
 var dbmp=firebase.firestore();
 dbmp.collection('CompraMP').doc(`${inp9}_${hora}`).set({
  Nome: inp2,
  Email:inp9,
  Tel:inp3,
   Rua:inp4,
  Numero:inp5,
  Bairro:inp6,
  Cidade:inp7,
  Estado:inp8,
  Cep:inp10,
  Ref:inp11,
  CódMP:cód,
  Titulo:titulo,
  IDRD:idRD,
  ListRD:listRD,
  Valor:VLPM,
  Data:data,
  Hora:hora,
 })

setTimeout(function(){
// Swal.fire('sucesso!',``,'success')
    window.open(`${cód}`,'_blank')
    voltarPG()
},1500)

  }
}
}
sessionStorage.setItem('MPpag','')
sessionStorage.setItem('TituloMP','')
sessionStorage.setItem('IDRD','')
sessionStorage.setItem('listaRD','')
sessionStorage.setItem('IDMP','')
// voltar pg
function voltarPG(){
var pag=document.getElementById('pagamentos');
pag.className='pagamentos-fechar'
}

// format cep
function formatarCEP(cep) {
  cep = cep.replace(/\D/g, ""); // Remove caracteres não numéricos
  cep = cep.replace(/(\d{5})(\d)/, "$1-$2"); // Adiciona o hífen XXXXX-XXX
  return cep;
}
function aplicarMascaraCEP(event) {
  event.target.value = formatarCEP(event.target.value);
    var cep8 = document.getElementById("Input_cep")
    if (cep8.value.length === 9) {
    buscarCEP()
    return;
  }
}
function buscarCEP() {
  var cep = document.getElementById("Input_cep").value.replace(/\D/g, ""); // só números

  if (cep.length !== 8) {
    Swal.fire("CEP inválido. Digite 8 números.");
    return;
  }
  var url = `https://viacep.com.br/ws/${cep}/json/`;

  fetch(url)
    .then(response => response.json())
    .then(data => {
      if (data.erro) {
         Swal.fire("",'<b id="bbtb">CEP não encontrado</b>.<br>Mas não se preocupe, preencha os campos manualmente.','warning');
        return;
      }
      document.getElementById("Input_rua").value = data.logradouro;
      document.getElementById("Input_bairro").value = data.bairro;
      document.getElementById("Input_cidade").value = data.localidade;
      document.getElementById("Input_estado").value = data.uf;
    })
    .catch(error => {
      console.error("Erro ao buscar CEP:", error);
      Swal.fire("Não foi possível buscar o CEP.",'Tente novamente mais tarde.','error');
    });
}
document.getElementById('inputTel').addEventListener('input', function (e) {
let value = e.target.value.replace(/\D/g, ''); // Remove caracteres não numéricos
if (value.length > 11) value = value.slice(0, 11); // Limita ao tamanho correto
let formattedValue = value.replace(/^(\d{2})(\d)/, '($1) $2')
   .replace(/(\d{4})(\d{4})$/, '$1-$2');
e.target.value = formattedValue;
});

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