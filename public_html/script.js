/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */


$("document").ready(function(){
$(".bob").css("background-color", "gray");    
$(".sam").css("background-color", "orange");    
$('p:last').css({
    "background-color": "white",
});
$('p:first').css({
    "background-color": "pink",
 
        
});
});
        
        $("h1").bind('mouseover', mouseOverMe).bind('mouseout', mouseOutMe);
        $('h1').bind('click', mouseClick);
        $("h2").bind('mouseover', mouseOverMe).bind('mouseout', mouseOutMe);
        $('h2').bind('click', mouseClick);

function mouseOverMe(){
    $("h1").html("READ AND LISTEN TO THIS SONG ;D");
}

function mouseOverMe(){
    $('h1').html('U MAD?');
}
function mouseClick(){
    $('p').html('THIS IS A EASTER EGG');
    
}

function mouseOverMe(){
    $("h2").html("TROLL");
}

function mouseOverMe(){
    $('h2').html('U NOW HAVE VIRUSES ;)');
}