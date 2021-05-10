// $(document).ready(function() {
//   $("#text").remove();
//    $("#text2").empty();
//    $("#text2").detach();
//     $("#text3").replaceAll("#text1");
// });
// "1px solid green"
// "1px solid red"

// $( document ).on( "keydown", function( event ) {
//   switch( event.keyCode ) {
//     case $.ui.keyCode.LEFT:
//     $(".div").offset({left: 100});
//       console.log( "left" );
//       break;
//     case $.ui.keyCode.RIGHT:
//     $(".div").offset({right: 100});
//       console.log( "right" );
//       break;
//     case $.ui.keyCode.UP:
//     $(".div").offset({top: 100})
//       console.log( "up" );
//       break;
//     case $.ui.keyCode.DOWN:
//     $(".div").offset({bottom: 100});
//       console.log( "down" );
//       break;
//   }
// });

      // var cmnd = $("#comand").val();

     // $("#comand").on( "keydown", function( event ) {
     //   // var $key = event.keyCode;
     //   $valinp = $('input').val();
     //   if ($valinp = 38) {
     //     console.log('left');
     //     $(".dive").offset({left: 5});
     //   } else if ($valinp = 38) {
     //     console.log('up');
     //     $(".dive").offset({top: 100});
     //   } else if ($valinp = $('input').val(39)) {
     //     console.log('right');
     //     $(".dive").offset({right: 100});
     //   } else if ($valinp = $('input').val(40)) {
     //     console.log('down');
     //     $(".dive").offset({bottom: 100});
     //   }
       // $valinp = $('input').val($.ui.keyCode.DOWN);
        // $(".dive").text(event.which);
    // });
    // ont definie les positions initiales (x y) de ma dive
var posiX = 0;
var posiY = 0;
// ont attache un evenement "keydown()" a notre input qui appel la method .which() au focus de mon input
 $("#comand").on( "keydown", function( event ) {
   // je recupre la taille de mon fenetre en dimuniant les dementions de ma dive
   var windowHeight = $(window).height()-150;
   var windowWidth = $(window).width()-350;
   // la methode .which() consiste a recuperer le keycode de la touche enfoncé
    switch (event.which){
    case 37:    // flèche gauche
    console.log('left');
        // $(".dive").css("margin-left", "-=10px");
        posiX = posiX-20;// je décrément ma variable de 10 de width
        if (posiX > -960){
          $(".dive").css("margin-left", posiX);
        } else if (posiX < -960){// si ma variable prend ue valeur négatif(sort de ma fenetre)
          console.log(posiX);
          posiX = windowWidth;//alors je reposition ma variable a -20 de la taill de ma fenetre(windowWidth)
          console.log(posiX);
          $(".dive").css("margin-left", posiX);
        }
        break;
    case 38:    // flèche haut
    console.log('top');
        // $(".dive").css("margin-top", "-=10px");
        posiY = posiY-20;// je décrément ma variable de 10
        if (posiY > -450){
          $(".dive").css("margin-top", posiY);
        } else if (posiY < -450){
          posiY = 450;
          $(".dive").css("margin-top", posiY);
        }
        break;
    case 39:    // flèche droite
    console.log('right');
        // $(".dive").css("margin-left", "+=10px");
        posiX = posiX+20;
        if (windowWidth > posiX){
          $(".dive").css("margin-left", posiX);
        } else if (windowWidth < posiX){
          posiX = -940;
          $(".dive").css("margin-left", posiX);
        }
        break;
    case 40:    // flèche du bas
    console.log('down');
        // $(".dive").css("margin-top", "+=10px");
        posiY = posiY+20;
        if (posiY < windowHeight){
          $(".dive").css("margin-top", posiY);
        } else if (posiY > windowHeight){
          posiY = -450;
          $(".dive").css("margin-top", posiY);
        }
        break;
    }
});





// keyup()
//
// $("input").focus(function(){
//         $(this).css({
//           "border": "3px solid green",
//           "background-color": "lightgreen"
//         });
//     });
// $("input").blur(function(){
//         $(this).css({
//           "border": "3px solid red",
//           "background-color": "salmon"
//         });
//     });



// $(document).ready(function(){
//     $("#nom, #prenom").click(function(){
//      $(".text, ul").css("color", "red");
//     });
//     $("#blue").click(function(){
//      $(".text, ul").css("color", "blue");
//     });
//     $("#green").click(function(){
//      $(".text, ul").css("color", "green");
//     });
// });
