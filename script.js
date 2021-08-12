//Header Logo 

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

//Theme Switcher
const switcher = document.querySelector('.theme-switch');

const defaultTheme = localStorage.getItem('theme') || 'light-theme'; 
setTheme(defaultTheme); 

switcher.addEventListener('change', (e) => {
    // console.log(e.target.value); 
    setTheme(e.target.value); 
});

function setTheme(theme){
    theme = theme || 'light-theme'; 
    document.documentElement.className = theme; 
    
    localStorage.setItem('theme', theme); 
    switcher.value = theme; 
}

