const hambarger = document.querySelector('.hambarger');
const mobileNavOuter = document.querySelector('.mobile-nav-outer');
const mobileNavInner = document.querySelector('.mobile-nav-inner');

const handleHambarger = (e) => {
    e.stopPropagation();

    if(mobileNavInner.classList.contains('ml-[-16rem]')) {
        mobileNavOuter.classList.add('inset-0');
        mobileNavInner.classList.remove('ml-[-16rem]');
        mobileNavInner.classList.add('ml-[0rem]');
    }else {
        mobileNavOuter.classList.remove('inset-0');
        mobileNavInner.classList.add('ml-[-16rem]');
        mobileNavInner.classList.remove('ml-[0rem]');
    }
}

document.body.addEventListener('click', () => {
    mobileNavOuter.classList.remove('inset-0');
    mobileNavInner.classList.add('ml-[-16rem]');
    mobileNavInner.classList.remove('ml-[0rem]');
})

hambarger.addEventListener('click', handleHambarger);