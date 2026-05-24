const initSlider = () => {
    const imageList = document.querySelector(".slider_wrapper .image_list"); // querySelector, not querySelectorAll
    const sliderButtons = document.querySelectorAll(".slider_wrapper .slider_button");

    sliderButtons.forEach(button => {
        button.addEventListener("click", () => {
            const direction = button.id === "prev_slide" ? -1 : 1;
            const scrollAmount = imageList.clientWidth * direction;
            imageList.scrollBy({ left: scrollAmount, behavior: "smooth" });
        });
    });
};

window.addEventListener("load", initSlider);
