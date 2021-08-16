// number count for stats, using jQuery animate

$('.counting').each(function() {
    var $this = $(this),
        countTo = $this.attr('data-count');
    $({ countNum: $this.text()}).animate({
      countNum : countTo
    },
    {
      duration: 3000,
      easing:'linear',
      step: function() {
        $this.text(Math.floor(this.countNum));
      },
      complete: function() {
        $this.text(this.countNum);
        //alert('finished');
      }
    });  
  });

      /*  GSAP animation  */
      gsap.from("#logo-image", {duration: 2, x: 50, opacity: 1, scale: 1});
      gsap.from("#nav-links", {duration: 1, x: 100, opacity: 0, scale: 1});
      gsap.from("#sidenav-trigger", {duration: 2, x: -300, opacity: 0, scale: 0.5});