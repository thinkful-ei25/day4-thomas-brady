'use strict';
function imgCarousel(){
    $('.thumbnail').on('click', function(event) {
        const imgSrc = $(this).find('img').attr('src');
        const imgAlt = $(this).find('img').attr('alt');

        console.log('yup');
        $('.hero img').attr('src', imgSrc).attr('alt', imgAlt);
    });
}

$(imgCarousel());