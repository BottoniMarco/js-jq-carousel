
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

      activeImage.removeClass("active");
      activeDot.removeClass("active");

      if (activeImage.hasClass("first") == true){
        $(".images img:last-child").addClass("active");
        $(".nav i:last-child").addClass("active");
      }else {
        activeImage.prev().addClass("active");
        activeDot.prev().addClass("active");

      }

      activeImage.prev().addClass("active");
      activeDot.prev().addClass("active");

    }
    
    $(document).keydown(
      function() {
        console.log(event.keyCode);
        if (event.keyCode == 37) {
          prevImage();
        }else if (event.keyCode == 39){
          nextImage();
        }
      }
    )
  }
);
