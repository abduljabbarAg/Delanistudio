// What we do section

// click action function toggle hide/show content{
    
}
$('.main').click(function () {
    // hides the paragraph with the description on click of the image in the what we do section after 1 second
    $(this).children('.hide').slideToggle(1000);
    // shows the paragraph with the description on click of the image in the what we do section after 2 seconds
    $(this).children('.show').toggle(2000);
  });
  


// Portifolio section 

// Get more details when hovering mouse over the cards to display after 1 sec

$(".card").hover(function () {
    $(this).children(".card-1").fadeToggle(1000, "linear");
  });

  
// Contact us section

//shows an alert that the details submitted on the form has reached the Delani team. Gives an alert with specified text

$("button").click(function (getDetails) {
    var client = document.getElementById('nameDetail').value;
    alert(' Dear ' + client + ' Thank you for reaching out. We will get back to you within 24 hours max.' + ' Delani Studio Team ');
    getDetails.preventDefault();
  });