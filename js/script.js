//URL redirect
// if (location.protocol != 'https:') {
// 	location.href= 'https:' + window.location.href.substring(window.location.protocol.length);
// }

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
var $homeLink = $('.nav-item:first-child');
var $aboutLink = $('.nav-item:nth-child(2)');
var $aboutSection = $('#about');
var $contactLink = $('.nav-item:nth-child(4)');
var $contactSection = $('#contact');
var $jumbotron = $('.jumbotron');
var offsetValue;
var $navbarNav = $('.navbar-nav');
var $featured = $('#featured');
var $featuredLink = $('.nav-item:nth-child(3)');
//var userAgent

//sets the offsetValue variable based on the user agent
/*
if ( navigator.userAgent.match(/Android/i)
        || navigator.userAgent.match(/webOS/i)
        || navigator.userAgent.match(/iPhone/i)
        || navigator.userAgent.match(/iPad/i)
        || navigator.userAgent.match(/iPod/i)
        || navigator.userAgent.match(/BlackBerry/i)
        || navigator.userAgent.match(/Windows Phone/i)
        ) {
            offsetValue = 150;
        } else {
            offsetValue = 130;
        }
*/
/*
$navbarNav.click(function(e) {
    if ( navigator.userAgent.match(/Android/i)
        || navigator.userAgent.match(/webOS/i)
        || navigator.userAgent.match(/iPhone/i)
        || navigator.userAgent.match(/iPad/i)
        || navigator.userAgent.match(/iPod/i)
        || navigator.userAgent.match(/BlackBerry/i)
        || navigator.userAgent.match(/Windows Phone/i)
        ) {
            offsetValue = 150;
            if ($(event.target).text() === 'Home') {
                $('html, body').animate({scrollTop: 0}, 800);
                // switch active classes
                return false;
            } else if ($(event.target).text() === 'About') {
                $('html, body').animate({scrollTop: $aboutSection.offset().top-offsetValue}, 800);
                // switch active classes
                return false;
            } else if ($(event.target).text() === 'Portfolio') {
                $('html, body').animate({scrollTop: $featured.offset().top-offsetValue}, 800);
                // switch active classes
                return false;
            } else {
                $('html, body').animate({scrollTop: $contactSection.offset().top-offsetValue}, 800);
                // switch active classes
                return false;
            }
            return false;
        } else {
            offsetValue = 130;
            if ($(event.target).text() === 'Home') {
                $('html, body').animate({scrollTop: 0}, 800);
                // switch active classes
                return false;
            } else if ($(event.target).text() === 'About') {
                $('html, body').animate({scrollTop: $aboutSection.offset().top-offsetValue}, 800);
                // switch active classes
                return false;
            } else if ($(event.target).text() === 'Portfolio') {
                $('html, body').animate({scrollTop: $featured.offset().top-offsetValue}, 800);
                // switch active classes
                return false;
            } else {
                $('html, body').animate({scrollTop: $contactSection.offset().top-offsetValue}, 800);
                // switch active classes
                return false;
            }
            return false;
        }
    $(event.target).toggleClass('active');
});
*/

//switch active class on window scroll
/*
$(window).scroll(function(e) {
    if ( navigator.userAgent.match(/Android/i)
        || navigator.userAgent.match(/webOS/i)
        || navigator.userAgent.match(/iPhone/i)
        || navigator.userAgent.match(/iPad/i)
        || navigator.userAgent.match(/iPod/i)
        || navigator.userAgent.match(/BlackBerry/i)
        || navigator.userAgent.match(/Windows Phone/i)
        ) {
            offsetValue = 150;
            if ($('html, body').offset().top === 0 && $aboutSection.offset().top >= 0) {
                $homeLink.toggleClass('active');
                return false;
            } else if ($aboutSection.offset().top === 0) {
                $aboutLink.toggleClass('active');
                switch active classes
                return false;
            } else if ($featured.offset().top === 0) {
                $featuredLink.toggleClass('active');
                switch active classes
                return false;
            } else if ($contactSection.offset().top === 0) {
                $contactLink.toggleClass('active');
                switch active classes
                return false;
            }
            return false;
        } else {
            offsetValue = 130;
            if ($('html, body').offset().top === 0) {
                $homeLink.toggleClass('active');
                return false;
            } else if ($aboutSection.offset().top === 0) {
                $aboutLink.toggleClass('active');
                switch active classes
                return false;
            } else if ($featured.offset().top === 0) {
                alert('scroll');
                $featuredLink.toggleClass('active');
                switch active classes
                return false;
            } else if ($contactSection.offset().top === 0) {
                $contactLink.toggleClass('active');
                switch active classes
                return false;
            }
        }
    $(event.target).toggleClass('active');
});
*/
/*
$homeLink.click(function() {
    $('html, body').animate({scrollTop: 0}, 800);
    return false;
});


$aboutLink.click(function() {
    $('html, body').animate({scrollTop: $aboutSection.offset().top-130}, 800);
    return false;
});

$contactLink.click(function() {
    $('html, body').animate({scrollTop: $contactSection.offset().top-130}, 800);
    return false;
});
*/

var sections = $('section')
  , nav = $('.navbar-nav')
  , navbar = $('.navbar')
  , navbar_height = navbar.outerHeight();
 
$(window).on('scroll', function () {
  var cur_pos = $(this).scrollTop();
 
  sections.each(function() {
    var top = $(this).offset().top - navbar_height,
        bottom = top + $(this).outerHeight();
 
    if (cur_pos >= top && cur_pos <= bottom) {
      nav.find('a').removeClass('active');
      nav.find('a[href="#'+$(this).attr('id')+'"]').addClass('active');
    }
  });
});

nav.find('a').on('click', function () {
    var $el = $(this)
      , id = $el.attr('href');
   
    $('html, body').animate({
      scrollTop: $(id).offset().top - navbar_height
    }, 500);
   
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

/*toggle active class on scroll
once you scroll past a new section, the active 
class changes to the section the user is on*/

// $(window).scroll(function() {
//     if ($aboutSection.offset().top) {
//         alert('you are now in the about section');
//     }
// });

//new website message
var $adenaSiteButton = $('#adena-harper');
var $newSiteMessage = $('.new-website');

$newSiteMessage.hide();

$adenaSiteButton.mouseenter(function(evt) {
    $newSiteMessage.slideDown();
});

$adenaSiteButton.click(function(event) {
    event.preventDefault();
})

$adenaSiteButton.mouseout(function(evt) {
    $newSiteMessage.slideUp();
})