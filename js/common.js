/* ===================================================================

 * ページトップへの戻り

=================================================================== */


function browserSupportsWebGL() {
var canvas = document.getElementById('gltest');
var context = null;var names = ["webgl", "experimental-webgl", "webkit-3d", "moz-webgl"];
for (var i = 0; i < names.length; ++i) {
try { context = canvas.getContext(names[i]); }
catch(e) {}
if (context) { break; }
}
return context != null;
};


function show() {
alert ('WebGL '+(browserSupportsWebGL()?'':'not ')+'supported');
}



/* ===================================================================

 * コンテンツの高さを揃える

=================================================================== */
$.fn.uniformHeight = function() {
    var maxHeight = 0;
    this.each(function() {
        var thisHeight = $(this).height();
        if(thisHeight > maxHeight){
            maxHeight = thisHeight;
        }
    });
    $(this).height(maxHeight);
};

/* ===================================================================

 * スムーススクロール

=================================================================== */
$(function(){
   // #で始まるアンカーをクリックした場合に処理
   $('a[href^=#]').click(function() {
      // スクロールの速度
      var speed = 400;// ミリ秒
      // アンカーの値取得
      var href= $(this).attr("href");
      // 移動先を取得
      var target = $(href == "#" || href == "" ? 'html' : href);
      // 移動先を数値で取得
      var position = target.offset().top;
      // スムーススクロール
      $($.browser.safari ? 'body' : 'html').animate({scrollTop:position}, speed, 'swing');
      return false;
   });
});