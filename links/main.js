import confetti from "canvas-confetti";

document.addEventListener("DOMContentLoaded", () => {

  const canvas = document.querySelector(".confetti");
  const elCanvasContainer = document.querySelector(".canvas-confetti");
  elCanvasContainer.appendChild(canvas);
  
  const cannonConfetti = confetti.create(canvas, {
    resize: true,
    useWorker: true
  });
  
  const elCopyrightBlurb = document.querySelector(".copyright-blurb");
  const elShareButton = document.querySelector(`[data-control=share-page]`);
  const elModal = document.querySelector(".modal");
  
  elCopyrightBlurb.textContent = `© ${new Date().getFullYear()} All Rights Reserved.`
  
  let modalIsDisplayed = false;
  let displayModal = "";
  
  elShareButton.addEventListener("click", async () => {
    
    if (navigator.clipboard && !modalIsDisplayed) {
      await navigator.clipboard.writeText("https://links.judzelicor.com");
  
      modalIsDisplayed = true;
  
      elModal.innerHTML = `
      <div class="modal-content">
        <p class="modal-header">
          <span class="modal-emphasize">Page link copied! 🎉</span>
        </p>
        <p>You can now share this link with anyone on the internet.</p>
      </div>
      `
      cannonConfetti({
        particleCount: 100,
        spread: 70,
        origin: { y: 0.6 }
      });
  
  
    } else {
      modalIsDisplayed = false;
  
      clearTimeout(displayModal);
  
      displayModal = 
      setTimeout(() => {
        elModal.innerHTML = ``
        modalIsDisplayed = false
      }, 4000);
    }
  
    modalIsDisplayed = false;
  });

});
