

//cadastrados

        //fechar
        function FecharCadServ(){
             document.getElementById('listcadastrados').style.display='none'
        }


function ServCad(){

     FecharCad()
    document.getElementById('listcadastrados').style.display='block'
}
function selects(){
  var lista=  document.getElementById('Listasev').value;
  var list= document.getElementById('listCDS');
  list.innerHTML=''
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
var produtosRef = db.collection(`${lista}`);
produtosRef.get().then((querySnapshot) => {
querySnapshot.forEach(doc => {
var doc = doc.data();
 //alert(doc.Titulo)
 var div= document.createElement('div')
 var div2= document.createElement('div')
 var div3= document.createElement('div')
 var lbl= document.createElement('label')
 var lbl2= document.createElement('label')
 var lbl3= document.createElement('label')
 var btn= document.createElement('button')
 var btn2= document.createElement('button')

lbl.id='lblid'
lbl2.id='lblid2'
lbl3.id='lblid3'
div.id='divid'
div2.id='divid2'
div3.id='divid3'
btn.id='btnid'
btn2.id='btnid2'
lbl.textContent=`${doc.Titulo}`
lbl2.textContent=`${doc.SubT}`
lbl3.textContent=`${doc.ID}`
btn.textContent=``
btn.className=`fa-solid fa-eye`
btn2.textContent=`Editar`

div2.appendChild(lbl)
div2.appendChild(document.createElement('br'))
div2.appendChild(lbl2)
div2.appendChild(document.createElement('br'))
div2.appendChild(document.createElement('br'))
div2.appendChild(lbl3)
div3.appendChild(btn)
div3.appendChild(document.createElement('br'))
div3.appendChild(document.createElement('br'))
div3.appendChild(btn2)
div.appendChild(div2)
div.appendChild(div3)
list.appendChild(div)
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
setTimeout(function(){
   
     FecharCad()
 Swal.fire('Sucesso!',`Salvo com o ID: ${idd} - Lista: ${lista} `,'success')
   limparC()
     var list= document.getElementById('listCDS');
  list.innerHTML=''
  setTimeout(function(){
window.location.reload()
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