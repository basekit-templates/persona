// -----------------------------
// Zest Template: JS > theme.js
// -----------------------------


// ------------------------------
// Ecom Product Slider
// ------------------------------


function ecomproductSlider() {

    // Clone existing gallery and place it outside the widget

    $( ".ecomproduct__product-gallery" ).clone().prependTo( ".bk-zone" );

    // Remove the original gallery

    $( ".product-article .ecomproduct__product-gallery" ).remove();

    // Create Prev and Next buttons

    $(".ecomproduct__product-gallery").append('<li class="btnprev"></li><li class="btnnext"></li>');

    var currentPosition = 0;
    var slide = $( '.ecomproduct__gallery-item' );
    var numberOfSlides = slide.length;
    var nextPosition = 1;
    var prevPosition = numberOfSlides - 1;



    function slideIt(way) {

        if (way == "forward") {
            currentPosition++;
            nextPosition++;
            prevPosition++;

            if ( nextPosition == numberOfSlides ) {
                nextPosition = 0;
            }

            if ( prevPosition == numberOfSlides ) {
                prevPosition = 0;
            }

            if ( prevPosition < 0 ) {
                prevPosition = numberOfSlides - 1;
            }

            if ( currentPosition == numberOfSlides ) {
                currentPosition = 0;
            }


        }

        if (way == "backward") {
            currentPosition--;
            nextPosition--;
            prevPosition--;

            if ( nextPosition == numberOfSlides ) {
                nextPosition = 0;
            }

            if ( prevPosition < 0 ) {
                prevPosition = numberOfSlides - 1;
            }

            if ( nextPosition < 0 ) {
                nextPosition = numberOfSlides - 1;
            }

            if ( currentPosition < 0 ) {
                currentPosition = numberOfSlides - 1;
            }


        }

        // Reset classes
        $( slide ).removeClass("next prev current");

        // Mark Current
        $( slide ).eq(currentPosition).addClass("current");

        // Mark next
        $( slide ).eq(nextPosition).addClass("next");

        // Mark previous
        $( slide ).eq(prevPosition).addClass("prev");


    }

    slideIt();



    // Click next

    $( '.ecomproduct__product-gallery .btnnext' ).click(function() {
        slideIt("forward");
    });



    // Swipe left

    $( '.ecomproduct__product-gallery' ).on("swipeleft",function(){
        slideIt("forward");
    });



    // Click prev

    $( '.ecomproduct__product-gallery .btnprev' ).click(function() {
        slideIt("backward");
    });

    // Swipe right

    $( '.ecomproduct__product-gallery' ).on("swiperight",function(){
        slideIt("backward");
    });

}



// ---------------------------------
// Ecom One Image detection
// ---------------------------------

function ecomProductOneImage() {

    // Adds variation class when there is only one product image

    if($(".ecomproduct__product-gallery").length == 0) {
       $("body").addClass("product--one-image");
    }
}





// ---------------------------------
// Run it
// ---------------------------------



$(document).ready(function() {
    ecomproductSlider();
    ecomProductOneImage()

}); // Document Ready

