$(document).ready(function() {
    // As manipulações que eu desejar devem estar dentro deste bloco
    $('#btn-1-5em').click(function() {
        $('p').removeClass('font-2-0');
        $('p').removeClass('font-2-5');
        $('p').addClass('font-1-5');
    });
    $('#btn-2-0em').click(function() {
        $('p').removeClass('font-1-5');
        $('p').removeClass('font-2-5');
        $('p').addClass('font-2-0');
    });
    $('#btn-2-5em').click(function() {
        $('p').removeClass('font-1-5');
        $('p').removeClass('font-2-0');
        $('p').addClass('font-2-5');
    });
});