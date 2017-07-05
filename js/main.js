$(document).ready(function () {

    var controller = new ScrollMagic.Controller({
        vertical: false
    });

    $('.stat').each(function () {
        var currentStrong = this;

        var tween = new TimelineMax()
            .fromTo(currentStrong, .5, {
                scale: 0,
                opacity: 0
            }, {
                scale: 1,
                opacity: 1,
                ease: Back.easeOutIn
            });

        var scene = new ScrollMagic.Scene({
                triggerElement: currentStrong,
                duration: 0,
                offset: -200,
                reverse: true
            })
            .setTween(tween)
            .addTo(controller);
    });
    $('.block-text').each(function () {
        var currentStrong = this;

        var tween = new TimelineMax()
            .fromTo(currentStrong, .5, {
                scale: 0,
                opacity: 0
            }, {
                scale: 1,
                opacity: 1,
                ease: Back.easeOut
            });

        var scene = new ScrollMagic.Scene({
                triggerElement: currentStrong,
                duration: 0,
                offset: -570,
                reverse: true
            })
            .setTween(tween)
            .addTo(controller);
    });

    new ScrollMagic.Scene({
            triggerElement: "#dialogue1"
		})
        .setClassToggle("#stat2", "hide-element") // add class toggle
        .addTo(controller);
});



$(window).scroll(function () {
    if ($(document).scrollTop() > 10000) { //Here 200 may be not be exactly 200px
        $('#stat1').text("Curabitur et hendrerit enim, ac pellentesque tortor. Praesent tristique pellentesque est, at porttitor turpis vehicula id.");
        $('#stat3').text("Sed odio mi, auctor nec tortor quis, fermentum commodo enim. Cras tempor sollicitudin urna, non lacinia velit dignissim ut.");

    } else {
        $('#stat1').text("Curabitur et hendrerit enim, ac pellentesque tortor. Praesent tristique pellentesque est, at porttitor turpis vehicula id.");
    }
});

$("#button0").click(function () {
    $('html, body').animate({
        scrollTop: 5600
    }, 1500);
});


$("#button1").click(function () {
    $('html, body').animate({
        scrollTop: 10000
    }, 1500);
	$('html, body').delay(5000).animate({
        scrollTop: 13800
    }, 1500);
});


$("#button2").click(function () {
    $('html, body').animate({
        scrollTop: 17750
    }, 3500);

    $('html, body').delay(5000).animate({
        scrollTop: 23000
    }, 1500);

    $('html, body').delay(7000).animate({
        scrollTop: 27300
    }, 1500);

    $('html, body').delay(7000).animate({
        scrollTop: 30500
    }, 1500);
});

$("#button3").click(function () {
    $('html, body').animate({
        scrollTop: 33900
    }, 1500);
});

$("#button4").click(function () {
    $('html, body').animate({
        scrollTop: 38900
    }, 2500);
});