$(function() {
    var ooo = {
        init: function() {
            this.chidu();
            this.swiper();
            this.lunbo();
            this.dianji();
            this.fenxiang();
        },
        chidu: function() {
            chidu();
            $(window).resize(function() {
                chidu();
            });
            function chidu() {
                var clienty = document.documentElement.clientHeight;
                $(".swiper-container").css({
                    'height': clienty - 70 + 'px'
                })
            };
        },
        swiper: function() {
            var mySwiper = new Swiper('.swiper-container', {
                pagination: '.swiper-pagination',
                direction: 'vertical',
                speed: 1500,
                slidesPerView: 1,
                paginationClickable: true,
                touchRatio: 0.5,
                mousewheelControl: true,
                lazyLoading: true,
                preloadImages: false,
                zoom: true,
                zoomMax: 2,
                onSlideChangeEnd: function(swiper) {
                    if (swiper.activeIndex == 1) {
                        $(".img1").animate({
                            opacity: 1
                        }, 1000);
                        $(".img2").animate({
                            left: "90px",
                            opacity: 1
                        });
                        $(".img3").animate({
                            right: "100px",
                            opacity: 1
                        });
                        $(".page1title").animate({
                            left: "256px",
                            opacity: 1,

                        });
                        $(".page1h2").animate({
                            top: "80px",
                            opacity: 1,

                        });
                        $(".page1text").animate({
                            top: "180px",
                            opacity: 1,

                        });
                    } else {
                        $(".img2").animate({
                            left: "0px",
                            opacity: 0
                        });
                        $(".img3").animate({
                            right: "0px",
                            opacity: 0
                        });
                        $(".img1").animate({
                            opacity: 0
                        });
                        $(".page1title").animate({
                            left: "-700px",
                            opacity: 0

                        });
                        $(".page1h2").animate({
                            top: "0px",
                            opacity: 0
                        });
                        $(".page1text").animate({
                            top: "150px",
                            opacity: 0,

                        });
                    };
                    if (swiper.activeIndex == 2) {
                        $('.page3>h1').animate({
                            fontSize: '60px',
                            opacity: 1
                        });
                        $('.ullist>li').animate({
                            opacity: 1
                        })
                    } else {
                        $('.page3>h1').animate({
                            fontSize: '32px',
                            opacity: 0
                        });
                        $('.ullist>li').animate({
                            opacity: 0
                        })
                    };
                    if (swiper.activeIndex == 4) {
                        $(".h21").animate({
                            left: "345px"
                        });
                        $(".h22").animate({
                            left: "345px"
                        }, 1000);
                        $(".page5Logo").animate({
                            opacity: 1
                        }, 2000)
                    } else {
                        $(".h21").animate({
                            left: "-700px"
                        });
                        $(".h22").animate({
                            left: "1500px"
                        });
                        $(".page5Logo").animate({
                            opacity: 0
                        })
                    };
                    if (swiper.activeIndex == 5) {
                        var flag = true;
                        $(".page6text>h2").animate({
                            fontSize: "40px",
                            opacity: "1"
                        });
                        setInterval(function() {
                            if (flag) {
                                $(".light").animate({
                                    opacity: 1
                                });
                                flag = !flag;
                            } else {
                                $(".light").animate({
                                    opacity: 0
                                });
                                flag = !flag;
                            }

                        }, 1000)
                    } else {
                        $(".page6text>h2").animate({
                            fontSize: "0px",
                            opacity: "0"
                        })
                    }
                }
            });
        },
        lunbo: function() {
            var timer1 = null;
            var index = 0;
            timer1 = setInterval(startmove1, 2000);
            $(".zhishitiao>li").mouseover(function() {
                clearInterval(timer1);
                $('.container>img').eq($(this).index()).show().siblings().filter("img").hide();
                $('.zhishitiao>li').eq($(this).index()).addClass("active").siblings().removeClass("active");
                index = $(this).index();
            });
            $(".zhishitiao>li").mouseout(function() {
                timer1 = setInterval(startmove1, 2000);
            });
            function startmove1() {
                $('.container>img').eq(index).show().siblings().filter("img").hide();
                $(".guanggao>li").eq(index).fadeIn(500).siblings().fadeOut(500);
                $('.zhishitiao>li').eq(index).addClass("active").siblings().removeClass("active");
                $('.showtime').eq(index).animate({
                    fontSize: '30px',
                    opacity: 1
                }).siblings().filter("div").animate({
                    fontSize: '0px',
                    opacity: 0
                });
                index++;
                if (index == 3) {
                    index = 0;
                }
            };
        },
        dianji: function() {
            var arr = ['homepage', 'people', 'hiah', 'sdhis', 'ashdihsa', 'end'];
            var arr1 = ['首页', '股票学院', '下载', '娱乐', '官网', '汇总'];
            $(".replace").hover(function() {
                $(".neirong").slideDown();
            }, function() {
                $(".neirong").stop().slideUp();
            });
            $(".neirong").hover(function() {
                $(this).stop(true, false).slideDown();
            }, function() {
                $(this).slideUp();
            });
            $(".lli1").click(function() {
                var str = '';
                for (var i = 0; i < arr1.length; i++) {
                    str += '<a class="nav" href="#">' + arr1[i] + '</a>'
                }
                $('.allnav').html(str);
            });
            $('.lli2').click(function() {
                var str = '';
                for (var i = 0; i < arr.length; i++) {
                    str += '<a class="nav" href="#">' + arr[i] + '</a>'
                }
                $('.allnav').html(str);

            });
        },
        fenxiang: function() {
            var x = document.getElementsByClassName("nav");
            var y = document.getElementsByClassName("share")[0];
            console.log(x);
            console.log(y);
            var line = document.getElementsByClassName("line")[0];
            var leftVal = 1;
            for (var i = 0; i < x.length; i++) {
                x[i].onclick = function() {
                    console.log($(this).index());
                    startmove(line, "left", 150 + $(this).index() * 150);
                }
            };
            y.onclick = function() {
                startmove(this, 'width', 200, function() {
                    startmove(y, 'height', 200, function() {});
                    $(y).append('<span class="close">X</span>');
                    $('.close').click(function(e) {
                        e.stopPropagation();
                        startmove(y, 'height', 50, function() {
                            startmove(y, 'width', 50);
                            $('.close').remove();
                        });

                    })
                })
            };
        }
    };
    ooo.init();
})
