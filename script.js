// Smooth scrolling for navigation links
document.querySelectorAll('header nav a').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        // Check if the link is an internal link
        if (this.hash !== "") {
            // Prevent default anchor click behavior
            e.preventDefault();

            // Store hash
            const hash = this.hash;

            // Calculate an offset if you have a fixed header
            const headerOffset = 70; // Adjust this value to the height of your fixed header
            const element = document.querySelector(hash);
            if (element) {
                const elementPosition = element.getBoundingClientRect().top + window.pageYOffset;
                const offsetPosition = elementPosition - headerOffset;

                window.scrollTo({
                    top: offsetPosition,
                    behavior: "smooth"
                });
            }
        } // End if
    });
});

// Basic Hero Section Animation (Example: Fade in on load)
document.addEventListener('DOMContentLoaded', () => {
    const heroSection = document.querySelector('.hero'); // Assuming you'll add a hero section
    if (heroSection) {
        heroSection.style.opacity = 0;
        setTimeout(() => {
            heroSection.style.transition = 'opacity 1s ease-in-out';
            heroSection.style.opacity = 1;
        }, 100); // Delay for effect
    }

    // Contact Form Modal Logic
    const contactFormModal = document.getElementById('contactFormModal');
    const openModalButton = document.getElementById('openContactModalBtn'); // Updated ID
    const closeModalButton = document.getElementById('closeContactModalBtn'); // Updated ID

    if (openModalButton && contactFormModal) {
        openModalButton.addEventListener('click', (e) => {
            e.preventDefault(); // Prevent default anchor behavior if it's a link
            contactFormModal.style.display = 'block';
        });
    }

    if (closeModalButton && contactFormModal) {
        closeModalButton.addEventListener('click', () => {
            contactFormModal.style.display = 'none';
        });
    }

    window.addEventListener('click', (event) => {
        if (event.target == contactFormModal) {
            contactFormModal.style.display = 'none';
        }
    });

    // Handle modal form submission
    const modalContactForm = document.getElementById('modalContactForm');
    if (modalContactForm) {
        modalContactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            // In a real application, you would send this data to a server.
            // For now, just show an alert and close the modal.
            alert('Thank you for your consultation request! We will get back to you soon.');
            contactFormModal.style.display = 'none';
            this.reset();
        });
    }
});

// Placeholder for image slider for attorney profiles or testimonials (if needed later)
function initAttorneySlider() {
    // console.log("Attorney image slider initialization (to be implemented if needed)");
    // Example: If you use a library like Swiper.js or Slick Carousel
    // const attorneySwiper = new Swiper('.attorney-slider', { /* options */ });
}

// Call initializations
initAttorneySlider();
