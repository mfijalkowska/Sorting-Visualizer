function Selection_sort()
{
    delay=0;

    for(var i=0;i<array_size-1;i++)
    {
        div_update(divs[i],bar_heights[i],"#f28482");//Color update red

        min_index=i;

        for(var j=i+1;j<array_size;j++)
        {
            div_update(divs[j],bar_heights[j],"#f6bd60");//Color update yellow

            if(bar_heights[j]<bar_heights[min_index])
            {
                if(min_index!=i)
                {
                    div_update(divs[min_index],bar_heights[min_index],"pink");//Color update
                }
                min_index=j;
                div_update(divs[min_index],bar_heights[min_index],"#f28482");//Color update red
            }
            else
            {
                div_update(divs[j],bar_heights[j],"pink");//Color update
            }
        }
        
        if(min_index!=i)
        {
            var temp=bar_heights[min_index];
            bar_heights[min_index]=bar_heights[i];
            bar_heights[i]=temp;

            div_update(divs[min_index],bar_heights[min_index],"#f28482");//Height update red
            div_update(divs[i],bar_heights[i],"#f28482");//Height update red
            div_update(divs[min_index],bar_heights[min_index],"pink");//Color update
        }
        div_update(divs[i],bar_heights[i],"#84a59d");//Color update green
    }
    div_update(divs[i],bar_heights[i],"#84a59d");//Color update green
}