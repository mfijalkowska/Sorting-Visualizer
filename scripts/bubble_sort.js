function Bubble() {
    delay=0;

    for(var i=0;i<array_size-1;i++) {
        for(var j=0;j<array_size-i-1;j++) {
            div_update_no_delay(divs[j],bar_heights[j],"#f6bd60");//Color update
            div_update_no_delay(divs[j+1],bar_heights[j+1], "#f6bd60");

            if(bar_heights[j]>bar_heights[j+1]) {
                div_update(divs[j],bar_heights[j], "#f28482");//Color update
                div_update_no_delay(divs[j+1],bar_heights[j+1], "#f28482");//Color update

                var temp=bar_heights[j];
                bar_heights[j]=bar_heights[j+1];
                bar_heights[j+1]=temp;

                div_update(divs[j],bar_heights[j], "#f28482");//Height update
                div_update(divs[j+1],bar_heights[j+1], "#f28482");//Height update
            }
            div_update(divs[j],bar_heights[j], "#84a59d");//Color update
            div_update_no_delay(divs[j+1],bar_heights[j+1], "#84a59d");//Color update

            div_update(divs[j],bar_heights[j], "pink");//Color update
        }
        
        div_update(divs[j],bar_heights[j], "#84a59d");//Color update
    }
    div_update(divs[0],bar_heights[0], "84a59d");//Color update
}