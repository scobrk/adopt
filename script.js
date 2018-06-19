// $(document).ready(function(){
//   $("button").click(function(){
//     $("header").toggle("slide");
//   });
// });

$(document).ready(function () {

  $("header").hide();
  $("header").show();

  $('button').click(function () {
      $("header").toggle("fade", 300);
  });

});