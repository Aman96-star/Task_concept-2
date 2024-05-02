  
 const menu = document.querySelector(".main .navbar .menu")
 const ul  = document.querySelector("ul")
//  const cmenu = document.querySelector(".main .navbar .menu-close .ri-logout-box-r-line")
const cmenu = document.getElementById("toggleClose")
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
     console.log(cmenu)
     cmenu.style.display = "inherit"
     cmenu.style.position = "absolute"
     cmenu.style.top = "5%"     
     cmenu.style.left = "5%"     

    }) 

    cmenu.addEventListener('click',function(){
        
    })


    
    // function clgMY(){
    //     document.getElementById("toggleMenu").style.display="none";
    //     document.getElementById("toggleClose").style.display="block";




    //     console.log("dv")
    // }