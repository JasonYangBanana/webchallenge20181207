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
    });
    $('li[data-filter=mina]').click(function () {
        $grid.isotope({
            filter: '.mina'
        });
    });
    $('li[data-filter=momo]').click(function () {
        $grid.isotope({
            filter: '.momo'
        });
    });
    $('li[data-filter=miu]').click(function () {
        $grid.isotope({
            filter: '.miu'
        });
    });
});