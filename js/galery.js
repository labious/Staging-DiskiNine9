
$(document).ready(function() {
    $(".block").click(function() {
       var newElement=$(this).eq(0).clone(false).appendTo(".blocks");
       newElement.toggleClass("embiggen");
       newElement.click(function() {
          $(this).animate({
             top: '200vh'
          },200);
          setTimeout(function() {
            $('.block:last-of-type').remove();
          }, 0);
       });
       $("#output").toggleClass("embiggen");
       var elem = this;

    });
 });

 /* Sport Toggle */
$(document).ready(function() {
    $(".galeryDropdow").click(function() {
       var newElement=$(this);
       newElement.toggleClass("showDropDown");
    });
 });
 
