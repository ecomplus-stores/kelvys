// Add your custom JavaScript for checkout here.
// Mudança de Carrinho pra Sacola
function changeCartPageTitle(title) {
    const router = window.storefrontApp && window.storefrontApp.router 
    const currentRoute = router.currentRoute;
    if(currentRoute.name == 'cart') {
        document.title = title;
    }
};
window.onload = () => {
    changeCartPageTitle('Minha Sacola');
}
