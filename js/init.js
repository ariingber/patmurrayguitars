(function($){
  $(function(){

    $('.button-collapse').sideNav();

  });
  // end of document ready
})(jQuery); // end of jQuery name space

$(document).ready(function(){
    $('.parallax').parallax();
  });

$(".button-collapse").sideNav();

$(document).ready(function(){
    $('.materialboxed').materialbox();
  });

$(document).ready(function(){
    $('.slider').slider({full_width: true, height: 600});
  });

$(document).ready(function() {
   $('#nav').localScroll({duration:5000});
});

$(document).ready(function(){
    // the "href" attribute of .modal-trigger must specify the modal ID that wants to be triggered
    $('.modal-trigger').leanModal();
  });
