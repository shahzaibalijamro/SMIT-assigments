var time = +prompt('What time is it now?\nAnswer in this format : 0400,2100,1200');
if(time >= 0 && time < 1200){
    alert('Good Morning');
}else if (time >= 1200 && time < 1700){
    alert('Good Afternoon');
}else if (time >= 1700 && time < 2100){
    alert('Good Evening');
}else if (time >= 2100 && time < 2400){
    alert('Good Night');
}else{
    alert('')
}