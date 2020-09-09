function Radix() {

    delay=0;
    var max = Math.max.apply(Math,bar_heights);
    console.log(max);
    var exp=1;

    while (Math.floor(max/exp)>0) {
        
        countingSort(exp,max);
        exp *=10;
    }
}

function countingSort(exp,max) {

    var output = [];
    var i;
    var count=[];

    for (var index=0;index<10;index++){
        count[index]=0;
    }
    for (i=0;i<array_size;i++) {

        if (bar_heights[i]<exp ) {
            count[0]++;
        }
        else {
            count[(Math.floor(bar_heights[i]/exp))%10]++;
        }
    }
    for (i=1; i<10;i++){
        count[i]+=count[i-1];
    }
    for(i=array_size-1;i>=0;i--){
        if ( bar_heights[i] <exp ) {
            output[count[0]-1] = bar_heights[i];
            count[0]--; 
        }
        else {
            output[count[(Math.floor(bar_heights[i]/exp))%10]-1] = bar_heights[i];
            count[(Math.floor(bar_heights[i]/exp))%10]--;
        }
    }
    console.log(output);
    for (i=0;i<array_size;i++) {
        div_update(divs[i],bar_heights[i],"#f6bd60"); //yellow
        bar_heights[i] = output[i];
        div_update(divs[i],bar_heights[i],"#f6bd60"); //yellow
        if ( max < exp*10 ) {
            div_update(divs[i],bar_heights[i],"#84a59d");
        }
        else {
            div_update(divs[i],bar_heights[i],"pink");
        }
    }
}