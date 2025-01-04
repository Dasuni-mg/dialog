const nextIcon = '<img src="./images/bg/arrow_right.svg" alt="right">';
const prevIcon = '<img src="./images/bg/arrow_left.svg" alt="left">';


$(document).ready(function() {
    $(".owl-carousel").owlCarousel({
        loop: true,           // Enable continuous loop mode
        margin: 10,          // Margin between items
        center: true,        // Center the current item
        responsiveClass: true, // Use responsive settings
        nav: true,           // Show navigation arrows
        navText: [
            prevIcon,
            nextIcon
        ],
        responsive: {
            0: {
                items: 1,    // 1 item for small screens
            },
            900: {
                items: 2,    // 2 items for medium screens
            },
            1000: {
                items: 3,    // 3 items for large screens
            }
        }
    });
});

