
function merge(start,mid,end)
{
    var p=start,q=mid+1;

    var arr=[],k=0;

    for(var i=start; i<=end; i++)
    {
        if(p>mid)
        {
            arr[k++]=div_sizes[q++];
            div_update(divs[q-1],div_sizes[q-1],"lightblue");//Color update
        }
        else if(q>end)
        {
            arr[k++]=div_sizes[p++];
            div_update(divs[p-1],div_sizes[p-1],"lightblue");//Color update
        }
        else if(div_sizes[p]<div_sizes[q])
        {
            arr[k++]=div_sizes[p++];
            div_update(divs[p-1],div_sizes[p-1],"lightblue");//Color update
        }
        else
        {
            arr[k++]=div_sizes[q++];
            div_update(divs[q-1],div_sizes[q-1],"lightblue");//Color update
        }
    }

    for(var i=0;i<k;i++)
    {
        div_sizes[start]=arr[i];
        div_update(divs[start],div_sizes[start],"lightcoral");//Color update
        start++;
    }
}


function mergeSort(start,end)
{
    if(start>=end)
    {
        return;
    }
    var mid=Math.floor((start + end) / 2);
    mergeSort(start,mid);
    mergeSort(mid+1,end);
    div_update(divs[mid],div_sizes[mid],"lightpink");
    merge(start,mid,end);
    
}


function merge_sort()
{
   
    mergeSort(0,size-1);
    enable_buttons();
}
