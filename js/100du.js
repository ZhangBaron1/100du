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
       var oText = $(".form").find(".text");
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

});