
function Quick()
{
    delay=0;
    quick_sort(0,array_size-1);
}

function quick_partition (start, end)
{
    var i = start + 1;
    var piv = bar_heights[start] ;//make the first element as pivot element.
    div_update(divs[start],bar_heights[start],"#f6bd60");//Color update

        for(var j =start + 1; j <= end ; j++ )
        {
            //re-arrange the array by putting elements which are less than pivot on one side and which are greater that on other.
            if (bar_heights[ j ] < piv)
            {
                div_update(divs[j],bar_heights[j],"#f6bd60");//Color update

                div_update(divs[i],bar_heights[i],"#f28482");//Color update
                div_update(divs[j],bar_heights[j],"#f28482");//Color update

                var temp=bar_heights[i];
                bar_heights[i]=bar_heights[j];
                bar_heights[j]=temp;

                div_update(divs[i],bar_heights[i],"#f28482");//Height update
                div_update(divs[j],bar_heights[j],"#f28482");//Height update

                div_update(divs[i],bar_heights[i],"pink");//Height update
                div_update(divs[j],bar_heights[j],"pink");//Height update

                i += 1;
            }
    }
    div_update(divs[start],bar_heights[start],"#f28482");//Color update
    div_update(divs[i-1],bar_heights[i-1],"#f28482");//Color update
    
    var temp=bar_heights[start];//put the pivot element in its proper place.
    bar_heights[start]=bar_heights[i-1];
    bar_heights[i-1]=temp;

    div_update(divs[start],bar_heights[start],"#f28482");//Height update
    div_update(divs[i-1],bar_heights[i-1],"#f28482");//Height update

    for(var t=start;t<=i;t++)
    {
        div_update(divs[t],bar_heights[t],"#84a59d");//Color update
    }

    return i-1;//return the position of the pivot
}

function quick_sort (start, end )
{
    if( start < end )
    {
        //stores the position of pivot element
        var piv_pos = quick_partition (start, end ) ;     
        quick_sort (start, piv_pos -1);//sorts the left side of pivot.
        quick_sort (piv_pos +1, end) ;//sorts the right side of pivot.
    }
 }