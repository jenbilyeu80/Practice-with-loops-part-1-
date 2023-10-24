const input = document.querySelector('input');
const log = doucument.getElementById('log');

function updateValue(){
    log.innerText = input.value;
}
input.onchange = updateValue;