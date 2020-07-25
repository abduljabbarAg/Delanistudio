//    what we do section

$('.main').click(function () {
    // hides the paragraph with the description on click of the image in the what we do section after 1 second
    $(this).children('.hide').slideToggle(1000);
    // shows the paragraph with the description on click of the image in the what we do section after 2 seconds
    $(this).children('.show').toggle(2000);
  });
  


//portifolio section 
//allows the user to get more details when hovering mouse over the cards to display after 1 sec
$(".card").hover(function () {
    $(this).children(".card-1").fadeToggle(1000, "linear");
  });
  