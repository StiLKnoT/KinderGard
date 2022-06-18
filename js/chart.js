const button = document.querySelector('#closeBtn')
const block = document.querySelector('#Block')
const OpenText = document.querySelector('.OpenText')

function open(){
    OpenText.style.display = "block";
}
function close(){
    block.style.display = "none";
}

button.addEventListener('click', open);
button.addEventListener('click', close);