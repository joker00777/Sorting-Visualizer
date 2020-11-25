var x_size=document.getElementById('array_size');
var size=x_size.value;
var input_generate=document.getElementById('generate');
var input_speed=document.getElementById('speed');

var button_algos=document.querySelectorAll(".algo button");

var container=document.getElementById('array_container');
container.style='flex-direction:row'

/****************************************************/
input_generate.addEventListener('click',generate_array);
x_size.addEventListener('input',update_size);

var margin_size;
var div_sizes=[];
var divs=[];

/************* GENERATING ARRAY *****************/
function generate_array(){
    container.innerHTML="";
    for(var i=0;i<size;i++)
    {
        div_sizes[i]=Math.floor((Math.random()*90)+10);
        // console.log(i);
        // console.log(div_sizes[i]);
        divs[i]=document.createElement("div");
        container.appendChild(divs[i]);
        margin_size=0.1;
        divs[i].style=" margin:0% " + margin_size + "%; background-color:gray; width:" + (100/size-(2*margin_size)) + "%; height:" + (div_sizes[i]) + "%;";
    }
}



window.onload=update_size();


function update_size(){
    size=x_size.value;
    generate_array();
}



//console.log(size);

for(var i=0;i<button_algos.length;i++)
{
    button_algos[i].addEventListener('click',runalgo);
}


/**************** DISABLE *********************/
function disable_buttons()
{
    for(var i=0;i<button_algos.length;i++)
    {
        button_algos[i].disabled=true;
    }
    x_size.disabled=true;
    input_generate.disabled=true;
    input_speed.disabled=true;
}

/**************** ALGORITHMS ***********************/
var x;
function runalgo()
{
    //disable_buttons();
    for(var i=0;i<button_algos.length;i++)
    {
        button_algos[i].disabled=true;
    }
    x_size.disabled=true;
    input_generate.disabled=true;
    input_speed.disabled=true;
    x=this;
    this.classList.add("selected");

    if(this.innerHTML=='Bubble')
    {
        bubble_sort();
    }
    else if(this.innerHTML=='Insertion')
    {
        insertion_sort();
    }
    else if(this.innerHTML=='Merge')
    {
        merge_sort();
    }
    else if(this.innerHTML=='Quick')
    {
        quick_sort();
    }
}

var speed=1000;
var num=100000;
var delay_time=num/(Math.floor(size)*speed);
input_speed.addEventListener("input",calculate_speed);



function calculate_speed()
{
    var s=input_speed.value;
    if(s==1)
    {
        delay_time*=20;
    }
    else if(s==2)
    {
        delay_time*=10;
    }
    else if(s==3)
    {
        delay_time*=5;
    }
    else if(s==4)
    {
        delay_time*=3;
    }
    else
    {
        delay_time*=1;
    }
}



var total_delay=0;

function div_update(cont,height,color)
{
   // console.log(num);
    window.setTimeout(function(){
        cont.style=" margin:0% " + margin_size + "%; width:" + (100/size-(2*margin_size)) + "%; height:" + height + "%; background-color:" + color + ";";
    },total_delay+=delay_time);
}

/**************** ENABLE ********************/
function enable_buttons()
{
    
    window.setTimeout(function(){
        x.classList.add("unselected");
        for(var i=0;i<button_algos.length;i++)
        {
            button_algos[i].disabled=false;
        }
        x_size.disabled=false;
        input_generate.disabled=false;
        input_speed.disabled=false;
    },total_delay+=delay_time);
    total_delay=0;
   
}



