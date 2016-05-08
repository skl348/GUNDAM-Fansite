/*
$('.grid').masonry({
  // options
  itemSelector: '.grid-item',
  columnWidth: '.grid-item'
});
*/

/*
var $container = $('.grid');

$container.masonry({
  // options
  itemSelector: '.grid-item',
  columnWidth: 400
});
*/

// Smooth scrolling function - works on any ul li a link

$("ul li a[href^='#']").on('click', function(e) {

   // prevent default anchor click behavior
   e.preventDefault();

   // store hash
   var hash = this.hash;

   // animate
   $('html, body').animate({
       scrollTop: $(hash).offset().top
     }, 500, function(){

       // when done, add hash to url
       // (default click behaviour)
       window.location.hash = hash;
     });

});
