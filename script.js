'use strict';

const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
const btnCloseModal = document.querySelector('.close-modal');
const btnsOpenModal = document.querySelectorAll('.show-modal');
const openModal = function (){
    console.log('Button Clicked');
    modal.classList.remove('hidden');
    overlay.classList.remove('hidden');
}

const closeModal = function () {
    modal.classList.add('hidden');
    overlay.classList.add('hidden');
}

const escapeEvent = function (e) { //e -> event
    //console.log('Key was pressed');
    //console.log(e.key)
    if (e.key == 'Escape' && !modal.classList.contains('hidden')) {
        console.log(`${e.key} is clicked`);
        closeModal();
    }     
}

// Opening the modal by clicking on it
for (let i = 0; i < btnsOpenModal.length; i++)
    //console.log(btnsOpenModal[i].textContent)
    btnsOpenModal[i].addEventListener('click',openModal)
//Closing the modal in 3 different ways:

//Method 1: Clicking on cross button, to close the current modal
btnCloseModal.addEventListener('click', closeModal)

//Method 2: Clicking in the background to close the current modal
overlay.addEventListener('click', closeModal)

//Method 3: Pressing Escape key to close the current modal
document.addEventListener('keydown', escapeEvent)


/**
                        ******************************** VARIABLE DESCRIPTION ********************************
            variable                            type                        Description                       
1.      modal                                   locator                    To hold the modal locator value
2.      overlay                                 locator                    To hold the overlay locator value
3.      btnCloseModal                           locator                    To hold the close button locator value
4.      btnsOpenModal                           locator                    To hold all button locations
5.      openModal                               function                    To open the modal event, when clicked                   
6.      closeModal                              function                    To close the modal event, when clicked
7.      escapeEvent                             function                    To execute closeModal, when Escape key is pressed
 */
    