$(function(){



$(".colorbox a").colorbox({iframe:true, width:800,height:500});


$('.folio').random('<img src="images/syabon.png">',{
	stageWidth: 800,
	stageHeight: 530,
	num: 13,
	width: 170,
	height: 170,
	min: 30
});



/*------------------
header
------------------*/
$(window).parallax({
	parallax : $('.flag2'),
	type : 'type2',
	style : 'top',
	fixPosition : 0,
	speed : -1.5,
	adjustment : Number($('.flag2').css('top').replace('px', '')),
	contentStartLinePercent: 50
});

$(window).parallax({
	parallax : $('.flag'),
	type : 'type2',
	style : 'top',
	fixPosition : 0,
	speed : -2,
	adjustment : Number($('.flag').css('top').replace('px', '')),
	contentStartLinePercent: 50
});


$(window).parallax({
	parallax : $('.sky'),
	type : 'type2',
	style : 'top',
	fixPosition : 0,
	speed : -4,
	adjustment : 0,
	contentStartLinePercent: 50
});
$(".introduce").mouseover(function(){
	var $this = $(this);
	
	$this.find('.chara').animate({
		top:"-60px"
	},100,"easeInOutCubic",function(){
	    $this.find('.chara').animate({
	    	top:"0"
	    },800,"easeOutBounce");	
	});
});

/*------------------
main
------------------*/
$('[class*=randomContent]').each(function(i){
	//スピードをランダムで指定
	//-2から2までの範囲のスピードを取得
	var randomSpeed = 10 + Math.random() * 2;
		randomSpeed = Math.floor(Math.random() * 2) === 0 ? -randomSpeed : randomSpeed;

	//プラグインを使った動きの設定
	$(window).parallax({
		parallax : $(this),
		type : 'type2',
		style : 'top',
		fixPosition : $('.folio').offset().top,
		speed : randomSpeed,
		adjustment : Number($(this).css('top').replace('px', ''))
	});
});
$(window).parallax({
	parallax : $('.folio'),
	type : 'type2',
	style : 'background-positionTop',
	fixPosition : $('.folio').offset().top,
	speed : -4,
	adjustment : 0,
});
$(window).parallax({
	parallax : $('.elephant'),
	type : 'type2',
	style : 'top',
	fixPosition : $('.folio').offset().top,
	speed : -4,
	adjustment : Number($('.elephant').css('top').replace('px', '')), 
});
/*------------------
main2
------------------*/

	
$('.nav').tab({
	type: 'slideshow',
	easing: 'easeOutBack'
});
$('.nav2').tab({
	type: 'slideshow',
	easing: 'easeOutBack'
});
function contentSet() {

	var parallaxObj = {};
	parallaxObj['1'] = {};
	parallaxObj['1'].obj = $('.cats img');
	parallaxObj['1'].tagMotions = {};
	
	parallaxObj['1'].tagMotions.motion1 = [{
		start : $('.folio2').offset().top - 100,
		end : $('.folio2').offset().top + 400,
		fromStyle : {
			left : 0
		},
		toStyle : {
			left : 1000
		},
		easing : 'liner'
	}];
	
	$(window).parallax({
		parallax : parallaxObj
	});
};

contentSet();


/*------------------
footer
------------------*/
var positionTop = -100;

$('.bany').css({
	top: positionTop,
	opacity: 0
});
$('[class*=lettar]').css({
	opacity: 0
});

//テキストの消えるときの処理
$(window).parallax({
	parallax : $('.bany'),
	type : 'type3',
	fixPosition : $('#footer').offset().top,
	startAnimation: function(e){showAnimate(e);},
	endAnimation: function(e){hideAnimate(e);},
	contentStartLinePercent: 30
});

//テキストの表示される時のアニメーション
function showAnimate(e) {

	$('.bany,.lettar4,.lettar3,.lettar2').queue([]).stop();

	$('.bany').animate({
		top : 0,
		opacity: 1
	},1000);

	$('.lettar4').delay(400).animate({
		opacity: 1
	},300);
	$('.lettar3').delay(500).animate({
		opacity: 1
	},300);
	$('.lettar2').delay(700).animate({
		opacity: 1
	},300);
};
//テキストが上に向かって消える時のアニメーション
function hideAnimate(e) {
	$('.bany').animate({
		top : positionTop,
		opacity: 0
	},1000);
	$('[class*=lettar]').animate({
		opacity: 0
	},1000);
};

$(window).parallax({
	parallax : $('.stage'),
	type : 'type2',
	style : 'top',
	fixPosition : $('body').height() - $(window).height(),
	speed : 3,
	adjustment : Number($('.stage').css('top').replace('px', '')), 
});

/*
1. 数を指定して泡のタグをfolioの中に生成する 
2. 生成したタグをCSSでランダムに配置する

3. サイズをランダムにする
4. サイズの最大値と最小値をきめる
*/

//1. 数を指定して泡のタグをfolioの中に生成する 
/*
var $folio = $('.folio');
var syabonNum = 13;

var stageWidthSize = 800;
var stageHeightSize = 530;

var sizeMax = 180;
var sizeMin = 30;
for(var i =0;i <= syabonNum;i++) {
	//2. 生成したタグをCSSでランダムに配置する
	var randomSize = Math.floor(Math.random() * (sizeMax - sizeMin)) + sizeMin;
	var randomLeftNum = Math.floor(Math.random() * (stageWidthSize - randomSize));
	var randomTopNum = Math.floor(Math.random() * (stageHeightSize - randomSize));
	$folio.append('<p class="syabonNum' + i +'"><img src="images/syabon.png"></p>');
	
	$('.syabonNum' + i).css({
		left: randomLeftNum,
		top: randomTopNum
	});
	$('.syabonNum' + i + ' img').css({
		width: randomSize,
		height: randomSize
	});
}*/

});