// $(document).ready(function(){
//   $("button").click(function(){
//     $("header").toggle("slide");
//   });
// });

$(document).ready(function () {

  $("header").hide();
  $("header").show();

  $('.menu-icon').click(function () {
      $("popout").toggle("slide", 300);
  });

});