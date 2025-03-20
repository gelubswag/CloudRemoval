let isScrolling = false;
let currentSectionIndex = 0;
const sections = document.querySelectorAll('section, header');
const scrollDelay = 1200;


function scrollToSection(index) {
    if (index >= 0 && index < sections.length) {
        isScrolling = true;
        sections[index].scrollIntoView({ behavior: 'smooth' });

        // setTimeout(() => {
        //     isScrolling = false;
        // }, scrollDelay);
    }
}


window.addEventListener('wheel', (event) => {
    if (isScrolling) return;

    if (event.deltaY > 0) {
        currentSectionIndex = Math.min(currentSectionIndex + 1, sections.length - 1);
    } else {
        currentSectionIndex = Math.max(currentSectionIndex - 1, 0);
    }

    scrollToSection(currentSectionIndex);
});


// const video = document.getElementById('bg-video');
// video.play();

// if (pauseButton) {
//     pauseButton.addEventListener('click', function() {
//         if (video.paused) {
//             video.play();
//             pauseButton.textContent = 'Pause';
//         } else {
//             video.pause();
//             pauseButton.textContent = 'Play';
//         }
//     });
// }
