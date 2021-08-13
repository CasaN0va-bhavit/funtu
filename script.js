// JavaScript code
function searchFun() {
    let input = document.getElementById('searchbox').value
    input = input.toLowerCase();
    let x = document.getElementsByClassName('name');
    let y = document.getElementsByClassName('cards');

    for (i = 0; i < x.length; i++) {
        if (!x[i].innerHTML.toLowerCase().includes(input)) {
            y[i].style.display = "none";

        } else {
            x[i].style.display = "flex";
            y[i].style.display = "flex";
        }
    }

}