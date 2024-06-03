// JavaScript (script.js)

let currentPlaying = null;

function playAudio(source, imgElement) {
    const audioPlayer = document.getElementById('audioPlayer');

    if (currentPlaying && currentPlaying !== imgElement) {
        currentPlaying.classList.remove('playing');
    }

    if (audioPlayer.src !== source) {
        audioPlayer.src = source;
        audioPlayer.play();
        imgElement.classList.add('playing');
        currentPlaying = imgElement;
    } else if (audioPlayer.paused) {
        audioPlayer.play();
        imgElement.classList.add('playing');
    } else {
        audioPlayer.pause();
        imgElement.classList.remove('playing');
    }

    audioPlayer.onended = function() {
        imgElement.classList.remove('playing');
        currentPlaying = null;
    }
}
