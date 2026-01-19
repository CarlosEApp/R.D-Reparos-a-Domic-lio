

// ver mais prestador
function verPrest(){
     var RE_Prest= document.getElementById('RE_Clob').value;

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

 var dbc=firebase.firestore();

 dbc.collection('Colaboradores').doc(`${RE_Prest}`).get().then((doc)=>{
   var doc= doc.data()
   Swal.fire({ title: `Nº: ${doc.ID}`,
      text: ``, 
      html:`Nome do Prestador: <br> ${doc.Nome}<br> --------------------------------<br> <br> Telefone (whatsApp)<br> ${doc.Telefone}<br> ---------------------------<br> <br> `,
      imageUrl: `${doc.Foto}`,
      background: '#003253',
      color: '#fff', // cor do texto });
      allowOutsideClick: false,
      showConfirmButton: true,
      customClass: {
     popup: 'my-custom' // Aplica a classe CSS personalizada
     },
     didOpen: () => {
     document.body.style.paddingRight = '0px';
            
     }
 })
})
}

// falar por whats com cliente
function telCliente(){
  var nomeCliente= document.getElementById('nomeCliente').value;

   var Tel_Cliente= document.getElementById('telCliente').value.replace(/\D/g, '');
   var nomePrest= document.getElementById('nome_Clob').value;
      var RE_Prest= document.getElementById('RE_Clob').value;
      var código= document.getElementById('codigoCliente').value;
     //alert(Tel_Cliente)
 
Swal.fire({
title: `Contato Cliente  <i class="fa-brands fa-whatsapp"></i>`,
html: `

<button id="whats" title="">WhatsApp <i id='i_whats_start' class="fa-brands fa-whatsapp"></i></button>            
<br><br><button id='sair_'>Cancelar</button><br><br>
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

document.getElementById('whats').addEventListener('click',function(){
 var url=encodeURIComponent(`https://rd-reparos-domicilio.netlify.app/html/orcaserv.html?codigo=${código}`) ;
var Pagina = encodeURIComponent("https://rd-reparos-domicilio.netlify.app/");
var numero = `+55${Tel_Cliente}`; // Substitua pelo número de destino, incluindo o código do país
var msm=`📞(pedido de contato) \n\n👨‍💼 Nosso prestador de serviço ${nomePrest}\n Nº de registro ${RE_Prest}\nGostaria de estabelecer contato referente ao orçamento ou serviço solicitado\n------------------------------------------------\n🛠️RD- Serviço com qualidade e segurança para sua casa!\n\n`;
var Url = "https://wa.me/"+`${numero}?text=${encodeURIComponent(msm)}✅link: 👉 ${url} `;

 
window.open(Url,"_blank" );
});
}

// falar por whats com Prestador
function telPrestador(){
   var nomeCliente= document.getElementById('nomeCliente').value;
     var Tel_Cliente= document.getElementById('telCliente').value.replace(/\D/g, '');
     var cpfCliente=document.getElementById('cpfCliente').value;
      var nomePrest= document.getElementById('nome_Clob').value;
         var Tel_Prestador= document.getElementById('Tel_Clob').value.replace(/\D/g, '');
       var RE_Prest= document.getElementById('RE_Clob').value;
        var código= document.getElementById('codigoCliente').value;
        
     //alert(Tel_Cliente)
 
Swal.fire({
title: `Contato Cliente  <i class="fa-brands fa-whatsapp"></i>`,
html: `

<button id="whats" title="">WhatsApp <i id='i_whats_start' class="fa-brands fa-whatsapp"></i></button>            
<br><br><button id='sair_'>Cancelar</button><br><br>
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

document.getElementById('whats').addEventListener('click',function(){
 var url=encodeURIComponent(`https://rd-reparos-domicilio.netlify.app/html/orcaserv.html?codigo=${código}`) ;
var Pagina = encodeURIComponent("https://rd-reparos-domicilio.netlify.app/");
var numero = `+55${Tel_Prestador}`; // Substitua pelo número de destino, incluindo o código do país
var msm=`📞(pedido de contato) \n\n👨‍💼 Nosso Cliente ${nomeCliente}\n CPF ${cpfCliente}\nGostaria de estabelecer contato referente ao orçamento ou serviço solicitado\n------------------------------------------------\n🛠️RD- Serviço com qualidade e segurança para sua casa!\n\n`;
var Url = "https://wa.me/"+`${numero}?text=${encodeURIComponent(msm)}✅link: 👉 ${url} `;

 
window.open(Url,"_blank" );
});
}


// Função de alerta personalizada carregar
// Exibe o alerta por 5 segundos

 function AlertaInicial(){
Swal.fire({
title: ``,
text: ``,
html:` <h2>Aguarde o Carregamento...</h2>
`,
background: 'rgba(255, 255, 255, 0)', // Cor de fundo
color: '#001b0eff', // Cor do texto
allowOutsideClick: false,
showConfirmButton: false,
customClass: {
popup: 'my-custom_alert' // Aplica a classe CSS personalizada
},
didOpen: () => {

document.body.style.paddingRight = '0px';        
}
}); 
  setTimeout(function(set){
      document.getElementById('divInit').style.display='none';
Swal.close()
},7000)
}



window.onload = function () {
  // Captura o parâmetro da URL
  var params = new URLSearchParams(window.location.search);
  var codigo = params.get("codigo");

  if (codigo) {
   //wal("Código capturado: " + codigo);
    sessionStorage.setItem("MeuOrçamento",codigo);
  } else {
    console.log("Nenhum código encontrado na URL.");
   //wal("Nenhum código encontrado!");
  }

  // Exibe o código capturado (se existir)
 

  // Aguarda 3 segundos e busca no Firestore
  setTimeout(function () {
    var orcamento = sessionStorage.getItem("MeuOrçamento");
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
    var db = firebase.firestore();
    db.collection("Orçamentos").doc(orcamento).get().then((doc) => {
      if (doc.exists) {
        var dados = doc.data();
      //alert("Orçamento encontrado:\nCódigo: " + dados.Codigo + "\nCliente: " + dados.Cliente);
        document.getElementById("codigoCliente").innerHTML =`Código: <b id='BB'>${ dados.Código}</b>`
        document.getElementById('codigoCliente').value=dados.Código;
         document.getElementById("nomeCliente").innerHTML = `Cliente: <b id='BB2'>${dados.Cliente}</b>`;
          document.getElementById("nomeCliente").value=dados.Cliente;
          document.getElementById("telCliente").innerHTML = `Contato (Whats): <b id='BB2'>${dados.Tel_Cliente}</b>`;
           document.getElementById("telCliente").value=dados.Tel_Cliente
           document.getElementById("cpfCliente").innerHTML = `CPF: <b id='BB2'>${dados.CPF_Cliente}</b>`;
             document.getElementById('cpfCliente').value=dados.CPF_Cliente
             document.getElementById("rua").innerHTML = `Rua: <b id='BB2'>${dados.Rua}</b>`;
              document.getElementById("numero").innerHTML = `Nº: <b id='BB2'> ${dados.Número}</b>`;
               document.getElementById("bairro").innerHTML = `Bairro: <b id='BB2'>${dados.Bairro}</b>`;
                document.getElementById("cidade").innerHTML = `Cidade: <b id='BB2'> ${dados.Cidade}</b>`;
                 document.getElementById("estado").innerHTML = `Estado: <b id='BB2'> ${dados.Estado}</b>`;
                  document.getElementById("cep").innerHTML = `CEP: <b id='BB2'> ${dados.CEP}</b>`;
                   document.getElementById("ref").innerHTML = `Referência: <b id='BB2'> ${dados.EndREF}</b>`;
                   // document.getElementById('').value=
                   //colaboraor
                     document.getElementById("nome_Clob").innerHTML = `Prestador: <b id='BB2'> ${dados.Prestador}</b>`;
                          document.getElementById('nome_Clob').value=dados.Prestador
                     document.getElementById("RE_Clob").innerHTML = `Nº de registro: <b id='BB2'> ${dados.NRE}</b>`;
                       document.getElementById('RE_Clob').value=dados.NRE
                     document.getElementById("Tel_Clob").innerHTML = `Contato (Whats): <b id='BB2'> ${dados.Tel_Prestador}</b>`;
                       document.getElementById('Tel_Clob').value=dados.Tel_Prestador
                       document.getElementById('h3Servi').innerHTML=`Serviço de  <b id='BBb'> ${dados.Serviço}</b>`
          

        document.getElementById('divGeral').style.display='block';
       
      } else {
      document.getElementById('divGeral').style.display='none';
    Swal.fire({ 
      title: "Orçamento não encontrado!", 
      text: "Não foi possível localizar o orçamento com o código fornecido.", 
      icon: "error", 
      color: '#ffffffff',
      iconColor: "#c40000ff",
      background: "#001813ff",
      customClass: { 
        popup: 'popup-class', 
        title: 'title-class', 
        htmlContainer: 'text-class' }
    })
     
     setTimeout(function(){
     window.open('../index.html', '_self')
    // document.getElementById('divInit').style.display='none';
       },4000)
      
      }
    });
  }, 2000);
};

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

   AlertaInicial()

   
function initPage(){
    Swal.fire({ 
title: ``,
text: ``, 
html:`
 <div id="divInitTime"> 
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
var id = setInterval(frame, 70);
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
initPage()