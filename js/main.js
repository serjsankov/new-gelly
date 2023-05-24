window.addEventListener("DOMContentLoaded", () => {


  initClicks();

  initMaskTel();
  // initLoad();
  // initScroolMagic();
  initFancy();
  initCustomSelect();

  function initCustomSelect () {
    $('select').select2({
      width: '100%',
  });
  };


  function initFancy() {
      $("[data-fancybox]").fancybox({
          // Скорость анимации
          speed: 330,
          // Бесконечная прокрутка галереи
          loop: true,
          // Скорость появления/угасания прозрачности элементов

      });
  }


  function initLoad() {
      $(window).on("scroll", function () {
          lazyLoad.img(200);
          lazyLoad.bg(30);
      });
  }

  function initScroolMagic() {
      // init controller
      const controller = new ScrollMagic.Controller();

      // Создаём сцену 
      new ScrollMagic.Scene({ triggerElement: "#list" })
          .setClassToggle("#list", "active") // add class toggle
          .addTo(controller);
      new ScrollMagic.Scene({ triggerElement: "#equip" })
          .setClassToggle("#equip", "active") // add class toggle
          .addTo(controller);
  }

  function initMaskTel() {
      // Маска для телефона
      $.fn.setCursorPosition = function (pos) {
          if ($(this).get(0).setSelectionRange) {
              $(this).get(0).setSelectionRange(pos, pos);
          } else if ($(this).get(0).createTextRange) {
              var range = $(this).get(0).createTextRange();
              range.collapse(true);
              range.moveEnd('character', pos);
              range.moveStart('character', pos);
              range.select();
          }
      };
      $.mask.definitions['~'] = '[49]';
      $("input[type='tel']").click(function () {
          $(this).setCursorPosition(2);
      }).mask("+7 (~99) 999-99-99", {
          placeholder: "_"
      });
  }


  function initClicks() {
      document.addEventListener("click", (event) => {
          if (event.target.closest(".burger")) {
              
            }

      })
  }
})









