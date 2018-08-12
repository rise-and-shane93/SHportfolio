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