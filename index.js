var modal = document.getElementById('id01');

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}

//adds the text blur the left
function addEffect() {
    let effectMe2 = document.getElementById('landing');
    effectMe2.classList.add("lefts");

    let effectMe = document.getElementById('leftPane');
    effectMe.classList.add("text-blur-out");



    let effectMe1 = document.getElementById('ll');
    effectMe1.classList.remove("w3-hide")

}

//removes text blur
function removeEffect() {
    let effectMe2 = document.getElementById('landing');
    effectMe2.classList.remove("lefts");
    let effectMe = document.getElementById('leftPane');
    effectMe.classList.remove("text-blur-out");

    let effectMe1 = document.getElementById('ll');
    effectMe1.classList.add("w3-hide");

}

//adds text blut to the right
function addnewEffect() {
    let effectMe2 = document.getElementById('landing');
    effectMe2.classList.add("rights");

    let effectMe = document.getElementById('rightPane');
    effectMe.classList.add("text-blur-out");

    let effectMe1 = document.getElementById('rr');
    effectMe1.classList.remove("w3-hide")
}

//removes text blur to the right
function removenewEffect() {
    let effectMe2 = document.getElementById('landing');
    effectMe2.classList.remove("rights");
    let effectMe = document.getElementById('rightPane');
    effectMe.classList.remove("text-blur-out");

    let effectMe1 = document.getElementById('rr');
    effectMe1.classList.add("w3-hide");


}