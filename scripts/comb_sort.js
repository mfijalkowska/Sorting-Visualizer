function Comb() {
    delay=0;

    var gap =array_size;
    var swapped = true;

    while (gap !=1 || swapped ==1) {
        gap=nextGap(gap);
        swapped = false;

        for(var i=0; i<array_size-gap; i++){

            if(bar_heights[i]>bar_heights[i+gap]) {
                div_update(divs[i],bar_heights[i],"#f6bd60");//Color update yellow
                div_update_no_delay(divs[i+gap],bar_heights[i+gap],"#f6bd60");//Color update

                div_update(divs[i],bar_heights[i],"#f28482");//Color update red
                div_update_no_delay(divs[i+gap],bar_heights[i+gap],"#f28482");//Color update

                var temp=bar_heights[i];
                bar_heights[i]=bar_heights[i+gap];
                bar_heights[i+gap]=temp;

                div_update(divs[i],bar_heights[i],"#f28482");//Color update red
                div_update_no_delay(divs[i+gap],bar_heights[i+gap],"#f28482");//Color update

                div_update(divs[i],bar_heights[i],"pink");//Color update
                div_update_no_delay(divs[i+gap],bar_heights[i+gap],"pink");//Color update
                swapped = true;
            }
        }
    }

    for (var i =0; i<array_size;i++ ){
        div_update(divs[i], bar_heights[i], "#84a59d");
    }

}

function nextGap(gap) {
    gap =(gap*10)/13;
    if (gap<1) {
        return 1;
    }
    return gap;
}