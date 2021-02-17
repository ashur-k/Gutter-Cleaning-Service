// console.log("JS file is loaded");

const modal = document.querySelector(".modall");
const previews = document.querySelectorAll(".gallery img");
const original = document.querySelector(".full-img");
const caption = document.querySelector(".caption");

previews.forEach((preview) => {
    preview.addEventListener("click", () => {
        modal.classList.add("open");  
        original.classList.add("open") 
        //Dynamic chage text and image
        const originalSrc = preview.getAttribute("data-original");
        original.src = `/assets/media/gallery-full-images/${originalSrc}`
        const altText = preview.alt;
        caption.textContent = altText
          
    });
});

modal.addEventListener("click", (e) => {
    console.log(e)
    if (e.target.classList.contains("modall")) {
        modal.classList.remove("open");
        original.classList.remove("open") 
    }
});