var video = document.querySelector('.video');
var green_seekers = document.querySelector('.green-seekers');
var btn = document.getElementById('play-pause');

function togglePlayPause() {
    if (video.paused) {
        btn.className = 'pause';
        video.play();
    }
    else {
        btn.className = 'play';
        video.pause();
    }
}

btn.onclick = function() {
    togglePlayPause();
}