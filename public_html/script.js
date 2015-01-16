/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */


$("document").ready(function() {


    $('#woot').accordion({header: "h3"});
    $(".bob").css("background-color", "gold");
    $(".sam").css("background-color", "skyblue");
    $('p:last').css({
        "background-color": "yellow"
    });
    $('p:first').css({
        "background-color": "pink"


    });
    //$('')     
    $('#replaceWText').bind('click', replaceWText);
    $('#randPara').bind('click', addAPara);
    $("h1").bind('mouseover', mouseOverMe).bind('mouseout', mouseOutMe);
    $('h1').bind('click', mouseClick);
    $("h2").bind('mouseover', mouseOverMe).bind('mouseout', mouseOutMe);
    $('h2').bind('click', mouseClick);
    $("document").ready(function() {
        $('#hideLogo').bind('click', hideTheImage);
        $('#showLogo').bind('click', showTheImage);
    });
    function fadeTheImage() {
        $('#logo').fadeOut(2500);
    }
});


function fadeALittle() {
    $('#logo').fadeTo(2500, .30);
}
function toggleTheText() {
    $('h4').toggle(2500);
}

function showTheImage() {
    $('#logo').show('fold')
}

function hideTheImage() {
    $('#logo').hide('explode', {}, 2500);
}

function mouseOutMe() {

}

function removeAPara() {
    $('#randPara p:last').remove();
}
function addAPara() {
    $('#randPara').append('<p>ADDED</p>');
}
function replaceWText() {
    $('#replaceWText').text('Replaced!');
}
function mouseOverMe() {
    $("h1").html("READ AND LISTEN TO THIS SONG ;D");
}

function mouseOverMe() {
    $('h1').html('U MAD?');
}
function mouseClick() {
    $('p').html('JUST KIDDING');
}

function mouseOverMe() {
    $("h2").html("TROLL");
}

function mouseOverMe() {
    $('h2').html('YOU NOW HAVE VIRUSES =D');
}
function mouseClick() {
    $('p').html('JUST KIDDING')

}

