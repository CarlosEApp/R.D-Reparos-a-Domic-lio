

// dados admim tel
var telAdmim= 11995501463
sessionStorage.setItem('teladmin', telAdmim)
var resp = sessionStorage.setItem('senha','gat980')
var resp2=sessionStorage.setItem('RecPasswor','Carlos@gat@gmail');



//btn alvenaria
function alvenaria(){
    window.open('html/alvenaria.html','_blank')
}

//btn desktop
function desktop(){
    window.open('html/desktop.html','_blank')
}

//btn pintura
function pintura(){
  window.open('html/pintura.html','_blank')
}

//btn hidráulica
function hidraulica(){
    window.open('html/hidraulica.html','_blank')
};


//BTN Eletrica
function Eletrica(){
  window.open('html/eletrica.html','_blank')
};

//Pesquisa Header

function ADMINFechar(){
  document.getElementById('read2').style.display='none'
};

//logo click
function imgLogo(){
swal({
title: ``,
html:` `,
background: 'rgba(118, 0, 122, 0)', // Cor de fundo
color: '#ffffff04', // Cor do texto
allowOutsideClick: false,
showConfirmButton: false,
customClass: {
popup: 'my-custom_infoMSM' // Aplica a classe CSS personalizada
},
didOpen: () => {
document.body.style.paddingRight = '0px';        
}
});
swal('R.D - reparos a domicílio','','src/rd_logo_png.png')
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
label3.textContent= `#${textoFormatado}`
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
document.getElementById('spanInfoNumero').innerHTML=` (${coment})`
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
 document.getElementById('PComent').innerHTML=`${doc.Mensagem}`
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
Swal.fire("Entre com sua conta google.",'Termine sua avaliacão, click em entrar com o google!','warning');
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
  document.getElementById('user-mensagem').innerHTML = `#${textoFormatado}`;

setTimeout(function(){
 window.location.reload()
},1500)
}else{
}
})
}
function ParagrafoMSM(){
  var msm= localStorage.getItem('InfoMSM')
  Swal.fire('Comentário!',`${msm}`,'success')
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
  window.open('html/cad.html','_blank')
}


//fale conosco
var telefone= sessionStorage.getItem('teladmin')

function falecom(){
  var numero = `+55${telefone}`; // Substitua pelo número de destino, incluindo o código do país
var url = "https://wa.me/"+`${numero}?text= R.D - Reparos a Domicílio (pedido de contato)`;
window.open(url, "_blank");
}
function ZAP(){
  falecom()
}
function ADMIN(){
if (navigator.vibrate) {
navigator.vibrate(200); // vibra por 200ms
}
Swal.fire({
title: `Password <i class="fa-sharp-duotone fa-solid fa-lock"></i>`,
html:` <div  class="menu-container">
<br>
<p>Digite senha:
<br>
<input id='password' type='password' placeholder='Digite password..'> <i id='iPasWord' class="fa-solid fa-eye"></i>
<br><br>
<button id='Start'> Enter <i  class="fa-sharp-duotone fa-solid fa-unlock"></i></button>
<br><br>  
<button id='Sair' class='cancelar'> Cancelar </button>
</div>
`,
showCancelButton: false,
showConfirmButton: false,
customClass: {
popup: 'my-custom_CadExCód' // Aplica a classe CSS personalizada
},
didOpen: () => {
document.body.style.paddingRight = '0px';
}
}); 
setTimeout(function(){
sessionStorage.setItem('pesQuiSar','');
},1000)
document.getElementById('iPasWord').addEventListener('click',function(){
var ii= document.getElementById('iPasWord');
var iPW= document.getElementById('password');
if(iPW.type=='password'){
iPW.type='text'
ii.className='fa-solid fa-eye-low-vision';
} else{
iPW.type='password';
ii.className='fa-solid fa-eye';
}
});
document.getElementById('Sair').addEventListener('click',function(){
Swal.close('click')
}); 
document.getElementById('Start').addEventListener('click',function(){
var resp1= sessionStorage.getItem('senha')
var resp2=  sessionStorage.getItem('RecPasswor');
var passWord= document.getElementById('password').value;
if(!passWord||passWord==''){
Swal.fire('Preencha o campo "Password"','','warning');
} else{
if(passWord== resp1|| passWord== resp2){
if (navigator.vibrate) {
navigator.vibrate(200); // vibra por 200ms
}
Cad()
Swal.close()
}else{
Swal.fire('Senha incorreta!','','error');
}
}
});
Menu()
}