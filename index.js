const input = document.getElementById('input');

function clickAlert(){
    alert("I was clicked")
};

function addingEventListener() {
input.addEventListener('click',clickAlert);
};

addingEventListener();