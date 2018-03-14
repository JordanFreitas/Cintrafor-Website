function debounce(a,b){var c;return function(){function d(){a(),c=null}c&&clearTimeout(c),c=setTimeout(d,b||100)}}function getFilterValue(a){var b="",c=!1;return a.addClass("select_active"),$(".labelToggle > select").each(function(){".arts-sci-arts, .arts-sci-humanities, .arts-sci-natural-sci, .arts-sci-social-sci, .arts-sci-all-divisions"==$(this).val()?c=!0:b+=$(this).val()}),filterValueReturn=c?".arts-sci-arts"+b+", .arts-sci-humanities"+b+", .arts-sci-natural-sci"+b+", .arts-sci-social-sci"+b+", .arts-sci-all-divisions"+b:b,filterValueReturn}$(window).load(function(){function a(a){var b=a;b.find(".front").css("background-image","url("+b.data("img")+")")}function b(a){var b=(g-a.height())/2;$mobile=h<768?50:b,j.one("arrangeComplete",function(){$("html, body").animate({scrollTop:a.offset().top-$mobile},900)})}function c(a){var b=a.find(".full-bio"),c=a.find(".flipper"),d=!1===b.attr("aria-hidden",!1),e=!0!==c.attr("aria-expanded",!0);b.attr("aria-hidden",d),c.attr("aria-expanded",e)}var d,e=$("#searcher_wrap"),f=$("#searcher"),g=$(window).height(),h=$(window).width(),i=$("#filter"),j=$(".grid").isotope({itemSelector:".grid-item",percentPosition:!0,masonry:{columnWidth:".grid-sizer"},filter:".2017:not(.title-card)"});j.one("arrangeComplete",function(){$("#overlay").fadeOut(300,function(){$(this).remove()})}),j.isotope();var k=$(".quicksearch").keyup(debounce(function(){d=new RegExp(k.val(),"gi");var a=getFilterValue(i)?getFilterValue(i):"*";j.isotope({filter:function(){var b=$(this);return(!d||b.text().match(d))&&b.is(":not(.title-card)")&&b.is(a)}})},200));if($(".featured").each(function(b,c){a($(c))}),j.on("click",".grid-item",function(){var d=$(this),e=d.data("name"),f=e&&"#name="+e;d.hasClass("open")||d.hasClass("special")?(d.removeClass("open"),c(d)):($(".grid-item").removeClass("open"),d.addClass("open"),a(d),b(d),window.location.hash=f,c(d)),j.isotope()}),$("#clear").on("click",function(a){a.preventDefault(),$("select").prop("selectedIndex",0),$(".grid-item").removeClass("open"),i.removeClass("select_active"),i.find("li").removeClass("labelToggle"),window.location.hash="",j.isotope({filter:":not(.title-card)"})}),i.on("change","select",function(){""===this.value?$(this).parent("li").removeClass("labelToggle"):$(this).parent("li").addClass("labelToggle");var a=new RegExp($(".quicksearch").val(),"gi"),b=getFilterValue(i)?getFilterValue(i):"*";j.isotope({filter:function(){var c=$(this);return(!a||c.text().match(a))&&c.is(":not(.title-card)")&&c.is(b)}})}),i.each(function(a,b){var c=$(b);c.on("click","button",function(){c.find(".is-checked").removeClass("is-checked"),$(this).addClass("is-checked")})}),$("#searcher").on("click",function(a){a.preventDefault(),e.find("input").focus(),e.toggleClass("active_search"),f.hasClass("is-checked")&&(e.find("input").val(""),$(".quicksearch").keyup()),f.toggleClass("is-checked")}),$(document).on("keyup",function(a){27==a.keyCode&&$("#searcher").hasClass("is-checked")&&(e.toggleClass("active_search"),f.toggleClass("is-checked"),e.find("input").val(""))}),$(document).keypress(function(a){13==a.which&&$(a.target).trigger("click")}),location.hash.match(/^#name/)){var l=location.hash.substring(6),m=$('*[data-name="'+l+'"]');m.toggleClass("open"),j.isotope(),a(m),b(m),c(m)}$(".tags").on("click","a",function(a){var b=$(this),c=a;$text=b.text(),c.preventDefault(),c.stopPropagation(),i.addClass("select_active"),j.isotope({filter:function(){return!$text||$(this).find(".tags").text().match($text)}})})}),"onpropertychange"in document&&window.matchMedia&&$("html").addClass("ie10");