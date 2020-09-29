"use strict"

let body = document.querySelector('body');

let btnNewOffer = document.getElementById('new-offer');
var newOfferWindow = document.querySelector('.new-offer__window');
var closeNewOffer = document.querySelector('#discard-offer');

// Open New Offer POP-UP
btnNewOffer.addEventListener('click', function() {
    body.classList.add('no-scroll');
    newOfferWindow.classList.add('active');
});
// Close New Offer POP-UP
closeNewOffer.addEventListener('click', function() {
    body.classList.remove('no-scroll');
    newOfferWindow.classList.remove('active');
})

// Initiate a new offer
let addNewCoffee = document.getElementById('add-new-coffee');

addNewCoffee.addEventListener('click', function(e) {
    e.preventDefault();

    let menu = document.querySelector('.coffee-menu');
    let coffeeImage = document.getElementById('coffee-image');
    let coffeeName = document.getElementById('coffee-name').value;
    let coffeePrice = document.getElementById('coffee-price').value;

    // Create Coffee Menu Item
    let menuItem = document.createElement('div');
    menuItem.classList.add('coffee-menu__item');


    // Create Image Field
    let coffeeImageDisplay = document.createElement('img');
    var url = URL.createObjectURL(coffeeImage.files[0]);
    coffeeImageDisplay.src = url;

    // Create Title Field
    let coffeeNameValue = document.createElement('h2');
    coffeeNameValue.classList.add('title');
    coffeeNameValue.innerText = coffeeName;

    // Create Price Field
    let coffeePriceValue = document.createElement('h3');
    coffeePriceValue.classList.add('price');
    coffeePriceValue.innerText = coffeePrice + " €";

    // Create Delete Offer Button
    let closeOfferButton = document.createElement('button');
    closeOfferButton.innerHTML = "Remove from MENU";
    closeOfferButton.classList.add('btn', 'btn--discard-offer');
    closeOfferButton.onclick = function() { deleteFromMenu(this); };

    // Add Fields to Menu Item
    menuItem.appendChild(coffeeImageDisplay);
    menuItem.appendChild(coffeeNameValue);
    menuItem.appendChild(coffeePriceValue);
    menuItem.appendChild(closeOfferButton);
    
    // Add New menu Item
    menu.appendChild(menuItem); 

    document.querySelector('form').reset();
    // Turn Off POP-UP
    body.classList.remove('no-scroll');
    newOfferWindow.classList.remove('active');
});