
function closeWindow(){
    document.getElementsByClassName('hidden')[0].style.display = 'none';
    document.getElementsByClassName('hidden')[1].style.display = 'none';
    document.getElementsByClassName('overlay')[0].style.backdropFilter = '';

}

function handleClick(){
    console.log("One of the modals is being clicked!")
    document.getElementsByClassName('hidden')[0].style.display = 'block';
    document.getElementsByClassName('hidden')[1].style.display = 'block';
    document.getElementsByClassName('overlay')[0].addEventListener('click', closeWindow);
    document.getElementsByClassName('close-modal')[0].addEventListener('click', closeWindow);
}

let allmodals = document.querySelectorAll('.show-modal');

allmodals.forEach(function(e){
    e.addEventListener('click', handleClick);
});