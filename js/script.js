$(document).ready(function(){



    $('.pop .black_bg, .pop .close_btn, .pop .p_btn, .pop .btn1').click(function(){



        if($('.pop').hasClass('go_index')){

            location.href='index.html';



        }else if($('.pop').hasClass('go_login')){

            location.href='login.html';



        }else if($('.pop').hasClass('go_inqlist')){

            location.href='inquiry_list.html';



        }else{

            $('.pop').removeClass('on');

        }

    });



    $('.pop2 .btn1').click(function(){

        $('.pop2').removeClass('on');

    });





    var p1 = $('.pop1');

    var p1_h1 = $('.pop1 .p_h1');

    var p1_sub = $('.pop1 .p_sub');

    var p1_btn = $('.pop1 .p_btn');



    var p2 = $('.pop2');

    var p2_h1 = $('.pop2 .p_h1');

    var p2_sub = $('.pop2 .p_sub');

    var p2_btn2 = $('.pop2 .btn2');



    //로그인 login.html

    $('#login .btn_common').click(function(){

        if($(this).hasClass('blue')){ //로그인

            var id = $('#login #user_id').val();

            var pw = $('#login #user_pw').val();



            if(!id){

                p1.addClass('on');

                p1_h1.text('로그인 실패');

                p1_sub.text('아이디를 입력해주세요.');



            }else if(!pw){

                p1.addClass('on');

                p1_h1.text('로그인 실패');

                p1_sub.text('비밀번호를 입력해주세요.');



            }



            // else if (아이디/비번 일치하지 않을때) { 

                // p1.addClass('on');

                // p1_h1.text('로그인 실패');

                // p1_sub.text('아이디 또는 비밀번호가 일치하지 않습니다.');



            // }



            else {

                p1.addClass('on');

                p1.addClass('go_index');

                p1_h1.text('로그인 성공');

                p1_sub.text('로그인에 성공하였습니다.');

            }



        }else if($(this).hasClass('white')){ //회원가입

            location.href='join.html';

        }

    });





    //join.html

    $('#join1 #all_ck').change(function(){

        if($(this).is(":checked")){

            $('#join1 .term').prop("checked", true);



        }else{

            $('#join1 .term').prop("checked", false);

        }

    });

    $('#join1 .term').change(function(){

        var length = $('#join1 .term').length;

        var ck_length = $('#join1 .term:checked').length;



        if(length == ck_length) {

            $('#join1 #all_ck').prop("checked", true);

        }else{

            $('#join1 #all_ck').prop("checked", false);

        }

    });





    $('.pw_btn').each(function(data,index){

        $('.pw_btn').data("willShow", true);

    });

    $('.pw_btn').click(function(){

        if($(this).data("willShow")){

            $(this).children("img").removeClass('on');

            $(this).children(".hide").addClass('on');

            $(this).prev(".input").attr("type", "text");

            $(this).data("willShow", false);



        }else{

            $(this).children("img").removeClass('on');

            $(this).children(".show").addClass('on');

            $(this).prev(".input").attr("type", "password");

            $(this).data("willShow", true);

        }

    });



    $('.btn_half.btn1').click(function(){

        history.go(-1);

    });





    // 개룡의 1분 미리보기

    var swiper = new Swiper(".pre_swiper", {

        slidesPerView : 1,

        spaceBetween : 10,

        centeredSlides: true,

        loop: true, 

        autoplay: {

            delay: 5000,

            disableOnInteraction: true,

        },


        mousewheel: false,

        keyboard:false,

        pagination: {

            el: ".swiper-pagination",

            clickable: true,

        },

    });



    // 신규 강의

    var swiper = new Swiper(".new_swiper", {

        slidesPerView : 2.6,

        spaceBetween : 10,

        loop: true, 

        autoplay: {

            delay: 5000,

            disableOnInteraction: true,

        },

        mousewheel: false,

        keyboard:false,

        pagination: {

            el: ".swiper-pagination",

            clickable: true,

        },

    });





    $('.sort_li').click(function(){

        $('.sort_li').removeClass('on');

        $(this).addClass('on');

    });





    // 햄버거메뉴

    

    var ham = $('.ham_menu .white_bg');

    var hamW = ham.innerWidth();



    var winH = $(window).innerHeight();

    var hamH = $('.h_top').innerHeight() + 2;

    var botH = $('.h_bottom').innerHeight();



    if((hamH + botH) > winH) {

        $('.h_bottom').removeClass('fix');

    }else{

        $('.h_bottom').addClass('fix');

    }





    ham.css({'left' : - hamW + 'px'});



    $('.hr_btn').click(function(){

        if($(this).hasClass('alarm')){

            location.href='alarm.html';


        }else if($(this).hasClass('ham')){

            $('.ham_menu').addClass('on');

            ham.stop().animate({'left' : '0'}, 300);



        }

    });



    $('.ham_menu .black_bg, .ham_menu .close_btn').click(function(){

        $('.ham_menu').removeClass('on');

        ham.css({'left' : - hamW + 'px'});

    });

    $('.ham_menu .go_set').click(function(){

        location.href='set.html';

    });





    //로그아웃

    $('.logout_btn').click(function(){

        $('.ham_menu').removeClass('on');



        p2.addClass('on');

        p2_h1.text("로그아웃");

        p2_sub.text("로그아웃 하시겠습니까?");

        p2_btn2.text("로그아웃");

    });





    p2_btn2.click(function(){

        var p_title = p2_h1.text();



        p2.removeClass('on');



        if(p_title == "로그아웃"){

            p1.addClass('on');

            p1.addClass('go_login');

            p1_h1.text('로그아웃');

            p1_sub.text('로그아웃이 완료되었습니다.');



        }

    });



    

    // 자주묻는질문

    $('.q_list .bot').slideUp(0);



    $('.q_list').each(function(data,index){

        $('.q_list').data("willOpen", true);

    });

    $('.q_list').click(function(){

        if($(this).data("willOpen")){

            $('.q_list').data("willOpen", true);

            $(this).data("willOpen", false);



            $('.q_list .bot').slideUp(300);

            $(this).children('.bot').slideDown(300);



            $('.q_list').removeClass('on');

            $(this).addClass('on');



        }else{

            $('.q_list').data("willOpen", true);

            $('.q_list .bot').slideUp(300);

            $('.q_list').removeClass('on');

        }

    });





    // 수강 중 강좌

    $('.tab_li').click(function(){

        $('.tab_li').removeClass('on');

        $(this).addClass('on');



        $('.class_wrap .class_a').removeClass('on');



        if($(this).hasClass('li1')){

            $('.class_wrap .class_a.ing').addClass('on');



        }else if($(this).hasClass('li2')){

            $('.class_wrap .class_a.end').addClass('on');

            $('.class_wrap .class_a.rev').addClass('on');

        }

    });



    $('.class_a.rev, .class_a.end').click(function(){

        return false;

    });



    $('.class_a .star').click(function(){

        if($(this).parents().parent('.class_a').hasClass('rev')){

            $(this).parents().children('.star').removeClass('on');

            $(this).addClass('on');
    
            $(this).prevAll().addClass('on');
    
    
    
            $(this).parent().next().find('.num').children('.click').text($(this).index()+1);
        }

    });



    $('.class_wrap .btn_common').click(function(){

        if($(this).find('.click').text() == "0"){

            p1.addClass('on');

            p1_h1.text('별점 선택');

            p1_sub.text('별점을 선택해주세요.');

        }else{
            if($(this).parents().parent('.class_a').hasClass('rev')){
                var num = $(this).find('.click').text();

                $(this).removeClass('white');
                $(this).addClass('readonly');
                $(this).parents('.rev_area').parent('.class_a').removeClass('rev');
                $(this).parents('.rev_area').parent('.class_a').addClass('end');
                $(this).text( num + " / 5");
            }
        }

    });





    var speedWrap = $('.video_area .sp_ul');

    var speedH = $('.video_area .sp_ul').innerHeight();



    speedWrap.css({'height' : '0'});



    $('.sp_btn').click(function(){

        speedWrap.addClass('on');

        speedWrap.stop().animate({'height' : speedH + 'px'}, 300);

        $('.sp_btn').text("")

    });



    $('.video_area .sp_li').click(function(){

        var speed = $(this).text();

        $('.sp_btn').text(speed);



        speedWrap.stop().animate({'height' : '0'}, 300, function(){

            speedWrap.removeClass('on');

        });

    })



});



function readURL(input) {

    if (input.files && input.files[0]) {

        var reader = new FileReader();

        reader.onload = function(e) {

        document.getElementById('preview').src = e.target.result;

        };

        reader.readAsDataURL(input.files[0]);

    } else {

        document.getElementById('preview').src = "";

    }



    $('#preview').removeClass('empty');

}

