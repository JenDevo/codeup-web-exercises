"use strict";

    // BELOW: JS for adding class to element
    $("dd").addClass('invisible');

    // hide and reveal specified content when link is clicked
    $('#toggle-link').click(function () {
        $('dd').toggleClass('invisible')
    });

    // Below: Adding yellow background when button is clicked
    $('#yellow-bg').click(function (){
        $('ul').children().last().css('background-color', 'yellow');
    });



    // CONTENT STYLING
    $('dl')
        .css('padding', '1em')
        .css('margin', '1em');

    $('dd')
        .css('padding', '1em')

    $('dt')
        .css('font-weight', 'bold');


