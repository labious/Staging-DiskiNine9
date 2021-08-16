    /*  GSAP animation  */
    gsap.from("#logo-image", {duration: 2, x: 50, opacity: 1, scale: 1});
    gsap.from("#nav-links", {duration: 2, x: 50, opacity: 1, scale: 1});
    gsap.from("#sidenav-trigger", {duration: 2, x: -300, opacity: 0, scale: 0.5});


/* Modal */
$(document).ready(function(){
    $('.modal').modal();
  });

 // SplideJS Slider. See full docs at:
  // https://splidejs.com/



  /* Sponsor Splide */
  document.addEventListener( 'DOMContentLoaded', function () {
    var w = window.innerWidth;
    let per_page = 3; 
    if(w < 500){
      per_page = 1;
    }
    else if(w < 900){
      per_page = 3;
    }
    new Splide( '.splide',{
      type: 'loop',
      perPage: per_page,
      autoplay: true,
      arrows : false,
      interval: 3500, // How long to display each slide
      pauseOnHover: false, // must be false
      pauseOnFocus: false, // must be false
      resetProgress: true
    } ).mount();
  } );

