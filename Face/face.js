/*=========================================================
                    FAQ ACCORDION
=========================================================*/

const faqItems = document.querySelectorAll(".faq-item");

faqItems.forEach(item => {

    const question = item.querySelector(".faq-question");

    question.addEventListener("click", () => {

        faqItems.forEach(faq => {

            if (faq !== item) {
                faq.classList.remove("active");
            }

        });

        item.classList.toggle("active");

    });

});


/*=========================================================
                WISHLIST BUTTON
=========================================================*/

const wishlistButtons = document.querySelectorAll(".wishlist");

wishlistButtons.forEach(button => {

    button.addEventListener("click", () => {

        button.classList.toggle("active");

        const icon = button.querySelector("i");

        if(icon){

            if(button.classList.contains("active")){

                icon.classList.remove("fa-regular");
                icon.classList.add("fa-solid");

                button.innerHTML =
                '<i class="fa-solid fa-heart"></i> Added';

            }

            else{

                button.innerHTML =
                '<i class="fa-regular fa-heart"></i> Wishlist';

            }

        }

    });

});


/*=========================================================
                ADD TO CART
=========================================================*/

const cartButtons = document.querySelectorAll(".cart");

cartButtons.forEach(button => {

    button.addEventListener("click", () => {

        const originalText = button.innerHTML;

        button.innerHTML =
        '<i class="fa-solid fa-check"></i> Added';

        button.style.background = "#2E7D32";

        setTimeout(() => {

            button.innerHTML = originalText;

            button.style.background = "";

        },2000);

    });

});


/*=========================================================
                NEWSLETTER
=========================================================*/

const newsletterForm =
document.querySelector(".newsletter-form");

if(newsletterForm){

newsletterForm.addEventListener("submit",(e)=>{

    e.preventDefault();

    const email =
    newsletterForm.querySelector("input").value;

    if(email === ""){

        alert("Please enter your email address.");

        return;

    }

    alert("Thank you for subscribing to ELCO Beauty Club!");

    newsletterForm.reset();

});

}


/*=========================================================
            VIRTUAL TRY-ON CONTROLS
=========================================================*/

const applyLook =
document.querySelector(".apply-look");

const resetLook =
document.querySelector(".reset-look");

if(applyLook){

applyLook.addEventListener("click",()=>{

    alert(
    "✨ Makeup look applied successfully!\n\n(Real AI Try-On will be connected later.)"
    );

});

}

if(resetLook){

resetLook.addEventListener("click",()=>{

    const selects =
    document.querySelectorAll(".control-group select");

    selects.forEach(select=>{

        select.selectedIndex = 0;

    });

    const slider =
    document.querySelector('input[type="range"]');

    if(slider){

        slider.value = 60;

    }

    alert("Makeup settings have been reset.");

});

}


/*=========================================================
                CAMERA BUTTONS
=========================================================*/

const cameraButtons =
document.querySelectorAll(".camera-buttons button");

cameraButtons.forEach(button=>{

button.addEventListener("click",()=>{

    const text =
    button.innerText.trim();

    alert(text + "\n\nThis feature will be connected later.");

});

});

/*=========================================================
                STICKY NAVBAR EFFECT
=========================================================*/

const navbar = document.querySelector(".navbar");

window.addEventListener("scroll", () => {

    if (window.scrollY > 50) {

        navbar.style.boxShadow = "0 10px 30px rgba(0,0,0,.12)";
        navbar.style.transition = ".3s";

    } else {

        navbar.style.boxShadow = "0 2px 15px rgba(0,0,0,.05)";

    }

});


/*=========================================================
                SCROLL REVEAL ANIMATION
=========================================================*/

const revealElements = document.querySelectorAll(

".category-card,\
.product-card,\
.guide-card,\
.review-card,\
.camera-box,\
.control-panel"

);

const revealOnScroll = () => {

    revealElements.forEach(element => {

        const top = element.getBoundingClientRect().top;

        if (top < window.innerHeight - 100) {

            element.style.opacity = "1";
            element.style.transform = "translateY(0)";

        }

    });

};

revealElements.forEach(element => {

    element.style.opacity = "0";
    element.style.transform = "translateY(60px)";
    element.style.transition = ".8s ease";

});

window.addEventListener("scroll", revealOnScroll);

revealOnScroll();


/*=========================================================
                BACK TO TOP BUTTON
=========================================================*/

const topButton = document.createElement("button");

topButton.innerHTML =
'<i class="fa-solid fa-arrow-up"></i>';

topButton.className = "back-to-top";

document.body.appendChild(topButton);

topButton.style.position = "fixed";
topButton.style.right = "30px";
topButton.style.bottom = "30px";
topButton.style.width = "55px";
topButton.style.height = "55px";
topButton.style.border = "none";
topButton.style.borderRadius = "50%";
topButton.style.background = "#B22222";
topButton.style.color = "#fff";
topButton.style.cursor = "pointer";
topButton.style.fontSize = "20px";
topButton.style.display = "none";
topButton.style.zIndex = "999";
topButton.style.transition = ".4s";

window.addEventListener("scroll", () => {

    if (window.scrollY > 400) {

        topButton.style.display = "block";

    } else {

        topButton.style.display = "none";

    }

});

topButton.addEventListener("click", () => {

    window.scrollTo({

        top:0,
        behavior:"smooth"

    });

});


/*=========================================================
                CART COUNTER
=========================================================*/

let cartCount = 0;

const cartIcon =
document.querySelector(".fa-bag-shopping");

const counter = document.createElement("span");

counter.className = "cart-counter";
counter.innerText = "0";

counter.style.position = "absolute";
counter.style.top = "-8px";
counter.style.right = "-10px";
counter.style.width = "20px";
counter.style.height = "20px";
counter.style.background = "#B22222";
counter.style.color = "#fff";
counter.style.borderRadius = "50%";
counter.style.fontSize = "11px";
counter.style.display = "flex";
counter.style.alignItems = "center";
counter.style.justifyContent = "center";

if(cartIcon){

    cartIcon.parentElement.style.position = "relative";

    cartIcon.parentElement.appendChild(counter);

}

cartButtons.forEach(button=>{

button.addEventListener("click",()=>{

    cartCount++;

    counter.innerText = cartCount;

});

});


/*=========================================================
            PRODUCT CARD HOVER GLOW
=========================================================*/

const productCards =
document.querySelectorAll(".product-card");

productCards.forEach(card=>{

card.addEventListener("mouseenter",()=>{

    card.style.boxShadow =
    "0 25px 45px rgba(178,34,34,.18)";

});

card.addEventListener("mouseleave",()=>{

    card.style.boxShadow = "";

});

});


/*=========================================================
            ACTIVE NAVIGATION
=========================================================*/

const navLinks =
document.querySelectorAll(".nav-links a");

navLinks.forEach(link=>{

link.addEventListener("click",()=>{

    navLinks.forEach(item=>{

        item.classList.remove("active");

    });

    link.classList.add("active");

});

});


/*=========================================================
            PAGE LOAD ANIMATION
=========================================================*/

window.addEventListener("load",()=>{

document.body.style.opacity = "0";

setTimeout(()=>{

    document.body.style.transition = ".8s";

    document.body.style.opacity = "1";

},100);

});


/*=========================================================
                CONSOLE MESSAGE
=========================================================*/

console.log("%c✨ ELCO Cosmetics",
"font-size:24px;color:#B22222;font-weight:bold;");

console.log("%cLuxury Face Collection Loaded Successfully.",
"font-size:14px;color:#555;");