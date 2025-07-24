
    const hamburger = document.getElementById('hamburger');
    const navMenu = document.getElementById('nav-menu');

    hamburger.addEventListener('click', () => {
        navMenu.classList.toggle('active');
    });
    

  window.addEventListener('load', () => {
    document.querySelector('.leftSection').classList.add('show');
  });
  window.addEventListener('load', () => {
    document.querySelector('.rightSection').classList.add('show');
  });
  
  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('show');
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0 });
  
  document.querySelectorAll('.secondSection, .skills')
    .forEach(el => observer.observe(el));
  
  



