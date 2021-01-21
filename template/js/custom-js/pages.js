// Add your custom JavaScript for storefront pages here.
//Chat WhatsApp
$('body#page-categories, body#page-products, body#page-search').append('<a href="https://web.whatsapp.com/send?1=pt_BR&phone=554491808130" target="_blank" id="ws_icon_chat" title="Atendimento via WhatsApp"><img src="https://www.kelvys.com.br/img/uploads/whatsapp_kelvys.png"></a>');
if($(window).width() < 480) {
$("#ws_icon_chat").attr("href", "https://api.whatsapp.com/send?1=pt_BR&phone=554491808130");
}
//Fim
// Cria campo novo de certificados e move eles pra dentro
if(screen.width >= 768){ 
   // cria campo novo embaixo do footer
  $('<div class="certificados"></div>').appendTo('.footer.py-3.py-lg-4.py-xl-5 >.container >.row');
  // move os selos pra dentro desse novo campo
  $('.footer__stamps').appendTo('.certificados'); 
}
//Fim
