// Auto-lightbox for Bulma Clean Theme.
// Makes ANY post image clickable to open in a Bulma modal.
// Caption is taken from the image's title (preferred) or alt.

(function () {
  function ready(fn){ if (document.readyState !== "loading") fn(); else document.addEventListener("DOMContentLoaded", fn); }

  ready(() => {
    // Create modal once
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

    // Make all content images clickable (skip logos/nav)
    const containers = document.querySelectorAll('.content, .post, article, .section');
    containers.forEach(container => {
      container.querySelectorAll('img').forEach(img => {
        if (img.dataset.noLightbox === "true") return;

        // If wrapped in a link, use it; otherwise wrap it
        let link = img.closest('a');
        const href = link?.getAttribute('href') || img.currentSrc || img.src;

        if (!link) {
          link = document.createElement('a');
          link.href = href;
          link.style.display = 'inline-block';
          img.replaceWith(link);
          link.appendChild(img);
        }

        if (!link.dataset.lbBound) {
          link.addEventListener('click', (e) => {
            const target = link.getAttribute('href') || '';
            if (!/\.(png|jpe?g|webp|gif|bmp|svg)(\?.*)?$/i.test(target)) return;
            e.preventDefault();
            imgEl.src = target;
            capEl.textContent = img.dataset.caption || img.getAttribute('title') || img.getAttribute('alt') || '';
            modal.classList.add('is-active');
          });
          link.dataset.lbBound = "true";
        }
      });
    });
  });
})();