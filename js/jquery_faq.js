"use strict";

    // BELOW: JS for adding class to element
    $("dd").addClass('invisible');

    // hide and reveal specified content when link is clicked
    $('#toggle-link').click(function () {
        $('dd').toggleClass('invisible')
    });

    // Below: Adding yellow background when button is clicked
    $('#yellow-bg').click(function (){
        $('ul').each(function (){
            $('li:last-child').css('background-color', 'yellow');
        })
    });

    // BELOW: h3 clicked = lis bolded with font-weight

        $('h3').click(function () {
                $('li').css('font-weight', 'bold');
        });

// BELOW: clicking on lis turns 1st li blue font
$('li').click(function (){
   $('li:first-child').css('color', 'blue') ;
});



    // CONTENT STYLING
    $('dl')
        .css('padding', '1em')
        .css('margin', '1em');

    $('dd')
        .css('padding', '1em')

    $('dt')
        .css('font-weight', 'bold');


