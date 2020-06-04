$(function(){
    //start
    
    $('.list div').eq(0).show();
    $('.list > a').on('click',function(e){
        e.preventDefault();
        $('.list div').stop().slideUp();
       $(this).next('div').stop().slideDown();
    });
    
    var blen = true;
    var wIdx;
    $('.work-left div').eq(0).addClass('active');
    $('.list div a').on({
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
            $('.UI-UXbtn a').find('p span').css({
                opacity:0
            });
            $('.UI-UXbtn a').eq(wIdx).find('p span').css({
                opacity:1
            });
            $('.UI-UXbtn a').find('p strong').css({
                borderBottom:0
            });
            $('.UI-UXbtn a').eq(wIdx).find('p strong').css({
                borderBottom:"3px solid rgba(225,225,225,0.5)"
            });
            
            setTimeout(function(){            
                $('.work-left div').not(':eq('+wIdx+')').removeClass('active');
                blen=true;
            },250);
        }
    }
    
    
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






