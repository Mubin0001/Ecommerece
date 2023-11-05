// var form=document.querySelector("form")
// var first=document.getElementById("first")
// var last=document.getElementById("last")
// var mnum=document.getElementById("mnum")
// var mail=document.getElementById("mail")
// var pass=document.getElementById("pass")
// var ppas=document.getElementById("ppas")
// var fname=document.getElementById("fname")
// var lname=document.getElementById("lname")
// var number=document.getElementById("number")
// var email=document.getElementById("email")
// var epass=document.getElementById("epass")
// var cpass=document.getElementById("cpass")

// console.log(form,first,last,mnum,mail,pass,ppas,fname,lname,number,email,epass,cpass);

// form.addEventListener("submit",(e)=>{
//     var range=/^[a-zA-Z]{2,15}$/

//     if(first.value==""){
//         fname.innerHTML="first name required <br>" 
//         e.preventDefault()
//     }

//     else if(range.test(first.value)){
//       fname.innerHTML=""
//     }
//     else {
//        fname.innerHTML="invalid First name<br>"
//        e.preventDefault()
//     }
//     if(last.value==""){
//         lname.innerHTML="lname name required <br>" 
//         e.preventDefault()
//     }

//     else if(range.test(last.value)){
//       lname.innerHTML=""
//     }
//     else {
//        lname.innerHTML="invalid last name"
//        e.preventDefault()
//     }


// })



var form=document.querySelector("form")
var first=document.getElementById("first")
var last=document.getElementById("last")
var mobile=document.getElementById("mnum")
var email=document.getElementById("email")
var pass=document.getElementById("pass")
var cpass=document.getElementById("cpass")
var efirst=document.getElementById("efirst")
var elast=document.getElementById("elast")
var emobile=document.getElementById("emobile")
var eemail=document.getElementById("eemail")
var epass=document.getElementById("epass")
var ecpass=document.getElementById("ecpass")
var storage=[]
var local=JSON.parse(localStorage.getItem("formlocal"))

var flag = true;
var storage = [] 
var local = JSON.parse(localStorage.getItem("data"))
if(local){
    storage=local
}

form.addEventListener("submit",(e)=>{
  
    var regx=/^[a-zA-Z]{2,15}$/
    var regx1=/^[6-9][0-9]{9}$/
    var regx2=/^[0-9a-zA-Z!@]{6,15}$/
    var flag =true


    // *********************first name ****************************************
    if(first.value==""){
        efirst.innerHTML="*first name required <br>"
        flag=false
    }
    else if(regx.test(first.value)){
        efirst.innerHTML=""
    }
    else{
        efirst.innerHTML="Invalid first name <br>"
       
        flag=false
    }
// *******************************last name******************************************************
    if(last.value==""){
        elast.innerHTML="*last name is required<br>"
      flag=false
    }
    else if(regx.test(last.value)){
        elast.innerHTML=""
    }
    else{
        elast.innerHTML="*Invalid last name<br>"
        flag=false
    }
// ******************************monile number ******************************************
    if(mobile.value==""){
        emobile.innerHTML="*Mobile number required<br>"
        flag=false
    }
    else if(regx1.test(mobile.value)){
        emobile.innerHTML=""
    }
    else{
        emobile.innerHTML="*Invalid Mobile number<br>"
        flag=false
    }
// ***************************email*******************************************************************
    if(email.value==""){
        eemail.innerHTML="*email is required<br>"
        flag=false
    }
    else{
        eemail.innerHTML=""
    }
// *************************************password*************************************************
    if(pass.value==""){
        epass.innerHTML="*password is required <br>"
        flag=false
    }
    else if(regx2.test(pass.value)){
        epass.innerHTML=""
    }
    else{
        epass.innerHTML="*Invalid password<br>"
        flag=false
    }
// *********************************confirm password*******************************************
    if(cpass.value==pass.value){
        ecpass.innerHTML=""
    }
    else{
     ecpass.innerHTML="*password is not matching<br>"
     flag=false  
    }

    if(flag){
        var obj={
            fname:first.value,
            lname:last.value,
            number:mobile.value,
            mail:email.value,
            password:pass.value
        }
        storage.push(obj)
        localStorage.setItem("formlocal",JSON.stringify(storage))

    }
    else{
        e.preventDefault()
    }

})