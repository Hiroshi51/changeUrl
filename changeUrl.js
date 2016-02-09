/*
Name : changeUrl
ver  : 1.0
LatestUpdate : 2016/01/23
*/

(function($) {
    //to forcibly change href attr
    $.fn.switchUrl = function(previous,TargetUrl){
  
 　　$("this").each(function() { 
     var newUrl = null;
     var newUrl = $(this).attr('href').replace('previous','TargetUrl');
    $(this).attr('href',newUrl);
    });

	return(this);
    };
})(jQuery);