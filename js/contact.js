$(function(){
    
    setInterval(function(){
      $(".blinkle").toggle();
    }, 2500);
    
    //버거 메뉴 js--------------------------//
    //별 세개 누르면 메뉴 오픈 
    $('.menu a').click(function(){
        $('#menu-div').css({
            top:0
        });
    });
    
    //엑스버튼 누르면 메뉴 닫힘
    $('#menu-div button').click(function(){
       $('#menu-div').css({
           top:'-100vh'
       });
    });
    //-------------------------------------//
})
