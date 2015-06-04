$(document).ready(function() {
	$("#play-videos").click(function(){
		playVideos('aDorTBEhEtk' , 'ihv4f7VMeJw');
	});

	function playVideos(url1, url2){
		"use strict";
		$(".videos").html('<iframe src="https://www.youtube.com/embed/'+url1+'?autoplay=1&loop=1&rel=0&wmode=transparent" frameborder="0"></iframe><iframe src="https://www.youtube.com/embed/'+url2+'?autoplay=1&loop=1&rel=0&wmode=transparent" frameborder="0"></iframe>');
	};

	$("#play-videoshd").click(function(){
		playVideosHD('aDorTBEhEtk' , 'ihv4f7VMeJw');
	});

	function playVideosHD(url1, url2){
		"use strict";
		$(".videos").html('<object><param name="movie" value="https://www.youtube.com/v/'+url1+'?autoplay=1&loop=1&rel=0&vq=hd1080&"></param><param name="wmode" value="transparent"></param><param name="allowFullScreen" value="true"></param><param name="allowscriptaccess" value="always"></param><embed src="https://www.youtube.com/v/'+url1+'?autoplay=1&loop=1&rel=0&vq=hd1080" type="application/x-shockwave-flash" allowscriptaccess="always" wmode="transparent" allowfullscreen="true"></embed></object><object><param name="movie" value="https://www.youtube.com/v/'+url2+'?autoplay=1&loop=1&rel=0&vq=hd1080&wmode=transparent"></param><param name="allowFullScreen" value="true"></param><param name="allowscriptaccess" value="always"></param><embed src="https://www.youtube.com/v/'+url2+'?autoplay=1&loop=1&rel=0&vq=hd1080&wmode=transparent" type="application/x-shockwave-flash" allowscriptaccess="always" allowfullscreen="true"></embed></object>');
	};

});
