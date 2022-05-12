$(function(){

    $('.slider').slick({
      arrows: false,
      dots: true,
      slidesToShow: 3,
      responsive: [
        {
          breakpoint: 841,
          settings: {
            slidesToShow: 2
          }
        },
        {
          breakpoint: 601,
          settings: {
            slidesToShow: 1
          }
        },
      ]
    });
});

window.onscroll = function() {
    scrollFunction();
  };
  
  function scrollFunction() {
    if (document.body.scrollTop > 700 || document.documentElement.scrollTop > 700) {
        document.getElementById("footer__button_up").style.display = "block";
    }
  
    else {
        document.getElementById("footer__button_up").style.display = "none";
    }
  }
  
  //когда юзер нажмет на кнопку кидает на начало страницы
  
  function topFunction() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
  }