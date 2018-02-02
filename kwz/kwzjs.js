$(document).ready(function() {
  $("#menu ul li").hover(function() {
    $(this).find("ul").stop().slideToggle(400);
  })

});


function volgende(waarde){
  var currentimg = $('.active');
  var nextimg = currentimg.next();

  if (waarde == 'next') {
    if (nextimg.length)
        nextimg.addClass('active');
    else
        $('.slider img').first().addClass('active');
  } else {

  }

        currentimg.removeClass('active');
}
