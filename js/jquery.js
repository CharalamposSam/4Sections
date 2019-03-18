 //Smooth Scrolling
 //================
 // Select all links with hashes
 $('a[href*="#"]')
 // Remove links that don't actually link to anything
 .not('[href="#"]')
 .not('[href="#0"]')
 .click(function(event) {
 // On-page links
     if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
         // Figure out element to scroll to
         var target = $(this.hash);
         target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
         // Does a scroll target exist?
         if (target.length) {
             // Only prevent default if animation is actually gonna happen
             event.preventDefault();
             $('html, body').animate({scrollTop: target.offset().top}, 1000, function() {
                 // Callback after animation
                 // Must change focus!
                 var $target = $(target);
                 $target.focus();
                 if ($target.is(":focus")) { // Checking if the target was focused
                     return false;
                 } 
                 else {
                     $target.attr('tabindex','-1'); // Adding tabindex for elements not focusable
                     $target.focus(); // Set focus again
                 };
             });
         }
     }
 });
 //Acntive nav buttons
 //===================
$(window).scroll(function() {
    var scrollTop     = $(window).scrollTop(),
    elementOffset = $('#section1').offset().top,
    distance      = (elementOffset - scrollTop);
    var scrollTop     = $(window).scrollTop(),
    elementOffset = $('#section2').offset().top,
    distance2      = (elementOffset - scrollTop);
    var scrollTop     = $(window).scrollTop(),
    elementOffset = $('#section3').offset().top,
    distance3      = (elementOffset - scrollTop);
    var scrollTop     = $(window).scrollTop(),
    elementOffset = $('#section4').offset().top,
    distance4      = (elementOffset - scrollTop);
    if (distance==0) {
        $("#one").css("opacity", "1");
    } 
    else{
        $("#one").css("opacity", "0.25");
    }
    if (distance2 == 0)  {
        $("#two").css("opacity", "1");
    } 
    else{
        $("#two").css("opacity", "0.25");
    }
    if (distance3==0) {
        $("#three").css("opacity", "1");
        $(".section3-div2").css("letter-spacing", "0.8vw");
        $(".section3-div1").css("letter-spacing", "0vw");
    } 
    else{
        $("#three").css("opacity", "0.25");
        $(".section3-div2").css("letter-spacing", "0vw");
        $(".section3-div1").css("letter-spacing", "1.2vw");
    }
    if (distance4==0) {
       $("#four").css("opacity", "1");
       $(".section4-p-span").css("animation","yellowBg 0.5s cubic-bezier(0.56, 0.04, 0.16, 1.04) 0s 1 normal forwards");
    } 
    else{
        $("#four").css("opacity", "0.25");
        $(".section4-p-span").css("animation","yellowBg2 0.5s cubic-bezier(0.56, 0.04, 0.16, 1.04) 0s 1 normal forwards");
    }
 });
 //Parallax
 //========
$(window).scroll(function() {
    var wScroll = $(this).scrollTop();
    var wScroll2 = ($(this).scrollTop()) - ($(this).height());
    var wScroll3 = ($(this).scrollTop()) - ($(this).height() * 2);
    var wScroll4 = ($(this).scrollTop()) - ($(this).height() * 3);
    var img = $(window).height();
    var bx = $('.section2-box').height();
    var a = (bx / img) * 100;
    var num = (a / 10000) * img;
    $('.slower1').css({
        'transform' : 'translate(0px, -'+ wScroll / 4 +'%)'
    });
    $('.faster1').css({
        'transform' : 'translate(0px, -'+ wScroll / 2 +'%)'
    }); 
    if(wScroll > $('.actually').offset().top ){
    $('.slower2').css({
        'transform' : 'translate(0px, -'+ wScroll2 / 4 +'%)'
    });
        $('.faster2').css({
        'transform' : 'translate(0px, -'+ wScroll2 / 2 +'%)'      
    });}
    if(wScroll > $('.featuring').offset().top){
        $('.slower3').css({
            'transform' : 'translate(0px, -'+ wScroll3 / 4 +'%)'
        });
            $('.faster3').css({
            'transform' : 'translate(0px, -'+ wScroll3 / 2 +'%)'
        });
    }
    if(wScroll > $('.actually').offset().top){
        $('.section2-box').css({
            'transform' : 'translate(0px, '+ wScroll2 / num +'%)'
        });
            $('.fade-scroll').css({
            'filter' : 'blur( '+ wScroll2 / 150  +'px)'
        });
        
        $('.fade-scroll').css({
            'color' : 'rgb(' + Math.max(75, 101-wScroll2/10) + ',' + Math.max(94, 120-wScroll2/10) + ',' + Math.max(140, 167-wScroll2/10) + ')' 
        });
        }
        $('.section3-box').css({
            'transform' : 'translate(0px, '+ Math.min(0, wScroll3 / num) +'%)'
        });
    if(wScroll > ($('.featuring').offset().top)){
        $('.section4-p-div').css({
            'transform' : 'translateX( '+ Math.min(0, wScroll4 / 15) +'%)'
        });
        $('.section4-p-span').css({
            'left' : wScroll4 / 10 + '%'
        });
    }
});
 //Snap
 //====
 /*
var snapScroll = $("section").SnapScroll({
    hashes:true
});
console.log(snapScroll);
//Listen for visible element change
//You could listen on a specific element like $("header")
$(document).on(snapScroll.eventChangeVisible, function(evt, visibleList){
    console.log(evt, visibleList.data);
});
*/
 //Hover effect at Section 4
 //=========================
$(document).ready(function(){
    $(".image").hover(function(){
        var imageToShow = $(this).attr('rel');
        $("#"+imageToShow).css("transform", "scale(.8)");
        $("#"+imageToShow).css("cursor", "pointer");
        $("#"+imageToShow + " ~ .back").css("transform", "scale(.8)");
        $("#"+imageToShow + " ~ .back2").css("transform", "scale(1)");
        $("#"+imageToShow + " ~ .box-label").css("transform", "scale(1)");
        $("#"+imageToShow + " ~ .box-label > .box-label-one").delay(200).animate({left:'0'},1200, function(){
            $(this).stop();
        });
        $("#"+imageToShow + " ~ .box-label > .box-label-two").animate({left:'100%'},1200, function(){
            $(this).stop();
        });
        $("#"+imageToShow + " ~ .box-label > .box-label-three").delay(200).animate({left:'100%'},1200, function(){
            $(this).stop();
        });
    }, function(){
        var imageToShow = $(this).attr('rel');
        $("#"+imageToShow).css("transform", "scale(.6)");
        $("#"+imageToShow + " ~ .back").css("transform", "scale(0)");
        $("#"+imageToShow + " ~ .back2").css("transform", "scale(0)");
        $("#"+imageToShow + " ~ .box-label").css("transform", "scale(0)");
        $("#"+imageToShow + " ~ .box-label > .box-label-one").animate().stop();
        $("#"+imageToShow + " ~ .box-label > .box-label-two").animate().stop();
        $("#"+imageToShow + " ~ .box-label > .box-label-three").animate().stop();
        $("#"+imageToShow + " ~ .box-label > .box-label-one").css("left","-100%");
        $("#"+imageToShow + " ~ .box-label > .box-label-two").css("left","-100%");
        $("#"+imageToShow + " ~ .box-label > .box-label-three").css("left","-100%");
        $("#"+imageToShow + " ~ .box-label > .drawBorder1").removeClass("drawBorder1after");
        $("#"+imageToShow + " ~ .box-label > .drawBorder2").removeClass("drawBorder2after"); 
    });
    $(".box-label").hover(function(){
        var imageToShow = $(this).attr('rel');
        var imageToShowParent = $(this).parent().attr('id');
        $("#"+imageToShow).css("transform", "scale(1)");
        $("#"+imageToShow).css("cursor", "pointer");
        $("#"+imageToShowParent+ " > .image").css("transform", "scale(.8)");
        $("#"+imageToShowParent + " > .back").css("transform", "scale(.8)");
        $("#"+imageToShowParent + " > .back2").css("transform", "scale(1)");
        $("#"+imageToShow + " > .box-label-one").css("left","0");
        $("#"+imageToShow + " > .box-label-two").css("left","100%");
        $("#"+imageToShow + " > .box-label-three").css("left","100%");
        $("#"+imageToShow + " > .drawBorder1").addClass("drawBorder1after");
        $("#"+imageToShow + " > .drawBorder2").addClass("drawBorder2after");
    }, function(){
        $("#"+imageToShow).css("transform", "scale(0)");
        $("#"+imageToShowParent + " > .image").css("transform", "scale(.6)");
        $("#"+imageToShowParent + " > .back").css("transform", "scale(0)");
        $("#"+imageToShowParent + " > .back2").css("transform", "scale(0)");
        $("#"+imageToShow + " > .box-label-one").css("left","0");
        $("#"+imageToShow + " > .box-label-two").css("left","100%");
        $("#"+imageToShow + " > .box-label-three").css("left","100%");
    });
});
