  
 const menu = document.querySelector(".main .navbar .menu")
 const ul  = document.querySelector("ul")


const list =document.querySelector('.bar')

const main=document.querySelector('.main')

// list.addEventListener('click',function(){
//      list.style.height="100px"
//      list.style.width="120px"
//      list.style.backgroundColor="red"
//      list.style.display="flex"
//      list.style.flexDirection="row"
// })
 menu.addEventListener('click',function(){
     menu.style.color = "green"
     ul.style.display  = "flex"
     ul.style.flexDirection ="column"
     ul.style.backgroundColor ="rgba(226, 153, 226, 0.87)"
     ul.style.position = "absolute"
     ul.style.height ="70%"
     ul.style.width ="160px"
     
     ul.style.right ="12%"
     ul.style.paddingLeft ="60px"
     ul.style.marginTop ="63px"
     menu.style.display ="none"
     
         

    }) 

    // console.log(main);
    // console.log(main.children);
    
    for(let i=0;i<main.children.length;i++)
    {
        console.log(main.children[i].innerHTML);
    }
     
    console.log(main.firstElementChild);
    console.log(main.lastElementChild);
    console.log(main.parentElement);
   
       
