// GET GALLERY CONTAINER AND POPUP IMAGE
const galleryContainer = document.querySelectorAll(".gallery-container img");
const popupImage = document.querySelector(".popup-image");

// FOR EACH IMAGE IN GALLERY CONTAINER, APPLY STYLE IN BLOCK WHEN CLICKED
galleryContainer.forEach(image =>
    image.onclick = () => {
    // CHANGE DISPLAY PROPERTY TO BLOCK
    popupImage.style.display = "block";
    // GET IMAGE
    document.querySelector(".popup-image img").src = image.getAttribute("src");
});

// APPLY STYLE IN BLOCK TO SPAN WHEN CLICKED
document.querySelector(".popup-image span").onclick = () => {
    popupImage.style.display = "none";
}
