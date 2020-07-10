// Add your custom JavaScript for storefront pages here.
//Chat WhatsApp
$('body#page-categories, body#page-products, body#page-search').append('<a href="https://web.whatsapp.com/send?1=pt_BR&phone=554491808130" target="_blank" id="ws_icon_chat" title="Atendimento via WhatsApp"><img src="https://www.kelvys.com.br/img/uploads/whatsapp_kelvys.png"></a>');
if($(window).width() < 480) {
$("#ws_icon_chat").attr("href", "https://api.whatsapp.com/send?1=pt_BR&phone=554491808130");
}
//Fim

$('<img src="//cl.avis-verifies.com/br/cache/8/c/7/8c7c2c69-7520-d754-f544-483d6a0625cb/widget3/widget01-3835.png" alt="WidgetAvisVerifies"   width="150">').appendTo('.footer__stamps');


