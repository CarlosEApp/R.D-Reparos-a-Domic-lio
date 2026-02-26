

function selectcidade(){
   var VLPM =sessionStorage.getItem('VLMP')
  var resp = document.getElementById('Input_cidade').value;
  if(resp=='Itanhaém'){
    document.getElementById('lblTTMP').innerHTML=`Você pagará <b id='ppc'>${VLPM} R$</b> - frete gratis <br> 🚚 Chega em até 3 Três dias!`;
  }else if(resp=='Peruíbe') {
 document.getElementById('lblTTMP').innerHTML=`Você pagará <b id='ppc'>${VLPM} R$</b> - frete gratis <br> 🚚 Chega em até 3 Três dias!`;
  } else if(resp=='Mongaguá'){
    document.getElementById('lblTTMP').innerHTML=`Você pagará <b id='ppc'>${VLPM} R$</b> - frete gratis <br> 🚚 Chega em até 3 Três dias!`;
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
   Swal.fire('','Encontramos seu cadastros de endereço','success')
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
// Swal.fire('Não tem Cadastro','','warning')
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
 Swal.fire('Preencha todos os campos!')
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
  CódMP:cód,
  Titulo:titulo,
  IDRD:idRD,
  ListRD:listRD,
  Valor:VLPM,
  Data:data,
  Hora:hora,
 })
setTimeout(function(){
 //Swal.fire('sucesso!',``,'success')
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
             <option value="Elétrica">⚡Itens de Elétrica</option>
              <option value="Hidráulica">🚿 Itens de Hidráulica</option>
               <option value="Pintura">🖌️ Itens de Pintura</option>
                <option value="Desktop">💻 Itens de Desktop PC</option>
                 <option value="Alvenaria">🔨 Itens de Alvenaria</option>
                  <option value="Jardinagem">🌿 Itens de Jardinagem</option>
                   <option value="Diversos">🛍️ Itens Diversos</option>
    </select>
    <br> <br>       
    <label id='lblItens'>Não há itens à venda nessa lista!</label>      
</div>
`,
imageUrl: `../src/RD_NA_lOJA.png`,
background: 'rgb(255, 255, 255)', // Cor de fundo
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
   document.getElementById('lblItens').style.display='none'
  document.getElementById('a_init').click()
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
document.getElementById('lblItens').style.display='none'
document.getElementById('lblListaHead').innerHTML=`📝${resp}  🛍️${itens}`
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
  verfCad()
const prefId = doc.ADD2;
sessionStorage.setItem('MPpag',`${prefId}`)
sessionStorage.setItem('TituloMP', doc.Titulo)
sessionStorage.setItem('IDRD', doc.ID)
sessionStorage.setItem('listaRD', doc.ADD1)
sessionStorage.setItem('IDMP', doc.ADD2)
sessionStorage.setItem('VLMP', doc.Desconto)
document.getElementById('lblTTMP').innerHTML=`Você pagará <b id='ppc'>${doc.Desconto} R$</b> - frete gratis <br> 🚚 Chega em até 3 Três dias!`;
var pag=document.getElementById('pagamentos');
pag.className='pagamentos-ativo'
})
button2.addEventListener('click', function(){
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
} else{
setTimeout(function(){
if(!itens|| itens==''|| itens==0){
//Swal.fire('Lista vazia!')
document.getElementById('lblItens').style.display='block'
document.getElementById('lblListaHead').innerHTML=`📝Não há itens na lista`
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
document.getElementById('lblListaHead').innerHTML=`📝Diversos 🛍️${itens}`
img.addEventListener('click', function(){
swal('','',`${doc.Imagem}`)
});
  sessionStorage.setItem('MPpag','')
sessionStorage.setItem('TituloMP','')
sessionStorage.setItem('IDRD','')
sessionStorage.setItem('listaRD','')
sessionStorage.setItem('IDMP','')
var telefone= sessionStorage.getItem('teladmin')
if(!telefone || telefone==''){
var telefone=sessionStorage.getItem('teladmin')
}
button.addEventListener('click', function(){
  var rep=document.getElementById('Input_cidade');
rep.value=''
  verfCad()
const prefId = doc.ADD2;
sessionStorage.setItem('MPpag',`${prefId}`)
sessionStorage.setItem('TituloMP', doc.Titulo)
sessionStorage.setItem('IDRD', doc.ID)
sessionStorage.setItem('listaRD', doc.ADD1)
sessionStorage.setItem('IDMP', doc.ADD2)
sessionStorage.setItem('VLMP', doc.Desconto)
 document.getElementById('lblTTMP').innerHTML=`Você pagará <b id='ppc'>${doc.Desconto} R$</b> - frete gratis <br> 🚚 Chega em até 3 Três dias!`;
var pag=document.getElementById('pagamentos');
pag.className='pagamentos-ativo'
 
});
button2.addEventListener('click', function(){
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

setTimeout(function()
{
},2000)
})
})

/// format cep
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
        Swal.fire("CEP não encontrado.",'Mas não se preocupe, preencha os campos manualmente.','warning');
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