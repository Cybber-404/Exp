// window.addEventListener("load", function () {
//         const loader = document.getElementById("loader");
//         loader.style.opacity = "0";
//         loader.style.pointerEvents = "none";
//         setTimeout(() => {
//             loader.style.display = "none";
//         }, 600);
// });


window.addEventListener("load", function () {
        const loader = document.getElementById("loader");

        // ADD A DELAY before hiding the loader (2000ms = 2s)
        setTimeout(() => {
            loader.style.opacity = "0";
            loader.style.pointerEvents = "none";
            
            // Wait for fade-out transition to finish
            setTimeout(() => {
                loader.style.display = "none";
            }, 600); // match CSS transition duration
        },2000); // <-- duration before fade starts
    });

