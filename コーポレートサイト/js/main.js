$(function () {
  const headtop = $("header").offset().top;

  $(window).scroll(function () {
    if ($(window).scrollTop() > headtop) {
      $("header").addClass("anime");
    } else {
      $("header").removeClass("anime");
    }
  });

  let slide = $(".slide ul").children("li");
  let nums = slide.length;
  let count = 0;
  let sec = 5000;

  $("div.slide ul li").eq(count).fadeIn(1000);
  setInterval(function () {
    if (count >= (nums - 1)) {
      count = 0;
      $(".slidenum span").removeClass("active");
      $(".slidenum span").eq(count).addClass("active");
      $(".slide ul li").eq(count).fadeIn(1000);
      $(".slide ul li").eq(nums - 1).fadeOut(1000);
    } else {
      $(".slidenum span").eq(count).removeClass("active");
      $(".slidenum span").eq(count + 1).addClass("active");
      $(".slide ul li").eq(count).fadeOut(1000);
      $(".slide ul li").eq(count + 1).fadeIn(1000);
      count++;
    }
  }, sec);
  $(".toggle button").click(function(){
      if($(this).hasClass("right")){
        if (count >= (nums - 1)) {
          count = 0;
          $(".slidenum span").removeClass("active");
          $(".slidenum span").eq(count).addClass("active");
          $(".slide ul li").eq(count).fadeIn(1000);
          $(".slide ul li").eq(nums - 1).fadeOut(1000);
        } else {
          $(".slidenum span").eq(count).removeClass("active");
          $(".slidenum span").eq(count + 1).addClass("active");
          $(".slide ul li").eq(count).fadeOut(1000);
          $(".slide ul li").eq(count + 1).fadeIn(1000);
          count++;
        }
      }
      if($(this).hasClass("left")){
        if (count <= 0) {
          count = nums-1;
          $(".slidenum span").removeClass("active");
          $(".slidenum span").eq(count).addClass("active");
          $(".slide ul li").eq(count).fadeIn(1000);
          $(".slide ul li").eq(nums - 1).fadeOut(1000);
        } else {
          $(".slidenum span").eq(count).removeClass("active");
          $(".slidenum span").eq(count - 1).addClass("active");
          $(".slide ul li").eq(count).fadeOut(1000);
          $(".slide ul li").eq(count - 1).fadeIn(1000);
          count--;
        }
      }
  });
  $("div.spbtn").click(function(){
    $("header nav.spnav").toggleClass("navopen");
    $("nav.spnav").fadeOut();
    $("nav.navopen").fadeIn();
    $("header .spbtn").toggleClass("acbtn");
  });
});