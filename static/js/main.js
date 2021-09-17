let headerTitle = document.getElementById('title__principal');
let headerNav = document.getElementById('navigation__principal');
let navLinks = document.getElementsByClassName('navigation__link');
let headerContainer = document.querySelector('header > div');
window.addEventListener('scroll', function(){
    headerTitle.classList.toggle('header__title--scroll', scrollY > window.innerHeight/2);
    headerNav.classList.toggle('header__navigation--scroll', scrollY > window.innerHeight/2);
    if(scrollY > window.innerHeight/2){
        headerContainer.style = 'background: var(--primary-color);height:10rem;transition:all 0.5s;';
    }
    else if(scrollY<=window.innerHeight/2){
        headerContainer.style = 'background: transparent;'
    }
});
let lobArray = [].slice.call(document.getElementsByClassName('lob'));
let lobDescriptions = [].slice.call(document.getElementsByClassName('lob__description'));
let lobIndex = 0;
lobArray.forEach(function (item) {
    item.addEventListener('click', function () {
            item.style = 'flex-basis: calc(500%);';
            lobArray.forEach(function (lob) {
            if(item != lob){
                lob.style = 'flex-basis: 100%;';
            }
        });
    });
});