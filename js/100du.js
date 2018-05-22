$(function(){
  // 搜索切换
   (function(){
       var aTxt = [
           '例如：荷棠鱼坊烤鱼 或 樱花日本料理',
           '你去哪里啊，输入你要找的地址...',
           '这里搜搜看有没有你要找的优惠券',
           '浏览全文。。。。阿斯顿噶哒打',
           '看看视频吧。。。',
       ];
       var oText = $("#search_txt").find(".text");
       var iNow = 0;
       oText.val(aTxt[iNow]);
       var aLi = $("#menu li");
       aLi.each(function( index ){
           $(this).click(function(){
             iNow = index;
             aLi.attr('class','gradient');
             $(this).attr('class','active');
             oText.val(aTxt[iNow]);
           });
       });

       oText.focus(function(){
        if(oText.val() == aTxt[iNow])
        {
            oText.val('');
        }
       });
       oText.blur(function(){
        if(oText.val() == '')
        {
            oText.val(aTxt[iNow]);
        }
       });
   })();

  // 搜素 update
   (function(){
      var ud_ul = $(".update ul");
      var oDiv = $(".update");
      var li_length = ud_ul.find('li').length;
      var iH =  ud_ul.find('li').height();  
      var iNow = 0;
      var time = null;

          //console.log(li_length);
          //console.log(iH);
      
          $("#updateUpBtn").click(function(){
            doMove(-1);
          });
          $("#updateDownBtn").click(function(){
            doMove(1);
          });

          function autoPlay(){
            time = setInterval(function(){
                scroll(-1)
            },1500);
          }

          autoPlay();

          function doMove(direction){
            iNow += direction;
            
            if(Math.abs(iNow) >= li_length )
            {
                for(var num = 0; num < li_length-1; num++ )
                {
                  ud_ul.find("li:eq(0)").appendTo(ud_ul);
                }
                 ud_ul.css({'top':0});
                 iNow = -1;
            }
            if(iNow > 0)
            {
               for(var num = 0; num < li_length-1; num++ )
                {
                  ud_ul.find("li:last").prependTo(ud_ul);
                }   
               console.log(ud_ul.html());
               console.log(-iH);
                 ud_ul.css({'top':-iH*(li_length-1)});
                iNow = -(li_length-2);
            }
               console.log(iNow);
            ud_ul.stop().animate({'top':iH*iNow},1000,);
            
          }

          function scroll(direction){
            iNow += direction;
            if(Math.abs(iNow) >= li_length)
            {
               for(var num = 0; num < li_length-1; num++ )
               {
                 ud_ul.find("li:eq(0)").appendTo(ud_ul);
               }
                ud_ul.css({'top':0});
                iNow = -1;
            }
            ud_ul.stop().animate({'top':iH*iNow},1000);
          }

          oDiv.hover(function(){
            clearInterval(time); },function(){autoPlay();}) 
          
   })(); 

  //BBS 论坛
  (function(){
      var bbs = $("#BBS_ID li");
        bbs.each(function(){
            $(this).mouseover(function(){
                bbs.attr('class','');
                $(this).attr('class','active');
            })
       }) 
  })();  
});