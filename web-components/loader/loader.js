// class CustomLoader extends HTMLElement {
//     constructor() {
//         super();
//         this.innerHTML =  `
//             <div id="global-loader" class="fixed top-[50%] left-[50%] transform -translate-x-[50%] -translate-y-[50%] z-[999] bg-[#000000] text-white w-full h-full">
//                 loading...
//             </div>
//         `
//     }

// // connectedCallback() {
// //     this.setIsLoading();
// // }

// // setIsLoading() {
// //     const loader = this.querySelector('#global-loader');
// //     window.addEventListener('load', () => {
// //         loader.style.display = 'none';
// //     })
// // }

// }

// customElements.define('custom-loader', CustomLoader)