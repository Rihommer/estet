"use strict";$(".js-button--hamburger").on("click",function(){$(".js-button--hamburger").toggleClass("active"),$(".js-hamburger").toggleClass("active"),$(".js-hamburger__shadow").toggleClass("active"),$(this).hasClass("active")?($(".js-page-wrapper").addClass("no-scroll no-touch"),$(".js-button--hamburger").prependTo(".js-hamburger__wrapper-button")):($(".js-page-wrapper").removeClass("no-scroll no-touch"),$(".js-button--hamburger").prependTo(".js-header__wrapper-button"))}),$(".js-hamburger__shadow").on("click",function(e){$(".js-hamburger").removeClass("active"),$(".js-button--hamburger").removeClass("active"),$(".js-button--hamburger").prependTo(".js-header__wrapper-button"),$(".js-page-wrapper").removeClass("no-scroll no-touch"),$(".js-hamburger__shadow").removeClass("active")});