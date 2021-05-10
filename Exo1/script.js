// $(document).ready(function() {
  // $('body').append("<input type='text'>");
  // var cont = $('input').val();
  // cont = 1;
   // $("#clique-moi").click(function(){
     // var cont = $('input').value;
     // $('#input').text = 1;
     // var cont = $('input').val() ;
     // cont += 1;
     // var cont = $('#input').val();
     // cont ++;
     // $('body').append("<input type='text' value='1'>");
   // alert('Hello, j\'aime pas vraiment ce jQuery !');
//  });
// });
// "$.cookie('clicks', $.cookie('clicks') + 1);"
// .keydown

// $("#clique-moi").click(function(){
//   $("input").change(function(){
//         $("input").text($(this).val());
//     });
// });

var count = 0;
    var $valinp = $('input').val();
  var cont = 0;
  $("#clique-moi").click(function() {
    cont++;
    $valinp = $('input').val( "clicks: " + cont );
});

// var count = 0;
// $( "p" ).each(function() {
//   var $thisParagraph = $( this );
//   var count = 0;
//   $thisParagraph.click(function() {
//     count++;
//     $thisParagraph.find( "span" ).text( "clicks: " + count );
//     $thisParagraph.toggleClass( "highlight", count % 3 === 0 );
//   });
// });
