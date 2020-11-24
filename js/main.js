
$(document).ready(
  function() {
    $(".prev").click(
      function(){
        prevImage();
        // console.log("sinistra");
      }
    );

    $(".next").click(
      function(){
        nextImage();
        // console.log("destra");

      }
    );
    function nextImage() {
      // console.log("destra");
      
      var activeImage = $(".images img.active");
      console.log(activeImage);
      var activeDot = $(".nav i.active");
      console.log(activeDot);
      activeImage.removeClass("active");
      activeDot.removeClass("active");

      if (activeImage.hasClass("last") == true) {
        $(".images img:first-child").addClass("active");
        $(".nav i:first-child").addClass("active");
      }else {
        activeImage.next().addClass("active");
        activeDot.next().addClass("active");
      }
    }
    function prevImage() {
      // console.log("sinistra");

      var activeImage = $(".images img.active");
      var activeDot = $(".nav i.active");

    }
  }
);
