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
    modal.addEventListener('click', (e) => {
      if (e.target === modal || e.target.classList.contains('modal-background') || e.target.classList.contains('modal-close')) close();
    });
    document.addEventListener('keydown', (e) => { if (e.key === 'Escape') close(); });

    // Enhance content images (skip logos/nav)
    const containers = document.querySelectorAll('.content, .post, article, .section');
    containers.forEach(container => {
      container.querySelectorAll('img').forEach(img => {
        if (img.dataset.noLightbox === "true") return;

        // Build figure wrapper + caption (from title or data-caption)
        const caption = img.getAttribute('title') || img.dataset.caption || img.getAttribute('alt') || '';
        const wantsBox = img.classList.contains('boxed');

        // Only wrap once
        if (!img.closest('figure')) {
          const figure = document.createElement('figure');
          figure.className = 'image has-text-centered';
          if (wantsBox) figure.classList.add('box');

          // If author set an inline max-width on the img, move it to the figure
          const mw = img.style.maxWidth || '';
          if (mw) {
            figure.style.maxWidth = mw;
            img.style.maxWidth = '100%';
          }

          img.replaceWith(figure);
          figure.appendChild(img);

          if (caption) {
            const figcap = document.createElement('figcaption');
            figcap.className = 'has-text-grey is-size-7';
            figcap.style.marginTop = '.5rem';
            figcap.textContent = caption;
            figure.appendChild(figcap);
          }
        }

        // Use existing link if wrapped; otherwise link to itself
        let link = img.closest('a');
        const target = link?.getAttribute('href') || img.currentSrc || img.src;

        if (!link) {
          link = document.createElement('a');
          link.href = target;
          link.style.display = 'inline-block';
          img.replaceWith(link);
          link.appendChild(img);
        }

        if (!link.dataset.lbBound) {
          link.addEventListener('click', (e) => {
            // Only intercept if link points to an image
            const href = link.getAttribute('href') || '';
            if (!/\.(png|jpe?g|webp|gif|bmp|svg)(\?.*)?$/i.test(href)) return;
            e.preventDefault();
            imgEl.src = href;
            capEl.textContent = caption;
            imgEl.alt = img.getAttribute('alt') || '';
            modal.classList.add('is-active');
          });
          link.dataset.lbBound = "true";
        }
      });
    });
  });
})();

// Close when clicking outside the modal content
document.querySelectorAll('.modal').forEach(modal => {
  modal.addEventListener('click', e => {
    if (!e.target.closest('.modal-content')) {
      modal.classList.remove('is-active');
    }
  });
});