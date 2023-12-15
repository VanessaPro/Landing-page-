let darkmode = document.querySelector("#darkmode");


darkmode.onclick = () => {
    if(darkmode.classList.contains('bx-rocket')){
        darkmode.classList.replace ('bx-rocket', 'bx-sun');
        document.body.classList.add ('color');
    } else{
        darkmode.classList.replace('bx-sun','bx-rocket');
        document.body.classList.remove('color');
    }
};