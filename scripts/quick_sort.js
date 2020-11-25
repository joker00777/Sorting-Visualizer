function partition(start,size)
{
    console.log("a");
    div_update(divs[start],div_sizes[start],"lightcoral");
    var x=div_sizes[start];
    var y=start;
    for(var i=start+1;i<size;i++)
    {
        if(x>div_sizes[i])
            y++;
    }
    if(y!=start)
    {
        div_update(divs[start],div_sizes[start],"lightpink");
        div_update(divs[y],div_sizes[y]," lightpink");
        var t=div_sizes[start];
        div_sizes[start]=div_sizes[y];
        div_sizes[y]=t;
        div_update(divs[start],div_sizes[start],"lightblue");
        div_update(divs[y],div_sizes[y]," lightblue");
    }
    for(var i=start,j=size-1;i<y;)
    {
         if(div_sizes[i]<x)
         {
             i++;
         }
        else if(div_sizes[j]>=x)
        {
            j--;
        }
        else
        {
            div_update(divs[i],div_sizes[i],"lightpink");
            div_update(divs[j],div_sizes[j]," lightpink");
            var temp=div_sizes[i];
            div_sizes[i]=div_sizes[j];
            div_sizes[j]=temp;
            div_update(divs[i],div_sizes[i],"lightblue");
            div_update(divs[j],div_sizes[j]," lightblue");
            i++;
            j--;
        }
    }
    div_update(divs[start],div_sizes[start],"lightblue");
    return y;
}


function quickSort(start,size)
{
    if(start<size)
    {
        var c=partition(start,size);
        quickSort(start,c);
        quickSort(c+1,size);
    }
}

function quick_sort()
{
    quickSort(0,size);
    enable_buttons();   
}
