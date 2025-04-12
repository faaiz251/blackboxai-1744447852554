// Global header loader with consistent initialization
document.addEventListener('DOMContentLoaded', async () => {
  try {
    // Load header template on all pages
    const headerPlaceholder = document.getElementById('header-placeholder');
    if (headerPlaceholder) {
      const headerResponse = await fetch('header.html');
      headerPlaceholder.outerHTML = await headerResponse.text();
      
      // Update active page highlighting
      const currentPage = location.pathname.split('/').pop() || 'index.html';
      document.querySelectorAll('nav a').forEach(link => {
        const linkPage = link.getAttribute('href');
        link.classList.toggle('text-blue-500', linkPage === currentPage);
        link.classList.toggle('font-medium', linkPage === currentPage);
        link.classList.toggle('text-gray-600', linkPage !== currentPage);
        link.classList.toggle('hover:text-blue-500', linkPage !== currentPage);
      });
    }

    // Load footer template
    const footerPlaceholder = document.getElementById('footer-placeholder');
    if (footerPlaceholder) {
      const footerResponse = await fetch('footer.html');
      footerPlaceholder.outerHTML = await footerResponse.text();
    }

  } catch (error) {
    console.error('Error loading templates:', error);
  }
});
