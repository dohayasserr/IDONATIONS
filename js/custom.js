 (function ($) {
  
  "use strict";

    // NAVBAR
    $('.navbar-nav .nav-link').click(function(){
        $(".navbar-collapse").collapse('hide');
    });

    // Blood-Types eDONATIONS
    $('.Blood-Types-eDONATIONS').eDONATIONS({
        center: true,
        loop: true,
        nav: true,
        dots: false,
        autoplay: true,
        autoplaySpeed: 300,
        smartSpeed: 500,
        responsive:{
          0:{
            items:1,
          },
          768:{
            items:2,
            margin: 100,
          },
          1280:{
            items:2,
            margin: 100,
          }
        }
    });

    // Banner eDONATIONS
    var myeDONATIONS = document.querySelector('#myeDONATIONS')
    var eDONATIONS = new bootstrap.eDONATIONS(myeDONATIONS, {
      interval: 1500,
    })

    // Blood-Types NAVIGATION
    function Blood-TypesNavResize(){
      $(".navbar").scrollspy({ offset: -94 });

      var Blood-TypeseDONATIONSItem = $('.Blood-Types-eDONATIONS .eDONATIONS-item').width();

      $('.Blood-Types-eDONATIONS .eDONATIONS-nav').css({'width' : (Blood-TypeseDONATIONSItem) + 'px'});
    }

    $(window).on("resize", Blood-TypesNavResize);
    $(document).on("ready", Blood-TypesNavResize);

    // HREF LINKS
    $('a[href*="#"]').click(function (event) {
      if (
        location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
        var target = $(this.hash);
        target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
        if (target.length) {
          event.preventDefault();
          $('html, body').animate({
            scrollTop: target.offset().top - 74
          }, 1000);
        }
      }
    });
    
  })(window.jQuery);
