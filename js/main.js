// Dark Mode Toggle Logic
const toggleButtons = document.querySelectorAll('#theme-toggle, #theme-toggle-mobile');
const htmlElement = document.documentElement;

// Check for saved user preference
const currentTheme = localStorage.getItem('theme');
if (currentTheme === 'dark') {
    htmlElement.classList.add('dark');
}

toggleButtons.forEach(btn => {
    btn.addEventListener('click', () => {
        if (htmlElement.classList.contains('dark')) {
            htmlElement.classList.remove('dark');
            localStorage.setItem('theme', 'light');
        } else {
            htmlElement.classList.add('dark');
            localStorage.setItem('theme', 'dark');
        }
    });
});


// Back to Top Button Logic
const backToTopButton = document.getElementById('back-to-top');

window.addEventListener('scroll', () => {
    if (window.scrollY > 300) {
        backToTopButton.classList.remove('hidden');
        backToTopButton.classList.add('flex');
    } else {
        backToTopButton.classList.add('hidden');
        backToTopButton.classList.remove('flex');
    }
});

backToTopButton.addEventListener('click', () => {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
});

// Mobile Menu Logic
// Mobile Menu Logic
const mobileMenuBtn = document.getElementById('mobile-menu-btn');
const mobileMenu = document.getElementById('mobile-menu');
const mobileMenuLinks = mobileMenu.querySelectorAll('a');

if (mobileMenuBtn && mobileMenu) {
    mobileMenuBtn.addEventListener('click', () => {
        mobileMenu.classList.toggle('open');
    });

    // Close menu when a link is clicked
    mobileMenuLinks.forEach(link => {
        link.addEventListener('click', () => {
            mobileMenu.classList.remove('open');
        });
    });

    // Close menu when clicking outside
    document.addEventListener('click', (e) => {
        if (!mobileMenu.contains(e.target) && !mobileMenuBtn.contains(e.target)) {
            mobileMenu.classList.remove('open');
        }
    });
}
