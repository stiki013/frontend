// Hamburger Menu Toggle
document.getElementById('hamburger-btn').addEventListener('click', function() {
    const menu = document.getElementById('mobile-menu');
    menu.classList.toggle('hidden');
  });
  
  // Dark Mode Toggle
  const toggleDarkMode = () => {
    document.body.classList.toggle('dark');
  };
  
  document.getElementById('dark-mode-toggle').addEventListener('click', toggleDarkMode);
  
  // Carousel Auto Slide
  let carouselItems = document.querySelectorAll('.carousel-item');
  let carouselIndex = 0;
  
  setInterval(() => {
    const carousel = document.querySelector('.carousel');
    carousel.scrollBy({ left: 320, behavior: 'smooth' });
  
    carouselIndex = (carouselIndex + 1) % carouselItems.length;
  
    if (carouselIndex === 0) {
      carousel.scrollTo({ left: 0, behavior: 'smooth' });
    }
  }, 3000);
  