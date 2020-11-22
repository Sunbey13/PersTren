$(document).ready(function () {
    // Default tab
    $('.tab-content.health').addClass('active');
    $(".tab-button.health").addClass('active');

    // tabs
    $('.tab-button').click(function () {
        let id = $(this).attr('id');

        $(".tab-button.active").removeClass('active');
        $('.tab-content.active').removeClass('active');
        $('.tab-content.' + id).toggleClass('active');
        $(".tab-button." + id).toggleClass('active');
    })

})