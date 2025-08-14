// Auto-lightbox + auto-caption + optional box for Bulma Clean Theme.
// Authoring: plain Markdown image with a title for the caption.
// Add class ".boxed" (via Kramdown attr list) to put the image in a Bulma .box.

(function () {
  function ready(fn){ if (document.readyState !== "loading") fn(); else document.addEventListener("DOMContentLoaded", fn); }

  ready(() => {
    // Create a single Bulma modal for lightbox use
    const modal = document.createElement('div');
    modal.className = 'modal';
    modal.innerHTML = `
      <div class="modal-background"></div>
      <div class="modal-content" style="display:flex;justify-content:center;align-items:center;">
        <figure class="image">
          <img id="lb-img" alt="">
          <figcaption id="lb-cap" class="has-text-grey-light has-text-centered is-size-6" style="margin-top:.5rem;"></figcaption>
        </figure>
      </div>
      <button class="modal-close is-large" aria-label="close"></button>`;
    document.body.appendChild(modal);

    const imgEl = modal.querySelector('#lb-img');
    const capEl = modal.querySelector('#lb-cap');

    function close() {
      modal.classList.remove('is-active');
      imgEl.removeAttribute('src');
      capEl.textContent = '';
    }

    // Close on ESC
    document.addEventListener('keydown', (e) => { if (e.key === 'Escape') close(); });

    // Close when tapping/clicking outside the figure, or on the × button
    modal.addEventListener('click', (e) => {
      const insideImage = e.target.closest('.modal-content .image');
      const onCloseBtn = e.target.closest('.modal-close');
      if (!insideImage || onCloseBtn) close();
    });

    // Enhance content images (skip logos/nav)
    const containers = document.querySelectorAll('.content, .post, article, .section');
    containers.forEach(container => {
      container.querySelectorAll('img').forEach(img => {
        if (img.dataset.noLightbox === "true") return;

        // Build figure wrapper + caption (from title or data-caption)
        const caption = img.getAttribute('title') || img.dataset.caption || img.getAttribute('alt') || '';
        const wantsBox = img.classList.contains('boxed');
