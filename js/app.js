
const buttons = document.querySelectorAll('.btn');
const card = document.querySelector('.card');
const customerText = document.getElementById('customer-text');

let counter = 0;

buttons.forEach(function(button) {
    button.addEventListener('click', function(e) {
        e.preventDefault();
        if (button.classList.contains('prevBtn')) {
            counter --;
            console.log(counter);
        } else {
            counter ++;
            console.log(counter);
        }
    })
})