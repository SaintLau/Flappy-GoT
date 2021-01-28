let backgroundAudio = new Audio('./sound/Game of Thrones - Main Theme (Extended) HD(720p).mp4');

class Sound {
    constructor(src) {
        this.sound = document.createElement('audio');
        this.sound.src = src;
        this.sound.setAttribute('preload', 'auto');
        this.sound.setAttribute('controls', 'none');
        this.sound.style.display = 'none';

        document.body.appendChild(this.sound);
    }

    playAudio() {
        this.sound.play()
    }
}

let hitSound = new Sound('./sound/crow (online-audio-converter.com).mp3');


