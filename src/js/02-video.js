import Player from '@vimeo/player';
import throttle from 'lodash.throttle';




const CURRRENT_TIME_KEY = 'videoplayer-current-time';

const iframe = document.querySelector('iframe');
const player = new Player(iframe, {
    loop: true,
    fullscreen: true,
    quality: '1080p',
});

const getCurrentTime = function (currentTime) {
    const seconds = currentTime.seconds;
    localStorage.setItem(CURRRENT_TIME_KEY, JSON.stringify(seconds))
};

player.on('timeupdate', throttle(getCurrentTime, 1000));

const savedTime = localStorage.getItem(CURRRENT_TIME_KEY )

player.setCurrentTime(savedTime)
    .then(function (seconds) {
    // seconds = the actual time that the player seeked to
}).catch(function(error) {
    switch (error.name) {
        case 'RangeError':
            // the time was less than 0 or greater than the video’s duration
            break;

        default:
            // some other error occurred
            break;
    }
});