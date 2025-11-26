/*!
 * Documenter 2.0
 * http://rxa.li/documenter
 *
 * Copyright 2011, Xaver Birsak
 * http://revaxarts.com
 *
 */
( function( $ ) {
	$(document).ready(function() {
		_load_current();
		function _load_current(){
			$("a",'#documenter_nav').on( 'click', function(e) {
				//$accordions = $(this).parents('.accordion');
				var $parent = $(this).parents('.accordion');
				$("a",'#documenter_nav').removeClass('current');
				$(this).addClass('current');
				$('>a',$parent).addClass('current');
			});
		}
	});
} )( jQuery );