jQuery(document).ready(function($) {
    $('#li-personal').click(function() {
        $('#personal').slideToggle('slow');
    });

    $('#li-business').click(function() {
        $('#business').slideToggle('slow');
    });

    $('#li-send').click(function() {
        $('#send').slideToggle('slow');
    });
});
