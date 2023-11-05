var form=document.querySelector("form")
var user =document.querySelector("#user")
var pass=document.querySelector("#pass")
var btn=document.querySelector("button")
var euser=document.querySelector("#euser")
var epass =document.querySelector("#epass")
var esub= document.querySelector("#ebut")

var lStorage=JSON.parse(localStorage.getItem("formlocal"))
console.log(lStorage)




// btn.addEventListener("click",()=>{
//     if(user.value=="" && pass.value=="1234"){
//         alert("arey pagal user name is empty")
//         alert("arey pagal password is empty")
//     }
//     else if(user.value==""){
//         alert("arey pagal user name is empty")
//     }
//     else if(user.value=="vignesh" && pass.value=="1234"){
//         alert("Boss welcome to the page")
//     }
//     else{
//         alert("kachada go away")
//     }
// })

form.addEventListener("submit",(e)=>{
    var matching=lStorage.find((e)=>{
        if((e.number==user.value || e.mail==user.value)&& e.password==pass.value)
        return e 
    })
    euser.innerHTML=""
    epass.innerHTML=""
    esub.innerHTML=""
    var flage =true

    
    if(user.value=="" && pass.value==""){
        euser.innerHTML="Enter the user name <br>"
        epass.innerHTML="Enter the pass <br>"
        flage=false
    }
    else if(user.value==""){
        euser.innerHTML="Enter the user name <br>"
      //  e.preventDefault()
      flage=false
    }
 
    else if(pass.value==""){

        epass.innerHTML="emter the password <br>"

                    flage=false
    }

    else if(matching){
        alert("boss welcome to the page ")

    }
    else {
        esub.innerHTML="not matching"
        flage=false


        }
    if(flage){
        localStorage.setItem("login",JSON.stringify(matching))
    }
    else{
        e.preventDefault()
    }
})