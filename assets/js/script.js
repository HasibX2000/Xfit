// Remove the entire content of this file if it was only used for the mobile menu

$(document).ready(function () {
  // Animate hero elements
  $(".hero__title").animate({ opacity: 1, transform: "translateY(0)" }, 800);
  $(".hero__subtitle").delay(200).animate({ opacity: 1, transform: "translateY(0)" }, 800);
  $(".hero__cta-button").delay(400).animate({ opacity: 1, transform: "translateY(0)" }, 800);
  $(".hero__image-container").delay(400).animate({ opacity: 1, transform: "translateX(0)" }, 800);

  // Animate counter section
  $(".hero__counter-item").each(function (index) {
    $(this)
      .delay(200 * index)
      .animate({ opacity: 1, transform: "translateY(0)" }, 800);
  });

  // Animate quote section
  $(".hero__quote-section").delay(800).animate({ opacity: 1, transform: "translateY(0)" }, 800);

  // Counter animation
  $(".hero__counter").each(function () {
    var $this = $(this);
    var countTo = $this.attr("data-count");

    $({ countNum: $this.text() }).animate(
      {
        countNum: countTo,
      },
      {
        duration: 2000,
        easing: "swing",
        step: function () {
          $this.text(Math.floor(this.countNum));
        },
        complete: function () {
          $this.text(this.countNum);
        },
      }
    );
  });

  // Parallax effect on hero image
  $(window).scroll(function () {
    var scrollTop = $(this).scrollTop();
    $(".hero__image").css("transform", "translateY(" + scrollTop * 0.2 + "px)");
  });
});
