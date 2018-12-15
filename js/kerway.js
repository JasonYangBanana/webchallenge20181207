$(document).ready(function () {
    var $grid = $('.grid').isotope({
        // options
        itemSelector: '.grid-item',
        layoutMode: 'masonry',
        masonry: {
            columnWidth: 200
        }
    });
    $('li[data-filter=melody]').click(function () {
        $grid.isotope({
            filter: '.melody'
        });
        $('.kerwaySubtitle').text('Melody Lin');
        $('html, body').animate({
            scrollTop: $("#kerwayWorks").offset().top
        }, 1000);

    });
    $('li[data-filter=mina]').click(function () {
        $grid.isotope({
            filter: '.mina'
        });
        $('.kerwaySubtitle').text('Mina');
        $('html, body').animate({
            scrollTop: $("#kerwayWorks").offset().top
        }, 1000);
    });
    $('li[data-filter=momo]').click(function () {
        $grid.isotope({
            filter: '.momo'
        });
        $('.kerwaySubtitle').text('Momo');
        $('html, body').animate({
            scrollTop: $("#kerwayWorks").offset().top
        }, 1000);
    });
    $('li[data-filter=miu]').click(function () {
        $grid.isotope({
            filter: '.miu'
        });
        $('.kerwaySubtitle').text('Miu');
        $('html, body').animate({
            scrollTop: $("#kerwayWorks").offset().top
        }, 1000);
    });
    $('.nineDots').click(function () {
        $grid.isotope({
            filter: '*'
        });
        $('.kerwaySubtitle').text('Works');
        $('.kerwaySubtitle').append('<br><span class="kerwayChineseSubtitle">作品</span>');
        $('html, body').animate({
            scrollTop: $("#kerwayWorks").offset().top
        }, 1000);
    });
    $('.arrowUp').click(function () {
        $('html, body').animate({
            scrollTop: $("#kerwayWorks").offset().top
        }, 1000);
    });
});