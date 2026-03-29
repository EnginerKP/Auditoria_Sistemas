  // Smooth scroll + active nav
  document.querySelectorAll('a[href^="#"]').forEach(a => {
    a.addEventListener('click', e => {
      e.preventDefault();
      document.querySelector(a.getAttribute('href'))?.scrollIntoView({ behavior: 'smooth' });
    });
  });
 
  const sections = document.querySelectorAll('section[id]');
  const navLinks = document.querySelectorAll('nav .nav-links a');
  window.addEventListener('scroll', () => {
    let current = '';
    sections.forEach(s => {
      if (window.scrollY >= s.offsetTop - 100) current = s.getAttribute('id');
    });
    navLinks.forEach(a => {
      a.classList.toggle('active', a.getAttribute('href') === '#' + current);
    });
  });
 
  // Accordion para las etapas de TecnoSeguro
  function toggleStage(id) {
    const stage = document.getElementById(id);
    stage.classList.toggle('open');
  }