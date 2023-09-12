
function addzeroes(k){
    if(k <= 9)
    {
        return '0' + k;
    }
    return k;
}

function twelvehrformat(h){
    if(h > 12)
    return h-12

    else
    return h;
}
function AmPm(h)
{
     if(h >= 12)
    document.getElementById("ampm").innerHTML = "Pm"

    else
   document.getElementById("ampm").innerHTML = "Am"
}

function clock(){
    let date = new Date();
   date = addzeroes(date);

    let m = date.getMinutes();
    m = addzeroes(m);

    let h = date.getHours();
    AmPm(h)
    h = twelvehrformat(h);
    h = addzeroes(h);

    let s = date.getSeconds();
    s = addzeroes(s);

document.getElementById("num").innerHTML = h + " " + ":" + " " + m + " " + ":" + " " + s;
}
setInterval(()=>{
    clock();
 },1000)


function readData(){
   const data = document.getElementById("min").value

  let f = new Date()
   let ringmin = data -  f.getMinutes() 
   let ringsec = 60 - f.getSeconds()
   let newinterval = ((ringmin-1)*60*1000) + (ringsec*1000)

// const stopalarm = document.getElementById("stop")

function play(){
    setTimeout(()=>{
      var audio = new Audio('Cukoo-clock meloboom.mp3');
      stopalarm.style.display = "block"
      audio.play();
     },newinterval)

    }
    play();

}

let day = new Date().getDate()
let year = new Date().getFullYear()
let  month = new Date().getMonth()+1
if(day < 10)
day = "0"+day;
if(month < 10)
month = "0"+month
document.getElementById("dait").innerHTML = day + " - " + month + " - " + year
