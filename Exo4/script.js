// $(document).ready(function(){
    // $("#text").css("color", "orange");
    // $("#tex").css("font-family", "cursive");
    // $("#red").click(function(){
    //  $(".text, ul").css("color", "red");
    // });
    // $("#ChngClr").click(function(){
    //  $("#red, #blue, #green").css("background-color", "gray");
    // });
    //
    // $("#Width").click(function(){
    //   // if (("#red, #blue, #green").css())
    //  $("#red, #blue, #green").css("width", "+=5px");
    // });
    // $("#Masqu").click(function(){
    //  $("#red, #blue, #green").hide();
    // });
    // $("#Affich").click(function(){
    //  $("#red, #blue, #green").show();
    // });
    // $("#RmtrClr").click(function(){
    //   var clr = $(".color").attr('id');
    //   $(".color").css("background-color", clr);
    //    // $("#red").css("background-color", clr);
    //    // $("#blue").css("background-color", clr);
    //    // $("#green").css("background-color", clr);
    //  });

// "Width
// id="Masqu"
// id="Affich"
// id="RmtrClr"
// var colr = "grey";
$("#grey").click(function() {
  var colr = $(this).attr('id');
  $(".color").css("background-color", colr);
  console.log('Meryam');
});
$("#Width").click(function(){
  $(".color").width("+=10");
});
$("#Masqu").click(function(){
  $(".color").hide();
});
$("#Affich").click(function(){
  $(".color").show();
});
$("#RmtrClr").click(function(){
  $(".color").css("background-color", "");
});


// $("#red, #blue, #green").click(function () {
//   var id = $(this).attr('id');
//   $(".text, ul").css("color", id);
// });
// // mouseup
// $("p, ul").click(function(){
//   $(".text, ul").css("color", "black");
//  });
