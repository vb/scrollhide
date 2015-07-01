/*
 *  jquery-scrollhide - v1.0.0
 *  Hide when scroll down and show when scroll up. Design pattern from Google Chrome mobile browser
 *  https://github.com/viktorbergehall/scrollhide
 *
 *  Made by Viktor Bergehall
 *  Under MIT License
 */
;(function ( $, window, document, undefined ) {

  'use strict';
    var pluginName = 'scrollhide';

    function Plugin ( element ) {
        this.element = element;
        this._name = pluginName;
        this.init();
    }

    $.extend(Plugin.prototype, {
        init: function () {
            var down, downY = 0, onceDown = true,
              y, lastY = 0,
              upY = 0, onceUp = true,
              el = $(this.element), elHeight = el.height(), elTop = parseInt(el.css('top'));

            jQuery(window).scroll(function() {

                y = $(this).scrollTop();
                down = (y > lastY) ? true : false;

                if( y > 100 ){

                  if (down) {

                    if(onceDown){
                      downY = y;
                      el
                        .removeClass('pinned')
                        .addClass('unpinned')
                        .css({
                          'position': 'absolute',
                          'top': (y + elTop) + 'px'
                        });
                      onceDown = false;
                      onceUp = true;
                    }

                  }else {

                    if(onceUp) {
                      upY = y;

                      if( (y - downY - elTop) >= elHeight ) {
                        el
                          .removeClass('unpinned')
                          .css({
                            'position' : 'absolute',
                            'top' : (y - elHeight) + 'px'
                          });
                      }
                      onceUp = false;
                      onceDown = true;
                    }

                    if( el.hasClass('unpinned') ){

                      if( y <= downY ) {
                        el
                          .removeClass('unpinned')
                          .addClass('pinned')
                          .css({
                            'position': 'fixed',
                            'top': elTop + 'px'
                          });
                      }
                    }

                    if( ((upY - elHeight) - elTop) >= y ){


                      el
                        .removeClass('unpinned')
                        .addClass('pinned')
                        .css({
                          'position': 'fixed',
                          'top': elTop + 'px'
                        });
                    }
                  }

                }

                lastY = y;
            });

        }
    });

    $.fn[ pluginName ] = function ( options ) {
        return this.each(function() {
            if ( !$.data( this, 'plugin_' + pluginName ) ) {
                $.data( this, 'plugin_' + pluginName, new Plugin( this, options ) );
            }
        });
    };

})( jQuery, window, document );
