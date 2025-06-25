   var swiper = new Swiper(".card", {
                navigation: {
                    nextEl: ".swiper-button-next",
                    prevEl: ".swiper-button-prev",
                },//화살표를 작동하게 하는 옵션.
                pagination: {
                    el: ".swiper-pagination",
                    clickable: true,
                },//도트부분을 작동하게 하는 옵션.
                /*autoplay: {
                      delay: 2000,*/
                /*이미지가 자동으로 넘어가는 시간설정. 1000 = 1초*/
                /*disableOnInteraction: false,
            },*/
                speed: 500,
                loop: true,
                slidesPerView: 4,
                centeredSlides: true,
                spaceBetween: 0,
            });//지우면 안되요!
