$(document).ready(function(){
    var owl = $('.owl-carousel');
    owl.owlCarousel({
      stagePadding:0,
      loop:true,
      margin:10,
      nav:false,
      items: 1,
      autoplay:true,
      autoplayTimeout:2000
    });
    $(".minus").click(function(){
      $(".searchbar").hide();
      $(".minus").hide();
      $(".plus").show();
      $(".company-info-container").css("padding-top","25px");
    })
    $(".plus").click(function(){
      $(".searchbar").show();
      $(".minus").show();
      $(".plus").hide();
      $(".company-info-container").css("padding-top","50px");
    });

    $(".toggle").click(function(){
      $(".right").toggle();
    });

    $(".nav-toggle").click(function(){
      $(".navbar-menu").toggle();
    })
});