let btn =document.getElementById('btn')
btn.onclick=function(){
    let count =parseInt(document.getElementById('count').value)
    let percent =parseInt(document.getElementById('percent').value)
    let time =parseInt(document.getElementById('time').value)
   
    faiz.innerHTML=percent
    let total=((count*percent)/100)+count
    mebleg.innerHTML=total
    let inmonth=total/time
    ay.innerHTML=inmonth
}

 

