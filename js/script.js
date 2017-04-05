$(document).ready(function() {
            $('.owl-carousel').owlCarousel({
                loop:true, //Зацикливаем слайдер
                margin:50, //Отступ от элемента справа в 50px
                dots: true,
                nav : true,
                navText : ["",""],
                autoplay:true, //Автозапуск слайдера
                smartSpeed:1000, //Время движения слайда
                autoplayTimeout:7000, //Время смены слайда
                responsive:{ //Адаптивность. Кол-во выводимых элементов при определенной ширине.
                    0:{
                        items:1
                    },
                    600:{
                        items:1
                    },
                    1000:{
                        items:1
                    }
                }
            });

        $(".fb1").on("click",".podrobneesago", function (event) {
            event.preventDefault();
            $(".podrsago").fadeIn("slow");
            var id  = $(this).attr('href'),
            top = $(id).offset().top;
            $('body,html').animate({scrollTop: top}, 1000);
        });
        $('.close1').click(function(e){
                e.preventDefault();
                $(".podrsago").fadeOut(500);
        });
        $(".fb2").on("click",".podrobneekrahmal", function (event) {
            event.preventDefault();
            $(".podrkrahmal").fadeIn("slow");
            var id  = $(this).attr('href'),
            top = $(id).offset().top;
            $('body,html').animate({scrollTop: top}, 1000);
        });
        $('.close2').click(function(e){
                e.preventDefault();
                $(".podrkrahmal").fadeOut(500);
        });
        $("#phone").mask("+7 (999) 999-99-99");
});