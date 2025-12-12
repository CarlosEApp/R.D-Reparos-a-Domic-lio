




// Lista de colaboradores
function ListaCC(){
 fech()
  time2
document.getElementById('cadCol').style.display='none'
document.getElementById('listCol').style.display='block'
var li= document.getElementById('listCol');
li.innerHTML='';
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
var dbt = firebase.firestore();
var produtosRef = dbt.collection(`Colaboradores`);
produtosRef.get().then((querySnapshot) => {
querySnapshot.forEach(doc => {
var doc = doc.data();
var itens2 =querySnapshot.size;
var div= document.createElement('div');
var div2= document.createElement('div');
var div3= document.createElement('div');
var div4= document.createElement('div');
var div5= document.createElement('div');
var lbl= document.createElement('label');
var lbl2= document.createElement('label');
var lbl3= document.createElement('label');
var btn= document.createElement('button');
var btn2= document.createElement('button');
var btn3 = document.createElement('button');
var img=document.createElement('img');

lbl.id='lbl';
lbl2.id='lbl2';
lbl3.id='lbl3';
div.id='dv';
div2.id='dv2';
div3.id='dv3';
div4.id='dv4';
div5.id='dv5';
btn.id='btnn';
btn2.id='btnn2';
btn3.id='btnn3';
img.id='imgg'
img.src=`${doc.Foto}`
lbl.textContent=`${doc.Nome}`;
lbl2.textContent=`${doc.Email}`;
lbl3.textContent=`R.E (${doc.RE})`;
btn.textContent=``;
btn.className=`fa-solid fa-eye`;
btn2.textContent=`Editar`;
btn3.className=`fa-solid fa-trash`;

 div3.appendChild(img);
 div4.appendChild(lbl);
div4.appendChild(document.createElement('br'));
div4.appendChild(lbl2);
div4.appendChild(document.createElement('br'));
div4.appendChild(document.createElement('br'));
div4.appendChild(lbl3);
div5.appendChild(btn);
div5.appendChild(btn2);
div5.appendChild(btn3);
div2.appendChild(div3);
div2.appendChild(div4);
div.appendChild(div2);
div.appendChild(div5);
li.appendChild(div);
setTimeout(function(){
 document.getElementById('listItens2').innerHTML=`Total de ( ${itens2} ) Colaboradores encontrados`
 sessionStorage.setItem('time12',itens2)
  document.getElementById('listItens2').style.display='block'
  document.getElementById('listItens1').style.display='none'
},500)
btn.addEventListener('click',function(){
  swal(`R.E = ${doc.RE}`,`Nome:\n${doc.Nome}\n-------------------------\nEmail:\n${doc.Email}\n-------------------------\nRG:\n${doc.RG}\n-------------------------\nTelefone:\n${doc.Telefone}\n-------------------------\nData:\n${doc.Data}\n-------------------------\nHora:\n${doc.Hora}\n\n`,`success`)
});
img.addEventListener('click',function(){
  swal(`R.E= ${doc.RE}`,'',`${doc.Foto}`)
});
 btn2.addEventListener('click', function(){
   document.getElementById('inputR_E').value=doc.RE
   document.getElementById('inputColnome').value= doc.Nome
   document.getElementById('inputColEmail').value=doc.Email
   document.getElementById('rg').value=doc.RG
   document.getElementById('inputColTel').value=doc.Telefone
   document.getElementById('fotoCol').src=doc.Foto

   document.getElementById('cadCol').style.display='block'
  document.getElementById('listCol').style.display='none'
  document.getElementById('listItens1').style.display='none'
  document.getElementById('listItens2').style.display='none'
 
 });
 btn3.addEventListener('click', function () {
  Swal.fire({
    title: 'Excluir Colaborador!',
    html: `
      <div class="menu-container">
        <p>A exclusão não poderá ser desfeita!</p>
        <br><br>
        <button id="SwalExCód" title="">Excluir <i class="fa-solid fa-trash"></i></button>
        <br><br>
        <button id="Sair" class="cancelar">Sair</button>
      </div>
    `,
    background: 'rgba(0, 0, 0, 1)',
    color: '#ffffffff',
    showCancelButton: false,
    showConfirmButton: false,
    customClass: {
      popup: 'my-custom_CadExCód'
    },
    didOpen: () => {
      document.body.style.paddingRight = '0px';
    }
  });

  document.getElementById('Sair').addEventListener('click', function () {
    Swal.close();
  });

  document.getElementById('SwalExCód').addEventListener('click', function () {
    var db = firebase.firestore();
    var storage = firebase.storage();

    // Primeiro deleta o documento do Firestore
    db.collection('Colaboradores').doc(doc.RE).delete()
      .then(() => {
        // Depois deleta a foto no Storage
        if (doc.Foto) {
          var fotoRef = storage.refFromURL(doc.Foto);
          return fotoRef.delete();
        }
      })
      .then(() => {
        Swal.fire('Colaborador excluído', 'Os documentos e a foto foram deletados com sucesso!', 'success');
        selects();
      })
      .catch((error) => {
        
      });
  });
});
})
})
}
 function fech(){
   document.getElementById('inputR_E').value=''
   document.getElementById('inputColnome').value=''
   document.getElementById('inputColEmail').value=''
   document.getElementById('rg').value=''
   document.getElementById('inputColTel').value=''
   document.getElementById('fotoCol').src='../src/Profile-PNG-Images.png'
 }
//Salvar cadastro de colaborador
function SalvarCadColaborador(){
var REID=document.getElementById('inputR_E').value;
var nomeColb= document.getElementById('inputColnome').value;
var EmailColab= document.getElementById('inputColEmail').value;
var RGColab= document.getElementById('rg').value;
var TelColab= document.getElementById('inputColTel').value;
var data= localStorage.getItem('data')
var hora= localStorage.getItem('hora')
var FotoColab= document.getElementById('fotoCol').src 
if(!REID||REID==''||!nomeColb||nomeColb==''||!EmailColab||EmailColab==''||!RGColab||RGColab==''||!TelColab||TelColab==''){
Swal.fire('Preencha todos os campos!','Para salvar o cadastro você precisa digitar todas as informações requeridas no cadastro.','warning')
}else{
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
var ddb= firebase.firestore();
ddb.collection('Colaboradores').doc(`${REID}`).set({
RE:REID,
ID:REID,
Nome:nomeColb,
Email:EmailColab,
RG:RGColab,
Telefone:TelColab,
Foto:FotoColab,
Data: data,
Hora: hora,
})
setTimeout(function(){
Swal.fire('Salvo!','','success')
setTimeout(function(){
window.location.reload()
},2000)
},1000)
}
}

//Setar Foto do colaborador
function Fotocolab(){
var idfoto= document.getElementById('inputR_E').value;
if(!idfoto||idfoto==''){
  Swal.fire('Prencha o campo R.E','','error')
}else{

document.getElementById('file').click();
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
var fileButton = document.getElementById('file');
fileButton.addEventListener('change', function(e) {
var file = e.target.files[0];
var storageRef = firebase.storage().ref(`${idfoto}.jpg`);
var task = storageRef.put(file);
//
task.on('state_changed', function progress(snapshot) {
}, function error(err) {}, function complete() {
storageRef.getDownloadURL().then(function(url_imagem) {
Swal.close()
document.getElementById('myProgress_2').style.display = 'block'
var i = 0;
if (i == 0) {
i = 1;
var elem = document.getElementById("myBarfoto");
var width = 1;
var id = setInterval(frame, 30);
function frame() {
if (width >= 100) {
clearInterval(id);
i = 0;
document.getElementById('fotoCol').src = url_imagem
//document.getElementById('imgcad').value = `${url_imagem}`
setTimeout(function() {
// alert(resp)
document.getElementById('myProgress_2').style.display = 'none'
}, 1000)
} else {
width++;
elem.style.width = width + "%";
elem.innerHTML = width + "%"; // Atualiza o texto do rótulo
}
}
}
})
})
})
}
};

 document.getElementById('fotoCol').addEventListener('click',function(){
  var fotoimg= document.getElementById('fotoCol').src;

 swal('','',`${fotoimg}`)
 });

//format RG
function formatarRG(rg) {
rg = rg.replace(/\D/g, ""); // Remove caracteres não numéricos
rg = rg.replace(/(\d{2})(\d)/, "$1.$2");
rg = rg.replace(/(\d{3})(\d)/, "$1.$2");
rg = rg.replace(/(\d{3})(\d{1})$/, "$1-$2");
return rg;
}
function aplicarMascaraRG(event) {
let input = event.target;
input.value = formatarRG(input.value);
}
// format Tel
document.getElementById('inputColTel').addEventListener('input', function (e) {
let value = e.target.value.replace(/\D/g, ''); // Remove caracteres não numéricos
if (value.length > 11) value = value.slice(0, 11); // Limita ao tamanho correto
let formattedValue = value.replace(/^(\d{2})(\d)/, '($1) $2')
.replace(/(\d{4})(\d{4})$/, '$1-$2');
e.target.value = formattedValue;
});
//Botão cad. colaborador
function Colaboradores(){
   document.getElementById('listItens1').style.display='none'
  document.getElementById('listItens2').style.display='none'
document.getElementById('cadCol').style.display='block'
document.getElementById('listCol').style.display='none'
//document.getElementById('body1').style.display='block'
var data= localStorage.getItem('data')
var hora= localStorage.getItem('hora')
//alert(data)
var dat= data.split('/')
var date=dat['0']
var date1=dat['1']
var resp2= hora.split(':')
//var um= resp2[0]
//var dois= resp2[1]
var NRE= resp2[2]
var caracteres = '123456789';
let colabRE = '';
for (let i = 0; i < 5; i++) {
colabRE += caracteres.charAt(Math.floor(Math.random() * caracteres.length));
document.getElementById('inputR_E').value= `${colabRE}.${date+date1}-${NRE}`
}
}

// Fechar lista Ordem de serviços, colabaradores
function FecharColabServ(){
fecharOrdemServ()
}
// Serviços,_Ordem de serviços e_colaboradores
function OrdemServiços(){
FecharCadServ()
FecharCad()
document.getElementById('Serv_Ordem_colab').style.display='block';
}
function fecharOrdemServ(){
document.getElementById('Colobaradores').style.display='none'
document.getElementById('Orçamentos').style.display='none'
document.getElementById('ordemserv').style.display='none'
document.getElementById('Serv_Ordem_colab').style.display='none';
document.getElementById('select_colaboradores').value=''
}
//seletor de serviços
function selectSOC(){
var resp=document.getElementById('select_colaboradores').value;
if(!resp||resp==''){

} else if(resp=='Colaboradores'){
     ListaCC()
document.getElementById('Colobaradores').style.display='block'
document.getElementById('Orçamentos').style.display='none'
document.getElementById('ordemserv').style.display='none'
} else if(resp=='orçamento'){
  fech()
   document.getElementById('listItens1').style.display='none'
  document.getElementById('listItens2').style.display='none'
document.getElementById('Colobaradores').style.display='none'
document.getElementById('Orçamentos').style.display='block'
document.getElementById('ordemserv').style.display='none'
} else if(resp=='OrdemServiços'){
  fech()
 document.getElementById('listItens1').style.display='none'
document.getElementById('listItens2').style.display='none'
document.getElementById('Colobaradores').style.display='none'
document.getElementById('Orçamentos').style.display='none'
document.getElementById('ordemserv').style.display='block'
}
}
//cadastrados
//fechar
function FecharCadServ(){
document.getElementById('listcadastrados').style.display='none';
}
function ServCad(){
document.getElementById('a_Inicio').click()
FecharCad();
document.getElementById('listcadastrados').style.display='block';
fecharOrdemServ()
}
function selects(){
   sessionStorage.setItem('time1','')
var lista=  document.getElementById('Listasev').value;
time1()
var list= document.getElementById('listCDS');
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
var produtosRef = db.collection(`${lista}`);
produtosRef.get().then((querySnapshot) => {
querySnapshot.forEach(doc => {
var doc = doc.data();
 var itens= querySnapshot.size;
var div= document.createElement('div');
var div2= document.createElement('div');
var div3= document.createElement('div');
var lbl= document.createElement('label');
var lbl2= document.createElement('label');
var lbl3= document.createElement('label');
var btn= document.createElement('button');
var btn2= document.createElement('button');
var btn3 = document.createElement('button');
lbl.id='lblid';
lbl2.id='lblid2';
lbl3.id='lblid3';
div.id='divid';
div2.id='divid2';
div3.id='divid3';
btn.id='btnid';
btn2.id='btnid2';
btn3.id='btnid3';
lbl.textContent=`${doc.Titulo}`;
lbl2.textContent=`${doc.SubT}`;
lbl3.textContent=`${doc.ID}`;
btn.textContent=``;
btn.className=`fa-solid fa-eye`;
btn2.textContent=`Editar`;
btn3.className=`fa-solid fa-trash`;
div2.appendChild(lbl);
div2.appendChild(document.createElement('br'));
div2.appendChild(lbl2);
div2.appendChild(document.createElement('br'));
div2.appendChild(document.createElement('br'));
div2.appendChild(lbl3);
div3.appendChild(btn);
div3.appendChild(document.createElement('br'));
div3.appendChild(document.createElement('br'));
div3.appendChild(btn3);
div3.appendChild(document.createElement('br'));
div3.appendChild(document.createElement('br'));
div3.appendChild(btn2);
div.appendChild(div2);
div.appendChild(div3);
list.appendChild(div);
setTimeout(function(){
 document.getElementById('listItens1').innerHTML=`Total de ( ${itens} ) produtos encontrados`
 sessionStorage.setItem('time1',itens)
  document.getElementById('listItens1').style.display='block'
  document.getElementById('listItens2').style.display='none'
},500)
btn.addEventListener('click',function(){
swal(`${doc.Titulo}`,`${doc.SubT}\n-------------------------\nValor:\n${doc.Valor}\n------------------------\nValor c/desconto:\n${doc.Desconto}\n-------------------------\nOBS:\n${doc.OBS}\n-------------------------\nLista:\n${doc.Lista}\n-------------------------\nID:\n${doc.ID}\n-------------------------\nData e Hora:\n${doc.Data} - ${doc.Hora}\n-------------------------\n ${doc.ADD1}\n${doc.ADD2}\n${doc.ADD3}\n${doc.ADD4}\n${doc.ADD5}\n`,`${doc.Imagem}`)
});
btn2.addEventListener('click',function(){
document.getElementById('ListaCategoria').value=doc.Lista
document.getElementById('imgcad').src=doc.Imagem   
document.getElementById('Input_ID').value=doc.ID
document.getElementById('Input_titulo').value=doc.Titulo
document.getElementById('Input_Subtitulo').value=doc.SubT
document.getElementById('Input_Valor').value=doc.Valor
document.getElementById('Input_ValorDesconto').value=doc.Desconto
document.getElementById('Input_OBS').value=doc.OBS
document.getElementById('Input_add1').value=doc.ADD1
document.getElementById('Input_add2').value=doc.ADD2
document.getElementById('Input_add3').value=doc.ADD3
document.getElementById('Input_add4').value=doc.ADD4
document.getElementById('Input_add5').value=doc.ADD5
document.getElementById('body1').style.display='Block'
document.getElementById('listcadastrados').style.display='none'
});
btn3.addEventListener('click',function(){
Swal.fire({
title: `Excluir Arquivo!`,
html: ` <div  class="menu-container">
<p> A exclusão não podera ser desfeita!</p>
<br><br>
<button id="SwalExCód" title="">Excluir <i class="fa-solid fa-trash"></i></button>
<br><br>  <button id='Sair' class='cancelar'> Sair </button>
</div>
`,
background: 'rgba(0, 0, 0, 1)', // Cor de fundo
color: '#ffffffff', // Cor do texto
showCancelButton: false,
showConfirmButton: false,
customClass: {
popup: 'my-custom_CadExCód' // Aplica a classe CSS personalizada
},
didOpen: () => {
document.body.style.paddingRight = '0px';
}
});
document.getElementById('Sair').addEventListener('click', function() {
Swal.close('click')
});
document.getElementById('SwalExCód').addEventListener('click', function() {
var dx= firebase.firestore();
dx.collection(`${doc.Lista}`).doc(`${doc.ID}`).delete()
var dx2= firebase.firestore();
dx2.collection(`Geral-Cadastros`).doc(`${doc.ID}`).delete()
setTimeout(function(){
Swal.fire('Arquivo excluido','Os arquivos e documentos foram deletados com sucesso!','success')
selects()
},1000)
});
})
})
})
}
//Limpar campos
function limparC(){
document.getElementById('ListaCategoria').value=''
document.getElementById('imgcad').src;   
document.getElementById('Input_ID').value=''
document.getElementById('Input_titulo').value=''
document.getElementById('Input_Subtitulo').value=''
document.getElementById('Input_Valor').value=''
document.getElementById('Input_ValorDesconto').value=''
document.getElementById('Input_OBS').value=''
document.getElementById('Input_add1').value=''
document.getElementById('Input_add2').value=''
document.getElementById('Input_add3').value=''
document.getElementById('Input_add4').value=''
document.getElementById('Input_add5').value=''
}
//salvar cadastro
function SalvarCad(){
var data= localStorage.getItem('data')
var hora= localStorage.getItem('hora')
var lista= document.getElementById('ListaCategoria').value;
var imagem= document.getElementById('imgcad').src;   
var idd= document.getElementById('Input_ID').value;
var titulo= document.getElementById('Input_titulo').value;
var subt= document.getElementById('Input_Subtitulo').value;
var valor=document.getElementById('Input_Valor').value;
var descontoV=document.getElementById('Input_ValorDesconto').value;
var obs= document.getElementById('Input_OBS').value;
var add1= document.getElementById('Input_add1').value;
var add2= document.getElementById('Input_add2').value;
var add3= document.getElementById('Input_add3').value;
var add4= document.getElementById('Input_add4').value;
var add5= document.getElementById('Input_add5').value;
document.getElementById('a_Inicio').click()
if(!lista||lista==''||!idd||idd==''||!titulo|| titulo==''||!valor||valor==''){
Swal.fire({
title: ``,
html:``,
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
Swal.fire('Atenção','Preencha os campos obrigatórios: ID produto, Titulo e Valor','warning')
}else{
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
var db= firebase.firestore()
db.collection(`${lista}`).doc(`${idd}`).set({
ID:idd,
Titulo:titulo,
SubT:subt,
Valor:valor,
Desconto:descontoV,
Lista:lista,
OBS:obs,
Imagem:imagem,
ADD1:add1,
ADD2:add2,
ADD3:add3,
ADD4:add4,
ADD5:add5,
Data:data,
Hora:hora,
})
var db= firebase.firestore()
db.collection(`Geral-Cadastros`).doc(`${idd}`).set({
ID:idd,
Titulo:titulo,
SubT:subt,
Valor:valor,
Desconto:descontoV,
Lista:lista,
OBS:obs,
Imagem:imagem,
ADD1:add1,
ADD2:add2,
ADD3:add3,
ADD4:add4,
ADD5:add5,
Data:data,
Hora:hora,
})
setTimeout(function(){
FecharCad()
Swal.fire('Sucesso!',`Salvo com o ID: ${idd} - Lista: ${lista} `,'success')
limparC()
var list= document.getElementById('listCDS');
list.innerHTML=''
setTimeout(function(){
//window.location.reload()
selects()
},2000)
},2000)
}
}
//Storage
function imagem(){
var idd= document.getElementById('Input_ID').value;
document.getElementById('files').click();
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
var fileButton = document.getElementById('files');
fileButton.addEventListener('change', function(e) {
var file = e.target.files[0];
var storageRef = firebase.storage().ref(`${idd}.jpg`);
var task = storageRef.put(file);
//
task.on('state_changed', function progress(snapshot) {
}, function error(err) {}, function complete() {
storageRef.getDownloadURL().then(function(url_imagem) {
Swal.close()
document.getElementById('myProgress').style.display = 'block'
var i = 0;
if (i == 0) {
i = 1;
var elem = document.getElementById("myBarIMG");
var width = 1;
var id = setInterval(frame, 30);
function frame() {
if (width >= 100) {
clearInterval(id);
i = 0;
document.getElementById('imgcad').src = url_imagem
//document.getElementById('imgcad').value = `${url_imagem}`
setTimeout(function() {
var resp = document.getElementById('imgcad').value;
// alert(resp)
document.getElementById('myProgress').style.display = 'none'
document.getElementById('a_Inicio').click()
}, 1000)
} else {
width++;
elem.style.width = width + "%";
elem.innerHTML = width + "%"; // Atualiza o texto do rótulo
}
}
}
})
})
})
};
//Ver imagem
function verImagem(){
var img= document.getElementById('imgcad').src;
swal('','',`${img}`)
}
// Botão cadastro
function Cadastro(){
fecharOrdemServ()
document.getElementById('a_Inicio').click()
FecharCadServ()
var data= localStorage.getItem('data')
var hora= localStorage.getItem('hora')
var resp= hora.split(':')
//var um= resp[0]
//var dois= resp[1]
var tres= resp[2]
document.getElementById('body1').style.display='block'
var caracteres = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ123456789';
let codigo = '';
for (let i = 0; i < 8; i++) {
codigo += caracteres.charAt(Math.floor(Math.random() * caracteres.length));
}
document.getElementById('Input_ID').value= codigo+tres
}
// botão fechar cadastro
function FecharCad(){
limparC()
document.getElementById('body1').style.display='none'
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
// const lbl_data = document.getElementById('lbl-data');
// lbl_data.innerHTML = `${data}`
localStorage.setItem('data', data)
localStorage.setItem('hora', timeString)
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
document.getElementById('a_Inicio').click()


// Time itens
function time1(){
  setTimeout(function(){
    document.getElementById('listItens1').style.display='block'
  document.getElementById('listItens2').style.display='none'
  var resp= sessionStorage.getItem('time1')
  if(!resp||resp==''){
    document.getElementById('listItens1').innerHTML=`Total de ( 0 ) produtos encontrados`
  } else{
     document.getElementById('listItens1').innerHTML=`Total de ( ${resp} ) produtos encontrados`
  }
  },2000)
}
function time2(){
  setTimeout(function(){
    document.getElementById('listItens2').style.display='block'
  document.getElementById('listItens1').style.display='none'
  var resp= sessionStorage.getItem('time2')
  if(!resp2||resp2==''){
    document.getElementById('listItens2').innerHTML=`Total de ( 0 ) Colaboradores encontrados`
  } else{
     document.getElementById('listItens2').innerHTML=`Total de ( ${resp2} ) Colaboradores encontrados`
  }
  },2000)
}