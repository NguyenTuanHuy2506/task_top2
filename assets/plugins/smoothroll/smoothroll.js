$(function(){
	function smoothRoll(classFirst) {
		$(classFirst).each(function() {
			var spaceTop = $(this).offset().top;
			var chieucao = $(this).height();
			var spaceBottom = $(document).height() - $(this).offset().top - chieucao;
			var scrollBottom = $(document).height() + $(window).height() - $(window).scrollTop();
			var scrollSpaceTop = $(window).scrollTop();
			if ((spaceBottom < scrollBottom - $(window).height()) && (spaceTop + (chieucao / 2) < scrollSpaceTop + $(window).height())) {
				$(this).css({
					'opacity' : '1',
					'transform' : 'translate3d(0, 0, 0)',
				});
			}
		});
	}
	function scrollToID(id){
		var temp = $(id).offset().top;
		$("html,body").animate({ 
			scrollTop: $(id).offset().top
		}, temp);
		return false;
	}

	
	$(window).on('load scroll',function() {
		smoothRoll('.smoothRoll');
	});
	$('.internalLink').on('click', function(){
		scrollToID($(this).data('id'));
	});
});