// Add your custom JavaScript for storefront pages here.
//Chat WhatsApp
$('body#page-categories, body#page-products, body#page-search').append('<a href="https://web.whatsapp.com/send?1=pt_BR&phone=554491808130" target="_blank" id="ws_icon_chat" title="Atendimento via WhatsApp"><img src="https://www.kelvys.com.br/img/uploads/whatsapp_kelvys.png"></a>');
if($(window).width() < 480) {
$("#ws_icon_chat").attr("href", "https://api.whatsapp.com/send?1=pt_BR&phone=554491808130");
}
//Fim
// Criar campo
if(screen.width >= 768){ 
   // cria campo abaixo contato
  $('<div class="formas-de-pagamento"></div>').appendTo('.footer__contacts');
  // move as imagens dos cartoes
  $('.mt-4.mb-3').appendTo('.formas-de-pagamento'); 
}
//Fim
