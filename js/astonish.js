// ========== TABLE OF CONTENTS =========== //
//
// 1. PAGE LOADER 
// 2. ACTIVE CLASS
// 3. STYLE SWITCHER
// 4. BOOTSTRAP CAROUSEL SLIDER
// 5. SCROLL TO TOP BUTTON
// 6. TEAM DISPLAY DROP DOWNS
// 7. FADE IN NAVIGATION
// 8. HELPER CLASSES FOR HEIGHTS AND CENTERING
// 9. SCROLL TO SCRIPT USED FOR ONE PAGE THEME
// 10. PARALLAX BACKGROUNDS
// 11. BOOTSTRAP ACCORDION
// 12. OWL SLIDER
// 13. SCROLL TO REPLY SECTION ON POST PAGES
// 14. CLOSE MOBILE MENU ON SELECT
//
// ======================================= //
// scroll smooth
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
      e.preventDefault();

      document.querySelector(this.getAttribute('href')).scrollIntoView({
          behavior: 'smooth'
      });
  });
});
// ========== 1. START PAGE LOADER ========== //
 (function($) { "use strict";

$(window).load(function() {
	$(".loader-img").delay(500).fadeOut();
	$("#pageloader").delay(1000).fadeOut("slow");
	var hash = window.location.hash;
	if(!hash) { 
	// Do nothing //
	} else {
	$(document).scrollTop( $(hash).offset().top -56); 
}
});
 })(jQuery);
 // ========== END PAGE LOADER ========== //


    // ========== 2. ADDS "active" CLASS TO ANY CLICKED BUTTONS ========== //
    (function($) { "use strict";
 $(document).ready(function(){
  $('a.btn').click(function(){
  $('a.btn').removeClass('active');
  $(this).addClass('active');
  });
});
 })(jQuery);
   // ========== END ACTIVE CLASS ========== // 
	

    // ========== 3. START STYLE SWITCH ========== //
    (function($) { "use strict";
 $(document).ready(function(){
  $('.style-switch-button').click(function(){
  $('.style-switch-wrapper').toggleClass('active');
  });
  $('a.close-styler').click(function(){
  $('.style-switch-wrapper').removeClass('active');
  });
});
 })(jQuery);
   // ========== END STYLE SWITCH ========== //

	   // ========== 4. START BOOTSTRAP CAROUSEL ========== //
	 (function($) { "use strict";
$('.carousel').carousel({
  interval: 5000,
  pause: "hover",
});
 })(jQuery);
		   // ========== END BOOTSTRAP CAROUSEL ========== //
	
 // ========== 5. START SCROLL TO TOP ========== //
 // Button
 (function($) { "use strict";
$(document).ready(function() {
     $(".scrollup").hide();
     $(window).scroll(function() {
         if ($(this).scrollTop() > 400) {
             $('.scrollup').fadeIn();
         } else {
             $('.scrollup').fadeOut();
         }
     });
 });
 })(jQuery);
 // Action
   (function($) { "use strict";
$("a.scrolltotop[href^='#']").on('click', function(e) {

   // prevent default anchor click behavior
   e.preventDefault();

   // store hash
   var hash = this.hash;

   // animate
   $('html, body').stop().animate({scrollTop:0}, 1000, 'easeOutExpo');

});
 })(jQuery);
  // ========== END SCROLL TO TOP ========== //
  
   // ========== 6. START TEAM DISPLAY ========== //
  (function($) { "use strict";
$(document).ready(function() {
     $('.team-drop ul').hide();
      $('.team-drop li i').on('click', function (e) {
	  $(this).css("z-index","10000");
        e.preventDefault();
        var elem = $(this).next('.team-drop ul')
        $('.team-drop ul').not(elem).hide();
        elem.toggle();
		 
    });

 });
 })(jQuery);
   // ========== END TEAM DISPLAY ========== //
 
// ========== 7 START FADE IN NAVIGATION ========== //
 (function($) { "use strict";
$(document).ready(function() {
     $(".nav-fadein").hide();
     $(window).on('scroll load', function() {
         if ($(this).scrollTop() > 400) {
             $('.nav-fadein').fadeIn();
         } else {
             $('.nav-fadein').fadeOut();
         }
     });
 });
 })(jQuery);
// ========== END FADE IN NAVIGATION ========== //

 // ========== 8. HELPER CLASSES FOR HEIGHTS AND CENTERING ========== //
  (function($) { "use strict";
$(document).ready(function() {
     $(window).on('resize load', function() {
       var newheight = $(window).height() * .75;
	   $('.height-75').height(newheight);
     });
 });
 })(jQuery);
 // ===== 100% HEIGHT ===== //
   (function($) { "use strict";
$(document).ready(function() {
     $(window).on('resize load', function() {
       var newheight = $(window).height();
	   $('.height-100').height(newheight);
     });
 });
 })(jQuery);
  // ===== DYNAMICALLY VERTICAL CENTER ===== //
     (function($) { "use strict";

     $(window).on('resize load', function() {
	  $('.vertical-center').each(function() {
       var windowheight = $(window).height();
	   var contentheight = $(this).height();
	   var margins = (windowheight - contentheight)/2+'px';
	   $(this).css('margin-top', margins);
     });
	  });

 })(jQuery);
// ========== 9. START SCROLLTO SCRIPT ========== //
     (function($) { "use strict";
$("a.scrollto[href^='#']").on('click', function(e) {

   // prevent default anchor click behavior
   e.preventDefault();

   // store hash
   var hash = this.hash;

   // animate
   $('html, body').stop().animate({
       scrollTop: $(hash).offset().top -56}, 1000, 'easeOutExpo');

});
 })(jQuery);
 // ========== END SCROLL TO SCRIPT ========== //

  // ========== 10. START PARALLAX SETTINGS ========== //
 (function($) { "use strict";
 var disablePoint = 1024;

if ($(window).width() < disablePoint) {
// Do nothing //
}
else {
			$(window).stellar({ 
			horizontalScrolling: false 
			});
			}
		 })(jQuery);
  // ========== END PARALLAX SETTINGS ========== //
  
    // ========== 11. BOOTSTRAP ACCORDION SETTINGS ========== //
(function($) { "use strict";
var $accordion = $('#accordion .panel a');
$accordion.click(function(){
   $accordion.removeClass('selected');
   $(this).addClass('selected');
});
$('#accordion .panel a').on('click',function(e){
    if($(this).parents('.panel').children('.panel-collapse').hasClass('in')){
     $accordion.removeClass('selected');
    }
});
})(jQuery);
// ========= END BOOTSTRAP ACCORDION SETTINGS ========== //

// ========== 12. START OWL SLIDER SETTINGS ========== //
	    $(document).ready(function() {
     
    $("#team-slider").owlCarousel({
items: 4,
itemsScaleUp: true,
autoPlay: false,
stopOnHover: true
});
});
// ========== END OWL SLIDER SETTINGS ========== //
 
// ========== 13. SCROLL TO REPLY SECTION ON BLOG ========== // 
  (function($) { "use strict";
		$(".go-to-reply").click(function() {
     $('html, body').animate({
         scrollTop: $("#reply").offset().top -60 }, 600);
 });
 })(jQuery);
// ========== SCROLL TO REPLY SECTION ON BLOG ========== //

    // ========== 14. CLOSE MOBILE MENU ON SELECT ========== //
    (function($) { "use strict";
 $(document).ready(function(){
  $('.nav li a').click(function(){
  $('.navbar-collapse').removeClass('in');
  });
   $('.nav li.dropdown a').click(function(){
  $('.navbar-collapse').addClass('in');
  });
});
 })(jQuery);
   // ========== END CLOSE MOBILE MENU ON SELECT ========== //


// Only play video when visible in viewport //   
var video = document.getElementById('video'),
    fraction = 0.5;

function checkScroll() {
  var x = video.offsetLeft,
      y = video.offsetTop,
      w = video.offsetWidth,
      h = video.offsetHeight,
      r = x + w, //right
      b = y + h, //bottom
      visibleX,
      visibleY,
      visible;

  if (window.pageXOffset >= r ||
      window.pageYOffset >= b ||
      window.pageXOffset + window.innerWidth < x ||
      window.pageYOffset + window.innerHeight < y
     ) {    
    
    return;
  }

  visibleX = Math.max(0, Math.min(w, window.pageXOffset + window.innerWidth - x, r - window.pageXOffset));
  visibleY = Math.max(0, Math.min(h, window.pageYOffset + window.innerHeight - y, b - window.pageYOffset));

  visible = visibleX * visibleY / (w * h);
  
  
  if (visible > fraction) {
    video.play();
  } else {
    video.pause();
  }
  
}

checkScroll();
window.addEventListener('scroll', checkScroll, false);
window.addEventListener('resize', checkScroll, false);