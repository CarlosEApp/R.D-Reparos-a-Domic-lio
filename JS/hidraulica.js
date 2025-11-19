


// Lista Tabela
function listaPreços(){
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
var produtosRef = db.collection(`Hidraulica`);
produtosRef.get().then((querySnapshot) => {
querySnapshot.forEach(doc => {
var doc = doc.data();
var itens = querySnapshot.size;

var div= document.createElement('div');
var div2= document.createElement('div');
var div3= document.createElement('div');
var img= document.createElement('img')
var label= document.createElement('label');
var label2= document.createElement('label');
var label3= document.createElement('label');
var label4= document.createElement('label');
var label5= document.createElement('p');
var botão= document.createElement('button');
var pr=document.createElement('p');
var pr2=document.createElement('p');
var pr3=document.createElement('p');
div.id='divid',
div2.id='divid2',
div3.id='divid3',
label.id='labelid'
label2.id='labelid2'
label3.id='labelid3'
label4.id='labelid4'
label5.id='labelid5'
botão.id='botaoid'
pr.id='paragrafo'
pr2.id='paragrafo2'
img.id='imgid'
pr3.id='paragrafo3'
img.src=`../src/RD_logo.png`
label.textContent=`${doc.Titulo}`;
pr3.textContent='Atendemos em Itanhaém e região'
if(!doc.SubT||doc.SubT==''){
label2.textContent=``;
}else{
label2.textContent=`${doc.SubT}`;
}
label3.textContent=`R$: ${doc.Valor}`;
if(!doc.Desconto||doc.Desconto==''){
label4.textContent=``;
}else{
label4.textContent=`Promoção - Desc. de: ${doc.Desconto}`;
}
if(!doc.OBS||doc.OBS==''){
label5.textContent=``;
}else{
label5.textContent=`${doc.OBS}`;
}
botão.className='fa-brands fa-whatsapp';
pr.textContent='WhatsApp';
pr2.textContent=`ID: ${doc.ID}`;


div2.appendChild(pr3);
div2.appendChild(document.createElement('br'));
div2.appendChild(img)
div2.appendChild(document.createElement('br'));
div2.appendChild(label);
div2.appendChild(document.createElement('br'));
div2.appendChild(label2);
div3.appendChild(label3);
div3.appendChild(document.createElement('br'));
div3.appendChild(label4);
div3.appendChild(document.createElement('br'));
div3.appendChild(label5);
div3.appendChild(document.createElement('br'));
div3.appendChild(botão);
div3.appendChild(pr);
div3.appendChild(document.createElement('br'));
div3.appendChild(pr2);
div.appendChild(div2);
div.appendChild(div3);
listTab.appendChild(div)
//setTimeout(function(){
//Swal.fire(`${itens}`,`quantidade de serviços: ${itens} `,'')
//},2000)
})
})
};
listaPreços()

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
document.getElementById('divTabela').style.display='block'
listaPreços()
Menu() 
};

//fechar tabel
function fecharTabela(){
document.getElementById('divTabela').style.display='none'
};