function Merge() {
    
    delay=0;
    merge_main(0,array_size-1);
}

function merge_sort(start,mid,end) {

    var l=start;
    var r=mid+1;
    var arr=[],k=0;

    for(var i=start; i<=end; i++) {

        if(l>mid) {
            arr[k++]=bar_heights[r++];
            div_update(divs[r-1],bar_heights[r-1],"#f28482");//Color update red
        }
        else if(r>end) {
            arr[k++]=bar_heights[l++];
            div_update(divs[l-1],bar_heights[l-1],"#f28482");//Color update red
        }
        else if(bar_heights[l]<bar_heights[r]) {
            arr[k++]=bar_heights[l++];
            div_update(divs[l-1],bar_heights[l-1],"#f28482");//Color update red
        }
        else {
            arr[k++]=bar_heights[r++];
            div_update(divs[r-1],bar_heights[r-1],"#f28482");//Color update red
        }
    }

    for(var t=0;t<k;t++) {
        
        bar_heights[start++]=arr[t];
        div_update(divs[start-1],bar_heights[start-1],"#84a59d");//Color update green
    }
}

function merge_main(start,end) {

    if (start < end ) {
        var mid=Math.floor((start + end) / 2);
        div_update(divs[mid],bar_heights[mid],"#f6bd60");//Color update yellow

        merge_main(start,mid);
        merge_main(mid+1,end);

        merge_sort(start,mid,end);
    }
}