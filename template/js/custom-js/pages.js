// Add your custom JavaScript for storefront pages here.
// Adicionar Formas de Envio
$( "footer.footer.py-3.py-lg-4.py-xl-5 > .container" ).append("<div class='row'><div class='div.col-12.col-sm-6.col-lg'>"
+ "<big>Formas de envio</big>"
+ "<img src='https://cdn.e-com.club/s/www.kelvys.com.br/uploads/kelvys-logo-correios.png' alt='Correios' title='PAC e SEDEX'>"
+ "<img src='https://cdn.ecvol.com/s/www.kelvys.com.br/uploads/logo-asaplog-kelvys.png' alt='AsapLog' title='TRANSPORTADORA' style='margin-top: 20px;'></div></div>");
//Fim
$('<div class="rastrear-pedido"></div>').appendTo('div.col-12.col-xl-5.order-lg-first');
     $('<a href="http://www2.correios.com.br/sistemas/rastreamento/" target="_blank" style="border-right: 1px solid #ab0000; padding-right: 20px;"  "<b>Rastrear pedido</b></a>').appendTo('.rastrear-pedido');
