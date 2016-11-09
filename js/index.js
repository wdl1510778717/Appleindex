$(function(){
    var close=$('.close');
    var open=$('.searcher');
    // 大屏
    $(open).click(function(){
        $('.search-box').css({
            display:'block'
        })
        setTimeout(function(){
            $('.sy a:nth-child(1)').addClass('hot')
            $('.sy a:nth-child(2)').addClass('hot')
            $('.sy a:nth-child(3)').addClass('hot')
            $('.sy a:nth-child(4)').addClass('hot')
        })
        $('.nav li').not($('.logo')).css({
            display:'none'
        })
        $(close).css({
            display:'block'
        })
        $(document.body).css({
            background:'#eee'
        })
    })
    $(close).click(function(){
        $('.search-box').css({
            display:'none'
        })
        $('.nav li').css({
            display:'inline-block'
        })
        $(this).css({
            display:'none'
        })
            $('.sy a:nth-child(1)').removeClass('hot')
            $('.sy a:nth-child(2)').removeClass('hot')
            $('.sy a:nth-child(3)').removeClass('hot')
            $('.sy a:nth-child(4)').removeClass('hot')
    })

    // 小屏
    $('.mini').click(function(){
        var ht=$(window).height();
        $(".mini span:nth-child(1)").toggleClass('active')
        $(".mini span:nth-child(2)").toggleClass('active1')
        $('.min-nav .goshop').toggleClass('nav-syn')
        setTimeout(function(){
            var h=$(window).height();

            $('.nav-sy').toggleClass('nav-syh')
            $('.nav-sy').height(h)
            $('body').height(h).css('overflow','hiddenx')
            setTimeout(function(){
                $('.nav-sy li:nth-child(1)').toggleClass('hot')
                $('.nav-sy li:nth-child(2)').toggleClass('hot')
                $('.nav-sy li:nth-child(3)').toggleClass('hot')
                $('.nav-sy li:nth-child(4)').toggleClass('hot')
                $('.nav-sy li:nth-child(5)').toggleClass('hot')
                $('.nav-sy li:nth-child(6)').toggleClass('hot')
                $('.nav-sy li:nth-child(7)').toggleClass('hot')
            })
        })
    })



    //banner
    var tu=$('.banner-box li');
    var btns=$('.btns a');

    // 轮播
    var t=setInterval(move,2500);
    var i=-1;
    btns.eq(0).css('opacity','1');
    function move(){
        var x=tu.width();
        i++;
        if (i==tu.length) {
            i=0;
        };
        tu.css({'zIndex':'3'}).eq(i).css('zIndex','4').animate({width:x},2000);
        btns.css('opacity','0.5').eq(i).css('opacity','1');
    }



    // footer
    var f_nav=$('.tit');
    var f_list=$('.xx1');
    f_nav.click(function(){
        var i=f_nav.index(this);
        f_list.eq(i).toggleClass('has');

    })
    
})