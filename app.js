let text=document.querySelector("input");
let buttons=document.querySelectorAll(".btn");
let string="";
Array.from(buttons).forEach((button)=>{
    button.addEventListener("click",(e)=>{
        if(e.target.innerHTML=="="){
            string=eval(string);
            text.value=string;
        }
        else if(e.target.innerHTML=="AC"){
            string="";
            text.value=string;
        }
        else{
            console.log(e.target);
            string=string+e.target.innerHTML;
            text.value=string;
        }
    }) 
})