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

export {
    disableCartButton,
    displayCartNumber
}