$(".search_input").hide();
$(".search").click(function (e) { 
  e.preventDefault();
  $(".search_input").toggle();
});


$(".card_reply").hide();
$(".btn_reply-show").click(function (e) { 
  e.preventDefault();
  $(".card_reply").show(400);
});
$(".btn_reply-hide").click(function (e) { 
  e.preventDefault();
  $(".card_reply").hide(400);
});
