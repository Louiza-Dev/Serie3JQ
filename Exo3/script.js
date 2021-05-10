// $(document).ready(function(){
    // $("#text").css("color", "orange");
    // $("#tex").css("font-family", "cursive");
//     $("#afficher").click(function(){
//      $("#text").show();
//     });
//     $("#cacher").mousedown(function(){
//      $("#text").hide();
//     });
// });

// $(document).ready(function() {
//     $("#check").click(function() {
//         if ($.isNumeric($('#input').val())) {
//             $('#output').html('La valeur est un nombre.');
//         } else {
//             $('#output').html('La valeur n\'est pas un nombre.');
//         }
//     });
// });

var Sol = Math.round(Math.random()*100);
console.log(Sol);
  var $valinp = $('input').val();
$("#clique-moi").click(function() {
  // var $valinp = $('input').val();
  if($('#input').val() == Sol){
    alert('bravo');
  } else if($('#input').val() < Sol){
    alert('Trop petit');
  } else if($('#input').val() > Sol){
    alert('Trop grand');
  }
});

// $("#clique-moin").click(function() {
//     cont--;
//     $valinp = $('input').val( "clicks: " + cont );
// });
