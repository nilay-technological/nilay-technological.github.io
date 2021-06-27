alert("This Windows 11 page is made by CodeWithHarry. I had just made some small changes. Please search for CodeWithHarry on YouTube or visit www.codewithharry.com for its tutorial.");

let taskbar = document.getElementsByClassName("taskbar")[0]
let startmenu = document.getElementsByClassName("startmenu")[0]

taskbar.addEventListener("click", ()=>{
    console.log("clicked");
    if(startmenu.style.bottom == "50px"){
        startmenu.style.bottom = "-655px"
    }
    else{
        startmenu.style.bottom = "50px"
    }
})
