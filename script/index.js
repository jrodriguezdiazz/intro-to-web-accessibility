window.onload = () => {
  document.querySelector(".arrow-right").addEventListener("click", clickRight);
  document.querySelector(".arrow-left").addEventListener("click", clickLeft);

  document
    .querySelector(".send-button")
    .addEventListener("click", showNotification);

  document.querySelectorAll(".project").forEach((element) => {
    element.addEventListener("click", (e) => openModal(e));
  });

  document.body.addEventListener("click", (e) => closeModal(e));
};

/**
 * @description This function is called when the person clicks on the right date of the carousel to navigate to the right
 * @returns
 */
function clickRight() {
  const currentLeft = parseInt(
    getComputedStyle(document.querySelector(".project-container")).left,
    10
  );
  if (currentLeft < -270) {
    // If the left value is less than -270, to move the content
    return;
  }
  let newValue = currentLeft - 270; // 270 takes into account the size of the image plus your margins
  document.querySelector(".project-container").style.left = `${newValue}px`;
}

/**
 * @description This function is called when the person clicks on the left date of the carousel to navigate to the left
 * @returns
 */
function clickLeft() {
  const currentLeft = parseInt(
    getComputedStyle(document.querySelector(".project-container")).left,
    10
  );
  if (currentLeft === 0) {
    // If the left value is 0, return to not follow the content
    return;
  }
  let newValue = currentLeft + 270;
  document.querySelector(".project-container").style.left = `${newValue}px`;
}

/**
 * @description This function is called when the person clicks on the send button of the contact form
 * @returns
 */
function showNotification() {
  document.querySelector(".notification").style.display = "flex";
  setTimeout(function () {
    document.querySelector(".notification").style.display = "none";
  }, 3000);
}

/**
 * @description This function is called when the person clicks on any embarrassment of the carousel
 * @returns
 */
function openModal(e) {
  document.querySelector(".modal-container").style.display = "flex";
}

/**
 * @description This function is called to close the modal
 * @returns
 */
function closeModal(e) {
  // If the click occurs within the images of the carousel or inside the modal, the modal is not closed
  if (
    e.target.className.includes("project") ||
    e.target.className === "modal"
  ) {
    return;
  } else {
    document.querySelector(".modal-container").style.display = "none";
  }
}
