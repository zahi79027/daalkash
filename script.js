document.addEventListener('DOMContentLoaded', function() {
    const modal = document.getElementById("result-modal");
    if (modal) {
        const modalImg = document.getElementById("modal-image");
        const resultItems = document.querySelectorAll(".result-item");
        const closeBtn = document.querySelector(".close-button");

        resultItems.forEach(item => {
            item.addEventListener('click', function() {
                const imgSrc = this.getAttribute('data-img-src');
                if (imgSrc) {
                    modal.style.display = "block";
                    modalImg.src = imgSrc;
                }
            });
        });

        function closeModal() {
            modal.style.display = "none";
        }

        if (closeBtn) {
            closeBtn.onclick = closeModal;
        }

        window.onclick = function(event) {
            if (event.target == modal) {
                closeModal();
            }
        };

        document.addEventListener('keydown', function(event) {
            if (event.key === "Escape") {
                closeModal();
            }
        });
    }
});

