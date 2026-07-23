/*=========================================
LUXE BEAUTY
SCRIPT.JS
PART 1
=========================================*/

const video = document.getElementById("video");
const canvas = document.getElementById("canvas");
const uploadedImage = document.getElementById("uploadedImage");

const uploadInput = document.getElementById("uploadImage");
const cameraBtn = document.getElementById("cameraBtn");

const shades = document.querySelectorAll(".shade");
const opacitySlider = document.getElementById("opacity");

const modal = document.getElementById("productModal");
const closeModal = document.querySelector(".close-modal");

const cartSidebar = document.getElementById("cartSidebar");
const closeCart = document.getElementById("closeCart");

const loginPopup = document.getElementById("loginPopup");
const closeLogin = document.querySelector(".close-login");

const cartItems = document.querySelector(".cart-items");
const cartTotal = document.querySelector(".cart-footer h3");

let cart = [];

let selectedColor = "#8B0000";

let opacity = 0.7;

let cameraStream = null;


/*=========================================
OPEN CAMERA
=========================================*/

cameraBtn.addEventListener("click", async () => {

    try{

        cameraStream = await navigator.mediaDevices.getUserMedia({

            video:true

        });

        video.srcObject = cameraStream;

        video.style.display="block";

        uploadedImage.style.display="none";

    }

    catch(err){

        alert("Camera access denied.");

    }

});


/*=========================================
UPLOAD IMAGE
=========================================*/

uploadInput.addEventListener("change",(e)=>{

    const file=e.target.files[0];

    if(!file) return;

    const reader=new FileReader();

    reader.onload=function(event){

        uploadedImage.src=event.target.result;

        uploadedImage.style.display="block";

        video.style.display="none";

    }

    reader.readAsDataURL(file);

});


/*=========================================
SHADE SELECTOR
=========================================*/

shades.forEach(shade=>{

    shade.style.background=shade.dataset.color;

    shade.addEventListener("click",()=>{

        shades.forEach(s=>s.classList.remove("active"));

        shade.classList.add("active");

        selectedColor=shade.dataset.color;

    });

});


/*=========================================
OPACITY
=========================================*/

opacitySlider.addEventListener("input",()=>{

    opacity=opacitySlider.value/100;

});


/*=========================================
PRODUCT MODAL
=========================================*/

const productCards=document.querySelectorAll(".product-card");

const modalTitle=document.getElementById("modalTitle");

const modalPrice=document.getElementById("modalPrice");

const modalImage=document.getElementById("modalImage");


productCards.forEach(card=>{

    card.addEventListener("click",()=>{

        const title=card.querySelector("h3").innerText;

        const price=card.querySelector("h4").innerText;

        const image=card.querySelector("img").src;

        modalTitle.innerText=title;

        modalPrice.innerText=price;

        modalImage.src=image;

        modal.style.display="flex";

    });

});


closeModal.onclick=function(){

    modal.style.display="none";

};


window.addEventListener("click",(e)=>{

    if(e.target===modal){

        modal.style.display="none";

    }

});


/*=========================================
BUY BUTTON
=========================================*/

document.querySelector(".buy-btn").addEventListener("click",()=>{

    alert("Redirecting to checkout...");

});
/*=========================================
SCRIPT.JS
PART 2
Shopping Cart • Newsletter • Scroll Effects
=========================================*/


/*=========================================
ADD TO CART
=========================================*/

const addButtons = document.querySelectorAll(".product-info button");

addButtons.forEach(button => {

    button.addEventListener("click",(e)=>{

        e.stopPropagation();

        const card = button.closest(".product-card");

        const title = card.querySelector("h3").innerText;

        const price = card.querySelector("h4").innerText;

        const image = card.querySelector("img").src;

        cart.push({

            title,

            price,

            image

        });

        updateCart();

        cartSidebar.classList.add("active");

    });

});


/*=========================================
UPDATE CART
=========================================*/

function updateCart(){

    cartItems.innerHTML="";

    let total=0;

    cart.forEach((item,index)=>{

        const div=document.createElement("div");

        div.className="cart-item";

        div.innerHTML=`

            <div style="display:flex;gap:15px;align-items:center;margin-bottom:20px;">

                <img src="${item.image}"
                style="width:70px;height:70px;object-fit:cover;border-radius:10px;">

                <div>

                    <h4>${item.title}</h4>

                    <p>${item.price}</p>

                    <button class="remove-btn"
                    data-index="${index}">
                    Remove
                    </button>

                </div>

            </div>

        `;

        cartItems.appendChild(div);

        total+=parseInt(item.price.replace("₹",""));

    });

    cartTotal.innerHTML=`Total : ₹${total}`;

    document.querySelectorAll(".remove-btn").forEach(btn=>{

        btn.addEventListener("click",()=>{

            cart.splice(btn.dataset.index,1);

            updateCart();

        });

    });

}


/*=========================================
OPEN CART
=========================================*/

document.querySelector(".fa-bag-shopping").addEventListener("click",()=>{

    cartSidebar.classList.add("active");

});


/*=========================================
CLOSE CART
=========================================*/

closeCart.addEventListener("click",()=>{

    cartSidebar.classList.remove("active");

});


/*=========================================
LOGIN POPUP
=========================================*/

document.querySelector(".fa-heart").addEventListener("click",()=>{

    loginPopup.style.display="flex";

});


closeLogin.addEventListener("click",()=>{

    loginPopup.style.display="none";

});


window.addEventListener("click",(e)=>{

    if(e.target===loginPopup){

        loginPopup.style.display="none";

    }

});


/*=========================================
NEWSLETTER
=========================================*/

const newsletterBtn=document.querySelector(".newsletter button");

newsletterBtn.addEventListener("click",()=>{

    const email=document.querySelector(".newsletter input");

    if(email.value===""){

        alert("Please enter your email.");

        return;

    }

    if(!email.value.includes("@")){

        alert("Enter a valid email.");

        return;

    }

    alert("Thank you for subscribing!");

    email.value="";

});


/*=========================================
SMOOTH SCROLL
=========================================*/

document.querySelectorAll('a[href^="#"]').forEach(link=>{

    link.addEventListener("click",function(e){

        e.preventDefault();

        const target=document.querySelector(this.getAttribute("href"));

        if(target){

            target.scrollIntoView({

                behavior:"smooth"

            });

        }

    });

});


/*=========================================
SCROLL ANIMATION
=========================================*/

const observer=new IntersectionObserver(entries=>{

    entries.forEach(entry=>{

        if(entry.isIntersecting){

            entry.target.classList.add("show");

        }

    });

},{
    threshold:.2
});


document.querySelectorAll("section").forEach(section=>{

    section.classList.add("fade-up");

    observer.observe(section);

});


/*=========================================
BACK TO TOP
=========================================*/

window.addEventListener("scroll",()=>{

    if(window.scrollY>100){

        document.querySelector(".navbar").style.background="#ffffffee";

    }

    else{

        document.querySelector(".navbar").style.background="rgba(255,255,255,.75)";

    }

});


/*=========================================
BUTTON RIPPLE EFFECT
=========================================*/

document.querySelectorAll("button").forEach(button=>{

    button.addEventListener("click",function(e){

        const ripple=document.createElement("span");

        ripple.className="ripple";

        ripple.style.left=e.offsetX+"px";

        ripple.style.top=e.offsetY+"px";

        this.appendChild(ripple);

        setTimeout(()=>{

            ripple.remove();

        },600);

    });

});
/*=========================================
SCRIPT.JS
PART 3
Final JavaScript
=========================================*/


/*==============================
ACTIVE NAV LINK
==============================*/

const navLinks=document.querySelectorAll("nav ul li a");

navLinks.forEach(link=>{

    link.addEventListener("click",()=>{

        navLinks.forEach(item=>{

            item.classList.remove("active");

        });

        link.classList.add("active");

    });

});


/*==============================
SEARCH ICON
==============================*/

const searchIcon=document.querySelector(".fa-magnifying-glass");

searchIcon.addEventListener("click",()=>{

    const keyword=prompt("Search Lipstick");

    if(keyword){

        alert("Searching for : "+keyword);

    }

});


/*==============================
HOVER EFFECT
==============================*/

document.querySelectorAll(".product-card").forEach(card=>{

    card.addEventListener("mouseenter",()=>{

        card.style.transform="translateY(-12px) scale(1.02)";

    });

    card.addEventListener("mouseleave",()=>{

        card.style.transform="translateY(0) scale(1)";

    });

});


/*==============================
IMAGE ZOOM
==============================*/

document.querySelectorAll(".gallery img").forEach(img=>{

    img.addEventListener("click",()=>{

        const overlay=document.createElement("div");

        overlay.style.position="fixed";

        overlay.style.top="0";

        overlay.style.left="0";

        overlay.style.width="100%";

        overlay.style.height="100%";

        overlay.style.background="rgba(0,0,0,.85)";

        overlay.style.display="flex";

        overlay.style.alignItems="center";

        overlay.style.justifyContent="center";

        overlay.style.zIndex="9999";

        const image=document.createElement("img");

        image.src=img.src;

        image.style.maxWidth="90%";

        image.style.maxHeight="90%";

        image.style.borderRadius="20px";

        overlay.appendChild(image);

        document.body.appendChild(overlay);

        overlay.onclick=function(){

            overlay.remove();

        }

    });

});


/*==============================
BUTTON HOVER SOUND PLACEHOLDER
==============================*/

document.querySelectorAll("button").forEach(button=>{

    button.addEventListener("mouseenter",()=>{

        button.style.transition=".3s";

    });

});


/*==============================
SCROLL TO TOP
==============================*/

const topBtn=document.createElement("button");

topBtn.innerHTML="↑";

topBtn.style.position="fixed";

topBtn.style.bottom="30px";

topBtn.style.right="30px";

topBtn.style.width="55px";

topBtn.style.height="55px";

topBtn.style.borderRadius="50%";

topBtn.style.border="none";

topBtn.style.background="#b63a5b";

topBtn.style.color="#fff";

topBtn.style.fontSize="22px";

topBtn.style.cursor="pointer";

topBtn.style.display="none";

topBtn.style.zIndex="5000";

document.body.appendChild(topBtn);

window.addEventListener("scroll",()=>{

    if(window.scrollY>500){

        topBtn.style.display="block";

    }

    else{

        topBtn.style.display="none";

    }

});

topBtn.onclick=function(){

    window.scrollTo({

        top:0,

        behavior:"smooth"

    });

};


/*==============================
LOADING ANIMATION
==============================*/

window.addEventListener("load",()=>{

    document.body.style.opacity="1";

});


/*==============================
KEYBOARD SHORTCUTS
==============================*/

document.addEventListener("keydown",(e)=>{

    if(e.key==="Escape"){

        modal.style.display="none";

        loginPopup.style.display="none";

        cartSidebar.classList.remove("active");

    }

});


/*==============================
PRODUCT COUNT
==============================*/

function updateCartCount(){

    let count=document.querySelector(".cart-count");

    if(!count){

        count=document.createElement("span");

        count.className="cart-count";

        count.style.position="absolute";

        count.style.top="-8px";

        count.style.right="-8px";

        count.style.background="crimson";

        count.style.color="#fff";

        count.style.width="20px";

        count.style.height="20px";

        count.style.borderRadius="50%";

        count.style.display="flex";

        count.style.alignItems="center";

        count.style.justifyContent="center";

        count.style.fontSize="11px";

        document.querySelector(".fa-bag-shopping").parentElement.style.position="relative";

        document.querySelector(".fa-bag-shopping").parentElement.appendChild(count);

    }

    count.innerHTML=cart.length;

}


/*==============================
UPDATE CART MODIFICATION
==============================*/

const originalUpdateCart=updateCart;

updateCart=function(){

    originalUpdateCart();

    updateCartCount();

}


/*==============================
WELCOME MESSAGE
==============================*/

setTimeout(()=>{

    console.log("Welcome to Luxe Beauty");

},1000);


/*==============================
INITIALIZATION
==============================*/

document.addEventListener("DOMContentLoaded",()=>{

    updateCartCount();

});


/*==============================
END OF SCRIPT
==============================*/