// Add your custom JavaScript for storefront pages here.
//Chat WhatsApp
$('body#page-home, body#page-categories, body#page-products, body#page-search').append('<a href="https://api.whatsapp.com/send?1=pt_BR&phone=554491808130&text=Ol%C3%A1,%20voc%C3%AA%20pode%20me%20ajudar%3F" target="_blank" id="ws_icon_chat" title="Atendimento via WhatsApp"><img src="https://www.kelvys.com.br/img/uploads/whatsapp_kelvys.png"></a>');
if($(window).width() < 480) {
$("#ws_icon_chat").attr("href", "https://api.whatsapp.com/send?1=pt_BR&phone=554491808130");
}
//Fim
// Titulo formas de pagamento
if(screen.width >= 768){
     $('<div class="title-pagamento"></div>').appendTo('.footer__contacts');
     $('<b>Pague com</b>').appendTo('.title-pagamento'); 
}
//Fim
// Criar campo
if(screen.width >= 768){ 
   // cria campo abaixo contato
  $('<div class="formas-de-pagamento"></div>').appendTo('.footer__contacts');
  // move as imagens dos cartoes
  $('p.footer__payment-methods').appendTo('.formas-de-pagamento'); 
}
//Fim
//Frete Mercado Livre
if(screen.width >= 360){ 
  $('<div class="envio-ml"></div>').appendTo('section#product.product div.col');
  $('<a href="https://www.loja.kelvys.com.br/" target="_blank" title="Fretes mais baratos"><img src="https://www.kelvys.com.br/img/uploads/frete-mercado-livre.jpg"></a>').appendTo('.envio-ml');
}
//Fim
