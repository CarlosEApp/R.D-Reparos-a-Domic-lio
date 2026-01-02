




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
Swal.showLoading();
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
        document.getElementById("codigoCliente").innerHTML = dados.Código
        document.getElementById("nomeCliente").innerHTML = dados.Cliente;
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


   AlertaInicial()

   
