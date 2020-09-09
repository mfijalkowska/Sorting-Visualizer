function moveBack(i){

    for( ; i>0 && bar_heights[i-1] >bar_heights[i];i--) {

        div_update(divs[i],bar_heights[i],"#f6bd60");
        div_update_no_delay(divs[i-1],bar_heights[i-1],"#f6bd60");

        var temp = bar_heights[i];
        bar_heights[i] = bar_heights[i-1];
        bar_heights[i-1]=temp;

        div_update(divs[i],bar_heights[i],"#f6bd60");
        div_update_no_delay(divs[i-1],bar_heights[i-1],"#f6bd60");

        div_update(divs[i],bar_heights[i],"pink");
        div_update_no_delay(divs[i-1],bar_heights[i-1],"pink");
    }
}

function Gnome() {
    delay=0;

    for (var i=1;i<array_size;i++){
        if(bar_heights[i-1]>bar_heights[i]) {
            moveBack(i);
        }
    }
    for (var i=array_size-1;i>=0;i--){
        div_update(divs[i],bar_heights[i],"#84a59d");
    }
}
