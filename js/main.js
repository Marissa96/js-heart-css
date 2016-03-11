var $header = $('header');
$header.addClass('masthead');

var $h1 = $('h1');
$h1.removeClass('big-heading');
$h1.addClass('logo');

var $main = $('main');
$main.addClass('wrapper');
$('main p:first-child').addClass('intro');
$('main ul').addClass('slug-list');

var $h2 = $('h2');
$h2.addClass('slug-head');

var $img = $('img');
$img.addClass('slug-img');

var $li = $('li');
$('li:first-child').addClass('slug-list-first');
$('li:last-child').addClass('slug-list-last');
$('li:last-child').show()

var $dl = $('dl');
$dl.addClass('classification');

var $dt = $('dt');
$dt.removeClass('big-label');
