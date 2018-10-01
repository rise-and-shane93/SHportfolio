var $submitMessage = $('form .btn-outline-success');
var $submitBtn = $('form .btn-submit');
var $cardFront = $('.about-front');
var $returnButton = $('.return-button');

$submitMessage.hide();
$submitBtn.click(function() {
    if($(":input, textarea").val() !== "" )
    $submitMessage.slideDown(500).delay(5000).slideUp(500);
});

$cardFront.click(function () {
    $cardFront.fadeOut(500);
});

$returnButton.click(function () {
    $cardFront.fadeIn(500);
});

//link smooth scrolling
var $aboutLink = $('.nav-item:nth-child(2)');
var $aboutSection = $('#about');
var $contactLink = $('.nav-item:nth-child(4)');
var $contactSection = $('#contact');

$aboutLink.click(function() {
    $('html, body').animate({scrollTop: $aboutSection.offset().top}, 800);
    return false;
});

$contactLink.click(function() {
    $('html, body').animate({scrollTop: $contactSection.offset().top}, 800);
    return false;
});

//smooth scrolling up-arrow
var $upArrow = $('.up-arrow');
$upArrow.css('opacity', '0');

$(window).scroll(function() {
    if ($(this).scrollTop() > 200) {
        $upArrow.css('opacity', '1').fadeIn();
    } else {
        $upArrow.css('opacity', '0').fadeOut();
    }
});

$upArrow.click(function() {
    $('html, body').animate({scrollTop: 0}, 800);
    return false;
});

//new website message
var $adenaSiteButton = $('#adena-harper');
var $newSiteMessage = $('.new-website');

$newSiteMessage.hide();

$adenaSiteButton.mouseenter(function(evt) {
    $newSiteMessage.slideDown();
});

$adenaSiteButton.mouseout(function(evt) {
    $newSiteMessage.slideUp();
})