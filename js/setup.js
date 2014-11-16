$(document).ready(function() {
    $('#promo').cycle({
        fx: 'scrollHorz',
        timeout:    4000,
        speed:      800,
        next: '#promonav .next',
        pager:    '#promoindex',
        height: 400,
        pause: 1
    });
});