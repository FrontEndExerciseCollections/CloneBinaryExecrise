/**
 * Created by One on 9/10/16.
 */
console.log("hello, One");

(function ($) {

    $(function () {
        var $window = $(window),
            $body = $('body'),
            $head = $('#head'),
            $post = $('.post');
        
        $body.addClass('is-loading');

        // $window.on('load', function () {
        //     window.setTimeout(function () {
        //         $body.removeClass('is-loading')
        //     }, 100);
        // });

        $('#menu-open').click(function () {
            event.preventDefault();
            $("#menu").addClass('visible');
        });

        $('#menu-close').click(function () {
            event.preventDefault();
            $("#menu").removeClass('visible');
        });

        $('.scrolly').scrolly({
            speed: 1000,
            offset: $head.outerHeight() -1
        });

        var flag = 1;
        $post.each(function () {
            var $this = $(this),
                $image = $this.find('.image'),
                $img = $image.find('img'),
                $more = $this.find('.more');


            $image.css('background','url(' + $img.attr('src')+')' + ' ' + 'no-repeat 75% center');
            $image.css('order', flag > 0 ? 2 : 1);
            flag *= -1;



        });

        var make = function (show) {
            $post.each(function (index) {
                var $this = $(this),
                    $pubInfo = $(this).find('.pub-info'),
                    $more = $(this).find('.more'),
                    $indicator = $this.find('.indicator'),
                    $moreBtn = $this.find('.moreBtn'),
                    $indicatorArrow = $this.find('.indicator a');

                if (index % 2 !== 0) {

                    $indicator.removeClass('showLeft');
                    $indicator.addClass('showRight');

                } else {
                    $indicator.removeClass('showRight');
                    $indicator.addClass('showLeft');
                }

                $indicator.css('display', show === true ? "block" : "none");

                $more.removeClass('more-2');
                $indicatorArrow.removeClass('hud');

                if (show && index %2 !== 0) {
                    $moreBtn.css("text-align", 'left');
                    $pubInfo.css('text-align', 'left');

                    $indicatorArrow.hover(function () {
                        $indicatorArrow.addClass('hud');
                    });

                    $more.hover(function () {
                        $more.addClass('more-2');
                    });

                } else if (show){
                    $moreBtn.css("text-align", 'right');
                    $pubInfo.css("text-align", 'right');
                } else {
                    $moreBtn.css("text-align", 'left');
                    $pubInfo.css("text-align", 'left');
                }
            });
        };

        skel.breakpoints({
            xlarge:	'(max-width: 1680px)',
            large:	'(max-width: 1280px)',
            medium:	'(max-width: 980px)',
            small:	'(max-width: 736px)',
            xsmall:	'(max-width: 480px)'
        });

        if ($window.width() >= 980) {
            make(true);
        }

        skel.on("-medium", function () {
            console.log("medium");
            make(true);
        }).on("+medium", function () {
            console.log("----medium");
            make(false);
        });

    });

}(jQuery));


