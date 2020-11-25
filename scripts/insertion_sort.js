
function insertion_sort()
{
    
    for(var i=1;i<size;i++)
    {
        var j=i-1;
        while(j>=0 && div_sizes[j]>div_sizes[j+1])
        {
            div_update(divs[j],div_sizes[j+1],"lightpink");
            div_update(divs[j+1],div_sizes[j]," lightpink");
            var temp=div_sizes[j+1];
            div_sizes[j+1]=div_sizes[j];
            div_sizes[j]=temp;
            div_update(divs[j],div_sizes[j],"lightblue");
            div_update(divs[j+1],div_sizes[j+1]," lightblue");
            j--;
        }
        //div_update(divs[i-1],div_sizes[size-i-1],"gray");
    }
    enable_buttons();
}
