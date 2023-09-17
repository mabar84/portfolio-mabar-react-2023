$(".accordeon .accordeon-block")
  .hide()
  .prev()
  .click(function () {
    if ($(this).parents(".accordeon").hasClass("accordeon-active")) {
      $(".accordeon").removeClass("accordeon-active");
    } else {
      $(".accordeon").removeClass("accordeon-active");
      $(this).parents(".accordeon").addClass("accordeon-active");
    }

    $(this).parents().find(".accordeon-block").not(this).slideUp().prev();
    $(this).next().not(":visible").slideDown().prev().parents();

    $(".accordeon .icon-accordeon").text("+");
    $(".accordeon.accordeon-active .icon-accordeon").text("-");
  });
