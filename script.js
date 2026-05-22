const hexNum='0123456789ABCDEF';
const randomColor=function(){

    let color='#'
    for(let i=0;i<6;i++){
        color+=hexNum[Math.floor(Math.random()*16)];
    }
    console.log(color);
    document.querySelector('#colorBox').style.background=color;
}
let run;
document.querySelector('#start').addEventListener('click',()=>{
    //run=setInterval(randomColor,1000);
    //better practice
    if(!run) run=setInterval(randomColor,1000);
});
document.querySelector('#stop').addEventListener('click',()=>{
    const stop=clearInterval(run);
    //document.querySelector('#colorBox').style.background='#ffffff';
    //better practice
    run=null;
});
