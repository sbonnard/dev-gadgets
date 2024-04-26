
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
    buttonName.setAttribute('aria-disabled', 'true');
    let clickCounter = 0;
    buttonName.innerText = "Déjà au panier";
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

const advantagesAccordeon = document.getElementById('advantages');
console.log(advantagesAccordeon);

const advantages = document.getElementById('advantages-list');
console.log(advantages);

advantagesAccordeon.addEventListener('click', function () {
    advantagesAccordeon.setAttribute('aria-expanded', 'false')
    advantagesAccordeon.classList.toggle('closed');
    advantages.classList.toggle("hidden")
})