//*CONSTANTES PARA LOS TOGGLES DE LOS MENÚS EN MOBILE Y DESKTOP
const menuEmail = document.querySelector('.navbar-email');
const desktopMenu = document.querySelector('.desktop-menu');
const mobileMenu = document.querySelector('.mobile-menu');
const menuHamIcon = document.querySelector('.menu');
const menuCarIcon = document.querySelector('.navbar-shopping-cart');
const productDetailCloseIcon = document.querySelector('.product-detail-close');
const goBackCart = document.querySelector('#goBackCart');
const shoppingCartContainer = document.querySelector('#shoppingCartContainer');
const productDetailContainer = document.querySelector('#productDetail');
const cardsContainer = document.querySelector('.cards-container'); //?Etiqueta card-container para el appendChild

menuEmail.addEventListener('click', toggleDesktopMenu);
menuHamIcon.addEventListener('click', toggleMobilepMenu);
menuCarIcon.addEventListener('click', toggleCarritoAside);
productDetailCloseIcon.addEventListener('click', closeProductDetailAside);
goBackCart.addEventListener('click',goBackCartClose);

function toggleDesktopMenu(){
    shoppingCartContainer.classList.add('inactive');
    mobileMenu.classList.add('inactive');
    desktopMenu.classList.toggle('inactive');//classList.toggle, quita o pone una clase dependiendo si la tiene o no
}

function toggleMobilepMenu(){
    desktopMenu.classList.add('inactive');
    shoppingCartContainer.classList.add('inactive');
    productDetailContainer.classList.add('inactive');
    mobileMenu.classList.toggle('inactive');
}

function toggleCarritoAside(){
    mobileMenu.classList.add('inactive');
    productDetailContainer.classList.add('inactive');
    desktopMenu.classList.add('inactive');
    shoppingCartContainer.classList.toggle('inactive');
}


function openProductDetailAside(){
    productDetailContainer.classList.remove('inactive');
}

function closeProductDetailAside(){
    productDetailContainer.classList.add('inactive');
}

function goBackCartClose(){
    shoppingCartContainer.classList.add('inactive');
}

//*PRODUCTOS A VENDER (PRINCIPAL C6)
const productList = [] //?Array para devolver el código Js cuando se use API. Por ahora es manual
productList.push({
    name:'Bike',
    price:120,
    img:'https://images.pexels.com/photos/100582/pexels-photo-100582.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260',
}); //?Dentro del array agregamos objetos(elementos)
productList.push({
    name:'Couch',
    price:70,
    img:'https://images.pexels.com/photos/4846097/pexels-photo-4846097.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
});
productList.push({
    name:'Bed',
    price:65,
    img:'https://images.pexels.com/photos/279746/pexels-photo-279746.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260',
});
productList.push({
    name:'Clock',
    price:12,
    img:'https://images.pexels.com/photos/5412086/pexels-photo-5412086.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260',
});

//?Creación de función
function renderProducts(arr){
    for (product of arr){
        //*Creamos las etiquetas HTML necesarias. Estructura del productCard desordenada. De arriba hacia abajo
        //?Creando elemento div con clase product-card
        const productCard = document.createElement('div');
        productCard.classList.add('product-card');
    
        //?Creando elemento img con un src. El src no debe ser la imagen tal cual. Debe ser la propiedad image de cada uno de los objetos del array 
        const productImg = document.createElement('img');
        productImg.setAttribute('src',product.img); //?Es dinámico porque se recibe del array
        productImg.addEventListener('click',openProductDetailAside);     

        //?Creando elemento div con clase product-info
        const productInfo = document.createElement('div');
        productInfo.classList.add('product-info');
    
        //?Creando elemento div que contiene dos p: Nombre y precio
        const productInfoDiv = document.createElement('div');
    
        //?Creando párrafo de precio
        const productPrice = document.createElement('p');
        productPrice.innerText = '$' + product.price; //?Agregamos el texto que necesitamos
        productInfoDiv.appendChild(productPrice); //*Se agrega a la etiqueta productInfoDiv el hijo productPrice
    
        //?Creando párrafo de nombre
        const productName = document.createElement('p');
        productName.innerText = product.name; //?Agregamos el texto que necesitamos
        productInfoDiv.appendChild(productName); //*Se agrega a la etiqueta productInfoDiv el hijo productName
    
        //?Creando la figure
        const productInfoFigure = document.createElement('figure');
    
        //?Creando imagen carrito de compras
        const productImgCart = document.createElement('img');
        productImgCart.setAttribute('src','./Icons/bt_add_to_cart.svg') //?Es estático porque siempre es el mismo
        productInfoFigure.appendChild(productImgCart); //*Se agrega a la etiqueta figure el hijo productImgCart
    
        productInfo.appendChild(productInfoDiv); //*Se agrega a la etiqueta productInfo el hijo productInfoDiv y productInfoFigure
        productInfo.appendChild(productInfoFigure);
    
        productCard.appendChild(productImg); //*Se agrega a la etiqueta productCard el hijo productInfoDiv y productInfoFigure
        productCard.appendChild(productInfo);
    
        cardsContainer.appendChild(productCard); //*Se agrega el productCard en el cardsContainer que SÍ se encuentra en el HTML. No se hace Hard Code.
    }
}

renderProducts(productList); //?Tema de escalabilidad. La función se puede llamar en X momento (ejemplo:cuando le demos click a un botón)