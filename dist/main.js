function showSidebar() {
    const sidebar = document.querySelector(".sidebar");
    sidebar.style.display = 'flex';
    setTimeout(() => {
        sidebar.style.transform = 'translateX(0)'; 
    }, 10);
}

function closeSidebar() {
    const sidebar = document.querySelector(".sidebar");
    sidebar.style.transform = 'translateX(100%)'; 
    setTimeout(() => {
        sidebar.style.display = 'none';
    }, 300);
}
var AnimateCmp = {
	controller: null,
	init: function(){
		AnimateCmp.controller = new ScrollMagic.Controller();
		$(document).find(".cmp-animate").each(function(){
			if($(this).find(".card-animate").length > 0){
				AnimateCmp.basicAnimate($(this));
			}
			if($(this).find(".animate-fall").length > 0){
				AnimateCmp.fallAnimate($(this));
			}
		});
		$(document).find(".lca-banner-1").each(function(){
			if($(this).find(".animate-text").length > 0){
				AnimateCmp.effectText($(this));
			}
			if($(this).find(".animate-img").length > 0){
				AnimateCmp.imgAnimate($(this));
			}
		});
		$(document).find(".mosaic-component .block-container-img").each(function(){
			AnimateCmp.mosaicAnimate($(this));
		})
	},
	basicAnimate: function(obj){
		var card = obj.find(".card-animate");
		var time = obj.height() /2;
		var tweenCard = TweenMax.from(card, 0.5,{transform: 'translate(0,40px)',ease: Power0.easeNone});
		new ScrollMagic.Scene({triggerElement: obj[0], duration: time, reverse:false}) 
			.setTween(tweenCard)
			.addTo(AnimateCmp.controller);
	},
	fallAnimate: function(obj){
		var tweenCard = TweenMax.staggerFromTo(obj.find(".animate-fall .grid-card-item .card, .animate-fall .grid-card-item .block-globo"), 0.5,{transform: 'translate(0,40px)',opacity: '0', ease: Power0.easeNone},{transform: 'translate(0,0)',opacity: '1', ease: Power0.easeNone}, 0.4);
		new ScrollMagic.Scene({triggerElement: obj[0], reverse:false})
			.setTween(tweenCard)
			.addTo(AnimateCmp.controller);
	},
	imgAnimate: function(obj){
		var img = obj.find(".animate-img")
		var tweenCard = TweenMax.from(img, 1.5,{transform: 'scale(1.3)'});
		new ScrollMagic.Scene({triggerElement: obj[0], reverse:false}) 
			.setTween(tweenCard)
			.addTo(AnimateCmp.controller);
	},
	effectText:function(obj) {
		var objAnimate = obj.find(".animate-text");
		var tweenCard = new TimelineMax().from(objAnimate, 1.5,{transform: 'translate(0px, 40px)',opacity: '0',delay:0.5});
		new ScrollMagic.Scene({triggerElement: obj[0], reverse:false}) 
			.setTween(tweenCard)
			.addTo(AnimateCmp.controller);
	},
	mosaicAnimate: function(obj){
		var time = obj.height() /2;
		var tweenCard = TweenMax.from(obj, 0.5,{opacity: 0,ease: Power0.easeNone});
		new ScrollMagic.Scene({triggerElement: obj[0], duration: time, reverse:false}) 
			.setTween(tweenCard)
			.addTo(AnimateCmp.controller);
	}
}
$(document).ready(function(){
	AnimateCmp.init();
	if($(document).find(".component-carousel").length > 0){
		initCompCarrousel();
	}
	if($(document).find(".component-galeria").length > 0){
		$(document).find(".component-galeria").each(function(){
			initGaleria($(this));
		});
	}
	$(document).find("header .icon-open-submenu").click(function(){
		$(document).find(".block-submenu").addClass("open");
		$(document).find("body").addClass("modal-open");
	});
	$(document).find(".block-submenu .icon-close, .block-submenu .nav-item ").click(function(){
		$(document).find(".block-submenu").removeClass("open");
		$(document).find("body").removeClass("modal-open");
	});
	if($(document).find(".component-reserva").length >0){
		//initDatePicker();
	}
	if($(".grid").length > 0){
		$('.grid').masonry({
			itemSelector: '.grid-item',
			percentPosition: true,
			horizontalOrder: true,
			resize: true
		});
	}
	
	
});
function initGaleria(obj) {
	obj.find('.galeria-big').slick({
		slidesToShow: 1,
		slidesToScroll: 1,
		arrows: true,
		prevArrow:"<div class='icon-arrow left'><span class='icon-chevron-left'></span></div>",
		nextArrow:"<div class='icon-arrow right'><span class='icon-chevron-right'></span></div>",
		fade: true,
	});
	obj.find('.galeria-small').slick({
		slidesToShow: 4,
		slidesToScroll: 1,
		asNavFor: '.galeria-big',
		dots: false,
		centerMode: true,
		focusOnSelect: true,
		prevArrow:"<div class='icon-arrow left'><span class='icon-chevron-left'></span></div>",
		nextArrow:"<div class='icon-arrow right'><span class='icon-chevron-right'></span></div>",
		responsive: [
		{
		  breakpoint: 992,
		  settings: {
			slidesToShow: 2
		  }
		}
		]
	});
	
}
// CAROUSEL
function initCompCarrousel(){
	$(document).find(".component-carousel").each(function(){
		var isArrow = $(this).hasClass("carousel-arrow");
		var isArrowXS = $(this).hasClass("carousel-arrowxs-no") ? false : isArrow;
		var isPlay = $(this).hasClass("carousel-autoplay");
		var isFade = $(this).hasClass("carousel-fade");
		var isDotXS = $(this).hasClass("carousel-dotxs");
		$(this).slick({
			autoplay: isPlay,
			arrows:isArrow,
			fade: isFade,
			prevArrow:"<div class='icon-arrow left'><span class='icon-chevron-left'></span></div>",
			nextArrow:"<div class='icon-arrow right'><span class='icon-chevron-right'></span></div>",
			responsive: [
				{
				  breakpoint: 992,
				  settings: {
					dots: isDotXS,
					arrows:isArrowXS
				  }
				}
			]
		});
		
	});
	
}
function initDatePicker(){
	$( function() {
    var dateFormat = "mm/dd/yy",
	from = $( "#from" ).datepicker({
          defaultDate: "+1w",
          changeMonth: true,
          numberOfMonths: 3
        })
        .on( "change", function() {
          to.datepicker( "option", "minDate", getDate( this ) );
        }),
      to = $( "#to" ).datepicker({
        defaultDate: "+1w",
        changeMonth: true,
        numberOfMonths: 3
      })
      .on( "change", function() {
        from.datepicker( "option", "maxDate", getDate( this ) );
      });
 
    function getDate( element ) {
      var date;
      try {
        date = $.datepicker.parseDate( dateFormat, element.value );
      } catch( error ) {
        date = null;
      }
 
      return date;
    }
  } );
	
}