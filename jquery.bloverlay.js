/** 
 * blOverlay, creates a blocky - (transparent) background for a text overlay
 * New Witness Media, Inc. jQuery plug-in
 * New Witness Media, Inc. http://newwitness.com/
 * URL: http://newwitness.com/products/bloverlay
 * Version: 0.1a = 20090815
 * Licensed under the MIT License: 
 * Copyright (c) 2009 New Witness Media, Inc.
 * Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:
 * The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
*/

/**
 * blOverlay
 * 4 optional parameters
 * @param {Object} align
 * @param {Object} rgb
 * @param {Object} alpha
 * @param {Object} speed
 * usage example: 
 * $("#primaryfeaturecontent h1").blOverlay('right','0,5,10',0.5,1000); // a right-aligned, dark, 50% opaque background block that moves into view in a 1 second duration animation
 * IE8 does not yet have support for the rgba (rgb alpha) CSS3 property - so defaults to 100% opacity
 */
(function($) { 

 	$.fn.blOverlay = function(align,rgb,alpha,speed){
		if(align == null) align='right';
		if(alpha == null) alpha = 0.5;
		if(rgb == null) rgb = '0,0,0';
  		if(speed == null) speed = 1000;
		margin = 'margin-' + align;
		
		this.each(
  			function(){
				$(this).css({'text-align':align,'overflow':'hidden'});
				$(this).wrapInner('<span class="bl-overlay" style="background:rgb(' + rgb +');background:rgba(' + rgb + ',' + alpha + ');"></span>');
				$(this).children("span.bl-overlay").css({margin:'-' + $(this).children("span.bl-overlay").width() + 'px'});
				$(this).children("span.bl-overlay").animate({margin:'0'},speed);
   			}
  		)		
		
  		return true;
  	};
	
	
		
})(jQuery);
