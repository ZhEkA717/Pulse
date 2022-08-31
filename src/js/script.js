$(document).ready(function () {
    $('.carousel__inner').slick({
        speed: 1000,
        // adaptiveHeight: true,
        prevArrow: `
        <button type="button" class="slick-prev">
            <img src="icons/left.svg">
        </button>
        `,
        nextArrow: `
        <button type="button" class="slick-next">
            <img src="icons/right.svg">
        </button>
        `,
        responsive: [{
                breakpoint: 992,
                settings: {
                    dots: true,
                    arrows: false
                }
            }
            // {
            //   breakpoint: 600,
            //   settings: {
            //     slidesToShow: 2,
            //     slidesToScroll: 2
            //   }
            // },
            // {
            //   breakpoint: 480,
            //   settings: {
            //     slidesToShow: 1,
            //     slidesToScroll: 1
            //   }
            // }
        ]

    });


    document.querySelectorAll(".catalog__tab").forEach(item => {
        item.addEventListener('click', (e) => {
            document.querySelector(".catalog__tab_active").classList.remove("catalog__tab_active");
            e.target.parentNode.classList.add('catalog__tab_active');

            document.querySelector(".catalog__content_active").classList.remove("catalog__content_active");
            const tabsSelector = document.querySelector(".catalog__tab_active").getAttribute("data-tabs");

            document.querySelectorAll(".catalog__content").forEach(item => {
                if (item.getAttribute("data-tabs") === tabsSelector) {
                    item.classList.add('catalog__content_active');
                }
            })
        });
    });

    document.querySelectorAll('.catalog-item__link').forEach(item => {
        item.addEventListener("click", (e) => {
            e.preventDefault();
            e.target.parentNode.classList.toggle('catalog-item__content_active');
            e.target.parentNode.nextElementSibling.classList.toggle("catalog-item__list_active");
        })
    })

    document.querySelectorAll('.catalog-item__back').forEach(item => {
        item.addEventListener("click", (e) => {
            e.preventDefault();
            e.target.parentNode.classList.toggle('catalog-item__list_active');
            e.target.parentNode.previousElementSibling.classList.toggle("catalog-item__content_active");
        })
    })


    // Modal
    $("[data-modal=consultation]").on("click",()=>{
        $('.overlay, #consultation').fadeIn('slow');
    });

    $(".modal__close").on("click",()=>{
        $('.overlay, #consultation,#thanks,#order').fadeOut("slow");
    });

    $('.button_mini').each(function(i){
        $(this).on("click",()=>{
            $("#order .modal__descr").text($('.catalog-item__subtitle').eq(i).text());
            $('.overlay, #order').fadeIn('slow');
        });
    });

});
