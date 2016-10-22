// var settings ****************************************************
var $body = $('body');
var $header = $('header');
var $overlay = $('<div class="overlay"></div>');
var $menu = $('.mobileMenu');
// code setting  (mobile menu )*************************************

// 01. append overlay div (see overlay var) to body
$("body").append($overlay);

// 02. on mobile button press, slide menu in and show overlay
$('#mobileButton').click(function(event){
  event.preventDefault();
  $(this).toggleClass('open');    
  $(this).toggleClass('isOpen');
    if ($(this).hasClass('isOpen')) {
        //Show the overlay and we add some opacity animation
        $overlay.show().animate({ opacity: 0.8, }, 200);
    } else {
        $(this).removeClass('isOpen');
        $overlay.animate({ opacity: 0, }, 200).delay(200).hide(1);
    }
    //Togle class
    $menu.toggleClass( "slideOut" );   
    $body.toggleClass( "noscroll" ); 
});

// 03. on overlay click, close menu and hide overlay
$overlay.click(function(e){
  e.preventDefault();    
  //Hide the overlay and set opacity to 0
  $overlay.hide(1).animate({ opacity: 0, }, 200);
  //Togle class
  $('#mobileButton').toggleClass('open').removeClass('isOpen'); 
  $menu.toggleClass( "slideOut" );  
  $body.toggleClass( "noscroll" );       
});



//  OVERLAY CONTENT BUTTON  ***********************************************
$('#pullMe').hover(function(){
 $(this).addClass("animated rubberBand");
});

$('#pullMe').click(function(e){
  e.preventDefault();    
  $('.overlayContent').toggleClass( "overlayContent-slide" );
  $body.toggleClass( "noscroll" );    
});

$('.closeMe').click(function(e){
  e.preventDefault();    
  $('.overlayContent').removeClass( "overlayContent-slide" );
  $body.toggleClass( "noscroll" );    
});


//  OWL CARROUSEL  ********************************************************
$(document).ready(function() {
  $("#owl-testimonial").owlCarousel();
});

$("#owl-testimonial").owlCarousel({
    // Most important owl features
    items : 1,
    singleItem: true,
    lazyLoad : true,
    itemsDesktop : 2,
})




//for each element that is classed as 'pull-down', set its margin-top to the difference between its own height and the height of its parent
$('.pull-down').each(function() {
  var $this=$(this);
	$this.css('margin-top', $this.parent().height()-$this.height())
});

//  WAYPOINTS AND ANIMATE CSS *********************************************
function onScrollInit( items, trigger ) {
  items.each( function() {
    var osElement = $(this),
        osAnimationClass = osElement.attr('data-os-animation'),
        osAnimationDelay = osElement.attr('data-os-animation-delay');
 
    osElement.css({
        '-webkit-animation-delay':  osAnimationDelay,
        '-moz-animation-delay':     osAnimationDelay,
        'animation-delay':          osAnimationDelay
    });
 
    var osTrigger = ( trigger ) ? trigger : osElement;
 
    osTrigger.waypoint(function() {
        osElement.addClass('animated').addClass(osAnimationClass);
    },{
        triggerOnce: true,
        offset: '85%'
    });
  });
}

onScrollInit( $('.os-animation') );
onScrollInit( $('.staggered-animation'), $('.staggered-animation-container') );

//  Popo Over for pricing tables *********************************************
$(document).ready(function(){
    $('[data-toggle="popover"]').popover({
        trigger: 'hover'
        
    });
});

// Owl carrousel *********************************************
$(document).ready(function() {
 
  $("#reportsSlide").owlCarousel({
 
      navigation : false, // Show next and prev buttons
      slideSpeed : 500,
      paginationSpeed : 400,
      singleItem:true
 
      // "singleItem:true" is a shortcut for:
      // items : 1, 
      // itemsDesktop : false,
      // itemsDesktopSmall : false,
      // itemsTablet: false,
      // itemsMobile : false
 
  });
 
});

// Calculator *********************************************
document.addEventListener('DOMContentLoaded', function(){
  prey_calc = new window.PreyCalcEmbed({el: "calculator"})
  prey_calc.render()
});

