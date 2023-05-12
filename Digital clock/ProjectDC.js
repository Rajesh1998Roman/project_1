function DateSet(){
    let date=new Date();
    let hr=date.getHours();
    let min=Zero(date.getMinutes());
    let sec=Zero(date.getSeconds());

    if(hr>12){
         ampm.innerHTML="PM"
         hr=hr-12
    }

    hr=Zero(hr);

    document.getElementById("hours").innerHTML=hr;
    document.getElementById("minutes").innerHTML=min;
    document.getElementById("Seconds").innerHTML=sec;
}


function Zero(num){
    return num<10?"0"+num:num
}

setInterval(DateSet,1000);

