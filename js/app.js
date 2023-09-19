let btn =document.getElementById('btn')
btn.onclick=function(){
    let count =parseInt(document.getElementById('count').value)
    let percent =parseInt(document.getElementById('percent').value)
    let time =parseInt(document.getElementById('time').value)
    mebleg.innerHTML=count
    faiz.innerHTML=percent
    let total=((count*percent)/100)+count
    let inmonth=total/time
    ay.innerHTML=inmonth
}

 

