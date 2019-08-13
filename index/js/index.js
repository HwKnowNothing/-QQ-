/*代码几乎都是复用的，没有做封装，封装后能剩下很多篇幅*/
$(function () {
    /*公共*/
    $('.title-nav a').click(function (event) {
        $('.title-nav a').removeClass('color-2CAF6E');
        $(event.target).addClass('color-2CAF6E');
        event.preventDefault();
    });
    //点击小圆点切换
    $('.point span').click(function (event) {
        $('.point span').removeClass('point-active');
        $(event.target).addClass('point-active');
        $result = $('.point').find('span');
        //console.log($result[0]);
        if(event.target == $result[0]){
            $('.slider1').animate({
                left:'0px'
            },'slow')
        }
        if(event.target == $result[1]){
            $('.slider1').animate({
                left:'-1220px'
            },'slow')
        }
    });
    /*头部*/
    /*点击input 出现历史搜索框*/
    $(".search_box input").click(function (event) {
        $('.history_search').slideDown('fast');
        //console.log($('.history_search').css('display'));
        event.stopPropagation();
    });
    /*点击非历史搜索框时，收起历史搜索框*/
    $('body:not(".history_search")').click(function (event) {
        //console.log(event.target);
        if(!$(event.target).hasClass('a') ){
            $('.history_search').slideUp('fast');
        }
    });
    //头部导航点击后的样式切换
    $('.top_nav li:first a').addClass('active').removeClass('hover');
    $('.top_nav li a').click(function (event) {
        $('.top_nav li a').removeClass('active').addClass('hover');
        $(event.target).addClass('active').removeClass('hover');
        //清除点击a标签后的默认行为（跳转）
        event.preventDefault();
        //console.log(event.target);
    });
    //header下部分导航点击后的样式切换
    $('.hb-nav a').click(function (event) {
        $('.hb-nav a').removeClass('color-2CAF6E');
        $(event.target).addClass('color-2CAF6E');
        event.preventDefault();
    });
    /*歌单推荐*/
    //鼠标移入时的灰色cover
    $('.slider-box').mouseenter(function (event) {
        //console.log(event.target);
        //$(event.target).fadeTo('slow',0.3);
        if($(event.target).hasClass('mask')){
            $(event.target).fadeTo('slow',0.3);
        }
    });
    $('.slider-box').mouseleave(function (event) {
        //console.log(event.target);
        //$(event.target).fadeTo('slow',0);
        if($(event.target).hasClass('mask')){
            $(event.target).fadeTo('slow',0);
        }
    });
    //翻页的显示和隐藏
    $('.songSheet').mouseenter(function () {
        /*$('.slider-pre,.slider-next').fadeTo('slow',1);*/
        $('.slider-pre').animate({
            left:'0px',
            opacity:1
        },'slow');
        $('.slider-next').animate({
            right:'0px',
            opacity:1
        },'slow');
    });
    $('.songSheet').mouseleave(function () {
        $('.slider-pre').animate({
            left:'-80px',
            opacity:0
        },'slow');
        $('.slider-next').animate({
            right:'-80px',
            opacity:0
        },'slow');
    });
    //翻页
    $('.slider-pre').mouseenter(function () {
        console.log($('.slider-1').css('left'));
        if($('.slider-1').css('left') == '-2440px'){
            $('.slider-1').animate({
                left:'0px'
            },0);
            $('.slider-2').animate({
                left:'0px'
            },0);
            $('.slider-3').animate({
                left:'0px'
            },0);
        }
    });
    $('.slider-pre').click(function () {
        $('.slider-1').animate({
            left:'-=1220px'
        },'slow', function () {
            /*
            * 回调，html中将1-5张再放置最后，当1-5的left值为-2440px时，
            * 将3个div恢复最初的样子，这样就看不出来有位置的突变
            * */
            console.log($('.slider-1').css('left'));
            if($('.slider-1').css('left') == '-2440px'){
                $('.slider-1').animate({
                    left:'0px'
                },0);
                $('.slider-2').animate({
                    left:'0px'
                },0);
                $('.slider-3').animate({
                    left:'0px'
                },0);
            }
        });
        $('.slider-2').animate({
            left:'-=1220px'
        },'slow');
        $('.slider-3').animate({
            left:'-=1220px'
        },'slow');
        /*
        * 点击上一页下一页时小圆点切换未完成
        * */
    });
    $('.slider-next').mouseenter(function () {
        /*
        * 鼠标移入时判断，slider-1是否是初始位置，如果是则将3个slider都左移2440px
        * 这样点击下一个时，就能实现slider向右移动
        * */
        console.log($('.slider-1').css('left'));
       if($('.slider-1').css('left') == '0px'){
           $('.slider-1').animate({
               left:'-2440px'
           },0);
           $('.slider-2').animate({
               left:'-2440px'
           },0);
           $('.slider-3').animate({
               left:'-2440px'
           },0);
       }
    });
    $('.slider-next').click(function () {
        $('.slider-1').animate({
            left:'+=1220px'
        },'slow', function () {
            /*
            * 点击移动后判断slider-1是否回到初始状态，如果是将3个slider再左移2440px，就
            * 能实现一直点击都能右移
            * */
            console.log($('.slider-1').css('left'));
            if($('.slider-1').css('left') == '0px'){
                $('.slider-1').animate({
                    left:'-2440px'
                },0);
                $('.slider-2').animate({
                    left:'-2440px'
                },0);
                $('.slider-3').animate({
                    left:'-2440px'
                },0);
            }
        });
        $('.slider-2').animate({
            left:'+=1220px'
        },'slow');
        $('.slider-3').animate({
            left:'+=1220px'
        },'slow');
    });
    /*新歌首发*/
    $('.newSong').mouseenter(function () {
        //console.log(111);
        /*$('.slider-pre,.slider-next').fadeTo('slow',1);*/
        $('.slider-pre1').animate({
            left:'0px',
            opacity:1
        },'slow');
        $('.slider-next1').animate({
            right:'0px',
            opacity:1
        },'slow');
    });
    $('.newSong').mouseleave(function () {
        $('.slider-pre1').animate({
            left:'-80px',
            opacity:0
        },'slow');
        $('.slider-next1').animate({
            right:'-80px',
            opacity:0
        },'slow');
    });

    $('.slider-pre1').mouseenter(function () {
        console.log($('.slider1-1').css('left'));
        if($('.slider1-1').css('left') == '-2480px'){
            $('.slider1-1').animate({
                left:'0px'
            },0);
            $('.slider1-2').animate({
                left:'0px'
            },0);
            $('.slider1-3').animate({
                left:'0px'
            },0);
        }
    });
    $('.slider-pre1').click(function () {
        $('.slider1-1').animate({
            left:'-=1240px'
        },'slow', function () {
            console.log($('.slider1-1').css('left'));
            if($('.slider1-1').css('left') == '-2480px'){
                $('.slider1-1').animate({
                    left:'0px'
                },0);
                $('.slider1-2').animate({
                    left:'0px'
                },0);
                $('.slider1-3').animate({
                    left:'0px'
                },0);
            }
        });
        $('.slider1-2').animate({
            left:'-=1240px'
        },'slow');
        $('.slider1-3').animate({
            left:'-=1240px'
        },'slow');
    });
    $('.slider-next1').mouseenter(function () {
        console.log($('.slider1-1').css('left'));
        if($('.slider1-1').css('left') == '0px'){
            $('.slider1-1').animate({
                left:'-2480px'
            },0);
            $('.slider1-2').animate({
                left:'-2480px'
            },0);
            $('.slider1-3').animate({
                left:'-2480px'
            },0);
        }
    });
    $('.slider-next1').click(function () {
        $('.slider1-1').animate({
            left:'+=1240px'
        },'slow', function () {
            console.log($('.slider1-1').css('left'));
            if($('.slider1-1').css('left') == '0px'){
                $('.slider1-1').animate({
                    left:'-2480px'
                },0);
                $('.slider1-2').animate({
                    left:'-2480px'
                },0);
                $('.slider1-3').animate({
                    left:'-2480px'
                },0);
            }
        });
        $('.slider1-2').animate({
            left:'+=1240px'
        },'slow');
        $('.slider1-3').animate({
            left:'+=1240px'
        },'slow');
    });

    /*精彩推荐*/
    $('.recommend').mouseenter(function () {
        $('.slider-pre2').animate({
            left:'0px',
            opacity:1
        },'slow');
        $('.slider-next2').animate({
            right:'0px',
            opacity:1
        },'slow');
    });
    $('.recommend').mouseleave(function () {
        $('.slider-pre2').animate({
            left:'-80px',
            opacity:0
        },'slow');
        $('.slider-next2').animate({
            right:'-80px',
            opacity:0
        },'slow');
    });


    $('.slider-pre2').mouseenter(function () {
        console.log($('.slider2-1').css('left'));
        if($('.slider2-1').css('left') == '-2440px'){
            $('.slider2-1').animate({
                left:'0px'
            },0);
            $('.slider2-2').animate({
                left:'0px'
            },0);
            $('.slider2-3').animate({
                left:'0px'
            },0);
        }
    });
    $('.slider-pre2').click(function () {
        $('.slider2-1').animate({
            left:'-=1220px'
        },'slow', function () {
            console.log($('.slider2-1').css('left'));
            if($('.slider2-1').css('left') == '-2440px'){
                $('.slider2-1').animate({
                    left:'0px'
                },0);
                $('.slider2-2').animate({
                    left:'0px'
                },0);
                $('.slider2-3').animate({
                    left:'0px'
                },0);
            }
        });
        $('.slider2-2').animate({
            left:'-=1220px'
        },'slow');
        $('.slider2-3').animate({
            left:'-=1220px'
        },'slow');
    });
    $('.slider-next2').mouseenter(function () {
        console.log($('.slider2-1').css('left'));
        if($('.slider2-1').css('left') == '0px'){
            $('.slider2-1').animate({
                left:'-2440px'
            },0);
            $('.slider2-2').animate({
                left:'-2440px'
            },0);
            $('.slider2-3').animate({
                left:'-2440px'
            },0);
        }
    });
    $('.slider-next2').click(function () {
        $('.slider2-1').animate({
            left:'+=1220px'
        },'slow', function () {
            console.log($('.slider2-1').css('left'));
            if($('.slider2-1').css('left') == '0px'){
                $('.slider2-1').animate({
                    left:'-2440px'
                },0);
                $('.slider2-2').animate({
                    left:'-2440px'
                },0);
                $('.slider2-3').animate({
                    left:'-2440px'
                },0);
            }
        });
        $('.slider2-2').animate({
            left:'+=1220px'
        },'slow');
        $('.slider2-3').animate({
            left:'+=1220px'
        },'slow');
    });

    /*MV*/
    $('.mv').mouseenter(function () {
        $('.slider-pre3').animate({
            left:'0px',
            opacity:1
        },'slow');
        $('.slider-next3').animate({
            right:'0px',
            opacity:1
        },'slow');
    });
    $('.mv').mouseleave(function () {
        $('.slider-pre3').animate({
            left:'-80px',
            opacity:0
        },'slow');
        $('.slider-next3').animate({
            right:'-80px',
            opacity:0
        },'slow');
    });

    $('.slider-pre3').mouseenter(function () {
        console.log($('.slider3-1').css('left'));
        if($('.slider3-1').css('left') == '-2440px'){
            $('.slider3-1').animate({
                left:'0px'
            },0);
            $('.slider3-2').animate({
                left:'0px'
            },0);
            $('.slider3-3').animate({
                left:'0px'
            },0);
        }
    });
    $('.slider-pre3').click(function () {
        $('.slider3-1').animate({
            left:'-=1220px'
        },'slow', function () {
            console.log($('.slider3-1').css('left'));
            if($('.slider3-1').css('left') == '-2440px'){
                $('.slider3-1').animate({
                    left:'0px'
                },0);
                $('.slider3-2').animate({
                    left:'0px'
                },0);
                $('.slider3-3').animate({
                    left:'0px'
                },0);
            }
        });
        $('.slider3-2').animate({
            left:'-=1220px'
        },'slow');
        $('.slider3-3').animate({
            left:'-=1220px'
        },'slow');
    });
    $('.slider-next3').mouseenter(function () {
        console.log($('.slider3-1').css('left'));
        if($('.slider3-1').css('left') == '0px'){
            $('.slider3-1').animate({
                left:'-2440px'
            },0);
            $('.slider3-2').animate({
                left:'-2440px'
            },0);
            $('.slider3-3').animate({
                left:'-2440px'
            },0);
        }
    });
    $('.slider-next3').click(function () {
        $('.slider3-1').animate({
            left:'+=1220px'
        },'slow', function () {
            console.log($('.slider3-1').css('left'));
            if($('.slider3-1').css('left') == '0px'){
                $('.slider3-1').animate({
                    left:'-2440px'
                },0);
                $('.slider3-2').animate({
                    left:'-2440px'
                },0);
                $('.slider3-3').animate({
                    left:'-2440px'
                },0);
            }
        });
        $('.slider3-2').animate({
            left:'+=1220px'
        },'slow');
        $('.slider3-3').animate({
            left:'+=1220px'
        },'slow');
    });

    /*脚步*/
    $('.footer li').mouseenter(function (event) {
        console.log($(event.target.parentNode))
    })
});
