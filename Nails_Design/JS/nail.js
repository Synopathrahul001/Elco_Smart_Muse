/*=========================================================
                ELCO NAILS PAGE JAVASCRIPT
=========================================================*/

document.addEventListener("DOMContentLoaded", () => {

    /*=========================================
            PRODUCT FILTER
    =========================================*/

    const filterButtons = document.querySelectorAll(".filter-btn");
    const collections = document.querySelectorAll(".collection");

    filterButtons.forEach(button => {

        button.addEventListener("click", () => {

            filterButtons.forEach(btn =>
                btn.classList.remove("active")
            );

            button.classList.add("active");

            const text = button.textContent.trim();

            collections.forEach(section => {

                const heading = section.querySelector("h2").textContent;

                if (text === "All") {

                    section.style.display = "block";

                }

                else if (heading.includes(text)) {

                    section.style.display = "block";

                }

                else {

                    section.style.display = "none";

                }

            });

        });

    });

    /*=========================================
            PRODUCT SEARCH
    =========================================*/

    const searchInput =
        document.querySelector(".product-search input");

    const productCards =
        document.querySelectorAll(".product-card");

    if (searchInput) {

        searchInput.addEventListener("keyup", () => {

            const value =
                searchInput.value.toLowerCase();

            productCards.forEach(card => {

                const title =
                    card.querySelector("h3")
                    .textContent
                    .toLowerCase();

                if (title.includes(value)) {

                    card.style.display = "block";

                }

                else {

                    card.style.display = "none";

                }

            });

        });

    }

    /*=========================================
            WISHLIST
    =========================================*/

    const wishlistButtons =
        document.querySelectorAll(".wishlist");

    wishlistButtons.forEach(button => {

        button.addEventListener("click", () => {

            if (button.classList.contains("active")) {

                button.classList.remove("active");

                button.innerHTML = "❤ Wishlist";

            }

            else {

                button.classList.add("active");

                button.innerHTML = "❤ Added";

            }

        });

    });

    /*=========================================
            ADD TO CART
    =========================================*/

    const cartButtons =
        document.querySelectorAll(".cart");

    cartButtons.forEach(button => {

        button.addEventListener("click", () => {

            button.innerHTML = "✔ Added";

            button.style.background = "#28a745";

            setTimeout(() => {

                button.innerHTML = "Add to Cart";

                button.style.background = "";

            },2000);

        });

    });

});

/*=========================================================
            VIRTUAL TRY-ON
=========================================================*/

const colors = document.querySelectorAll(".color");

const finishButtons =
document.querySelectorAll(".finish-options button");

const shapeButtons =
document.querySelectorAll(".shape-options button");

const lengthButtons =
document.querySelectorAll(".length-options button");

const applyButton =
document.querySelector(".apply-btn");

const resetButton =
document.querySelector(".reset-btn");

const shopButton =
document.querySelector(".shop-btn");

const handPreview =
document.querySelector(".hand-preview");

/*=========================================
        COLOR SELECTION
=========================================*/

colors.forEach(color => {

    color.addEventListener("click", () => {

        colors.forEach(c => {

            c.style.border = "3px solid transparent";

            c.style.transform = "scale(1)";

        });

        color.style.border = "3px solid #111";

        color.style.transform = "scale(1.15)";

    });

});

/*=========================================
        FINISH SELECTOR
=========================================*/

finishButtons.forEach(button => {

    button.addEventListener("click", () => {

        finishButtons.forEach(btn => {

            btn.classList.remove("active");

        });

        button.classList.add("active");

    });

});

/*=========================================
        SHAPE SELECTOR
=========================================*/

shapeButtons.forEach(button => {

    button.addEventListener("click", () => {

        shapeButtons.forEach(btn => {

            btn.classList.remove("active");

        });

        button.classList.add("active");

    });

});

/*=========================================
        LENGTH SELECTOR
=========================================*/

lengthButtons.forEach(button => {

    button.addEventListener("click", () => {

        lengthButtons.forEach(btn => {

            btn.classList.remove("active");

        });

        button.classList.add("active");

    });

});

/*=========================================
        APPLY BUTTON
=========================================*/

if(applyButton){

applyButton.addEventListener("click",()=>{

    handPreview.style.boxShadow =
    "0 0 35px rgba(178,34,34,.45)";

    handPreview.style.transform =
    "scale(1.02)";

    applyButton.innerHTML =
    "✔ Applied";

    setTimeout(()=>{

        applyButton.innerHTML =
        "Apply Shade";

    },2000);

});

}

/*=========================================
        RESET BUTTON
=========================================*/

if(resetButton){

resetButton.addEventListener("click",()=>{

    colors.forEach(color=>{

        color.style.border =
        "3px solid transparent";

        color.style.transform =
        "scale(1)";

    });

    finishButtons.forEach(btn=>{

        btn.classList.remove("active");

    });

    shapeButtons.forEach(btn=>{

        btn.classList.remove("active");

    });

    lengthButtons.forEach(btn=>{

        btn.classList.remove("active");

    });

    handPreview.style.boxShadow="none";

    handPreview.style.transform="scale(1)";

});

}

/*=========================================
        SHOP BUTTON
=========================================*/

if(shopButton){

shopButton.addEventListener("click",()=>{

    alert("Redirecting to the selected product...");

});

}

/*=========================================================
                BACK TO TOP BUTTON
=========================================================*/

const backToTop = document.getElementById("backToTop");

window.addEventListener("scroll", () => {

    if (window.scrollY > 500) {

        backToTop.classList.add("show");

    } else {

        backToTop.classList.remove("show");

    }

});

backToTop.addEventListener("click", () => {

    window.scrollTo({

        top: 0,

        behavior: "smooth"

    });

});

/*=========================================================
                SCROLL REVEAL ANIMATION
=========================================================*/

const revealElements = document.querySelectorAll(

    ".category-card, .product-card, .care-card, .gallery-card, .review-card"

);

const revealOnScroll = () => {

    const trigger = window.innerHeight * 0.85;

    revealElements.forEach(element => {

        const top = element.getBoundingClientRect().top;

        if (top < trigger) {

            element.style.opacity = "1";

            element.style.transform = "translateY(0)";

        }

    });

};

revealElements.forEach(element => {

    element.style.opacity = "0";

    element.style.transform = "translateY(60px)";

    element.style.transition = "all .8s ease";

});

window.addEventListener("scroll", revealOnScroll);

revealOnScroll();

/*=========================================================
                NEWSLETTER FORM
=========================================================*/

const newsletterForm = document.querySelector(".newsletter-form");

if (newsletterForm) {

    newsletterForm.addEventListener("submit", function(e) {

        e.preventDefault();

        const email = this.querySelector("input").value.trim();

        if (email === "") {

            alert("Please enter your email address.");

            return;

        }

        alert("🎉 Thank you for subscribing to ELCO Beauty Club!");

        this.reset();

    });

}

/*=========================================================
                HAND IMAGE UPLOAD
=========================================================*/

const uploadButton = document.querySelector(".upload-btn");

if (uploadButton) {

    const fileInput = document.createElement("input");

    fileInput.type = "file";

    fileInput.accept = "image/*";

    fileInput.style.display = "none";

    document.body.appendChild(fileInput);

    uploadButton.addEventListener("click", () => {

        fileInput.click();

    });

    fileInput.addEventListener("change", () => {

        const file = fileInput.files[0];

        if (!file) return;

        const reader = new FileReader();

        reader.onload = function(event) {

            handPreview.innerHTML = "";

            handPreview.style.backgroundImage =

                `url(${event.target.result})`;

            handPreview.style.backgroundSize = "cover";

            handPreview.style.backgroundPosition = "center";

            handPreview.style.border = "none";

        };

        reader.readAsDataURL(file);

    });

}

/*=========================================================
                PRODUCT CARD HOVER EFFECT
=========================================================*/

const cards = document.querySelectorAll(".product-card");

cards.forEach(card => {

    card.addEventListener("mouseenter", () => {

        card.style.transition = ".4s";

        card.style.transform = "translateY(-12px) scale(1.02)";

    });

    card.addEventListener("mouseleave", () => {

        card.style.transform = "translateY(0) scale(1)";

    });

});

/*=========================================================
                CONSOLE MESSAGE
=========================================================*/

console.log(

"✨ ELCO Nails Page Loaded Successfully"

);