// Function to load header template
function loadHeader() {
  fetch('header.html')
    .then(response => response.text())
    .then(html => {
      document.getElementById('header-placeholder').innerHTML = html;
      initializeHeaderScripts();
    });
}

// Function to load footer template  
function loadFooter() {
  fetch('footer.html')
    .then(response => response.text())
    .then(html => {
      document.getElementById('footer-placeholder').innerHTML = html;
    });
}

// Initialize header scripts (login modal, etc.)
function initializeHeaderScripts() {
  // Login Modal Functionality
  const loginBtn = document.getElementById('loginBtn');
  const closeModal = document.getElementById('closeModal');
  const loginModal = document.getElementById('loginModal');
  
  if (loginBtn && closeModal && loginModal) {
    loginBtn.addEventListener('click', () => {
      loginModal.classList.remove('hidden');
    });
    
    closeModal.addEventListener('click', () => {
      loginModal.classList.add('hidden');
    });
    
    loginModal.addEventListener('click', (e) => {
      if (e.target === loginModal) {
        loginModal.classList.add('hidden');
      }
    });
  }
}

// Load templates when DOM is ready
document.addEventListener('DOMContentLoaded', () => {
  loadHeader();
  loadFooter();
});
