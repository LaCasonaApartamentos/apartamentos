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
$(document).ready(function(){
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
	$('.grid').masonry({
		itemSelector: '.grid-item',
		percentPosition: true,
		horizontalOrder: true,
		resize: true
	  });
	
});
function initGaleria(obj) {
	obj.find('.galeria-big').slick({
		slidesToShow: 1,
		slidesToScroll: 1,
		arrows: false,
		fade: true,
		asNavFor: '.galeria-small'
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