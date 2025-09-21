   // Simple script to handle smooth scrolling for navigation links
    document.addEventListener('DOMContentLoaded', () => {
      const links = document.querySelectorAll('nav a');
      links.forEach(link => {
        link.addEventListener('click', (e) => {
          e.preventDefault();
          const targetId = link.getAttribute('href').substring(1);
          const targetSection = document.getElementById(targetId);
          if (targetSection) {
            window.scrollTo({
              top: targetSection.offsetTop - 60,
              behavior: 'smooth'
              
            });
          }
        });
      });
      Title();

    // Call again whenever hash changes
    window.addEventListener('hashchange',Title);
    });

  function Title() {
    switch (window.location.hash) {
      case "#about":
        document.title = "Rahul Tanwar's About Portfolio";
        break;
      case "#projects":
        document.title = "Rahul Tanwar's Projects Portfolio";
        break;
      case "#contact":
        document.title = "Rahul Tanwar's Contact Portfolio";
        break;
      default:
        document.title = "Rahul Tanwar's Portfolio";
    }
  }