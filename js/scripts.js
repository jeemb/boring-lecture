$(document).ready(function() {
  $("button#dark").click(function(){
    $("body").removeClass();
    $("body").addClass("dark-background");
  });

$("button#light").click(function() {
  $("body").removeClass();
  $("body").addClass("light-background");
  });

$("h2").click(function() {
  $("h2").removeClass();
  $("h2").addClass("highlight");
});
});
