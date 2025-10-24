






//Pesquisa Header
document.getElementById('read2').style.display='none'
function pesquisar(){
var cla= document.getElementById('btnSetPesq');
var dplay=  document.getElementById('read2').style.display;
if(dplay=='none'){
document.getElementById('read2').style.display='block'
cla.className='fa-solid fa-delete-left'
sessionStorage.setItem('MENULateral','')
document.getElementById("menu_lateral").classList.remove("menu-ativo");
var BTN=document.getElementById('IMenu');
BTN.className='fa-solid fa-bars'
}else{
document.getElementById('read2').style.display='none'
cla.className='fa-solid fa-magnifying-glass'
}
}

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