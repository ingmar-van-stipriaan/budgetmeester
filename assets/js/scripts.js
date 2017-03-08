$(document).ready(function(){
  $(".owl-carousel").owlCarousel({
    items: 1,
    navigation: true,
    loop: true,
    autoplay: true,
    autoplayHoverPause: true,
    dots: true
  });

  $('#contact-form').submit(function(e){
    e.preventDefault();

    $.ajax({
      type: "POST",
      url: "https://budgetmeester.bettywebblocks.com/contact",
      data: $('#contact-form').serialize(),
      beforeSend: function(){
        $("#contact-form .alert").remove();
      },
      success: function(data){
        $("#contact-form").prepend('<div class="alert alert-info">Uw bericht is verstuurd</div>');
      },
      error: function(){
        $("#contact-form").prepend('<div class="alert alert-danger">Uw bericht is <b>niet</b> verstuurd</div>');
      }
    });
  });
});
