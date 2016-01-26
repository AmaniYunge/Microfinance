/*! main.js - v0.1.1 - 2014-1-04
* http://admindesigns.com/
* Copyright (c) 2013 Admin Designs;*/

/* Core theme functions required for
 * most of the sites vital functionality */
var Core = function () {
	
    // Init Delayed Animations
    var runAnimations = function () {

	  // if any element has ".animated-delay" we
	  // stop its animation and set a Timeout
	  $('[data-animate]').each(function () {
		  var This = $(this)
		  var delayTime = $(this).data('animate')[0];
		  var delayAnimation = $(this).data('animate')[1];
		  
 	      var delayAnimate = setTimeout(function () {
			  $(This).removeClass('animated-delay').addClass('animated ' + delayAnimation);
		  }, delayTime); 
		  
	  });
    }
	
    // Init SideMenu Functions
    var runSideMenu = function () {

        // Adds a single class to body which we use to
        // collapse entire side menu via preset CSS
        var toggleSideMenu = function () {
			if ($('body').hasClass('boxed-layout mobile-viewport')) { $('body').toggleClass('sidebar-persist'); } 
            else if ($('body').hasClass('mobile-viewport')) { $('body').toggleClass('sidebar-persist'); } 
			else { $('body').toggleClass('sidebar-collapsed'); }
        }
		
	    // If window is <1200 we remove the sidemenu collapsed class
        // As CSS media queries will take over and JS will only interfere
		var sidebarCheck = function() {
			if ($(window).width() < 1200) {	$('body').addClass('mobile-viewport').removeClass('sidebar-collapsed'); }
			else {
				 $('body').removeClass('mobile-viewport sidebar-persist'); 
			}
		}
		
		// Fire functions above 
		$(".sidebar-toggle").click(toggleSideMenu);
		$(document).ready(sidebarCheck);
        $(window).resize(sidebarCheck);		
		

		// Primary function which controls sidemenu collapse functionality
		$('#sidebar-menu .sidebar-nav a.accordion-toggle').click(function(e) {
		    e.preventDefault();
			
			// If the sidebar is collapsed or in mobile mode(same thing) disable the ability to
			// collapse menu items as the entire menu has been converted for on hover use
			if ($('body').hasClass('mobile-viewport') || $('body').hasClass('sidebar-collapsed') ) {
				if ($('body').hasClass('sidebar-persist')) {}
				else {return}					
			};
			
			// Collapse all open menus, remove open-menu class and any animation attributes
			$('a.accordion-toggle.menu-open').next('.sub-nav').slideUp('fast', 'swing', function() {
				$(this).attr('style','').prev().removeClass('menu-open');
			});
			
			// Expand targeted menu item, add open-menu class and remove 
			// left over animation attributes
			if (!$(this).hasClass('menu-open')) {
				$(this).next('.sub-nav').slideToggle('fast', 'swing', function() {
					$(this).attr('style','').prev().toggleClass('menu-open');
				});
			}

		});		
    }

    // Init Form Functions 
    var runTooltips = function () {
        // Init Bootstrap tooltips, if present 
        if ($("[data-toggle=tooltip]").length) {
            $('[data-toggle=tooltip]').tooltip();
        }
    }

    var runPersistCheckbox = function () {
        // Init Bootstrap persistent tooltips. This prevents a
        // popup from closing if a checkbox it contains is clicked
        if ($('.dropdown-menu.checkbox-persist').length) {
            $('.dropdown-menu.checkbox-persist').click(function (event) {
                event.stopPropagation();
            });
        }
    }

    var runFormElements = function () {
        // Init uniform checkboxes, if present
        if ($(".checkbox").length) {
            $(".checkbox").uniform();
        }
        // Init uniform radios, if present
        if ($(".radio").length) {
            $(".radio").uniform();
        }
    }

    // Init Clickable Checklists (header menus/tables)
    var runChecklists = function () {
		
        // Checklist state for table widgets and header menu buttons
        $(".table-checklist tbody tr, .dropdown-checklist .dropdown-items li").click(function () {
            $(this).toggleClass('task-checked');
            if ($(this).hasClass('task-checked')) {
                $(this).find('input.row-checkbox').prop("checked", true);
            } else {
                $(this).find('input.row-checkbox').prop("checked", false);
            }
            $.uniform.update('input.row-checkbox');
        });
		
        // Disable Selection on checklist to prevent excessive text-highlighting
        var disableSelection = function disableSelection() {
            return this.bind(($.support.selectstart ? "selectstart" : "mousedown") + ".ui-disableSelection", function (event) {
                event.preventDefault();
            });
        };
        $(".table-checklist tbody tr").disableSelection();
    }

    // Init Button "active" states
    var runButtonStates = function () {
        // if btn has ".btn-states" class we monitor it for user clicks. On Click we remove
        // the active class from its siblings and give it to the button clicked
        if ($('.btn-states').length) {
            $('.btn-states').click(function () {
                $(this).addClass('active').siblings().removeClass('active');
            });
        }
    }
	
    // Init Header Button Animations
    var runHeader = function () {
        var messageMenu = $('.messages-menu .glyphicon'),
            alertsMenu = $('.alerts-menu .glyphicon'),
            tasksMenu = $('.tasks-menu .glyphicon');
		
		if($('body').hasClass('dashboard')){
			var animate = window.setTimeout(function () {
				$(alertsMenu).animate({color: '#d9534f'}).addClass('animated swing');
				var clear = window.setTimeout(function () {
					$(alertsMenu).animate({color: '#666666'}, 'slow', function() {
						$(this).attr('style','').removeClass('animated bounce');
					});
				}, 1500);
			}, 2300);
			var animate2 = window.setTimeout(function () {
				$(messageMenu).animate({color: '#428bca'}).addClass('animated bounce');
				var clear = window.setTimeout(function () {
					$(messageMenu).animate({color: '#666666'}, 'slow', function() {
						$(this).attr('style','').removeClass('animated bounce');
					});
				}, 1500);
			}, 7300);
		}
    }

    // Init Theme DEMO Options/Preview Toolbar  
    var runPreviewPane = function () {

        // toggles skin toolbox
        $('.skin-toolbox-toggle').click(function () {
            if ($(this).hasClass('toolbox-open')) {
                $(this).removeClass('toolbox-open').parent().animate({
                    'right': -182
                }, 'fast');
                localStorage.setItem('toolboxState', 'closed');
            } else {
                $(this).addClass('toolbox-open').parent().animate({
                    'right': -4
                }, 'fast');
                localStorage.setItem('toolboxState', 'open');
            }
        });

        // switch statement for theme layout changes(not customizer)
        $('#skin-toolbox .checkbox, #skin-toolbox .radio').click(function () {
            var id = $(this).attr('id');
            if ($(this).prop('checked')) {
                switch (id) {
                case 'header-option':
                    $('.navbar').addClass('navbar-fixed-top');
                    $('#sidebar-option').attr("disabled", false).parents('label').removeClass('option-disabled');
                    break;
                case 'sidebar-option':
                    $('#sidebar').addClass('affix');
                    if (!$('body').hasClass('boxed-layout')) {
                        $('#breadcrumb-option').attr("disabled", false).parents('label').removeClass('option-disabled');
                    }
                    break;
                case 'breadcrumb-option':
                    $('#topbar').addClass('affix');
                    $('body').addClass('fixed-breadcrumbs');
                    break;
                case 'breadcrumb-hidden':
                    $('body').addClass('hidden-breadcrumbs');
                    break;
                case 'fullwidth-option':
                    $('body').removeClass('boxed-layout boxed-example wide-layout');
                    $('#breadcrumb-option').attr("disabled", false).prop('checked', false).parents('label').removeClass('option-disabled');
                    break;
                case 'boxed-option':
                    $('body').addClass('boxed-layout boxed-example');
                    $('body').removeClass('fixed-breadcrumbs hidden-breadcrumbs hidden-searchbar');
                    $('#topbar').removeClass('affix');
                    $('#breadcrumb-option, #breadcrumb-hidden, #searchbar-hidden').attr('checked', false);
                    $('#breadcrumb-option').attr("disabled", true).parents('label').addClass('option-disabled');
                    break;
                case 'searchbar-hidden':
                    $('body').addClass('hidden-searchbar');
                    break;
                }
            } else {
                switch (id) {
                case 'header-option':
                    $('.navbar').removeClass('navbar-fixed-top');
                    $('body').removeClass('fixed-breadcrumbs');
                    $('#sidebar, #topbar').removeClass('affix');
                    $('#sidebar-option, #breadcrumb-option').attr("disabled", true).prop('checked', this.checked).parents('label').addClass('option-disabled');
                    break;
                case 'sidebar-option':
                    $('#sidebar').removeClass('affix');
                    $('body').removeClass('fixed-breadcrumbs');
                    $('#breadcrumb-option').attr("disabled", true).prop('checked', this.checked).parents('label').addClass('option-disabled');
                    $('#topbar').removeClass('affix');
                    break;
                case 'breadcrumb-option':
                    $('#topbar').removeClass('affix');
                    $('body').removeClass('fixed-breadcrumbs');
                    break;
                case 'breadcrumb-hidden':
                    $('body').removeClass('hidden-breadcrumbs');
                    break;
                case 'searchbar-hidden':
                    $('body').removeClass('hidden-searchbar');
                    break;
                }
            }
            $.uniform.update();
        });
    }
	
  // Init Eager JS DEMO Loading
    var runDemoJS = function () {
		
		
		// Example animations ran on Header Buttons - For Demo Purposes
		$('.header-btns > div').on('show.bs.dropdown', function() {
			$(this).children('.dropdown-menu').addClass('animated animated-short flipInY');
		});
		$('.header-btns > div').on('hide.bs.dropdown', function() {
			$(this).children('.dropdown-menu').removeClass('animated flipInY');
		});
   
	
		// Set a boxed-layout state via local storage
		var boxtest = localStorage.getItem('boxed');
		
		// Check State on load
		if (boxtest === 'true') {
			$('#boxed-option').prop('checked', 'true');
			$.uniform.update('.radio');
		}
		
		// Assign states on click
		$('#boxed-option').click(function() {
			localStorage.setItem('boxed', 'true');
		});
		$('#fullwidth-option').click(function() {
			localStorage.setItem('boxed', 'false');
		});
		
		$(window).load(function() {
			
			// List of all available JS files. We're going to attempt to
			// cache them all after the first page has finished loading.
			// This is for DEMO purposes ONLY
			var scripts = {
				
				// HIGH PRIORITY
				gmap: 			 'vendor/plugins/map/gmaps.min.js',
				jquerymap:		 'vendor/plugins/gmap/jquery.ui.map.js',
				mixitup: 		 'vendor/plugins/mixitup/jquery.mixitup.min.js',
				mpopup: 		 'vendor/plugins/mfpopup/dist/jquery.magnific-popup.min.js',
				chosen:		  	 'vendor/plugins/chosen/chosen.jquery.min.js',
				moment:		 	 'vendor/plugins/daterange/moment.min.js',
				globalize:   	 'vendor/plugins/globalize/globalize.js',
	
				// FORM PICKERS
				cpicker: 	  	 'vendor/plugins/colorpicker/bootstrap-colorpicker.js',
				timepicker:      'vendor/plugins/timepicker/bootstrap-timepicker.min.js',
				datepicker:      'vendor/plugins/datepicker/bootstrap-datepicker.js',
				daterange: 	     'vendor/plugins/daterange/daterangepicker.js',
				
				// FORMS
				validate:		 'vendor/plugins/validate/jquery.validate.js',
				masked: 	 	 'vendor/plugins/jquerymask/jquery.maskedinput.min.js',
				
				// FORMS TOOLS
				holder: 	     'vendor/bootstrap/holder.js',
				tagmanager:      'vendor/plugins/tags/tagmanager.js',
				gritter:         'vendor/plugins/gritter/js/jquery.gritter.min.js',
				ladda:           'vendor/plugins/ladda/ladda.min.js',
				switcher:        'vendor/plugins/formswitch/js/bootstrap-switch.min.js',
				paginator:		 'vendor/bootstrap/paginator/src/bootstrap-paginator.js',
				knob:            'vendor/plugins/jquerydial/jquery.knob.js',
				rangeslider:     'vendor/plugins/rangeslider/jQAllRangeSliders.min.js',
				
				// MED PRIORITY - Large File sizes
				charts:       	 'js/charts.js',
				ckeditorCDN:     'http://cdnjs.cloudflare.com/ajax/libs/ckeditor/4.0.1/ckeditor.js',
				xedit: 			 'vendor/editors/xeditable/js/bootstrap-editable.js',
				summernote:      'vendor/editors/summernote/summernote.js',
				elfinder: 		 'vendor/plugins/elfinder/js/elfinder.min.js',
				countdown:       'vendor/plugins/countdown/jquery.countdown.js',
				jcrop: 			 'vendor/plugins/imagecrop/js/jquery.Jcrop.min.js',
				imagezoom: 		 'vendor/plugins/imagezoom/jquery.elevatezoom.min.js',
				sketchpad:       'vendor/plugins/notepad/wPaint.min.js',
				scrollto: 		 'vendor/plugins/scrollto/jquery.scrollTo-1.4.3.1-min.js',
				fileupload:      'vendor/bootstrap/fileupload/fileupload.js',
				fitvids:		 'vendor/plugins/fitvids/jquery.fitvids.js'	,
				
				// LARGE IMAGES
				image1:			 'img/stock/22.jpg',
				image2: 		 'img/stock/21.jpg'
			};	

			var cacheCheck = function(o) {
				$.each(o, function(i, p) {
					if (localStorage.getItem(i) !== 'cached') {
						$.ajax({
							url: p,
							success: function(data) {
								localStorage.setItem(i, 'cached');
							}				
						});
					}
					else {}
				});
			}
			// DISABLED BY DEFAULT
			// cacheCheck(scripts);
		});
    }
	
	return {
        init: function () {
            runAnimations();
            runSideMenu();
            runFormElements();
            runPersistCheckbox();
            runTooltips();
            runChecklists();
            runButtonStates();
            runHeader();
            runPreviewPane();
			runDemoJS();
        }
	}
	
    
}();