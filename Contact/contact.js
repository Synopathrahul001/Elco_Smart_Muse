/*=========================================================
                MOBILE MENU
=========================================================*/

const menuBtn = document.querySelector(".menu-btn");
const navLinks = document.querySelector(".nav-links");

if(menuBtn){

    menuBtn.addEventListener("click",()=>{

        navLinks.classList.toggle("active");

        const icon = menuBtn.querySelector("i");

        icon.classList.toggle("fa-bars");
        icon.classList.toggle("fa-xmark");

    });

}

document.querySelectorAll(".nav-links a").forEach(link=>{

    link.addEventListener("click",()=>{

        navLinks.classList.remove("active");

        if(menuBtn){

            const icon = menuBtn.querySelector("i");

            icon.classList.remove("fa-xmark");
            icon.classList.add("fa-bars");

        }

    });

});


/*=========================================================
                FAQ ACCORDION
=========================================================*/

const faqItems = document.querySelectorAll(".faq-item");

faqItems.forEach(item => {

    const question = item.querySelector(".faq-question");
    const answer = item.querySelector(".faq-answer");

    question.addEventListener("click", () => {

        const isOpen = question.classList.contains("active");

        // Close all FAQs
        faqItems.forEach(faq => {

            faq.querySelector(".faq-answer").style.maxHeight = null;
            faq.querySelector(".faq-question").classList.remove("active");

        });

        // Open the clicked FAQ if it was closed
        if(!isOpen){

            answer.style.maxHeight = answer.scrollHeight + "px";
            question.classList.add("active");

        }

    });

});
/*=========================================================
                CONTACT FORM
=========================================================*/

const contactForm=document.querySelector(".contact-form");

if(contactForm){

contactForm.addEventListener("submit",(e)=>{

    e.preventDefault();

    const name=contactForm.querySelector('input[type="text"]');
    const email=contactForm.querySelector('input[type="email"]');
    const message=contactForm.querySelector("textarea");

    if(name.value.trim()===""){

        showToast("Please enter your name.");

        return;

    }

    if(email.value.trim()===""){

        showToast("Please enter your email.");

        return;

    }

    if(message.value.trim()===""){

        showToast("Please write your message.");

        return;

    }

    showToast("Message Sent Successfully 💖");

    contactForm.reset();

});

}


/*=========================================================
                NEWSLETTER
=========================================================*/

const newsletter=document.querySelector(".newsletter-form");

if(newsletter){

newsletter.addEventListener("submit",(e)=>{

    e.preventDefault();

    const email=newsletter.querySelector("input");

    if(email.value===""){

        showToast("Please enter your email.");

    }

    else{

        showToast("Thank you for subscribing!");

        newsletter.reset();

    }

});

}


/*=========================================================
                SCROLL REVEAL
=========================================================*/

const observer=new IntersectionObserver(entries=>{

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

if(window.scrollY>70){

    header.style.boxShadow="0 10px 25px rgba(0,0,0,.1)";

}

else{

    header.style.boxShadow="0 2px 10px rgba(0,0,0,.05)";

}

});


/*=========================================================
                SMOOTH SCROLL
=========================================================*/

document.querySelectorAll('a[href^="#"]').forEach(anchor=>{

anchor.addEventListener("click",function(e){

    e.preventDefault();

    const target=document.querySelector(this.getAttribute("href"));

    if(target){

        target.scrollIntoView({

            behavior:"smooth"

        });

    }

});

});


/*=========================================================
                TOAST MESSAGE
=========================================================*/

function showToast(message){

const toast=document.createElement("div");

toast.innerHTML=message;

toast.style.position="fixed";

toast.style.right="30px";

toast.style.bottom="30px";

toast.style.background="#111";

toast.style.color="#fff";

toast.style.padding="15px 28px";

toast.style.borderRadius="50px";

toast.style.fontWeight="600";

toast.style.boxShadow="0 10px 25px rgba(0,0,0,.2)";

toast.style.zIndex="99999";

toast.style.opacity="0";

toast.style.transition=".4s";

document.body.appendChild(toast);

setTimeout(()=>{

    toast.style.opacity="1";

},100);

setTimeout(()=>{

    toast.style.opacity="0";

},2500);

setTimeout(()=>{

    toast.remove();

},3000);

}