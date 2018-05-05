(function($){
	'use-strict';



	/* ---------------------------------------------
	 Initializing Functions Triggered On Window Loar
	 --------------------------------------------- */
	$(window).load(function(){
		initPreloaderFade();
		initPortfolio();
	});


	/* ---------------------------------------------
	 Initializing Functions Triggered On Window Resize
	 --------------------------------------------- */
	$(window).resize(function(){
		initRespNavMenu();
		initHeroHeight();
	});


	/* ---------------------------------------------
	 Initializing Functions Triggered On Window Scroll
	 --------------------------------------------- */
	$(window).scroll(function(){
		initHeaderAnimation();
		initBackToTop();
	});


	/* ---------------------------------------------
	 Initializing All Functions
	 --------------------------------------------- */
	initHeroHeight();
	initSectionHightlight();
	initImageBackground();
	initBackgroundOverlay();
	initParallaxBackground();
	initSearchArea();
	initCartArea();
	initAnimateScroll();
	initNavMenu();
	initMagnificPopup();
	initMasonry();
	initProgressBar();
	initAccordion();
	initCarousel();
	initCounterUp();
	initWowAnimation();
	initProductDetail();
	initContactForm();
	//initGoogleMap();



	/* ---------------------------------------------
	 Preloader Fadeout
	 --------------------------------------------- */
	function initPreloaderFade(){
		$('body').imagesLoaded(function(){
			$('.preloader-wrapper').fadeOut();
		});
	}


	/* ---------------------------------------------
	 Section Highlighting
	 --------------------------------------------- */
	function initSectionHightlight(){
		$('section').each(function(){
			$(this).waypoint(function(direction){
				if(direction === 'down'){
					var sec_id = $(this).attr('id');
					var current_section_link = '.' + sec_id + '-nav';
					$('.main-nav > ul > li > a').removeClass('active-section');
					$(current_section_link).addClass('active-section');
				}
			} , {offset: '130px'});
			$(this).waypoint(function(direction){
				if(direction === 'up'){
					var sec_id = $(this).attr('id');
					var current_section_link = '.' + sec_id + '-nav';
					$('.main-nav > ul > li > a').removeClass('active-section');
					$(current_section_link).addClass('active-section');
				}
			} , {offset: function(){return -$(this).height() + 130;}});
		});
	}


	/* ---------------------------------------------
	 Hero Height
	 --------------------------------------------- */
	function initHeroHeight(){
		$('.hero-height').height($(window).height());
	}


	/* ---------------------------------------------
	 Image Background
	 --------------------------------------------- */
	function initImageBackground(){
		$('.image-bg').each(function(){
			if ($(this).attr("data-image-bg")){
				$(this).css({
					'background': 'url(' + $(this).data('image-bg') + ')',
					'background-position': 'center top',
					'background-repeat': 'no-repeat',
					'background-size': 'cover'
				});
			}
		});
	}


	/* ---------------------------------------------
	 Background Overlay
	 --------------------------------------------- */
	function initBackgroundOverlay(){
		$('.bg-overlay').each(function(){
			if ($(this).attr('data-overlay-bg')){
				$(this).css({
					'background': $(this).data('overlay-bg')
				});
			}
		});
	}


	/* ---------------------------------------------
	 Parallax Background
	 --------------------------------------------- */
	function initParallaxBackground(){
		if(!device.tablet() && !device.mobile()){
			$('section[data-bg-type="parallax"]').each(function(){
				$(this).parallax("50%", 0.3);
			});

			$('section[data-bg-type="parallax"]').each(function(){
				$(this).css({'background-attachment': 'fixed'});
			});
		}
	}


	/* ---------------------------------------------
	 Search Area
	 --------------------------------------------- */
	function initSearchArea(){
		$('.search-btn').on('click', function(e){
			e.preventDefault();
			$('.search-area').fadeIn();
		});

		$('.search-close').on('click', function(e){
			e.preventDefault();
			$('.search-area').fadeOut();
		});
	}

	/* ---------------------------------------------
	 Shopping Cart Area
	 --------------------------------------------- */
	function initCartArea(){
		$('.cart-btn').on('click', function(e){
			e.preventDefault();
			$('.cart-area').toggleClass('cart-area-visible');
		});
	}


	/* ---------------------------------------------
	 Animate Scroll
	 --------------------------------------------- */
	function initAnimateScroll(){
		$('.animatescroll-link').on('click', function(e){
			e.preventDefault();
		});
	}


	/* ---------------------------------------------
	 Navigation Menu
	 --------------------------------------------- */
	function initNavMenu(){
		$('.sub-menu').mouseenter(function(e){
			e.stopPropagation();
			if($(window).width() > 991){
				$(this).children('.sub-menu-content').fadeIn();
			}

			$(this).mouseleave(function(){
				if($(window).width() > 991){
					$(this).children('.sub-menu-content').fadeOut();
				}
			});
		});

		$('.sub-menu').on('click', function(e){
			e.stopPropagation();
			if($(window).width() <= 991){
				$(this).children('.sub-menu-content').slideToggle();
			}
		});

		$('.menu-btn').on('click', function(){
			if($(window).width() <= 991){
				$('.main-nav').slideToggle();
			}
		});
	}


	/* ---------------------------------------------
	 Responsive Navigation Menu
	 --------------------------------------------- */
	function initRespNavMenu(){
		if($(window).width() > 991 && $('.main-nav').css('display') == 'none'){
			$('.main-nav').css({'display': 'block'});
		}
	}


	/* ---------------------------------------------
	 Header Animation
	 --------------------------------------------- */
	function initHeaderAnimation(){
		var scroll_top = $(document).scrollTop();
		if(scroll_top >= 100){
			$('.site-header').removeClass('site-header-hidden');
			$('.site-header').addClass('site-header-visible');
		}else{
			$('.site-header').removeClass('site-header-visible');
			$('.site-header').addClass('site-header-hidden');
		}
	}

	/* ---------------------------------------------
	 Back To Top Animation
	 --------------------------------------------- */
	function initBackToTop(){
		var scroll_top = $(document).scrollTop();
		if(scroll_top >= 100){
			$('.back-to-top').removeClass('back-to-top-hidden');
			$('.back-to-top').addClass('back-to-top-visible');
		}else{
			$('.back-to-top').removeClass('back-to-top-visible');
			$('.back-to-top').addClass('back-to-top-hidden');
		}
	}


	/* ---------------------------------------------
	 Magnific Popup Plugin
	 --------------------------------------------- */
	function initMagnificPopup(){
		$('.image-mfp').magnificPopup({
			type: 'image',
			gallery: {
				enabled: true
			}
		});

		$(".video-mfp").magnificPopup({
			type: 'iframe',
			gallery: {
				enabled: true
			}
		});
	}


	/* ---------------------------------------------
	 Masonry
	 --------------------------------------------- */
	function initMasonry(){
		$('.masonry').imagesLoaded(function(){
			$('.masonry').masonry();
		});
	}


	/* ---------------------------------------------
	 Portfolio
	 --------------------------------------------- */
	function initPortfolio(){
        var portfolioCategory = $('.filter-content ul').isotope({
            itemSelector: '.portfolio-content',
            layoutMode: 'masonry'
        });
        $('.portfolio-category a').on('click', function(e){
            e.preventDefault();
            if ( $(this).parent('li').hasClass('active')){
                return false;
            } else{
                $(this).parent('li').addClass('active').siblings('li').removeClass('active');
            }
            var $this = $(this);
            var filterValue = $this.data('target');
            portfolioCategory.isotope({
				filter: filterValue,
			});
            return $(this);
        });
	}


	/* ---------------------------------------------
	 Progress Bar Animation
	 --------------------------------------------- */
	function initProgressBar(){
		$('.progress-bar > span').each(function(){
	        var $this = $(this);
	        var width = $(this).data('percent');
	        $this.css({
	            'transition' : 'width 1.5s'
	        });

	        setTimeout(function() {
	            $this.filter(':visible').waypoint(function(dir) {
	                if( dir === 'down' ) {
	                    $this.css('width', width + '%');
	                }
	            } , { offset: '100%' } );
	        }, 500);
	    });

		$('.tab-option li a').on('click', function(e){
			e.preventDefault();
			var targetTab = $(this).attr('href');
			var targetProgressBar = $(targetTab).find('.progress-bar > span');
			targetProgressBar.each(function(){
		        var $this = $(this);
		        var width = $(this).data('percent');
		        $this.css({
		            'transition' : 'width 1.5s'
		        });

		        setTimeout(function() {
		            $this.filter(':visible').waypoint(function(direction) {
		                if( direction === 'down' ) {
		                    $this.css('width', width + '%');
		                }
		            } , { offset: '100%' } );
		        }, 500);
		    });
		});
	}

	/* ---------------------------------------------
	 Accordion Animation
	 --------------------------------------------- */
	function initAccordion(){
		$('.accordion').on('click', '.accordion-title', function(e){
			e.preventDefault();
			var $this = $(this);

			if($this.closest('.accordion').hasClass('accordion-toggle')) {
				if($this.hasClass('accordion-active')) {
					$this.next().slideUp('normal');
					$this.removeClass("accordion-active");
				}
			} else {
				$this.closest('.accordion').find('.accordion-active').next().slideUp('normal');
				$this.closest('.accordion').find('.accordion-title').removeClass('accordion-active');
			}

			if($this.next().is(':hidden') === true) {
				$this.next().slideDown('normal');
				$this.addClass("accordion-active");
			}
		});
		$('.accordion .accordion-data').hide();
		$('.accordion .accordion-active').next().slideDown('normal');
	}


	/* ---------------------------------------------
	 All Carousels
	 --------------------------------------------- */
	function initCarousel(){
		$('.rev-slider-fullscreen').revolution({
			delay: 5500,
			fullScreen: "on",
			navigationType: "none",
			navigationArrows: "solo",
			navigationStyle: "preview4"
		});

		$('.rev-slider-fullwidth').revolution({
			delay: 5500,
			fullScreen: "off",
			navigationType: "none",
			navigationArrows: "solo",
			navigationStyle: "preview4"
		});

		$('.content-carousel').owlCarousel({
			pagination: false,
			navigation: false,
			autoPlay: true,
			singleItem : true,
			slideSpeed : 500,
			navigationText: ["<span class='fa fa-angle-left'></span>", "<span class='fa fa-angle-right'></span>"]
		});

		$('.testimonial-carousel').owlCarousel({
			pagination: true,
			navigation: false,
			autoPlay: true,
			singleItem : true,
			slideSpeed : 500,
			navigationText: ["<span class='fa fa-angle-left'></span>", "<span class='fa fa-angle-right'></span>"]
		});

		$('.feature-carousel').owlCarousel({
			pagination: false,
			navigation: true,
			autoPlay: true,
			items: 3,
			slideSpeed : 500,
			navigationText: ["<span class='fa fa-angle-left'></span>", "<span class='fa fa-angle-right'></span>"]
		});

		$('.client-carousel').owlCarousel({
			pagination: false,
			navigation: false,
			autoPlay: true,
			items: 6,
			slideSpeed : 500,
			navigationText: ["<span class='fa fa-angle-left'></span>", "<span class='fa fa-angle-right'></span>"]
		});

		$('.portfolio-detail-carousel').owlCarousel({
			pagination: false,
			navigation: true,
			autoPlay: true,
			items: 3,
			slideSpeed : 500,
			navigationText: ["<span class='fa fa-angle-left'></span>", "<span class='fa fa-angle-right'></span>"]
		});

		$('.product-detail-carousel').owlCarousel({
			pagination: true,
			navigation: false,
			autoPlay: true,
			singleItem : true,
			slideSpeed : 500,
			navigationText: ["<span class='fa fa-angle-left'></span>", "<span class='fa fa-angle-right'></span>"]
		});
	}


	/* ---------------------------------------------
	 Counter Up
	 --------------------------------------------- */
	function initCounterUp(){
		$('.counter-up').counterUp({
			delay: 10,
			time: 1500
		});
	}


	/* ---------------------------------------------
	 Wow Animation
	 --------------------------------------------- */
	function initWowAnimation(){
		var wow = new WOW({
				boxClass: 'wow',
				animateClass: 'animated',
				offset: 150,
				mobile: false,
				live: true
			}
		);
		wow.init();
	}


	/* ---------------------------------------------
	 Product Size & Color
	 --------------------------------------------- */
	function initProductDetail(){
		$('.product-detail-color a').on('click', function(e) {
			e.preventDefault();
			$('.product-detail-color a').removeClass('color-selected');
			$(this).addClass('color-selected');
		});

		$('.product-detail-size a').on('click', function(e) {
			e.preventDefault();
			$('.product-detail-size a').removeClass('size-selected');
			$(this).addClass('size-selected');
		});

		$('.product-detail-review-form-rating a').on('mouseenter', function(){
			$(this).prevAll().addBack().css('opacity', '1.0');
		});

		$('.product-detail-review-form-rating a').on('mouseleave', function(){
			$(this).prevAll().addBack().css('opacity', '0.3');
		});

		$('.product-detail-review-form-rating a').on('click', function(){
			$this = $(this);
			$(this).prevAll().addBack().addClass('rating-selected');

			$('.product-detail-review-form-rating a.rating-selected').on('mouseenter', function(){
				$(this).nextAll().removeClass('rating-selected');
			});
			$('.product-detail-review-form-rating a.rating-selected').on('mouseleave', function(){
				$this.prevAll().addBack().addClass('rating-selected');
			});
		});
	}



	/* ---------------------------------------------
	 Contact Form
	 --------------------------------------------- */
	function initContactForm(){
		$('#c-form').validator().on('submit', function (e){
			if (e.isDefaultPrevented()){
				submitMSG(false, 'Одно из полей пустое или неправильного формата.');
			} else{
				e.preventDefault();
				submitForm();
			}
		});

		function submitForm(){
			var name = $("input[name='name']").val();
			var subject = $("input[name='subject']").val();
			var message = $("textarea[name='message']").val();
			var email = $("input[name='email']").val();

			emailjs.send("gmail","template_iEbJnUV9",{name: name, subject: subject, message: message, email: email})
			.then(function(response) {
				formSuccess();
			}, function(err) {
				console.log("FAILED. error=", err);
			});
		}

		function formSuccess(){
			$('#c-form')[0].reset();
			submitMSG(true, 'Спасибо за письмо!');
		}

		function submitMSG(valid, msg){
			if(valid){
				var msgClasses = 'c-form-alert c-form-success animated fadeIn';
			} else{
				var msgClasses = 'c-form-alert c-form-error animated shake';
			}
			$('#c-form-status').removeClass().addClass(msgClasses).text(msg);
		}
	}


	/* ---------------------------------------------
	 Google Map
	 --------------------------------------------- */
	function initGoogleMap(){
		var latitude = document.getElementById('g-map').getAttribute('data-latitude'),
			longitude = document.getElementById('g-map').getAttribute('data-longitude');
		var mapOptions = {
			scrollwheel: false,
			zoom: 14,
			center: new google.maps.LatLng(latitude, longitude),
			zoomControlOptions: {
				position: google.maps.ControlPosition.TOP_RIGHT
			},
			styles: [{featureType:'landscape',stylers:[{saturation:-100},{lightness:65},{visibility:'on'}]},{featureType:'poi',stylers:[{saturation:-100},{lightness:51},{visibility:'simplified'}]},{featureType:'road.highway',stylers:[{saturation:-100},{visibility:'simplified'}]},{featureType:'road.arterial',stylers:[{saturation:-100},{lightness:30},{visibility:'on'}]},{featureType:'road.local',stylers:[{saturation:-100},{lightness:40},{visibility:'on'}]},{featureType:'transit',stylers:[{saturation:-100},{visibility:'simplified'}]},{featureType:'administrative.province',stylers:[{visibility:'off'}]/**/},{featureType:'administrative.locality',stylers:[{visibility:'off'}]},{featureType:'administrative.neighborhood',stylers:[{visibility:'on'}]/**/},{featureType:'water',elementType:'labels',stylers:[{visibility:'on'},{lightness:-25},{saturation:-100}]},{featureType:'water',elementType:'geometry',stylers:[{hue:'#ffff00'},{lightness:-25},{saturation:-97}]}]
		};
		var contentString = '<div id="mapcontent">WE\'RE HERE!</div>';
		var infowindow = new google.maps.InfoWindow({
			maxWidth: 320,
			content: contentString
		});
		var mapElement = document.getElementById('g-map');
		var map = new google.maps.Map(mapElement, mapOptions);
		var image = new google.maps.MarkerImage('img/marker.png',
			null, null, null, new google.maps.Size(34,48))

		var myLatLng = new google.maps.LatLng(latitude, longitude);
		var marker = new google.maps.Marker({
			position: myLatLng,
			map: map,
			icon: image,
			title: 'Hello World!'
		});

		google.maps.event.addListener(marker, 'click', function() {
			infowindow.open(map,marker);
		});
	}

})(jQuery);
