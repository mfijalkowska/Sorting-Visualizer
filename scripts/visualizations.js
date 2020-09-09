/*
    Author:   Magdalena Fijalkowska
    email:    magdalena.m.fijalkowska@gmail.com
*/
var speed=10;

input_speed.addEventListener("input",vis_speed);

function vis_speed()
{
    var array_speed=input_speed.value;
    switch(parseInt(array_speed))
    {
        case 1: speed=1;
                break;
        case 2: speed=5;
                break;
        case 3: speed=10;
                break;
        case 4: speed=100;
                break;
        case 5: speed=3000;
                break;
    }
    
    delay_time=10000/(Math.floor(array_size/10)*speed);        //Calculate the delay time
}

var delay_time=10000/(Math.floor(array_size/10)*speed);
var delay=0; //set initial delay time

function div_update(cont,height,color)
{
    window.setTimeout(function(){
        cont.style=" margin:0% " + margin_size + "%; width:" + (100/array_size-(2*margin_size)) + "%; height:" + height + "%; background-color:" + color + ";";
    },delay+=delay_time);
}
function div_update_no_delay(cont,height,color)
{
    window.setTimeout(function(){
        cont.style=" margin:0% " + margin_size + "%; width:" + (100/array_size-(2*margin_size)) + "%; height:" + height + "%; background-color:" + color + ";";
    },delay);
}
