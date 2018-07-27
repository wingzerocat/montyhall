$(document).ready(function() {
    let stage = 0;
    let chosenDoor = 0;
    let givenDoor = 0;

    $('.yes').hide();
    $('.no').hide();

    const randomizer = function() {
        let output = Math.floor(Math.random() * 3);
        return output + 1;
    }

    const setDoor = function(correctDoor) {
        if (correctDoor === 1) {
            $('.doors').find('.door-one').addClass('winner');
        } else if (correctDoor === 2) {
            $('.doors').find('.door-two').addClass('winner');
        } else if (correctDoor === 3) {
            $('.doors').find('.door-three').addClass('winner');
        }
    }

    $('.door-one').on('click', function() {
        if (stage === 0) {
            if ($('.door-two').hasClass('winner')) {
                $('.prompt').text('Door 3 is a loser. Would you like to switch doors?');
                givenDoor = 3;
                $('.door-three').css('background-color', 'red');
            } else {
                $('.prompt').text('Door 2 is a loser. Would you like to switch doors?');
                givenDoor = 2;
                $('.door-two').css('background-color', 'red');
            }
            stage += 1;
        }
        $('.door-one').off();
        $('.door-two').off();
        $('.door-three').off();
       
        $('.yes').show();
        $('.no').show();
        chosenDoor = 1;
    });

    $('.door-two').on('click', function() {
        if (stage === 0) {
            if ($('.door-one').hasClass('winner')) {
                $('.prompt').text('Door 3 is a loser. Would you like to switch doors?');
                givenDoor = 3;
                $('.door-three').css('background-color', 'red');
            } else {
                $('.prompt').text('Door 1 is a loser. Would you like to switch doors?');
                givenDoor = 1;
                $('.door-one').css('background-color', 'red');
            }
            stage += 1;
        }
        $('.door-one').off();
        $('.door-two').off();
        $('.door-three').off();

        $('.yes').show();
        $('.no').show();
        chosenDoor = 2;
    });

    $('.door-three').on('click', function() {
        if (stage === 0) {
            if ($('.door-one').hasClass('winner')) {
                $('.prompt').text('Door 2 is a loser. Would you like to switch doors?');
                givenDoor = 2;
                $('.door-two').css('background-color', 'red');
            } else {
                $('.prompt').text('Door 1 is a loser. Would you like to switch doors?');
                givenDoor = 1;
                $('.door-one').css('background-color', 'red');
            }
            stage += 1;
        }
        $('.door-one').off();
        $('.door-two').off();
        $('.door-three').off();

        $('.yes').show();
        $('.no').show();
        chosenDoor = 3;
    });

    $('.yes').on('click', function() {
        let arr = [1,2,3];
        arr = arr.filter(function(item) {
            return item !== chosenDoor;
        });
        arr = arr.filter(function(item) {
            return item !== givenDoor;
        });
        if (arr[0] === door) {
            $('.prompt').text('winner');
        } else {
            $('.prompt').text('loser');
        }
    });

    $('.no').on('click', function() {
        $('.prompt').html('');

        if (chosenDoor === door) {
            $('.prompt').text('winner');
        } else {
            $('.prompt').text('loser');
        }
    });

    let door = randomizer();
    setDoor(door);
    console.log(door);
});