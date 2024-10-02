const buttons=document.querySelectorAll(".btn");
const input=document.querySelector("#inputBox");
function clearAll()
{
    input.placeholder="";
}

let currentValue=0;
let result=0;
function addValue(currentValue)
{
    result+=currentValue;
}
function subValue(currentValue)
{
    result-=currentValue;
}
function mulValue(currentValue)
{
    result*=currentValue;
}
function divValue(currentValue)
{
    result/=currentValue;
}

const numArr=['1','2','3','4','5','6','7','8','9'];
buttons.forEach((button)=>{
    button.addEventListener("click",()=>{
        
      
        for (let i = 0; i < numArr.length; i++) {
            if (button.innerText === numArr[i]) {
              input.placeholder = button.innerText;
              currentValue=button.innerText;
              break;
            }
          }
        if(button.innerText==="C")
            clearAll();
        else if(button.innerText==='+')
            addValue(currentValue);
        else if(button.innerText==='-')
            subValue(currentValue);
        else if(button.innerText==='*')
            mulValue(currentValue);
        else if(button.innerText==='/')
            divValue(currentValue);

        if(button.innerText==="=")
        {
            input.placeholder=result;
        }
    })
})