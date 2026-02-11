
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
<button id="Loja_RD" title=""><i class="fa-solid fa-shop"></i> Loja-RD </button> <br><br>
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
<button id="whats" title="">WhatsApp <i id='i_whats_start' class="fa-brands fa-whatsapp"></i></button>            
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
document.getElementById('whats').addEventListener('click',function(){
var pagina =`https://rd-reparos-domicilio.netlify.app`
var whatsappMessage =`✅Visite nossa Página\n--------------------------------------------\n🛠️ Serviço com qualidade e segurança para seu lar!\n----------------------------------------------\n✅ Pagina: 👉  ${pagina}`;
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
label2.textContent= doc.nome
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
},70000)
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
var url = encodeURIComponent("https://rd-reparos-domicilio.netlify.app");
var numero = `+55${telefone}`; // Substitua pelo número de destino, incluindo o código do país
var msm=`Solicitação de contato \n\n`
var Url = "https://wa.me/"+`${numero}?text=${encodeURIComponent(msm)} Página web: ${url}`;
window.open(Url,"_blank" );
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
function initPage(){
    Swal.fire({ 
title: ``,
text: ``, 
html:`
<img src="../src/RDzinho.png" alt="Logo RD Reparos a Domicílio" class="logo-swal" width="70%">
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