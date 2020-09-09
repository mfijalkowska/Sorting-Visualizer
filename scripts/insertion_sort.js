
function Insertion() {
    delay=0;

    for(var j=0;j<array_size;j++) {
        div_update(divs[j],bar_heights[j],"#f6bd60");//Color update yellow

        var key= bar_heights[j];
        var i=j-1;
        while(i>=0 && bar_heights[i]>key) {
            div_update(divs[i],bar_heights[i],"#f28482");//Color update red
            div_update(divs[i+1],bar_heights[i+1],"#f28482");//Color update

            bar_heights[i+1]=bar_heights[i];

            div_update(divs[i],bar_heights[i],"#f28482");//Height update red
            div_update(divs[i+1],bar_heights[i+1],"#f28482");//Height update
    
            div_update(divs[i],bar_heights[i],"#84a59d");//Color update green
            if(i==(j-1)) {
                div_update(divs[i+1],bar_heights[i+1],"#f6bd60");//Color update yellow
            }
            else{
                div_update(divs[i+1],bar_heights[i+1],"#84a59d");//Color update green
            }
            i-=1;
        }
        bar_heights[i+1]=key;

        for(var t=0;t<j;t++) {
            div_update(divs[t],bar_heights[t],"#84a59d");//Color update green
        }
    }
    div_update(divs[j-1],bar_heights[j-1],"#84a59d");//Color update green
}