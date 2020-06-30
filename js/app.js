
const buttons = document.querySelectorAll('.btn');
const card = document.querySelector('.card');
const customerText = document.getElementById('customer-text');

let counter = 0;
customers = [];

class Customer {
    constructor(img, name, quote) {
    this.img = img,
    this.name = name,
    this.quote = quote
    }
}

function createCustomer(img, name, quote) {

    const customer = new Customer(img, name, quote);
    
    customers.push(customer);
}

createCustomer(0, 'John', 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis neque reprehenderit laborum, corporis explicabo assumenda. Porro impedit consectetur animi, reprehenderit recusandae sapiente at aliquam reiciendis modi ipsam rerum suscipit distinctio?')
createCustomer(1, 'Sandy', 'Contrary to popular belief, LoremIpsum is not simply random text. It has roots in a pieceof classical Latin literature from 45 BC, making it over2000 years old. Richard McClintock')
createCustomer(2, 'Amy', 'There are many variations ofpassages of Lorem Ipsum available, but the majority havesuffered alteration in some form, by injected humour, orrandomised words which don\'t look even slightlybelievable.')
createCustomer(3, 'Tyrell', 'If you are going to use apassage of Lorem Ipsum, you need to be sure there isn\'tanything embarrassing hidden in the middle of text.')
createCustomer(4, 'Wanda', 'Lorem Ipsum has been theindustry\'s standard dummy text ever since the 1500s,when an unknown printer took a galley of type andscrambled it to make a type specimen book.')
    

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