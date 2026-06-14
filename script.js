// ===========================
// VIVA DRIVING SCHOOL GB
// ===========================

document.addEventListener('DOMContentLoaded', () => {

  /* ---------- Mobile nav toggle ---------- */
  const hamburger = document.getElementById('hamburger');
  const nav = document.getElementById('nav');

  if (hamburger && nav) {
    hamburger.addEventListener('click', () => {
      nav.classList.toggle('is-open');
      hamburger.classList.toggle('is-active');
    });

    // Close menu when a link is clicked
    nav.querySelectorAll('.nav__link').forEach(link => {
      link.addEventListener('click', () => {
        nav.classList.remove('is-open');
        hamburger.classList.remove('is-active');
      });
    });
  }

  /* ---------- Active nav link on scroll ---------- */
  const sections = document.querySelectorAll('section[id]');
  const navLinks = document.querySelectorAll('.nav__link');

  const onScroll = () => {
    let current = '';
    sections.forEach(section => {
      const sectionTop = section.offsetTop - 100;
      if (window.scrollY >= sectionTop) {
        current = section.getAttribute('id');
      }
    });

    navLinks.forEach(link => {
      link.classList.remove('active');
      if (link.getAttribute('href') === `#${current}`) {
        link.classList.add('active');
      }
    });
  };

  window.addEventListener('scroll', onScroll);

  /* ---------- Footer year ---------- */
  const yearEl = document.getElementById('year');
  if (yearEl) {
    yearEl.textContent = new Date().getFullYear();
  }

  /* ---------- Student Gallery ---------- */
  // To add more images, simply add the filename to this array
  // and place the image file inside the images/students/ folder.
  const galleryImages = [
    { src: 'images/students/student1.jpeg', caption: 'Pass certificate celebration 🎉' },
    { src: 'images/students/student2.jpeg', caption: 'Another successful pass! 🚗' }
  ];

  const galleryGrid = document.getElementById('galleryGrid');

  if (galleryGrid) {
    galleryImages.forEach(item => {
      const figure = document.createElement('div');
      figure.className = 'gallery__item';

      const img = document.createElement('img');
      img.src = item.src;
      img.alt = item.caption || 'Viva Driving School student';
      img.loading = 'lazy';

      figure.appendChild(img);

      if (item.caption) {
        const caption = document.createElement('div');
        caption.className = 'gallery__caption';
        caption.textContent = item.caption;
        figure.appendChild(caption);
      }

      galleryGrid.appendChild(figure);
    });
  }

  /* ---------- Contact form ---------- */
  const form = document.getElementById('contactForm');
  const status = document.getElementById('formStatus');

  if (form) {
    form.addEventListener('submit', (e) => {
      e.preventDefault();

      const name = form.name.value.trim();
      const phone = form.phone.value.trim();
      const message = form.message.value.trim();

      if (!name || !phone || !message) {
        status.textContent = 'Please fill in all fields.';
        status.style.color = '#ff6b6b';
        return;
      }

      // Build a WhatsApp message with the form details
      const text = encodeURIComponent(
        `Hi Viva Driving School! My name is ${name} (${phone}).\n\n${message}`
      );

      // Open WhatsApp with the pre-filled message
      window.open(`https://wa.me/447908969686?text=${text}`, '_blank');

      status.textContent = 'Thanks! Opening WhatsApp to send your message...';
      status.style.color = '#8aef1f';
      form.reset();
    });
  }

});
