const logo = document.querySelector('.logo-text')
logo.addEventListener('mouseover', newLogoText)
logo.addEventListener('mouseout', originalLogoText)

function newLogoText(){
    logo.innerHTML = 'Nikhil Tanwar'
    logo.classList.add('text-animate')
    logo.classList.remove('text-out')
}

function originalLogoText(){
    logo.innerHTML = 'NT'
    logo.classList.remove('text-animate')
    logo.classList.add('text-out')
}

