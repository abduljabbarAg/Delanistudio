//    what we do section

$('.main').click(function () {
    // hides the paragraph with the description on click of the image in the what we do section after 1 second
    $(this).children('.hide').slideToggle(1000);
    // shows the paragraph with the description on click of the image in the what we do section after 2 seconds
    $(this).children('.show').toggle(2000);
  });
  