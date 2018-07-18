$(function(){
  // 城市切换
   (function(){
    var city = $('#header .city a');
        city.each(function(){
            city.click(function(){
                $(city).removeClass('active');
                $(this).addClass('active');
            })
        })
   })();

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
       oText.attr('placeholder',aTxt[iNow]);
       var aLi = $("#menu li");
       aLi.each(function( index ){
           $(this).click(function(){
             if(iNow != index)
               oText.val('');
             iNow = index;
             aLi.attr('class','gradient');
             $(this).attr('class','active');
             oText.attr('placeholder',aTxt[iNow]);
           });
       });

       oText.focus(function(){
        if(oText.attr('placeholder') == aTxt[iNow])
        {
          oText.attr('placeholder','');
        }
       });
       oText.blur(function(){
        if(oText.attr('placeholder') == '')
        {
          oText.attr('placeholder',aTxt[iNow]);
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
                 ud_ul.css({'top':-iH*(li_length-1)});
                iNow = -(li_length-2);
            }
            ud_ul.stop().animate({'top':iH*iNow},1000);

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

  // option 选项卡切换
   (function(){
       fnTab($('.tabNav1'),$('.tabCon1'));
       fnTab($('.tabNav2'),$('.tabCon2'));
       fnTab($('.tabNav3'),$('.tabCon3'));
       fnTab($('.tabNav4'),$('.tabCon4'));

       function fnTab(oNav,aCon){
            var aElem = oNav.children();
            aCon.hide().eq(0).show();
            aElem.each(function(i){
                $(this).click(function(){
                    if(aElem.hasClass("gradient")){
                        aElem.removeClass('active').addClass('gradient');
                        $(this).removeClass('gradient').addClass('active');
                    }
                    else{
                        aElem.removeClass('active');
                        $(this).addClass('active');
                    }
                    aElem.find('a').attr('class','triangle_down_gray');
                    $(this).find('a').attr('class','triangle_down_red');
                    aCon.hide().eq(i).show();
                })
            })
       }
   })();

   //日历 信息
   (function(){
     var cLi = $('.calendar li');
     var day = $('.calendar h3').find('span');
     var img = $('.calendar li').find('img');
     var info = $('.today_info');
     var info_txt = $('.today_info p');
     var info_day = $('.today_info strong');
     var info_img = $('.today_info img');

     cLi.each(function(){
         img.hover(function(){
            var tp = $(this).parent().position().top-30;
            var lft = $(this).parent().position().left+50;
            info.css({'left':lft,'top':tp});
            var iday = $(this).parent().index()%day.size();
            info_day.text(day.eq(iday).text());
            info_img.attr("src",$(this).attr("src"));
            info_txt.text($(this).attr("info"));
            info.show();
         },function(){
            info.hide();
         });
     })
   })();

   //hot
   (function(){
       var hLi = $('.hot_pic li');
       var pTxt = [
           '',
           '区域：长沙 <br/>人气：1232',
           '用户名：性感宝贝<br/>区域：朝阳CBD<br/>人气：12321',
           '区域：长沙 <br/>人气：1232',
           '区域: 北京 <br/>人气：1832',
           '区域：上海 <br/>人气：1232',
           '区域：长沙 <br/>人气：1232',
           '区域：长沙 <br/>人气：1232',
           '区域：广州 <br/>人气：5232',
           '区域：长沙 <br/>人气：7232',
           '区域：深圳 <br/>人气：1832',
           '区域：长沙 <br/>人气：1932'
            ]
           hLi.hover(function(){
            if($(this).index() == 0 )  return;
            hLi.find('p').remove();
            var iW = $(this).width()-12;
            var iH = $(this).height()-12;
            $(this).append('<p style="width:'+iW+'px; height:'+iH+'px;">'+pTxt[$(this).index()]+'</p>');
           })
   })();

});
