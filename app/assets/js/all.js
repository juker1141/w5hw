$(".card_reply").hide();
$(".btn_reply").click(function (e) { 
  e.preventDefault();
  $(".card_reply").show(400);
});
