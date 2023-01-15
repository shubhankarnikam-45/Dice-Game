let btnrtd=document.getElementsByClassName("dice");
let result=document.getElementsByTagName("span")
let btnwin=document.getElementById("win")
let fresult=document.getElementById("fresult")
let playerName = document.querySelectorAll("input")

var i=0;
btnwin.disabled=true;          //declare buttion is first disable
for(let i=0;i<btnrtd.length;i++)
{
    btnrtd[i].addEventListener("click",()=>{fun(btnrtd[i].id)})
}

function fun(btn_class)
{
    i++;
    if(i==5)
    btnwin.disabled=false;
    btnrtd[btn_class].disabled=true;
    let arr=["1","2","3","4","5","6"]
    let randomIndex=Math.floor(Math.random()*6);
    result[btn_class].innerText=arr[randomIndex];

}



btnwin.addEventListener("click",()=>{

    let max=0;
    for(let p=0;p<result.length-1;p++)
    {
        if(result[p].innerText>max)
            max=result[p].innerText;
    }

    let winnerList =[];

    for(let t=0;t<result.length-1;t++)
    {
        if(result[t].innerText==max)
        {
            winnerList.push(t);
        }
    }

    console.log(winnerList)
    let names="";
    for(let t of winnerList)
    {
        names=names +" "+playerName[t].value;
    }
    console.log(names)
    
    fresult.innerText=names+" "+" won the game"


})



