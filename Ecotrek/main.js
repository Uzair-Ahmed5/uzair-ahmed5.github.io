
document.addEventListener('DOMContentLoaded', () => {
    initNavbarScroll();
    initTourTabs();
    initSmoothScroll();
});

/*navbar*/
function initNavbarScroll() {
    const navbar = document.querySelector('.navbar');
    
    if (navbar) {
        window.addEventListener('scroll', () => {
            if (window.scrollY > 50) {
                navbar.classList.add('shadow-sm');
                navbar.style.padding = '5px 0';
            } else {
                navbar.classList.remove('shadow-sm');
                navbar.style.padding = '10px 0';
            }
        });
    }
}

const book = document.getElementById("book-btn");
    book.addEventListener("click", () => {
        window.location.href = "https://api.whatsapp.com/message/26OCKJGHIFEYK1?autoload=1&app_absent=0";
    });

/*Tours*/
function initTourTabs() {
    const tabBtns = document.querySelectorAll('.tab-btn');
    const tourContents = document.querySelectorAll('.tour-content');
    
    if (tabBtns.length > 0) {
        tabBtns.forEach(btn => {
            btn.addEventListener('click', () => {
                tabBtns.forEach(b => b.classList.remove('active'));
                tourContents.forEach(c => c.classList.remove('active'));
 
                btn.classList.add('active');
                const tabId = btn.getAttribute('data-tab');
                const targetContent = document.getElementById(tabId);
                
                if (targetContent) {
                    targetContent.classList.add('active');
                    targetContent.style.animation = 'none';
                    targetContent.offsetHeight; 
                    targetContent.style.animation = 'fadeIn 0.5s ease';
                }
            });
        });
    }
}
function initSmoothScroll() {
    const links = document.querySelectorAll('a[href^="#"]');
    
    links.forEach(link => {
        link.addEventListener('click', function(e) {
            const targetId = this.getAttribute('href');
            
            if (targetId !== '#') {
                e.preventDefault();
                const targetElement = document.querySelector(targetId);
                
                if (targetElement) {
                    const navbar = document.querySelector('.navbar');
                    const navbarHeight = navbar ? navbar.offsetHeight : 80;
                    const targetPosition = targetElement.getBoundingClientRect().top + window.pageYOffset - navbarHeight;
                    
                    window.scrollTo({
                        top: targetPosition,
                        behavior: 'smooth'
                    });

                    // Auto-collapse mobile navbar menu after hitting an anchor link path
                    const navbarCollapse = document.querySelector('.navbar-collapse');
                    if (navbarCollapse && navbarCollapse.classList.contains('show')) {
                        const bsCollapse = bootstrap.Collapse.getInstance(navbarCollapse);
                        if (bsCollapse) {
                            bsCollapse.hide();
                        }
                    }
                }
            }
        });
    });
}