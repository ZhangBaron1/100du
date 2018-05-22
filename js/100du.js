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

  // 精彩推荐 图片切换
  (function(){
    var pic_B = $("#PicREC .big_pic li");
    var pic_S = $("#PicREC .small_pic li");
    var pic_P = $("#PicREC p");
    var time = null;
    var iNow = 0;
    var pTxt = [
        '爸爸去哪儿啦',
        '人像摄影中的光感摄影',
        '娇柔妩媚、美艳大方'];
        fnFade();

        pic_S.click(function(){
            iNow = $(this).index();
            fnFade();
        })

        $("#PicREC").hover(function(){
            clearInterval(time); },function(){autoPlay();}) 

       function autoPlay(){
            time = setInterval(function(){
                iNow++;
                iNow %= pTxt.length;
                fnFade();
            },3000);
       }

       autoPlay();
       function fnFade(){
            pic_B.each(function(i){
                if(i != iNow){
                    pic_B.eq(i).fadeOut().css('ZIndex',1);
                    pic_S.eq(i).removeClass('active');
                }
                else{
                    pic_B.eq(i).fadeIn().css('ZIndex',2);
                    pic_S.eq(i).addClass('active');
                    pic_P.text(pTxt[i]);
                }
            })
       }
       


  })();

});