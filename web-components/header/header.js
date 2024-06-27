class CustomHeader extends HTMLElement {
    constructor() {
        super();
        this.innerHTML = `
            <header class="header w-full px-4 bg-transparent fixed top-0 z-10 transition-all duration-500">
                <section class="container mx-auto flex items-center justify-between py-3">
                    <a href="https://www.takeawaypodcast.com/">
                        <img class="w-[60px] md:w-[80px]" src="assets/images/logo.png" alt="logo">
                    </a>
                    <nav class="flex items-center justify-center gap-4 md:gap-8 lg:gap-16 hidden lg:flex">
                        <a class="text-base font-semibold text-white nav-link" href="index.html">Home</a>
                        <a class="text-base font-semibold text-white nav-link" href="pricing.html">Pricing</a>
                        <a class="text-base font-semibold text-white nav-link" href="contact.html">Contact Us</a>
                    </nav>
                    <a href="#." class="text-white font-semibold bg-primary hover:bg-secondary transition-all duration-300 rounded-full px-12 py-4 hidden lg:block">
                        Book Now
                    </a>
                    <div class="block lg:hidden cursor-pointer hambarger">
                        <svg xmlns="http://www.w3.org/2000/svg" width="36" height="36" fill="#fff" class="bi bi-list" viewBox="0 0 16 16">
                            <path fill-rule="evenodd" d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5m0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5m0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5"/>
                        </svg>
                    </div>
                </section>
                <!-- mobile links -->
                <div class="fixed bg-[#00000070] block lg:hidden mobile-nav-outer transition-all duration-600 inset-0 opacity-0 z-[-1] h-[100vh]">
                    <div class="w-[250px] ml-[-18rem] h-full bg-white py-8 px-4 rounded-r-md transition-all duration-700 mobile-nav-inner">
                        <nav class="flex flex-col justify-center gap-6">
                            <a class="text-base font-semibold text-dark nav-link active" href="index.html">Home</a>
                            <a class="text-base font-semibold text-dark nav-link" href="pricing.html">Pricing</a>
                            <a class="text-base font-semibold text-dark nav-link" href="contact.html">Contact Us</a>
                            <a href="#." class="text-white font-semibold bg-primary hover:bg-secondary transition-all duration-300 rounded-full px-4 py-2 w-[150px] flex items-center justify-center">
                                Book Now
                            </a>
                        </nav>
                    </div>
                </div>
            </header>
        `;
    }

    connectedCallback() {
        this.setActiveLink();
        this.scrollEvent();
    }

    setActiveLink() {
        const path = window.location.pathname;
        const navLinks = this.querySelectorAll('.nav-link')
        navLinks.forEach((link) => {
            const currentPath = path.split('/')[1]
            if(link.getAttribute('href') === currentPath) {
                link.classList.add('active')
                console.log('active class added to', path)
            }else {
                link.classList.remove('active')
            }
        })
    }

    scrollEvent() {
        const header = this.querySelector('.header');
        window.addEventListener('scroll', () => {
            if(window.scrollY > 60) {
                header.style.backdropFilter = 'blur(20px)';
            }else {
                header.style.backdropFilter = 'none';
            }
        })
    }
}

customElements.define('custom-header', CustomHeader);