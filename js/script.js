
// Previous button

const previousButton = document.querySelector('[data-previous-button]');

const duckPics = document.querySelectorAll('[data-duck-pic]');
// console.log(duckPics);

const mainDuckPic = document.getElementById('main-duck-pic');
// console.log(mainDuckPic);

duckPics.forEach(element => {
    element.addEventListener('mouseover', function () {
        mainDuckPic.src = element.src;
    })
})

// previousButton.addEventListener('click', function(event){
//     let i = 0;
//     for (let pic of duckPics) {    
//         mainDuckPic.src = `img/canard-jaune-${5}-l.png`
//     }
// })

// Cart

let cartNumber = document.getElementById('cart-counter');
const cartButton = document.getElementById('cart-button');
const addQty = document.getElementById('add-qty');

/**
 * Turn a button to disabled.
 * @param {element} buttonName The button you want to disable.
 */
function disableCartButton(buttonName) {
    buttonName.classList.add('add-cta--disabled');
    buttonName.disabled = true;
    buttonName.setAttribute('aria-disabled', 'true')
}

/**
 * Adds the value from the input to the cart and displays it.
 * @param {element} cartCounter The cart counter over the cart icon.
 */
function displayCartNumber(cartCounter) {
    cartNumber.innerText = addQty.value;
    if (addQty.value > 99) {
        cartNumber.innerText = '99+';
    }
}


cartButton.addEventListener('click', function (event) {
    disableCartButton(cartButton);
    displayCartNumber(cartNumber);
})

// Accordeon 

const advantages = document.getElementById('advantages');
console.log(advantages);

advantages.addEventListener('click', function () {
    let clickCounter = 0;
    if (clickCounter %= 1) {
        this.setAttribute('aria-expanded', 'false').toggle()
    }
})