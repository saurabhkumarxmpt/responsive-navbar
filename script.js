let btn=document.getElementById("btn");
let list=document.getElementById("list");
btn.addEventListener('click', function(){

    if(list.style.display=='none'){

        list.style.display='block';
    }

    else{

        list.style.display='none';
    }
})