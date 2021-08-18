$(document).ready(function(){
    var $sm = 500;
    var $md = 768;
    function resizeThis() {
       $imgH = $('.middle img').width();
       if ($(window).width() >= $sm) {
          $('.left,.right,.section').css('height', $imgH);
       } else {
          $('.left,.right,.section').css('height', 'auto');
       }
    }
    resizeThis();
    $(window).resize(function(){
       resizeThis();
    });
    $(window).scroll(function() {
       $('.section').each(function(){
          var $elementPos = $(this).offset().top;
          var $scrollPos = $(window).scrollTop();
          var $sectionH = $(this).height();
          var $h = $(window).height();
          var $sectionVert = (($h/2)-($sectionH/4));
          if (($elementPos - $sectionVert) <= $scrollPos && ($elementPos - $sectionVert) + $sectionH > $scrollPos) {
             $(this).addClass('animate');
          } else {
             $(this).removeClass('animate');
          }
       });
    });
    
/*     $('.btn-primary').click(function(){
       alert('I lied');
    }); */
    });
    
/*     $(function() {
    $('a[href*="#"]:not([href="#"])').click(function() {
     if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
       var target = $(this.hash);
       target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
       if (target.length) {
         $('html, body').animate({
           scrollTop: target.offset().top
         }, 1000);
         return false;
       }
     }
    });
    }); */

    /*  GSAP animation  */
  gsap.from("#logo-image", {duration: 2, x: 50, opacity: 1, scale: 1});
  gsap.from("#nav-links", {duration: 1, x: 100, opacity: 0, scale: 1});
  gsap.from("#sidenav-trigger", {duration: 2, x: -300, opacity: 0, scale: 0.5});