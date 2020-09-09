function swap(i,j) {
    div_update(divs[i],bar_heights[i],"#f6bd60");//Color update yellows
    div_update_no_delay(divs[j],bar_heights[j],"#f6bd60");//Color update

    div_update(divs[i],bar_heights[i],"#f28482");//Color update reds
    div_update_no_delay(divs[j],bar_heights[j],"#f28482");//Color update

    var temp=bar_heights[i];
    bar_heights[i]=bar_heights[j];
    bar_heights[j]=temp;

    div_update(divs[i],bar_heights[i],"#f28482");//Height update reds
    div_update_no_delay(divs[j],bar_heights[j],"#f28482");//Height update

    div_update(divs[i],bar_heights[i],"pink");//Color update
    div_update_no_delay(divs[j],bar_heights[j],"pink");//Color update
}

function max_heapify(n,i) {
    var largest=i;
    var l=2*i+1;
    var r=2*i+2;

    if(l<n && bar_heights[l]>bar_heights[largest])
    {
        if(largest!=i) {
            div_update(divs[largest],bar_heights[largest],"#84a59d");//Color update green
        }
        largest=l;
        div_update(divs[largest],bar_heights[largest],"#f28482");//Color update red
    }

    if(r<n && bar_heights[r]>bar_heights[largest]) {
        if(largest!=i) {
            div_update(divs[largest],bar_heights[largest],"#84a59d");//Color update green
        }
        largest=r;
        div_update(divs[largest],bar_heights[largest],"#f28482");//Color update
    }

    if(largest!=i) {
        swap(i,largest);
        max_heapify(n,largest);
    }
}

function Heap() {
    delay=0;
    for(var i=Math.floor(array_size/2)-1;i>=0;i--) {
        max_heapify(array_size,i);
    }
    for(var i=array_size-1;i>0;i--) {
        swap(0,i);
        div_update(divs[i],bar_heights[i],"#84a59d");//Color update
        div_update(divs[i],bar_heights[i],"#f6bd60");//Color update

        max_heapify(i,0);

        div_update(divs[i],bar_heights[i],"#84a59d");//Color update
        div_update(divs[i],bar_heights[i],"#84a59d");//Color update
    }
    div_update(divs[i],bar_heights[i],"#84a59d");//Color update
}