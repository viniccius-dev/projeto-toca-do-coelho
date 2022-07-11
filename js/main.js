// Ativa o botão do menu-mobile
var logo = document.querySelector('.logo')
var btnMobile = document.querySelector('.menu-mobile');
var btnDesktop = document.querySelector('.menu-desktop ul');
var btnsCurrentPage = document.querySelectorAll('.menu-mobile ul li');

var currentLocation = window.location.href;
var ioCurrentLocation = currentLocation.lastIndexOf('/');

logo.addEventListener('click',() => {
    document.location.href = currentLocation.slice(0,ioCurrentLocation + 1);
});

if(currentLocation.slice(ioCurrentLocation) === '/menu.html') {
    btnDesktop.children[0].children[0].style.borderBottom = '1px solid #ffff';  
} else if (currentLocation.slice(ioCurrentLocation) === '/contact.html') {
    btnDesktop.children[1].children[0].style.borderBottom = '1px solid #ffff';  
} else if (currentLocation.slice(ioCurrentLocation) === '/about.html') {
    btnDesktop.children[2].children[0].style.borderBottom = '1px solid #ffff';  
}

btnMobile.addEventListener('click', function() {
    if(btnMobile.className === 'menu-mobile'){
        btnMobile.className += ' activated'
    } else {
        btnMobile.className = 'menu-mobile'
    }
})

for (var i = 0; i < btnsCurrentPage.length; i++) {
    btnsCurrentPage[i].addEventListener('click',currentPage)
}

function currentPage(e) {
    document.location.href = currentLocation.slice(0,ioCurrentLocation) + '/' + e.target.children[0].getAttribute('href')
}