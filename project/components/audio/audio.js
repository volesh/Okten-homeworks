const songsName = [
    {title: 'Momentof Silenceft Josh Woods', src: 'components/audio/songs/Momentof Silenceft Josh Woods.mp3'},
    {title: 'Infinite Amethyst', src: 'components/audio/songs/Infinite Amethyst.mp3'},
    {title: 'Nf-nate', src: 'components/audio/songs/Nf-nate.mp3'}
];
let prevBut = document.querySelector('.player_back_button');
let play = document.querySelector('.player_stop_button');
let nextBut = document.querySelector('.player_next_button');
let ul = document.querySelector('.ul')


let n = 0
let song = songsName[n]

let flag = 'play'

function playOnli() {
    const audio = document.querySelector('.audio')
    audio.src = `${song.src}`
    audio.play()
}

function changeChildren(n){
    switch (n) {
        case 0:
            ul.children[0].classList.add('useLi')
            ul.children[1].classList.remove('useLi')
            ul.children[2].classList.remove('useLi')
            break
        case 1:
            ul.children[1].classList.add('useLi')
            ul.children[0].classList.remove('useLi')
            ul.children[2].classList.remove('useLi')
            break
        case 2:
            ul.children[2].classList.add('useLi')
            ul.children[1].classList.remove('useLi')
            ul.children[0].classList.remove('useLi')
            break
    }
}

function playStop() {
    const audio = document.querySelector('.audio')
    audio.src = `${song.src}`
        if (play.classList.contains('play')){
            audio.play()
            changeChildren(n)

        }else if (play.classList.contains('pause')) {
            flag = "play"
            ul.children[0].classList.remove('useLi')
            ul.children[1].classList.remove('useLi')
            ul.children[2].classList.remove('useLi')
            audio.pause()
        }
    play.classList.toggle('play');
    play.classList.toggle('pause');

}


function nextSong() {
    if (n === 2) {
        n = 0
        song = songsName[n]
        changeChildren(n)
        playOnli()

    } else {
        n += 1
        song = songsName[n]
        changeChildren(n)
        playOnli()
    }
}


function prewSong() {
    if (n === 0) {
        n = 2
        song = songsName[n]
        changeChildren(n)
        playOnli()
    } else {
        n -= 1
        song = songsName[n]
        changeChildren(n)
        playOnli()
    }
}

play.addEventListener('click', playStop)
prevBut.addEventListener('click', prewSong)
nextBut.addEventListener('click', nextSong)