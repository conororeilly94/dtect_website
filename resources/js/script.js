/*eslint-env jquery*/
/* global $ */

$('document').ready(function() {

/* For the sticky navigation */
    $('.js--section-features').waypoint(function(direction) {
        if (direction == "down") {
            $('nav').addClass('sticky');
        } else {
            $('nav').removeClass('sticky');
        }
    }, {
      offset: '60px;'
    });  
    
    /* Scroll on buttons footer*/
    $('.services-foot').click(function () {
       $('html, body').animate({scrollTop: $('.js--section-features').offset().top}, 1000.); 
    });
    
    $('.about-foot').click(function () {
       $('html, body').animate({scrollTop: $('.js--section-aboutus').offset().top}, 1000); 
    });
    
    $('.contact-foot').click(function () {
       $('html, body').animate({scrollTop: $('.js--section-contact').offset().top}, 1000); 
    });
    
    $('.form-foot').click(function () {
       $('html, body').animate({scrollTop: $('.js--section-form').offset().top}, 1000); 
    });
    
    /* Scroll on buttons header*/
    $('.services-scroll').click(function () {
       $('html, body').animate({scrollTop: $('.js--section-features').offset().top}, 1000); 
    });
    
    $('.about-scroll').click(function () {
       $('html, body').animate({scrollTop: $('.js--section-aboutus').offset().top}, 1000); 
    });
    
    $('.contact-scroll').click(function () {
       $('html, body').animate({scrollTop: $('.js--section-contact').offset().top}, 1000); 
    });
    
    $('.form-scroll').click(function () {
       $('html, body').animate({scrollTop: $('.js--section-form').offset().top}, 1000); 
    });
    
    $('.js--nav-icon, .js--main-nav a, .logo-black').click(function(element){
        var nav = $('.js--main-nav');
        var icon = $('.js--nav-icon i');

        //Gets the class name of the element that triggered the event
        var clicked = element.target.className;

        //Exists the function if the menu is closed AND the logo-black element (logo image) was clicked
        if (icon.hasClass('ion-navicon-round') && clicked == 'logo-black')
            return;

        //Opens and closes the menu
        if ($(window).width() < 768){
            nav.slideToggle(200);
        }

        //Changes icon states of the menu button
        if (icon.hasClass('ion-navicon-round')) {
            icon.addClass('ion-close-round');
            icon.removeClass('ion-navicon-round');
        } else {
            icon.addClass('ion-navicon-round');
            icon.removeClass('ion-close-round');
        }
    });

    $(window).resize(function(){
        var nav = $('.js--main-nav');
        var icon = $('.js--nav-icon i');

        if ($(window).width() > 767){
            nav.css("display", "block");
            icon.addClass('ion-close-round');
            icon.removeClass('ion-navicon-round');
        } else {
            nav.css("display", "none");
            icon.addClass('ion-navicon-round');
            icon.removeClass('ion-close-round');
        }
    });    
});