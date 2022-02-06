var video = document.querySelector('.video');
var greenSeekers = document.querySelector('.green-seekers');
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

video.addEventListener('timeupdate', function() {
    var greenSeekersPosition = video.currentTime / video.duration;
    greenSeekers.style.width = greenSeekersPosition * 100 + "%";
    if (video.ended) {
        btn.className = 'play';
    }
})