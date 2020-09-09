function Shell() {

    delay=0;

    for(var gap=Math.floor(array_size/2); gap>=1; gap=Math.floor(gap/2)){
        for(var j=gap; j<array_size; j++){
            for(var i=j-gap; i>=0; i-=gap) {

                div_update(divs[i+gap],bar_heights[i+gap], "#f6bd60");//color update yellow
                div_update_no_delay(divs[i],bar_heights[i], "#f6bd60");//color update

                if(bar_heights[i+gap]>bar_heights[i]) {

                    div_update(divs[i+gap],bar_heights[i+gap], "#84a59d");//color update green
                    div_update_no_delay(divs[i],bar_heights[i], "#84a59d");//color update
                    break;
                }
                else{
                    div_update(divs[i+gap],bar_heights[i+gap], "#f28482");//color update red
                    div_update_no_delay(divs[i],bar_heights[i], "#f28482");//color update

                    var temp0=bar_heights[i];
                    bar_heights[i]=bar_heights[i+gap];
                    bar_heights[i+gap]=temp0;

                    div_update(divs[i+gap],bar_heights[i+gap], "#f28482");//color update red
                    div_update_no_delay(divs[i],bar_heights[i], "#f28482");//color update   

                    div_update(divs[i+gap],bar_heights[i+gap], "#84a59d");//color update green
                    div_update_no_delay(divs[i],bar_heights[i], "#84a59d");//color update  

                    div_update(divs[i],bar_heights[i], "pink");//color update
                }
            }
        }
    }
    div_update(divs[0],bar_heights[0], "#84a59d");//color update green

}