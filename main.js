jQuery(document).ready(function($){function d(a){var b=$(window).scrollTop(),c=a.offset().top,d=c+a.height(),e=c-.95*$(window).height();return b>=e&&d>=b}function e(){offset=0,$(".animate").each(function(){d($(this))&&($(this).hasClass("img-layer-1")?setTimeout(()=>{$(this).removeClass("fade-in")},400):$(this).hasClass("img-layer-2")?setTimeout(()=>{$(this).removeClass("fade-in")},600):($(this).removeClass("slide-up"),$(this).removeClass("big-slide-up"),$(this).removeClass("fade-in"),offset+=100))})}function a(){$(".menuTrigger").each(function(){let a=$(this).data("menu-trigger");d($(this))?(console.log($(this).data("menu-trigger")+" is visible"),$(this).hasClass("contact-section")?($('#ulMenu li[data-section="work"]').removeClass("active"),$('#ulMenu li[data-section="contact"]').addClass("active")):$('#ulMenu li[data-section="'+a+'"]').addClass("active")):$('#ulMenu li[data-section="'+a+'"]').removeClass("active")})}function b(){$(document).scrollTop()>20?$("header").addClass("resizeHeader"):$("header").removeClass("resizeHeader")}function c(){d($("#georgeLine"))&&setTimeout(()=>{$("#georgeLine").css("width","185px")},800)}$("#ulMenu li").click(function(){let a=$(this).data("section");$("html,body").animate({scrollTop:$("#"+a).offset().top},500)}),setTimeout(function(){offset=0,e()},100),$(window).scroll(function(){offset=0,e()}),a(),b(),c(),$(window).scroll(function(){a(),b(),c()})})
