function scrollReveal(){
    var abtText = document.querySelector('.abt-text');
    var textPosition = abtText.getBoundingClientRect().top;
    var screenPosition = window.innerHeight / 2.4 ;

    if (textPosition  < screenPosition){
        abtText.classList.add('abttext-appear');
    }
}

window.addEventListener('scroll', scrollReveal);