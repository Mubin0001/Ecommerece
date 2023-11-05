

var login=JSON.parse(localStorage.getItem("login"))
var male=document.querySelector("#male")
var maleMenu=document.querySelector("#malemenu")
var female=document.querySelector("#female")
var femaleMenu=document.querySelector("#femalemenu")
var right=document.querySelector("#right")
var shirtrow=document.querySelector(".row")
var pantrow=document.querySelector(".rows")
var tshirt=document.querySelector("#tshirt")
var menPantRow = document.querySelector(".pantrow")
var close=document.querySelector("#cart")
console.log(login);

function openClose(){
    var btnOpen=document.querySelectorAll(".button-secondary")
    btnOpen.forEach((btn)=>{
        btn.addEventListener("click",()=>{
           close.style.right="0"
        })
    })
}
    var x=document.querySelector("#x")
    x.addEventListener("click",()=>{
        close.style.right="-100%"
    })

if(login){
    right.innerHTML=`{
        <span>${login.fname} </span>
        <button><a href="./login.html">logout</a></button>
    }`
    var shirtStorage=[
        { id: "ms1", src:"./images/shirt1.webp", name:"shirt1", price:"800" , size: "L,M,XL",rating:"4.5"},
        { id: "ms2", src:"./images/shirt2.webp", name:"shirt2", price:"600" , size: "L,M,XL",rating:"4.4"},
        { id: "ms3", src:"./images/shirt3.webp", name:"shirt3", price:"1200" , size: "L,M,XL",rating:"4.1"},
        { id: "ms4", src:"./images/shirt4.webp", name:"shirt4", price:"3400" , size: "L,M,XL",rating:"4.9"},
        { id: "ms5", src:"./images/shirt5.webp", name:"shirt5", price:"2000" , size: "L,M,XL",rating:"4.5"},
        { id: "ms6", src:"./images/shirt6.webp", name:"shirt6", price:"300" , size: "L,M,XL",rating:"4.0"}
        ]
        
}


var tShirtStorage=[
    { id: "mts1", src:"./images/tshirt1.jpg", name:"T-Shirt 1", price:"800" , size: "L,M,XL",rating:"4.5"},
    { id: "mts2", src:"./images/tshirt2.jpg", name:"T-Shirt 2", price:"600" , size: "L,M,XL",rating:"4.4"},
    { id: "mts3", src:"./images/tshirt3.jpg", name:"T-Shirt 3", price:"1200" , size: "L,M,XL",rating:"4.1"},
    { id: "mts4", src:"./images/tshirt4.jpg", name:"T-Shirt 4", price:"3400" , size: "L,M,XL",rating:"4.9"},
    { id: "mts5", src:"./images/tshirt5.jpg", name:"T-Shirt 5", price:"2000" , size: "L,M,XL",rating:"4.5"},
    { id: "mts6", src:"./images/tshirt6.jpg", name:"T-Shirt 6", price:"300" , size: "L,M,XL",rating:"4.0"}
    ]


    var pantsStorage=[
        { id: "mp1", src:"./images/pants1.jpg", name:"Pants 1", price:"800" , size: "L,M,XL",rating:"4.5"},
        { id: "mp2", src:"./images/pants2.jpg", name:"Pants 2", price:"600" , size: "L,M,XL",rating:"4.4"},
        { id: "mp3", src:"./images/pants3.jpg", name:"Pants 3", price:"1200" , size: "L,M,XL",rating:"4.1"},
        { id: "mp4", src:"./images/pants4.jpg", name:"Pants 4", price:"3400" , size: "L,M,XL",rating:"4.9"},
        { id: "mp5", src:"./images/pants5.jpg", name:"Pants 5", price:"2000" , size: "L,M,XL",rating:"4.5"},
        { id: "mp6", src:"./images/pants6.jpg", name:"Pants 6", price:"300" , size: "L,M,XL",rating:"4.0"}
        ]

        function menPants(){
            pantsStorage.forEach((e)=>{
                var {id,src,name,price,size,rating}=e
                menPantRow.innerHTML+=`<div class="cards" id=${id}>
                <img src="${src}" alt="">
                <h3>${name}</h3>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Earum, beatae. </p>
                <div><span>Rs ${price}</span><span>Size: ${size}</span></div>
                <h4>Rating:${rating}</h4>
                <button class="button-secondary">Add to Cart</button>
            </div>`
            })
        }


function menShirt(){
shirtStorage.forEach((e) => {
    var {id,src,name,price,size,rating}=e
    shirtrow.innerHTML+=` <div id="${e.id}">
    <img src="${e.src}" alt="">
    <h3>${e.name}</h3>
    <p>lorem ipsum dolor shirt</p>
    <div><span>RS.${e.price}</span><span>Size:${e.size}</span></div>
    <h4>RAting:${e.rating}</h4>
    <button>Add to cart</button>
</div>`
    
});
}


function mentShirt(){
    tShirtStorage.forEach((e)=>{
        var {id,src,name,price,size,rating}=e
       
        tshirt.innerHTML+=`<div class="cards" id=${id}>
        <img src="${src}" alt="">
        <h3>${name}</h3>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Earum, beatae. </p>
        <div><span>Rs ${price}</span><span>Size: ${size}</span></div>
        <h4>Rating:${rating}</h4>
        <button class="button-secondary">Add to Cart</button>
    </div>`
    })
}



function nav(){
female.addEventListener("mouseover",()=>{
    femaleMenu.style.display="block"
})
female.addEventListener("mouseout",()=>{
    femaleMenu.style.display="none"
})


male.addEventListener("click",(e)=>{
    e.preventDefault()
    if(maleMenu.style.display=="none")
    {
        maleMenu.style.display="block"
    }
    else{
        maleMenu.style.display="none"
    }
})




}






function mainCart(){
    var allItems=[shirtStorage,tShirtStorage,pantsStorage]
    var btn=document.querySelectorAll(".button-secondary")
    btn.forEach((button)=>{
        button.addEventListener("click",()=>{
            var parent=button.parentElement.id
            var cartMenu=document.querySelector("#cart-menu")

            allItems.forEach((items)=>{
                items.forEach((check)=>{
                    if(check.id==parent){
                        cartMenu.innerHTML +=` <div class="cart-item">
                        <div><img src="${check.src}" alt=""></div>
                        <div><h3>${check.name}</h3>
                        <h5>${check.price}</h5>
                        <select name="" id="">
                            <option value="S">S</option>
                            <option value="M">M</option>
                            <option value="L">L</option>
                            <option value="XL">XL</option>
                        </select>
                        <input type="number" value="1" class="number"></div>
                        <div>
                            <span class="subTotal">${check.price}</span>
                            <i class="fa-solid fa-trash-can"></i>
                        </div>
                    </div>`
                    }
                })
            })
            cal()
            del()
            total()
        })
    })
}

function cart(){
    nav()
    menShirt()
    mentShirt()
    menPants()
    openClose()
    mainCart()
    
    }

    // cart()

