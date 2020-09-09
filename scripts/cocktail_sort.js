function Cocktail() {
    var swapped = true;
    var start =0;
    var left = 0;
    var end =array_size-1;
    delay=0;
    while (swapped) {
        swapped = false;

        for (var i= start; i<end;i++) {
            if (bar_heights[i] > bar_heights[i+1]) {
                div_update(divs[i],bar_heights[i],"#f6bd60");
                div_update_no_delay(divs[i+1],bar_heights[i+1],"#f6bd60");
                var temp=bar_heights[i];
                bar_heights[i]=bar_heights[i+1];
                bar_heights[i+1]=temp;
                div_update(divs[i],bar_heights[i],"#f6bd60");
                div_update_no_delay(divs[i+1],bar_heights[i+1],"#f6bd60");

                div_update(divs[i],bar_heights[i],"pink");
                div_update_no_delay(divs[i+1],bar_heights[i+1],"pink");
                swapped = true;
            }

        }
        if (!swapped){
            break;
        }
        div_update(divs[end],bar_heights[end],"#84a59d");
        swapped = false;
        end--;

        for(var i= end-1;i>=start;i--) {
            if (bar_heights[i] > bar_heights[i+1]) {
                div_update(divs[i],bar_heights[i],"#f6bd60");
                div_update_no_delay(divs[i+1],bar_heights[i+1],"#f6bd60");
                var temp=bar_heights[i];
                bar_heights[i]=bar_heights[i+1];
                bar_heights[i+1]=temp;
                div_update(divs[i],bar_heights[i],"#f6bd60");
                div_update_no_delay(divs[i+1],bar_heights[i+1],"#f6bd60");
                div_update(divs[i],bar_heights[i],"pink");
                div_update_no_delay(divs[i+1],bar_heights[i+1],"pink");
                swapped = true;
            }
        }
        div_update(divs[left],bar_heights[left],"#84a59d");
        left++;
    }

    for (var i=0;i<array_size;i++){
        div_update(divs[i],bar_heights[i],"#84a59d");   //color update green
    }
}