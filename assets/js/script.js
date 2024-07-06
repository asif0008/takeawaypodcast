const hambarger = document.querySelector('.hambarger');
const mobileNavOuter = document.querySelector('.mobile-nav-outer');
const mobileNavInner = document.querySelector('.mobile-nav-inner');

const handleHambarger = (e) => {
    e.stopPropagation();

    console.log('hambarger clicked')
    if(mobileNavInner.classList.contains('ml-[-18rem]')) {
        mobileNavInner.classList.add('ml-[0rem]');
        mobileNavOuter.classList.add('opacity-100');
        mobileNavOuter.classList.remove('z-[-1]');
        mobileNavInner.classList.remove('ml-[-18rem]');
    }else {
        mobileNavOuter.classList.remove('opacity-100');
        mobileNavInner.classList.add('ml-[-18rem]');
        mobileNavInner.classList.remove('ml-[0rem]');
        mobileNavOuter.classList.add('z-[-1]');
    }
}

document.body.addEventListener('click', () => {
    mobileNavOuter.classList.remove('opacity-100');
    mobileNavOuter.classList.add('z-[-1]');
    mobileNavInner.classList.add('ml-[-18rem]');
    mobileNavInner.classList.remove('ml-[0rem]');
})

hambarger.addEventListener('click', handleHambarger);

const loader = document.querySelector('#global-loader');
window.addEventListener('load', () => {
    loader.style.display = 'none';
});

(function () {
    const locomotiveScroll = new LocomotiveScroll({
        el: document.querySelector('.scrollContainer'),
        smooth: true,
        smoothMobile: true,
        scrollFromAnywhere: true,
        touchMultiplier: 2,
        inertia: 0.1,
        Multiplier: 1
    });
})();