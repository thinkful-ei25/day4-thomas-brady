// Goal: Create an App that allows users to add, check, uncheck, and remove items from a shopping list.

// Allow users to enter items they need to purchase by entering text and hitting return or clicking the add item button





//check and uncheck items on the list by clikcing the "check" button
//clicking check on an item with no check should add the class shopping-item_checked to the span class.
//if it has the class already, then we need to remove it.
//permantently remove items from the list
//if the user clicks delete then we should remove the <li> all together


'use strict';
function handleNewItem() {
    $('#js-shopping-list-form').submit(event => { 
        event.preventDefault(); //prevent default form behavior of submitting to server.
        //take in input item from user 
        const listItem = $('.js-shopping-list-entry').val();
        event.target.reset(); //reset the form field
        //create a new list item, but with the input variable as the list item.
        let styledListItem = `
            <li>
                <span class="shopping-item">${listItem}</span>
                <div class="shopping-item-controls">
                    <button class="shopping-item-toggle">
                        <span class="button-label">check</span>
                     </button>
                     <button class="shopping-item-delete">
                        <span class="button-label">delete</span>
                    </button>
                </div>
        </li>
        `;

        //place item at the end of the list
        $('.shopping-list').append(styledListItem);
    });

}


function handleCheckedItem() {
   $('.shopping-item-toggle').on('click', function() {
        $(this).closest('li').find('.shopping-item').toggleClass('shopping-item__checked');
    }); 
}


function handleDeletedItem() {
    $('.shopping-item-delete').on('click', function(){
        $(this).closest('li').remove();
    });
}

$(handleNewItem);
$(handleCheckedItem);
$(handleDeletedItem);