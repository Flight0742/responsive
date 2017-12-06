$(document).ready(function() {
  var container = $('.menubar-container');
  var btn = $('.btn-menubar');
  var btnMenubar = $('.btn-menubar, .menubar');
  var menubar = $('.btn-menubar, .menubar');
  var menu = $('.main-menu');
  //   마지막 li 요소 선택
  var menuLi = $('.main-menu > li');
  var menuLast = $('.main-menu > li:last-child');
  var subMenu = $('.sub-menu');
  var subLast = $('.main-menu li:last-child li:last-child a');


  btnMenubar.click(function() {
    menu.toggleClass('main-menu-act');
    // menubar.toggleClass('menubar-act');
    btnMenubar.toggleClass('menubar-act');
    // btn.text('닫기');
    if (btn.hasClass('menubar-act')) {
      btn.text('메인메뉴 닫기');
    } else {
      btn.text('메인메뉴 열기');
    }
  });

  subLast.focusout(function() {
    menu.removeClass('main-menu-act');
    btnMenubar.removeClass('menubar-act');
    btn.text('메인메뉴 열기');
  });

  menuLi.click(function(e) {
    e.preventDefault();
    $(this).siblings().find('.sub-menu').removeClass('sub-menu-act');
    $(this).find('.sub-menu').addClass('sub-menu-act');
  });

  menuLi.keyup(function(e) {
    e.preventDefault();
    if (e.keyCode == 13 || e.keyCode == 32) {
      $(this).siblings().find('.sub-menu').removeClass('sub-menu-act');
      $(this).find('.sub-menu').addClass('sub-menu-act');
    }
  });

  menuLi.focusin(function() {
    $(this).siblings().find('.sub-menu').removeClass('sub-menu-act');
  });

  menuLast.focusout(function() {
    if (!(subMenu.hasClass('sub-menu-act'))) {
      menu.removeClass('main-menu-act');
      btnMenubar.removeClass('menubar-act');
      btn.text('메인메뉴 열기');
    }
  });
});