$(document).ready(function() {
  // all custom jQuery will go here
//});


//(function ($) {
  
  
    "use strict";
    
    

    // canvas menu activation
    $(".canvas_open").on("click", function () {
        $(".offcanvas_menu_wrapper, .off_canvas_overlay").addClass("active");
    });

    $(".canvas_close, .off_canvas_overlay").on("click", function () {
        $(".offcanvas_menu_wrapper,.off_canvras_overlay").removeClass("active");
    });

    // off canvas menu 
    var $offcanvasNav = $(".offcanvas_main_menu"),
        $offcanvasNavSubMenu = $offcanvasNav.find(".sub-menu");
    $offcanvasNavSubMenu
        .parent()
        .prepend(
            '<span class="menu-expand"><i class="fa fa-angle-down"></i></span>');


    $offcanvasNavSubMenu.slideUp();

    $offcanvasNav.on("click", "li a, li .menu-expand", function (e) {
        var $this = $(this);
        if (
            $this.parent().attr("class").match(/\b(menu-item-has-children | has-children | has-sub-menu)\b/) && ($this.attr("href") === "#" || $this.hasClass("menu-expand"))
        ) {
            e.preventDefault();
            if ($this.siblings("ul:visible").length) {
                $this.siblings("ul").slideUp("slow");
            } else {
                $this.closest("li").siblings("li").find("ul:visible").slideUp("slow");
                $this.siblings("ul").slideDown("slow");
            }
        }

        if (
            $this.is("a") ||
            $this.is("span") ||
            $this.attr("class").match(/ \b(menu-expand)\b/)
        ) {
            $this.parent().toggleClass("menu-open");
        } else if (
            $this.is("li") &&
            $this.attr("class").match(/ \b('menu-item-has-children')\b/)

        ) {
            $this.toggleClass("menu-open");
        }
    });



    // search box slidetoggle activation 

    $(".search_box > a").on("click", function () {
        $(this).toggleClass("active");
        $(".search_widget").slideToggle("medium");
    });

    // slide toogle activation for mini cart
    $(".mini_cart_wrapper> a").on("click", function () {
        if ($(window).width() < 991) {
            $(".mini_car").slideToggle("medium");
        }
    });

    //sticky header

    $(window).on("scroll", function () {
        var scroll = $(window).scrollTop();
        if (scroll < 100) {
            $(".sticky-header").removeClass("sticky");
        } else {
            $(".sticky-header").addClass("sticky");
        }
    })

    // part 4 starts slider section 

    function dataBackgroundImage() {
        $("[data-bgimg]").each(function () {
            var bgImgUrl = $(this).data("bgimg");
            $(this).css({
                "background-image": "url(" + bgImgUrl + ")",
            });
        });
    }

    $(window).on("load", function () {
        dataBackgroundImage();
    });

    // slider activation 
    $(".slider_area").owlCarousel({
        animateOut: "fadeout",
        autoplay: true,
        loop: true,
        nav: true,
        autoplay: false,
        autoplayTimeout: 5000,
        items: 1,
        dots: false,
        navText: [
            '<i class="fa fa-arrow-left"></i>',
            '<i class="fa fa-arrow-right"></i>',
        ],
    });

    // part 5 starts product column of 4 activation
    $(".product_column4").on("change.owl.carousel initialized.owl.carousel", function (event) {
        $(event.target).find(".owl_item").removeClass("last").eq(event.index + event.page.size - 1).addClass("last");
    }).owlCarousel({

        autoplay: true,
        loop: true,
        nav: true,
        autoplay: false,
        autoplayTimeout: 5000,
        items: 4,
        dots: false,
        navText: [
            '<i class="fa fa-arrow-left"></i>',
            '<i class="fa fa-arrow-right"></i>',
        ],
        responsiveClass: true,
        responsive: {
            0: {
                items: 1,
            },
            576: {
                items: 2,
            },
            768: {
                items: 3,
            },
            992: {
                items: 4,
            },
        },
    });



    // tool tip activation

    $(".action_links ul li a,.add_to_cart a,.footer_social_link ul li a").tooltip({
        animated: "fade",
        placement: "top",
        container: "body",
    })




    // activation of one column of deal product  part 7

    $(".product_column1").on("change.owl.carousel initialized.owl.carousel", function (event) {
        $(event.target).find(".owl_item").removeClass("last").eq(event.index + event.page.size - 1).addClass("last");
    }).owlCarousel({

        autoplay: true,
        loop: true,
        nav: true,
        autoplay: false,
        autoplayTimeout: 5000,
        items: 4,
        dots: false,
        navText: [
            '<i class="fa fa-arrow-left"></i>',
            '<i class="fa fa-arrow-right"></i>',
        ],
        responsiveClass: true,
        responsive: {
            0: {
                items: 1,
            },

            768: {
                items: 2,
            },
            992: {
                items: 1,
            },
        },
    });



    // countdown js activation 
    $("[data-countdown").each(function () {
        var $this = $(this),
            finalDate = $(this).data("countdown");
        $this.countdown(finalDate, function (event) {
            $this.html(
                event.strftime(
                    '<div class="countdown_area"><div class="single_countdown"><div class="countdown_number">%D</div><div class = "countdown_title">days</div></div><div class="single_countdown"><div class="countdown_number">%H</div> <div class = "countdown_title">Hours</div></div> <div class="single_countdown">  <div class="countdown_number">%M</div> <div class = "countdown_title">mins</div></div><div class="single_countdown"><div class="countdown_number">%S</div><div class = "countdown_title">secs</div></div></div>'
                )
            );
        });
    });


    // activation of one column of best seller product  part 8
    $(".sidebar_product_column1").on("change.owl.carousel initialized.owl.carousel", function (event) {
        $(event.target).find(".owl_item").removeClass("last").eq(event.index + event.page.size - 1).addClass("last");
    }).owlCarousel({

        autoplay: true,
        loop: true,
        nav: true,
        autoplay: false,
        autoplayTimeout: 5000,
        items: 4,
        dots: false,
        navText: [
            '<i class="fa fa-arrow-left"></i>',
            '<i class="fa fa-arrow-right"></i>',
        ],
        responsiveClass: true,
        responsive: {
            0: {
                items: 1,
            },

            768: {
                items: 2,
                margin: 30,
            },
            992: {
                items: 1,
            },
        },
    });

    // Testimonial  activation 
    $(".testimonial_sidebar_carousel").owlCarousel({
        autoplay: true,
        loop: true,
        nav: true,
        autoplay: false,
        autoplayTimeout: 5000,
        items: 1,
        dots: false,
        navText: [
            '<i class="fa fa-arrow-left"></i>',
            '<i class="fa fa-arrow-right"></i>',
        ],
    });


    // activation of one column of best seller product  part 8
    $(".blog_column3").on("change.owl.carousel initialized.owl.carousel", function (event) {
            $(event.target).find(".owl_item").removeClass("last").eq(event.index + event.page.size - 1).addClass("last");
        })
        .owlCarousel({

            autoplay: true,
            loop: true,
            nav: true,
            autoplay: false,
            autoplayTimeout: 5000,
            items: 4,
            dots: false,
            navText: [
                '<i class="fa fa-arrow-left"></i>',
                '<i class="fa fa-arrow-right"></i>',
            ],
            responsiveClass: true,
            responsive: {
                0: {
                    items: 1,
                },
                768: {
                    items: 2,

                },
                992: {
                    items: 3,
                },
            },
        });


    // Blog section activation
    $(".product_column3")
        .owlCarousel({

            autoplay: true,
            loop: true,
            nav: true,
            autoplay: false,
            autoplayTimeout: 5000,
            items: 4,
            dots: false,
            navText: [
                '<i class="fa fa-arrow-left"></i>',
                '<i class="fa fa-arrow-right"></i>',
            ],
            responsiveClass: true,
            responsive: {
                0: {
                    items: 1,
                },
                567: {
                    items: 2,
                },
                768: {
                    items: 3,

                },
                992: {
                    items: 3,
                },
            },
        });




    // Small product column 1 activation
    $(".small_product_column1").on("change.owl.carousel initialized.owl.carousel", function (event) {
            $(event.target).find(".owl_item").removeClass("last").eq(event.index + event.page.size - 1).addClass("last");
        })
        .owlCarousel({

            autoplay: true,
            loop: true,
            nav: false,
            autoplay: false,
            autoplayTimeout: 5000,
            items: 4,
            dots: false,
            navText: [
                '<i class="fa fa-arrow-left"></i>',
                '<i class="fa fa-arrow-right"></i>',
            ],
            responsiveClass: true,
            responsive: {
                0: {
                    items: 1,
                },
                567: {
                    items: 2,
                    margin: 15,
                },
                768: {
                    items: 1,
                },
            },
        });




});



//})(jQuery);