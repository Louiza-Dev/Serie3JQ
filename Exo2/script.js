var count = 0;
    var $valinp = $('input').val();
  var cont = 0;
  $("#clique-plus").click(function() {
    cont++;
    $valinp = $('input').val( "clicks: " + cont );
});

$("#clique-moin").click(function() {
    cont--;
    $valinp = $('input').val( "clicks: " + cont );
});




// $(document).ready(function(){
//     let largeurcss = $("div").css("width");
//     let largeurwidth = $("div").width();
//
//     $("#rescss").text(largeurcss);
//     $("#reswidth").text(largeurwidth);
// });
