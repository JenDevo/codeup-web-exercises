(function(){
    "use strict";

    var planetsString = "Mercury|Venus|Earth|Mars|Jupiter|Saturn|Uranus|Neptune";

    /**
     * TODO:
     * Convert planetsString to an array, and save it in a variable named
     * planetsArray.
     * console.log planetsArray to check your work
     */
    console.log(planetsString)
    var planetsArray = planetsString.split('|');
    console.log(planetsArray);

    /**
     * TODO:
     * Create a string with <br> tags between each planet. console.log() your
     * results. Why might this be useful?
     */
    console.log("---------------------------")
    var planetsBreak = planetsArray.join('<br>');
    console.log(planetsBreak);

     /** BONUS:
     * Create another string that would display your planets in an undordered
     * list. You will need an opening AND closing <ul> tags around the entire
     * string, and <li> tags around each planet.
     */
     console.log("---------------------");
    console.log(planetsArray)
    planetsArray.unshift('<ul>');
    planetsArray.push('</ul>')
    console.log(planetsArray);

    console.log("---------------------");
    var planetsStringEdit = planetsArray.join('<li>')
    console.log(planetsStringEdit);

})();

