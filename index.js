var buttonTranslate=document.querySelector("#btn-translate");
var txtinput=document.querySelector("#txtinput");
var output=document.querySelector("#outputdiv");

const clickhandler=()=>
{
    output.innerText=txtinput.value;
}

buttonTranslate.addEventListener("click",clickhandler);
