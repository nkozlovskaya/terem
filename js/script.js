window.addEventListener("DOMContentLoaded", () => {
  const modal = () => {
    function bindModal(modalSelector, closeSelector) {
      const modal = document.querySelector(modalSelector);
      const close = document.querySelector(closeSelector);

      close.addEventListener("click", () => {
        modal.style.display = "none";
      });

      modal.addEventListener("click", (e) => {
        if (e.target === modal) {
          modal.style.display = "none";
        }
      });
    }

    bindModal(".overlay", ".popup_close");
  };

  modal();

  const header = document.querySelector(".first_row");

  const secondTwo = document.querySelector(".second_two");

  const yellowBtn = document.querySelector("#yellow");

  const greenBtn = document.querySelector("#green");

  yellowBtn.addEventListener("click", function () {
    header.classList.toggle("hidden");
  });

  greenBtn.addEventListener("click", function () {
    secondTwo.classList.toggle("order");
  });
});
