const navMobile = document.querySelector('.navigation__mobile')
const navBtn = document.querySelector('.hamburger')
const navBtnBox = document.querySelector('.hamburger-box')
const navLinks = document.querySelectorAll('.navigation__mobile a')




const handleNav = () => {
    navBtn.classList.toggle('is-active')
	navMobile.classList.toggle('navigation__mobile--active')

    handleNavLinksAnimation();
}

const handleNavLinksAnimation = () => {
    let delayTime = 0;
    navLinks.forEach(item => {
        item.classList.toggle('nav-mobile-animation')
        item.style.animationDelay = '.' + delayTime + 's'
        delayTime++
    })
}

navLinks.forEach(link => {
    link.addEventListener('click', handleNav)
})
navBtn.addEventListener('click', handleNav)



