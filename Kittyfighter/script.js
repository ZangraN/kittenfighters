$(document).ready(function(){
    var count = 0;
    var buttonCounter = document.getElementById('click-cat');
    var counter = document.getElementById('counter');
    var resetScore = document.getElementById('reset-score');
    
    var warningPopup = document.getElementsByClassName('warning-popup');
    var warningPopupYes = document.getElementById('warning-popup_yes');
    var warningPopupNo = document.getElementById('warning-popup_no');

    $(buttonCounter).on('click', function(){
        count++;
        counter.innerHTML = count;
        if (count == 50) {
            $(buttonCounter).removeClass('tap-kitty_start')
            $(buttonCounter).addClass('tap-kitty_1')
        }
        else if (count == 100) {
            $(buttonCounter).removeClass('tap-kitty_1')
            $(buttonCounter).addClass('tap-kitty_2')
        }
        else if (count == 150) {
            $(buttonCounter).removeClass('tap-kitty_2')
            $(buttonCounter).addClass('tap-kitty_3')
        }

    })
    
    $(resetScore).on('click', function(){
        $(warningPopup).addClass('active')
    })

    $(warningPopupNo).on('click', function(){
        $(warningPopup).removeClass('active')
    })

    $(warningPopupYes).on('click', function(){
        count=0;
        counter.innerHTML=count;
        $(warningPopup).removeClass('active')
        $(buttonCounter).removeClass('tap-kitty_1')
        $(buttonCounter).removeClass('tap-kitty_2')
        $(buttonCounter).removeClass('tap-kitty_3')
        $(buttonCounter).addClass('tap-kitty_start')
    })

});

