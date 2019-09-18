
loadingDisplay();

function loadingDisplay(){
    let el = document.getElementById('loading-display');
    for(let i=1;i<=10;i++)
    {
        el.appendChild(createLoadingBar());
    }
}

function createLoadingBar(){
    let div = document.createElement('div');
    div.setAttribute('class','loading-bars');
    return div;
}

