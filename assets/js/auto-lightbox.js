// Auto-lightbox + auto-caption + auto-box for Bulma Clean Theme.
// Authoring: plain Markdown image with a title for the caption.
// Default: content images are boxed + click-to-enlarge.
// Opt-out: {: data-no-lightbox="true" } or {: .no-box }

(function () {
  function ready(fn){ if (document.readyState !== "loading") fn(); else document.addEventListener("DOMContentLoaded", fn); }

  ready(() => {
    // Inject one Bulma modal
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
      <button class="modal-close is-large" aria-label="close"><span aria-hidden="true">×</span></button>`;
    document.body.appendChild(modal);

    const imgEl = modal.querySelector('#lb-img');
    const capEl = modal.querySelector('#lb-cap');

    function close() {
      modal.classList.remove('is-active');
      imgEl.removeAttribute('src');
      capEl.textContent = '';
    }

    // ESC closes
    document.addEventListener('keydown', (e) => { if (e.key === 'Escape') close(); });

    // Click outside figure OR on × closes
    modal.addEventListener('click', (e) => {
      const insideImage = e.target.closest('.modal-content .image');
      const onCloseBtn  = e.target.closest('.modal-close');
      if (!insideImage || onCloseBtn) close();
    });

    // Helper: should we enhance this image?
	function shouldEnhance(img) {
	  // Hard skips
	  if (
		img.dataset.noLightbox === "true" ||
		img.classList.contains('emoji') ||            // jemoji outputs <img class="emoji">
		img.closest('.emoji') ||
		img.closest('header, footer, nav, .navbar, .footer, .site-header, .site-footer, .hero, .modal, .logo, .brand')
	  ) return false;

	  // If the image is in card/listing UI AND not in any .content block, skip it
	  const inListingUI = !!img.closest(
		'.card, .card-image, .card-content, .post-list, .posts, .post-summary, .media, .media-left, .media-content, .tiles, .columns, .column'
	  );
	  const inContent = !!img.closest('.content');

	  if (inListingUI && !inContent) return false;

	  // Only enhance images that are in actual content blocks
	  return inContent;
	}

    // Make images lightboxable
    const allImgs = Array.from(document.querySelectorAll('img'));
    allImgs.forEach(img => {
      if (!shouldEnhance(img)) return;

      const caption = img.getAttribute('title') || img.dataset.caption || img.getAttribute('alt') || '';

      // Wrap into a <figure> once, add .box by default (unless .no-box is present)
      let figure = img.closest('figure');
      if (!figure) {
        figure = document.createElement('figure');
        figure.className = 'image has-text-centered';
        if (!img.classList.contains('no-box')) figure.classList.add('box');

        // Move inline max-width to the figure
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
      } else {
        if (!img.classList.contains('no-box')) figure.classList.add('box');
      }

      // Ensure there's a link wrapper pointing to the big image
      let link = img.closest('a');
      const target = link?.getAttribute('href') || img.currentSrc || img.src;

      if (!link) {
        link = document.createElement('a');
        link.href = target;
        link.style.display = 'inline-block';
        img.replaceWith(link);
        link.appendChild(img);
      }

      // Bind once
      if (!link.dataset.lbBound) {
        link.addEventListener('click', (e) => {
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
})();
