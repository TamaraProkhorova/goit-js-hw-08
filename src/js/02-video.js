import Player from '@vimeo/player';
import throttle from 'lodash.throttle';
const iframe = document.querySelector('iframe');
const player = new Player(iframe);
const STORAGE_KEY = "videoplayer-current-time";
// const throttled = new throttle(iframe);

player.on('timeupdate', onPlay);

function onPlay({seconds}) {
    console.log(seconds);

    localStorage.setItem(STORAGE_KEY, seconds);
}
// throttled.throttle(onPlay, 60);

player.setCurrentTime(localStorage.getItem(STORAGE_KEY)|| 0);