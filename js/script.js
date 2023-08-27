$(function () {
  // Form
  $(".form__btn").on("click", function (event) {
    event.preventDefault();

    $(".form").css("display", "none");
    $(".form-sent").css("display", "block");

    $.ajax({
      url: "yoururl",
      type: "POST",
      data: yourData,
      success: function (result) {
        console.log(result);
      },
    });
  });

  // calendly
  $(document).ready(function () {
    $(".call").on("click", function (e) {
      e.preventDefault();
      $(".calendly").toggleClass("calendly--open");
    });
    $(".calendly-close, .calendly-overlay").on("click", function () {
      $(".calendly").removeClass("calendly--open");
    });
    $(document).on("click", function (event) {
      if (
        !$(event.target).closest(".calendly").length &&
        !$(event.target).closest(".call").length
      ) {
        $(".calendly").removeClass("calendly--open");
      }
    });
  });
});
