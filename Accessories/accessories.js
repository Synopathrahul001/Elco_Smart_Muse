/*=========================================================
                    MOBILE MENU
=========================================================*/

const menuBtn = document.querySelector(".menu-btn");
const navLinks = document.querySelector(".nav-links");

if(menuBtn){

    menuBtn.addEventListener("click",()=>{

        navLinks.classList.toggle("active");

        menuBtn.querySelector("i").classList.toggle("fa-bars");

        menuBtn.querySelector("i").classList.toggle("fa-xmark");

    });

}

document.querySelectorAll(".nav-links a").forEach(link=>{

    link.addEventListener("click",()=>{

        navLinks.classList.remove("active");

        if(menuBtn){

            menuBtn.querySelector("i").classList.remove("fa-xmark");
            menuBtn.querySelector("i").classList.add("fa-bars");

        }

    });

});


/*=========================================================
                    SEARCH PRODUCTS
=========================================================*/

const searchInput = document.getElementById("searchInput");

const products = document.querySelectorAll(".product-card");

if(searchInput){

searchInput.addEventListener("keyup",()=>{

    const value = searchInput.value.toLowerCase();

    products.forEach(product=>{

        const text = product.innerText.toLowerCase();

        if(text.includes(value)){

            product.style.display="block";

        }

        else{

            product.style.display="none";

        }

    });

});

}


/*=========================================================
                    CATEGORY FILTER
=========================================================*/

const filterButtons = document.querySelectorAll(".filter-buttons button");

filterButtons.forEach(button=>{

button.addEventListener("click",()=>{

    filterButtons.forEach(btn=>btn.classList.remove("active"));

    button.classList.add("active");

    const filter = button.innerText.toLowerCase();

    products.forEach(card=>{

        if(filter==="all"){

            card.style.display="block";

        }

        else if(card.classList.contains(filter)){

            card.style.display="block";

        }

        else{

            card.style.display="none";

        }

    });

});

});


/*=========================================================
                    WISHLIST
=========================================================*/

document.querySelectorAll(".product-icons button:first-child")

.forEach(button=>{

button.addEventListener("click",()=>{

    const icon = button.querySelector("i");

    icon.classList.toggle("fa-regular");

    icon.classList.toggle("fa-solid");

    icon.style.color="#B11226";

    showToast("Added to Wishlist ❤️");

});

});


/*=========================================================
                    ADD TO CART
=========================================================*/

document.querySelectorAll(".cart-btn")

.forEach(button=>{

button.addEventListener("click",()=>{

    showToast("Item Added to Cart 🛒");

});

});


/*=========================================================
                    FAQ
=========================================================*/

const faqItems = document.querySelectorAll(".faq-item");

faqItems.forEach(item=>{

const question = item.querySelector(".faq-question");

question.addEventListener("click",()=>{

    faqItems.forEach(faq=>{

        if(faq!==item){

            faq.querySelector(".faq-answer").style.maxHeight=null;

        }

    });

    const answer = item.querySelector(".faq-answer");

    if(answer.style.maxHeight){

        answer.style.maxHeight=null;

    }

    else{

        answer.style.maxHeight=answer.scrollHeight+"px";

    }

});

});


/*=========================================================
                SCROLL REVEAL
=========================================================*/

const observer = new IntersectionObserver(entries=>{

entries.forEach(entry=>{

    if(entry.isIntersecting){

        entry.target.classList.add("show");

    }

});

},{threshold:.2});

document.querySelectorAll("section").forEach(section=>{

section.classList.add("fade-up");

observer.observe(section);

});


/*=========================================================
                STICKY HEADER
=========================================================*/

window.addEventListener("scroll",()=>{

const header=document.querySelector(".header");

if(window.scrollY>80){

    header.style.boxShadow="0 10px 30px rgba(0,0,0,.1)";

}

else{

    header.style.boxShadow="0 2px 15px rgba(0,0,0,.05)";

}

});


/*=========================================================
                TOAST MESSAGE
=========================================================*/

function showToast(message){

const toast=document.createElement("div");

toast.innerText=message;

toast.style.position="fixed";

toast.style.bottom="30px";

toast.style.right="30px";

toast.style.background="#111";

toast.style.color="#fff";

toast.style.padding="15px 25px";

toast.style.borderRadius="50px";

toast.style.zIndex="9999";

toast.style.fontWeight="600";

toast.style.boxShadow="0 10px 25px rgba(0,0,0,.2)";

toast.style.animation="fadeIn .3s";

document.body.appendChild(toast);

setTimeout(()=>{

    toast.remove();

},2500);

}


/*=========================================================
                NEWSLETTER
=========================================================*/

const newsletter = document.querySelector(".newsletter-form");

if(newsletter){

newsletter.addEventListener("submit",(e)=>{

e.preventDefault();

const email = newsletter.querySelector("input");

if(email.value===""){

    showToast("Please enter your email.");

}

else{

    showToast("Thank you for subscribing! 💖");

    newsletter.reset();

}

});

}