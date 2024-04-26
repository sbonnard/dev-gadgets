// Previous button

const previousButton = document.querySelector('[data-previous-button]');
const nextButton = document.querySelector('[data-next-button]')
const duckPics = document.querySelectorAll('[data-duck-pic]');
const mainDuckPic = document.getElementById('main-duck-pic');

let i = 0;

/**
 * In an event listener, it allow to go to the next image.
 * @param {element} element - The element you want the image to be displayed in.
 * @param {array} array - The array you want the source from.
 */
function goToNextImg(element, array) {
    i++
    element.src = array[i].src;
}

/**
 * In an event listener, it allow to go to the previous image.
 * @param {element} element - The element you want the image to be displayed in.
 * @param {array} array - The array you want the source from.
 */
function goToPreviousImg(element, array) {
    i--
    element.src = array[i].src;
}

duckPics.forEach(element => {
    element.addEventListener('mouseover', function () {
        mainDuckPic.src = element.src;
    })
})

nextButton.addEventListener('click', function (event) {
    goToNextImg(mainDuckPic, duckPics);
})

previousButton.addEventListener('click', function (event) {
    goToPreviousImg(mainDuckPic, duckPics);
})

// Cart

let cartNumber = document.getElementById('cart-counter');
const cartButton = document.getElementById('cart-button');
const addQty = document.getElementById('add-qty');

/**
 * Turn a button to disabled.
 * @param {element} buttonName - The button you want to disable.
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
 * @param {element} cartCounter - The cart counter over the cart icon.
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

addQty.addEventListener('keypress', function (event) {
    if (event.key === 'Enter') {
        disableCartButton(cartButton);
        displayCartNumber(cartNumber);
        addQty.disabled = true;
        addQty.setAttribute('aria-disabled', 'true');
    }
})

// Accordeon 

const advantagesAccordeon = document.getElementById('advantages');
const advantages = document.getElementById('advantages-list');
const caracteristics = document.getElementById('caracteristics');
const carList = document.getElementById('car-list');

/**
 * Set the state of the accordeon from opened to closed.
 * @param {element} elementTitle - The element you have to click on to change the state of the accordeon.
 * @param {element} elementText - The element that will be hidden by the event listener.
 */
function setAccordeonState(elementTitle, elementText) {
    elementTitle.setAttribute('aria-expanded', 'false');
    elementTitle.classList.toggle('closed');
    elementText.classList.toggle("hidden");
}

advantagesAccordeon.addEventListener('click', function () {
    setAccordeonState(advantagesAccordeon, advantages);
})

caracteristics.addEventListener('click', function () {
    setAccordeonState(caracteristics, carList);
})

// PRODUCT SUGGESTIONS

const suggestionImg = document.getElementById('similar-product-img');
const suggestionTtl = document.getElementById('similar-product-ttl');
const similarBtnNext = document.getElementById('similar-btn-next');
const similarBtnPrev = document.getElementById('similar-btn-prev');
const similarList = document.querySelectorAll('#similar-list');

similarBtnNext.addEventListener('click', function () {
    suggestionImg.src = "img/canard-geek.png";
})

similarBtnPrev.addEventListener('click', function () {
    suggestionImg.src = "img/canard-dragon.png";
})