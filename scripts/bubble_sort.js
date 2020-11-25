function bubble_sort()
{
    
    for(var i=0;i<size-1;i++)
    {
        for(var j=0;j<size-i-1;j++)
        {
            if(div_sizes[j]>div_sizes[j+1])
            {
                div_update(divs[j],div_sizes[j],"lightpink");
                div_update(divs[j+1],div_sizes[j+1]," lightpink");
                var temp=div_sizes[j+1];
                div_sizes[j+1]=div_sizes[j];
                div_sizes[j]=temp;
                div_update(divs[j],div_sizes[j],"lightblue");
                div_update(divs[j+1],div_sizes[j+1]," lightblue");
            }
            div_update(divs[j],div_sizes[j],"lightblue");
        }
        div_update(divs[size-i-1],div_sizes[size-i-1],"gray");
    }
    div_update(divs[0],div_sizes[0],"gray")
    enable_buttons();

}
