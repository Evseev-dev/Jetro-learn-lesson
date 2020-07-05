$(document).ready(function(){
  $('.slider__inner').slick({
    // arrows: false,
    slidesToShow: 1,
    slidesToScroll: 1,
    prevArrow: '<button type="button" class="slick-prev slick-btn"><img class="slider-icon" src="images/slider/slider-arrow-prev.png" alt="prev"></button>',
    nextArrow: '<button type="button" class="slick-next slick-btn"><img class="slider-icon" src="images/slider/slider-arrow-next.png" alt="next"></button>',
    asNavFor: '.slider__down',

  });
  $('.slider__down').slick({
    asNavFor: '.slider__inner',
    slidesToShow: 6,
    centerMode: false,
    focusOnSelect: true,
    variableWidth: true,
  });

  $('.header__menu-btn').on('click', function(){
    $('.header__menu-list').slideToggle();
  });
});