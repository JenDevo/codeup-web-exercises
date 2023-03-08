"use strict";

    // BELOW: JS for adding class to element
    $("dd").addClass('invisible');

    // hide and reveal specified content when link is clicked
    $('#toggle-link').click(function () {
        $('dd').toggleClass('invisible')
    });


    // CONTENT STYLING
    $('dl')
        .css('padding', '1em')
        .css('margin', '1em');

    $('dd')
        .css('padding', '1em')

    $('dt')
        .css('font-weight', 'bold');


