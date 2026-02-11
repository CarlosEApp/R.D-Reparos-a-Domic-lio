
// pesquisa 
function pesquisa(){
    Swal.fire({
title: ``,
html: `
<button id="SSair" title="">X</button>  <br>   
<div id='divSwP'>
<p>Selecione uma opção</p>
         <select name=""  id="Input_add1" >
           <option value=''>Oque você procura?</option>
             <option value="Elétrica">⚡Elétrica</option>
              <option value="Hidráulica">🚿Hidráulica</option>
               <option value="Pintura">🖌️Pintura</option>
                <option value="Desktop">💻M.Desktop</option>
                 <option value="Alvenaria">🔨Alvenaria</option>
                  <option value="Jardinagem">🌿Jardinagem</option>
                   <option value="Diversos">🛍️Diversos</option>
    </select>
    <br> <br>       
    <label id='lblItens'>Não há itens nessa lista!</label>      
</div>
`,
imageUrl: `../src/RD_NA_lOJA.png`,
background: 'rgb(0, 87, 75)', // Cor de fundo
color: 'black', // Cor do texto// Cor do texto
showCancelButton: false,
showConfirmButton: false,
customClass: {
popup: 'my-custom' // Aplica a classe CSS personalizada
},
didOpen: () => {
document.body.style.paddingRight = '0px';
}
});
 document.getElementById('SSair').addEventListener('click', function(){
Swal.close()
 });
document.getElementById('Input_add1').addEventListener('change', function() {
     var resp = document.getElementById('Input_add1').value; 
    // alert(resp);
    if(resp== 'Diversos'){
  listaInicial()
  document.getElementById('lblItens').style.display='none'
setTimeout(function(){
Swal.close()
},2000)
} else{
 var itens=0
var list= document.getElementById('list');
list.innerHTML = '';
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
if(resp==doc.ADD1){
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
img.id = 'img';
button.id = 'button';
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
button.textContent='Comprar';
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
lis.appendChild(div);
lis.appendChild(div2);
lis.appendChild(div3);
lis.appendChild(div4);
list.appendChild(lis);
document.getElementById('lblItens').style.display='none'
button.addEventListener('click', function(){
var telefone= sessionStorage.getItem('teladmin')
if(!telefone || telefone==''){
var telefone=sessionStorage.getItem('teladmin')
}
var Url = encodeURIComponent("https://rd-reparos-domicilio.netlify.app/html/utilit");
var codigo= sessionStorage.getItem('codigo')
var data= sessionStorage.getItem('data')
var hora= sessionStorage.getItem('hora')
var text=`Loja RD utilitário:\n------------------------------\n👉 Produto: ${doc.Titulo}\n------------------------------\n$ Valor: ${doc.Valor}\n------------------------------\n$ Promoção: ${doc.Desconto}\n------------------------------\n📝Lista: ${doc.ADD1}\n------------------------------\n✅ Código: ${doc.ID}\n------------------------------\n\n`
var numero = `+55${telefone}`; // Substitua pelo número de destino, incluindo o código do país
var url = "https://wa.me/"+`${numero}?text=${encodeURIComponent(text)} ✅ Link: ${Url}`;
window.open(url, "_blank");
})
} else{
setTimeout(function(){
if(!itens|| itens==''|| itens==0){
//Swal.fire('Lista vazia!')
document.getElementById('lblItens').style.display='block'
 //listaInicial()
} else{
document.getElementById('lblItens').style.display='none'
Swal.close()
}
},2000)
}
})
})
 }
  });
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
img.id = 'img';
button.id = 'button';
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
button.textContent='Comprar';
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
lis.appendChild(div);
lis.appendChild(div2);
lis.appendChild(div3);
lis.appendChild(div4);
list.appendChild(lis);
button.addEventListener('click', function(){
   // swal('Desculpe-me','Estamos Atualizando os intens da loja RD. Em Breve novos produtos e promoções incriveis pra vc!','../src/RD_NA_lOJA.png')
var telefone= sessionStorage.getItem('teladmin')
if(!telefone || telefone==''){
var telefone=sessionStorage.getItem('teladmin')
}
var Url = encodeURIComponent("https://rd-reparos-domicilio.netlify.app/html/utilit");
var codigo= sessionStorage.getItem('codigo')
var data= sessionStorage.getItem('data')
var hora= sessionStorage.getItem('hora')
var text=`Loja RD utilitário:\n------------------------------\n👉 Produto: ${doc.Titulo}\n------------------------------\n$ Valor: ${doc.Valor}\n------------------------------\n$ Promoção: ${doc.Desconto}\n------------------------------\n📝Lista: ${doc.ADD1}\n------------------------------\n✅ Código: ${doc.ID}\n------------------------------\n\n`
var numero = `+55${telefone}`; // Substitua pelo número de destino, incluindo o código do país
var url = "https://wa.me/"+`${numero}?text=${encodeURIComponent(text)} ✅ Link: ${Url}`;
window.open(url, "_blank");
});
})
})
}
listaInicial()
//logo title
function initPage(){
Swal.fire({ 
title: ``,
text: ``, 
html:`
<img src="../src/RD_NA_lOJA.png" alt="Logo RD Reparos a Domicílio" class="logo-swal" width="70%">
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
var id = setInterval(frame, 73);
function frame() {
if (width >= 100) {

i = 0;
document.getElementById('myProgress').style.display = 'none'
 swalclose()
 clearInterval(id)
//document.getElementById('imgcad').value = `${url_imagem}`
document.getElementById('divGeral').style.display = 'block'
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
};
function fecharMenu() {
Menu() 
};
function init(){
Menu() 
};

function Returpag(){
window.open('../index.html','_self')
}
function inicio_(){
Menu()
}