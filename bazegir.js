/**
 * Created by EU5007 on 2014-11-11.
 */
var main = function() {
    $('.nav').click(function() {
        $('.nav').toggle("active");
    });
    $('.pull-me').click(function() {
        $('.panel').slideToggle('slow')
    });
};

$(document).ready(main);
