const togglebutton = document.getElementsByClassName('toggle-button')[0]
const navlinks = document.getElementsByClassName('navlinks')[0]

togglebutton.addEventListener('click',  () => {
    navlinks.classList.toggle('active')
})