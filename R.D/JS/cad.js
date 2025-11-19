

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
 Swal.fire('Sucesso!',`Salvo com o ID: ${idd} - Lista: ${lista}`,'success')
   limparC()
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