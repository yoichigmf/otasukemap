$(function(){
			//時間は、1/1000秒で設定
			var start = 0;	//スタートアップのフェードイン（しないならゼロを代入）
			var fadeoutSP	= new Array(1000,1000,1000,1000,1000,1000,1000);	//フェードアウトのスピード（1枚目,2枚目,3枚目,4枚目）
			var fadeinSP	= new Array(1000,1000,1000,1000,1000,1000,1000);	//フェードインのスピード（1枚目,2枚目,3枚目,4枚目）
			var dispTM	= new Array(2000,2000,2000,2000,2000,2000,4000);	//表示時間（1枚目,2枚目,3枚目,4枚目）
			
			
			//　【シーン1】ページ読み込み直後に表示する最初の画像
			$(window).load(function() {
				$('#slide img').css({opacity:'0'});
				$('#slide img#pic1').stop().animate({opacity:'1'},start);
				setTimeout(function(){scene2();},dispTM[0]);
			});
			
			//　【シーン1】ループ後に表示される最初の画像
			function scene1() {
				$('#slide img#pic7').stop().animate({opacity:'0'},fadeoutSP[0]);
				$('#slide img#pic1').stop().animate({opacity:'1'},fadeinSP[0]);
				setTimeout(function(){scene2();},dispTM[0]);
			};
			
			//　【シーン2】2番目に表示される画像
			function scene2() {
				$('#slide img#pic1').stop().animate({opacity:'0'},fadeoutSP[1]);
				$('#slide img#pic2').stop().animate({opacity:'1'},fadeinSP[1]);
				setTimeout(function(){scene3();},dispTM[1]);
			};
			
			//　【シーン3】
			function scene3() {
				$('#slide img#pic2').stop().animate({opacity:'0'},fadeoutSP[2]);
				$('#slide img#pic3').stop().animate({opacity:'1'},fadeinSP[2]);
				setTimeout(function(){scene4();},dispTM[2]);
			};
			
			//　【シーン4】
			function scene4() {
				$('#slide img#pic3').stop().animate({opacity:'0'},fadeoutSP[3]);
				$('#slide img#pic4').stop().animate({opacity:'1'},fadeinSP[3]);
				setTimeout(function(){scene5();},dispTM[3]);
			};

			//　【シーン5】
			function scene5() {
				$('#slide img#pic4').stop().animate({opacity:'0'},fadeoutSP[4]);
				$('#slide img#pic5').stop().animate({opacity:'1'},fadeinSP[4]);
				setTimeout(function(){scene6();},dispTM[4]);
			};

			//　【シーン6】
			function scene6() {
				$('#slide img#pic5').stop().animate({opacity:'0'},fadeoutSP[5]);
				$('#slide img#pic6').stop().animate({opacity:'1'},fadeinSP[5]);
				setTimeout(function(){scene7();},dispTM[5]);
			};

			//　【シーン7】最後に表示される画像
			function scene7() {
				$('#slide img#pic6').stop().animate({opacity:'0'},fadeoutSP[6]);
				$('#slide img#pic7').stop().animate({opacity:'1'},fadeinSP[6]);
				setTimeout(function(){scene1();},dispTM[6]);
			};
			
		});