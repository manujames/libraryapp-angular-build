$(window).bind("load",function(){!function(a){"use strict";a('a.js-scroll-trigger[href*="#"]:not([href="#"])').click(function(){if(location.pathname.replace(/^\//,"")==this.pathname.replace(/^\//,"")&&location.hostname==this.hostname){var n=a(this.hash);if((n=n.length?n:a("[name="+this.hash.slice(1)+"]")).length)return a("html, body").animate({scrollTop:n.offset().top-72},1e3,"easeInOutExpo"),!1}}),a(".js-scroll-trigger").click(function(){a(".navbar-collapse").collapse("hide")});var n=function(){a("#mainNav").offset().top>100?a("#mainNav").addClass("navbar-shrink"):a("#mainNav").removeClass("navbar-shrink")};n(),a(window).scroll(n)}(jQuery)});