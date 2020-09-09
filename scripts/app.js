const selected = document.querySelector(".selected");
const optionsContainer = document.querySelector(".options-container");
const optionsList = document.querySelectorAll(".option");

selected.addEventListener("click", () => {
  optionsContainer.classList.toggle("active");
});

optionsList.forEach(o => {
  o.addEventListener("click", () => {
    selected.innerHTML = o.querySelector("label").innerHTML;
    optionsContainer.classList.remove("active");
  });
});
//change bar color while moving the slider
document.getElementById("size").oninput = function() {
  this.style.background = 'linear-gradient(to right, #84a9ac 0%, #84a9ac ' + Math.round((this.value-this.min)*100/(this.max-this.min)) + '%, #fff ' + Math.round((this.value-this.min)*100/(this.max-this.min)) + '%, white 100%)'
};
document.getElementById("speed").oninput = function() {
  this.style.background = 'linear-gradient(to right, #84a9ac 0%, #84a9ac ' + Math.round((this.value-this.min)*100/(this.max-this.min)) + '%, #fff ' + Math.round((this.value-this.min)*100/(this.max-this.min)) + '%, white 100%)'
};

document.querySelector(".home").addEventListener("click", () => {
  window.location.reload(true);
});

//Variables (BE CAREFUL THESE MIGHT BE USED IN OTHER JS FILES TOO)
var input_size=document.getElementById('size')
var array_size=input_size.value;
var input_go=document.getElementById("go");
var input_speed=document.getElementById("speed");
var input_stop=document.getElementById("stop");

//var array_speed=document.getElementById('a_speed').value;

var bar_heights=[];
var divs=[];
var margin_size;
var cont=document.getElementById("array_container");
cont.style="flex-direction:row";

//Array generation and updation.

input_stop.addEventListener("click",generate_array);
input_go.addEventListener("click",run_algo);
input_size.addEventListener("input",update_array_size);


function generate_array()
{
    cont.innerHTML="";
    array_size=input_size.value;
    for(var i=0;i<array_size;i++)
    {
        bar_heights[i]= Math.floor(Math.random() * 0.65*(input_size.max - input_size.min) ) + 10;
        divs[i]=document.createElement("div");
        cont.appendChild(divs[i]);
        margin_size=0.1;
        divs[i].style=" margin:0% " + margin_size + "%; background-color:pink; width:" + (100/array_size-(2*margin_size)) + "%; height:" + (bar_heights[i]) + "%;";
    }
}

function update_array_size()
{
    array_size=input_size.value;
    generate_array();
}

window.onload=update_array_size();


function run_algo()
{
  
  array_size=input_size.value;
 
    switch(selected.innerHTML)
    {
        case "Bubble Sort":Bubble(); //
                        break;
        case "Selection":Selection_sort(); //
                        break;
        case "Insertion":Insertion(); //
                        break;
        case "Merge Sort":Merge();  //
                        break;
        case "Quick Sort":Quick();  
                        break;
        case "Heap Sort":Heap(); //
                        break;
        case "Shell Sort":Shell(); //
                        break;
        case "Comb Sort":Comb();  //
                        break;
        case "Gnome Sort":Gnome();  //
                        break;
        case "Cocktail Sort":Cocktail(); //
                        break;
        case "Radix Sort":Radix(); //
                        break;
    }
}
