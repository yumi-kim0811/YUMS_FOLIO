$(function(){
    //start
    
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
    
    //blinkle 깜빡깜빡 텍스트
    setInterval(function(){
      $(".blinkle").toggle().show();
    }, 2500);
    
    
    // work-list 오른쪽 메뉴들
    $('.UI-UXbtn').eq(0).show();
    $('.list > a').on('click',function(e){
        e.preventDefault();
        $('.list div').stop().slideUp();
        $(this).next('div').stop().slideDown();
    });
    
    var blen = true;
    var wIdx;
    $('.work-left div').eq(0).addClass('active');
    $('.UI-UXbtn a').on({
        click:function(e){
            wIdx = $(this).index();
            workList(wIdx);
        }
    });
    $('.list div a p span').click(function(e){
            e.preventDefault();
            location.href = 'ViewDetail-WorkList.html#'+wIdx;
    })
    
    function workList(wIdx){
        if(blen){
            blen = false;
            $('.work-left div').eq(wIdx).css({zIndex:2});
            $('.work-left div').eq(wIdx).addClass('active');
            $('.work-left div').not(':eq('+wIdx+')').css({zIndex:1});
            
            $('.UI-UXbtn a strong').removeClass('active');
            $('.UI-UXbtn a strong').eq(wIdx).addClass('active');
            
            $('.UI-UXbtn a').removeClass('active');
            $('.UI-UXbtn a').eq(wIdx).addClass('active');
            
            $('.UI-UXbtn a').find('p span').css({opacity:0});
            $('.UI-UXbtn a').eq(wIdx).find('p span').css({opacity:1});
            
            setTimeout(function(){            
                $('.work-left div').not(':eq('+wIdx+')').removeClass('active');
                blen=true;
            },250);
        }
    }
    
    $('.ani').click(function(){
       $('.UI-UX b').css({
           opacity:.25
       });
       $('.ani b').css({
           opacity:1
       });
    });
    $('.UI-UX').click(function(){
       $('.ani b').css({
           opacity:.25
       });
       $('.UI-UX b').css({
           opacity:1
       });
    });
    
    
    function detail(){
        $.ajax({
            url:'../js/data.json',
            type:'get',
            dataType:'json',
            success:function(data){
                //data.work[0][0]
                var pNum = location.hash.split('#')[1];
                console.log(pNum)
                dataChange(data,pNum);
            }
        })
    }
    detail();
    
    function dataChange(d, k){
        var content = '';
        content = "<div class='bg'><img src='"+d.work[k][0]+"'></div>";
        content += "<div class='img-product'><img src='"+d.work[k][1]+"'><a href='#' style=background:"+d.work[k][3]+">"+d.work[k][2]+"</a></div>";
        content += "<div class='project-txt'>";
        content += "<em>project #"+(parseInt(k)+1)+"</em>";
        content += "<strong>"+d.work[k][2]+" <a class='left-arrow' href='#'>＜</a> <a class='right-arrow' href='#'>＞</a></strong> ";
        content += "<p>"+d.work[k][4]+"</p></div>";
        content += "<div class='detail-project' style=background:"+d.work[k][5]+">";
        content += "<strong>HOW DID IT CHANGE ? <img src='../img/icon/changeicon-wh.png'></strong>";
        content += "<div class='left'><p>BEFORE</p><img src='"+d.work[k][6]+"'></div>";
        content += "<div class='right'><p>AFTER</p><img src='"+d.work[k][7]+"'></div></div>";
        
        $('#content-worklist').html(content);
        
        $('.left-arrow').on('click',function(e){
            e.preventDefault();
            if(k != 0){
                var pageNum = parseInt(k)-1;
                location.href = 'ViewDetail-WorkList.html#'+pageNum;
                location.reload();
            }
        });
        
        $('.right-arrow').on('click',function(e){
            e.preventDefault();
            
            if(d.work.length-1 != k){
                var pageNum = parseInt(k)+1;
                location.href = 'ViewDetail-WorkList.html#'+pageNum;
                location.reload();
            }
            
        });
    }
    
    

    
    //end
})






