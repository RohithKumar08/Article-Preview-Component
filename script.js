var hiddenDiv = document.getElementById("toShare");
var toDisplay = document.getElementById("share-icon"); 

let flag = 0;

function facebook() {
    const url = 'https://www.facebook.com/';
    window.open(url);
}
function twitter() {
    const url = 'https://twitter.com/';
    window.open(url);
}
function pinterest() {
    const url = 'https://twitter.com/';
    window.open(url);
}
toDisplay.addEventListener('click', () => {
    if(flag === 0){
        hiddenDiv.style.display = 'block';
        flag = 1;
    }
    else if(flag === 1){
        hiddenDiv.style.display = 'none';
        flag = 0;
    }
});



