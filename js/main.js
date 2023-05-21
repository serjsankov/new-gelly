$(document).ready(function () {
  $(".js-select").select2({
    width: "100%",
  });

  // Маска для телефона
  // $.fn.setCursorPosition = function (pos) {
  //   if ($(this).get(0).setSelectionRange) {
  //     $(this).get(0).setSelectionRange(pos, pos);
  //   } else if ($(this).get(0).createTextRange) {
  //     var range = $(this).get(0).createTextRange();
  //     range.collapse(true);
  //     range.moveEnd("character", pos);
  //     range.moveStart("character", pos);
  //     range.select();
  //   }
  // };
  // $.mask.definitions["~"] = "[49]";
  // $("input[type='tel']")
  //   .click(function () {
  //     $(this).setCursorPosition(2);
  //   })
  //   .mask("+7 (~99) 999-99-99", {
  //     placeholder: "_",
  //   });



    var modelSlider = new Swiper(".swiper-color", {
      effect: "creative",
      creativeEffect: {
          prev: {
              translate: ["-140%", -100, -800],
          },
          next: {
              translate: ["140%", -100, -800],
          },
      },
      grabCursor: true,
      slidesPerView: 1,
      pagination: {
          el: ".swiper-pagination",
          clickable: true,
      },
  })

  const count = document.querySelectorAll('.swiper-color .swiper-pagination span').length;
  // const colorName = document.querySelector('.model__color span');

 // if (colorName) {
     // colorName.innerText = document.querySelector('.color-active').dataset.colorname;

      for (let i = 1; i <= count; i++) {
          let span = document.querySelector(`span[data-color="${i}"]`);
         
          span.onclick = () => {
              modelSlider.slideTo(i - 1);
              document.querySelector('.color-active').classList.remove('color-active');
              span.classList.toggle('color-active');
              // colorName.innerText = span.dataset.colorname;
          }
      }

      modelSlider.on('slideChange', function () {
          const activeColor = document.querySelector('.color-active');
          const index = modelSlider.activeIndex + 1;
          activeColor.classList.remove('color-active');
          document.querySelector(`span[data-color="${index}"]`).classList.add('color-active');
         // colorName.innerText = document.querySelector('.color-active').dataset.colorname;
      })


      var swiperInterior = new Swiper(".swiper-interior", {
        pagination: {
          el: ".swiper-pagination",
        },
      });
      var swiperExterior = new Swiper(".swiper-exterior", {
        pagination: {
          el: ".swiper-pagination",
        },
      });



      const btnSwiper = document.querySelectorAll(".photo__list-item");
      const swiperExt = document.querySelector(".swiper-exterior");
      const swiperInt = document.querySelector(".swiper-interior");
      const swiperIntDesk = document.querySelector(".photo__swiper-desk-int");
      const swiperExtDesk = document.querySelector(".photo__swiper-desk-ext");

      btnSwiper.forEach(btn=> {
        btn.addEventListener("click", (e)=> {
            if(btn.dataset.name === "inter") {
                swiperExt.style.opacity = "1";
                swiperExt.style.zIndex = "1";
                swiperExt.style.position = "static";

                swiperIntDesk.style.opacity = "1";
                swiperIntDesk.style.zIndex = "1";
                swiperIntDesk.style.position = "static";

                swiperInt.style.opacity = "0";
                swiperInt.style.zIndex = "-1";
                swiperInt.style.position = "absolute";

                swiperExtDesk.style.opacity = "0";
                swiperExtDesk.style.zIndex = "-1";
                swiperExtDesk.style.position = "absolute";

                
            } else {
                swiperInt.style.opacity = "1";
                swiperInt.style.zIndex = "1";
                swiperInt.style.position = "static";

                swiperExtDesk.style.opacity = "1";
                swiperExtDesk.style.zIndex = "1";
                swiperExtDesk.style.position = "static";

                swiperExt.style.opacity = "0";
                swiperExt.style.zIndex = "-1";
                swiperExt.style.position = "absolute";

                swiperIntDesk.style.opacity = "0";
                swiperIntDesk.style.zIndex = "-1";
                swiperIntDesk.style.position = "absolute";
            }
        })
      })


      const bgDeskExt = document.querySelectorAll(".photo__ext");
      const bgDeskInt = document.querySelectorAll(".photo__int");

      bgDeskExt.forEach(bg=> {
        bg.addEventListener("click", (e)=> {
            bgDeskExt.forEach(item=> {
                item.classList.remove("active");
            })
            bg.classList.add("active");
        })
      })

      bgDeskInt.forEach(bg=> {
        bg.addEventListener("click", (e)=> {
            bgDeskInt.forEach(item=> {
                item.classList.remove("active")
            })
            bg.classList.add("active");
        })
      })
  
});
