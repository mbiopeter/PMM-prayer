const music = new Audio('music/3.mp3');

let n_music = 41;
const songs = [
    {
        id: 1,
        songName: `Think Abaut the children <br>
        <div class="subtitle">Lucky dube</div>`,
        poster:"img/1.jfif",
        artist:"Lucky dube - Think Abaut the children"
    },
    {
        id: 2,
        songName: `Usizi <br>
        <div class="subtitle">Lucky dube</div>`,
        poster:"img/2.jfif",
        artist:"Lucky dube - Usizi"
    },
    {
        id: 3,
        songName: `Let Jah be Praised <br>
        <div class="subtitle">Lucky dube</div>`,
        poster:"img/0.jpg",
        artist:"Lucky dube - Let Jah be Praised "
    },
    {
        id: 4,
        songName: `On My Way <br>
        <div class="subtitle">UB40</div>`,
        poster:"img/4a.jfif",
        artist:"UB40 - On My Way "
    },
    {
        id: 5,
        songName: `One love <br>
        <div class="subtitle">Bob Merley</div>`,
        poster:"img/5.jfif",
        artist:"Bob Merley - One love "
    },
    {
        id: 6,
        songName: `Buffalo Soldier <br>
        <div class="subtitle">Bob Merley</div>`,
        poster:"img/6.jfif",
        artist:"Bob Merley - Buffalo Soldier "
    },
    {
        id: 7,
        songName: `Waiting in vain <br>
        <div class="subtitle">Bob Merley</div>`,
        poster:"img/7.jfif",
        artist:"Bob Merley - Waiting in vain "
    },
    {
        id: 8,
        songName: `I'll be there <br>
        <div class="subtitle">UB40</div>`,
        poster:"img/8.jfif",
        artist:"UB40 - I'll be there"
    },
    {
        id: 9,
        songName: `Jah Rastafari <br>
        <div class="subtitle">Culture</div>`,
        poster:"img/9.jfif",
        artist:"Culture - Jah Rastafari"
    },
    {
        id: 10,
        songName: `Nothing but prayers <br>
        <div class="subtitle">Senzo muheteres</div>`,
        poster:"img/10.jfif",
        artist:"Senzo - Nothing but prayers"
    },
    {
        id: 11,
        songName: `Play Me a Love Song <br>
        <div class="subtitle">Nora Dean</div>`,
        poster:"img/11.jfif",
        artist:"Nora Dean - Play Me a Love Song"
    },
    {
        id: 12,
        songName: `One Gradson<br>
        <div class="subtitle">Culture</div>`,
        poster:"img/12.jfif",
        artist:"Culture - One Gradson"
    },
    {
        id: 13,
        songName: `Love Song <br>
        <div class="subtitle">Etana</div>`,
        poster:"img/a.jfif",
        artist:"Etana - Love Song"
    },
    {
        id: 14,
        songName: `I Rise <br>
        <div class="subtitle">Etana</div>`,
        poster:"img/b.jfif",
        artist:"Etana - I Rise"
    },
    {
        id: 15,
        songName: `Weakness in me <br>
        <div class="subtitle">Etana</div>`,
        poster:"img/c.jfif",
        artist:"Etana - Weakness in me"
    },
    {
        id: 16,
        songName: `Send Me The Pillow <br>
        <div class="subtitle">Cythia schools</div>`,
        poster:"img/d.jfif",
        artist:"Cythia schools - Send Me The Pillow"
    },
    {
        id: 17,
        songName: `I Am Dreaming Of A Little Island <br>
        <div class="subtitle">Judy Boucher</div>`,
        poster:"img/e.jfif",
        artist:"Judy Boucher - Little Island"
    },
    {
        id: 18,
        songName: `Hello<br>
        <div class="subtitle">Adele</div>`,
        poster:"img/f.jfif",
        artist:"Adele - Hello"
    },
    {
        id: 19,
        songName: `As If I Din't Know<br>
        <div class="subtitle">Cythia schools</div>`,
        poster:"img/g.jfif",
        artist:"Cythia schools - As If I Din't Know"
    },
    {
        id: 20,
        songName: `Dream Lover <br>
        <div class="subtitle">Barbara Jones</div>`,
        poster:"img/h.jfif",
        artist:"Barbara jones - Dream Lover"
    },
    {
        id: 21,
        songName: `Praising God<br>
        <div class="subtitle">Carlen Davis</div>`,
        poster:"img/i.jfif",
        artist:"Carlen Davis - Praising God"
    },
    {
        id: 22,
        songName: `Stealing Love <br>
        <div class="subtitle">Carlen Davis</div>`,
        poster:"img/k.jfif",
        artist:"Carlen Davis - Stealing Love"
    },
    {
        id: 23,
        songName: `Coco De Rasta <br>
        <div class="subtitle">Alpha Blody</div>`,
        poster:"img/l.jfif",
        artist:"Alpha Blody - Coco De Rasta"
    },
    {
        id: 24,
        songName: `Regae <br>
        <div class="subtitle">Etana</div>`,
        poster:"img/m.jfif",
        artist:"Etana - Regae"
    },
    {
        id: 25,
        songName: `I shall Sing<br>
        <div class="subtitle">Marcia Griffts</div>`,
        poster:"img/n.jfif",
        artist:"Marcia Griffts - I shall Sing"
    },
    {
        id: 26,
        songName: `All My Life<br>
        <div class="subtitle">Marcia Griffts</div>`,
        poster:"img/o.jfif",
        artist:"Marcia Griffts - All My Life"
    },
    {
        id: 27,
        songName: `Stick By Me<br>
        <div class="subtitle">UB40</div>`,
        poster:"img/p.jfif",
        artist:"UB40 - Stick By Me"
    },
    {
        id: 28,
        songName: `Jet Plane<br>
        <div class="subtitle">Sonia Spence</div>`,
        poster:"img/q.jfif",
        artist:"Sonia Spence - Jet Plane"
    },
    {
        id: 29,
        songName: `You Cought My Eyes<br>
        <div class="subtitle">Judy Boucher</div>`,
        poster:"img/r.jfif",
        artist:"Judy Boucher - You Cought My Eyes"
    },
    {
        id: 30,
        songName: `Thank You Lord<br>
        <div class="subtitle">Judy Mowatt</div>`,
        poster:"img/s.jfif",
        artist:"Judy Mowatt - Thank You Lord"
    },
    {
        id: 31,
        songName: `Make It Up<br>
        <div class="subtitle">June Lodge</div>`,
        poster:"img/t.jfif",
        artist:"June Lodge - Make It Up"
    },
    {
        id: 32,
        songName: `To Love Someone<br>
        <div class="subtitle">June Lodge</div>`,
        poster:"img/u.jfif",
        artist:"June Lodge - To Love Someone"
    },
    {
        id: 33,
        songName: `More Than I Can Say<br>
        <div class="subtitle">June Lodge</div>`,
        poster:"img/v.jfif",
        artist:"June Lodge - More Than I Can Say"
    },
    {
        id: 34,
        songName: `Someone Loves You Honey <br>
        <div class="subtitle">June Lodge</div>`,
        poster:"img/w.jfif",
        artist:"June Lodge - Someone Loves You Honey"
    },
    {
        id: 35,
        songName: `Holding You Close<br>
        <div class="subtitle">Marcia Grifths</div>`,
        poster:"img/x.jfif",
        artist:"Marcia Grifths - Holding You Close"
    },
    {
        id: 36,
        songName: `The first Cut <br>
        <div class="subtitle">Marcia Grifths</div>`,
        poster:"img/v.jfif",
        artist:"Marcia Grifths - The first Cut"
    },
    {
        id: 37,
        songName: `Girle garle <br>
        <div class="subtitle">Sophia gorge</div>`,
        poster:"img/w.jfif",
        artist:"Sophia gorge - Girle garle"
    },
    {
        id: 38,
        songName: `Tenement Yard <br>
        <div class="subtitle">Sophia gorge</div>`,
        poster:"img/x.jfif",
        artist:"Sophia gorge - Tenement Yard"
    },
    {
        id: 39,
        songName: `Step Up <br>
        <div class="subtitle">Irie</div>`,
        poster:"img/y.jfif",
        artist:"Irie - Step Up"
    },
    {
        id: 40,
        songName: `The Blessings<br>
        <div class="subtitle">Blessings</div>`,
        poster:"img/z.jfif",
        artist:"The Blessings"
    },
    {
        id: 41,
        songName: `Why<br>
        <div class="subtitle">Cythia Schools</div>`,
        poster:"img/r.jfif",
        artist:"Cythia Schools - Why"
    },
];

Array.from(document.getElementsByClassName('songItem')).forEach((e, i) =>{
    e.getElementsByTagName('img')[0].src =songs[i].poster;
    e.getElementsByTagName('h5')[0].innerHTML =songs[i].songName;
} );

let masterPlay = document.getElementById("masterPlay");
let wave = document.getElementById("wave");

masterPlay.addEventListener('click', ()=>{
    if (music.paused || music.currentTime <= 0) {
        music.play();
        wave.classList.add('active1');
        masterPlay.classList.remove("bi-play-fill");
        masterPlay.classList.add("bi-pause-fill");
        playEl.style.backgroundColor="#00ff00";
        playEl.style.borderColor="#00ff00";
        playEl.style.color ="#000"
        playEl.innerText ="PAUSE";
    } else {
        music.pause();
        wave.classList.remove('active1'); 
        masterPlay.classList.add("bi-play-fill");
        masterPlay.classList.remove("bi-pause-fill");      
        playEl.style.backgroundColor="#36e2ec";
        playEl.style.borderColor="#36e2ec";
        playEl.style.color ="#fff"
        playEl.innerText ="PLAY";
    }
});

const makeAllPlay = () =>{
    Array.from(document.getElementsByClassName('PlayListPlay')).forEach((el) =>{
        el.classList.add("bi-play-circle-fill");
        el.classList.remove("bi-pause-circle-fill");
        playEl.style.backgroundColor="#00ff00";
        playEl.style.borderColor="#00ff00";
        playEl.style.color ="#000";
        playEl.innerText ="PAUSE";
    });
}






let index = 0;
let poster_master_play = document.getElementById('poster_master_play');
let title = document.getElementById('title');
let artist = document.getElementById("artist");
Array.from(document.getElementsByClassName("PlayListPlay")).forEach((e)=>{
    e.addEventListener('click', (el)=>{
        index  = el.target.id;
        music.src =`music/${index}.mp3`
        music.play();
        wave.classList.add('active1');
        masterPlay.classList.remove("bi-play-fill");
        masterPlay.classList.add("bi-pause-fill");

        let songTitle = songs.filter((els) =>{
            return els.id == index;
        });
        songTitle.forEach(elss =>{
            let {songName, poster,artist} = elss;   
            title.innerHTML = songName;
            poster_master_play.src = poster;
            artist.innerText =artist;
        });
        makeAllPlay();
        el.target.classList.remove('bi-play-circle-fill');
        el.target.classList.add('bi-pause-circle-fill');
    });
})


let playEl = document.getElementById("play");

playEl.addEventListener('click', ()=>{


    if (music.paused || music.currentTime <= 0) {
        music.play();
        wave.classList.add('active1');
        masterPlay.classList.remove("bi-play-fill");
        masterPlay.classList.add("bi-pause-fill");
        playEl.style.backgroundColor="#00ff00";
        playEl.style.borderColor="#00ff00";
        playEl.style.color ="#000"
        playEl.innerText ="PAUSE";
    } else {
        music.pause();
        wave.classList.remove('active1'); 
        masterPlay.classList.add("bi-play-fill");
        masterPlay.classList.remove("bi-pause-fill"); 
        playEl.style.backgroundColor="#36e2ec";
        playEl.style.borderColor="#36e2ec";
        playEl.style.color ="#fff"
        playEl.innerText ="PLAY";

    }


})





let currentStart = document.getElementById('currentStart');
let currentEnd = document.getElementById('currentEnd');
let seek = document.getElementById('seek');
let bar2 = document.getElementById('bar2');
let dot = document.getElementsByClassName('dot')[0];


music.addEventListener('timeupdate', () => {
    let music_curr = music.currentTime;
    let music_dur = music.duration;

    let min1 = Math.floor(music_dur / 60);
    let sec1 = Math.floor(music_dur % 60);

    if (sec1 < 10) {
        sec1 = `0${sec1}`;
    }

    currentEnd.innerText = `${min1}:${sec1}`;
   
    
    let min2 = Math.floor(music_curr / 60);
    let sec2 = Math.floor(music_curr % 60);
 
    if (sec2 < 10) {
        sec2 = `0${sec2}`;
    }

    currentStart.innerText = `${min2}:${sec2}`;



    let progressBar = parseInt((music_curr / music_dur) * 100);
    seek.value = progressBar

    let seekbar = seek.value;

    bar2.style.width = `${seekbar}%`;
    dot.style.left = `${seekbar}%`;


})




seek.addEventListener('change', () => {
    music.currentTime = seek.value * music.duration /100;
});


let vol_icon = document.getElementById('vol_icon');
let vol = document.getElementById('vol');
let vol_bar = document.getElementsByClassName('vol_bar')[0];
let vol_dot = document.getElementById('vol_dot');

vol.addEventListener('change', () => {
/*
  if ( vol.value == 0) {
        vol_icon.classList.remove(bi-volume-up-fill );
        vol_icon.classList.remove(bi-volume-down-fill);
        vol_icon.classList.add(bi-volume-off-fill);
    }
    if ( vol.value > 0) {
        vol_icon.classList.remove(bi-volume-up-fill);
        vol_icon.classList.add(bi-volume-down-fill);
        vol_icon.classList.remove(bi-volume-off-fill);
    }
    if ( vol.value > 50) {
        vol_icon.classList.add(bi-volume-up-fill);
        vol_icon.classList.remove(bi-volume-down-fill);
        vol_icon.classList.remove(bi-volume-off-fill);
    }
    //console.loge(vol.value)
*/
    let vol_a = vol.value;
    vol_bar.style.width = `${vol_a}%`;
    vol_dot.style.left = `${vol_a}%`;
    music.volume = vol_a / 100

});


let back = document.getElementById("back");
let next = document.getElementById("next");





back.addEventListener('click', () => {
    index -= 1;

    if (index < 1) {
        index = Array.from(document.getElementsByClassName('songItem')).length; 

    }
    music.src =`audio/${index}.mp3`
    music.play();
    wave.classList.add('active1');
    masterPlay.classList.remove("bi-play-fill");
    masterPlay.classList.add("bi-pause-fill");

    let songTitle = songs.filter((els) =>{
        return els.id == index;
    });
    songTitle.forEach(elss =>{
        let {songName, poster,artist} = elss;
        title.innerHTML = songName;
        poster_master_play.src = poster;
        artist.innerText = songName;
    });
    makeAllPlay();
    el.target.classList.remove('bi-play-circle-fill');
    el.target.classList.add('bi-pause-circle-fill');
});








next.addEventListener('click', () => {

    index ++;
    if (index > Array.from(document.getElementsByClassName('songItem')).length) {
        index = 1; 

    }
    music.src =`music/${index}.mp3`
    music.play();
    wave.classList.add('active1');
    masterPlay.classList.remove("bi-play-fill");
    masterPlay.classList.add("bi-pause-fill");

    let songTitle = songs.filter((els) =>{
        return els.id == index;
    });
    songTitle.forEach(elss =>{
        let {songName, poster,artist} = elss;
        title.innerHTML = songName;
        poster_master_play.src = poster;
        artist.innerText =artist;
    });
    makeAllPlay();
    el.target.classList.remove('bi-play-circle-fill');
    el.target.classList.add('bi-pause-circle-fill');
});









let pop_song_left = document.getElementById("pop_song_left");
let pop_song_right = document.getElementById("pop_song_right");
let pop_song = document.getElementsByClassName("pop_song")[0];


pop_song_right.addEventListener('click', ()=>{
    pop_song.scrollLeft += 330;
});

pop_song_left.addEventListener('click', ()=>{
    pop_song.scrollLeft -= 330;
});


let pop_art_left = document.getElementById("pop_art_left");
let pop_art_right = document.getElementById("pop_art_right");
let artists_bx = document.getElementsByClassName("artists_bx")[0];

pop_art_right.addEventListener('click', ()=>{
    artists_bx.scrollLeft += 330;
});

pop_art_left.addEventListener('click', ()=>{
    artists_bx.scrollLeft -= 330;
});


let shuffle = document.getElementsByClassName("shuffle")[0];  

shuffle.addEventListener('click', ()=>{
    let a = shuffle.innerHTML;
    switch (a) {
        case "next":
            shuffle.classList.add('bi-arrow-repeat');
            shuffle.classList.remove('bi-music-note-beamed');
            shuffle.classList.remove('bi-shuffle');
            shuffle.style.color ="blue";
            shuffle.innerHTML= "repeat";
            break;
            case "repeat":
                shuffle.classList.remove('bi-arrow-repeat');
                shuffle.classList.remove('bi-music-note-beamed');
                shuffle.classList.add('bi-shuffle');
                shuffle.style.color ="#00ff00";
                shuffle.innerHTML= "random";           
               break;
            case "random":
                shuffle.classList.remove('bi-arrow-repeat');
                shuffle.classList.add('bi-music-note-beamed');
                shuffle.classList.remove('bi-shuffle'); 
                shuffle.style.color ="#fff";
                shuffle.innerHTML= "next";           
               break;
    }
});




const next_music = () => {
    if (index == songs.length) {
        index = 1
    } else {
       index++; 
    }
    music.src =`music/${index}.mp3`
    music.play();
    wave.classList.add('active1');
    masterPlay.classList.remove("bi-play-fill");
    masterPlay.classList.add("bi-pause-fill");

    

    let songTitle = songs.filter((els) =>{
        return els.id == index;
    });
    songTitle.forEach(elss =>{
        let {songName, poster,artist} = elss;
        title.innerHTML = songName;
        poster_master_play.src = poster;
        artist.innerText =artist;
    });
    makeAllPlay();
    el.target.classList.remove('bi-play-circle-fill');
    el.target.classList.add('bi-pause-circle-fill');
}

const repeat_music = () => {
    index;
    music.src =`music/${index}.mp3`
    music.play();
    wave.classList.add('active1');
    masterPlay.classList.remove("bi-play-fill");
    masterPlay.classList.add("bi-pause-fill");

    

    let songTitle = songs.filter((els) =>{
        return els.id == index;
    });
    songTitle.forEach(elss =>{
        let {songName, poster,artist} = elss;
        title.innerHTML = songName;
        poster_master_play.src = poster;
        artist.innerText =artist;
    });
    makeAllPlay();
    el.target.classList.remove('bi-play-circle-fill');
    el.target.classList.add('bi-pause-circle-fill');
}

const random_music = () => {
    if (index == songs.length) {
        index = 1
    } else {
       index = Math.floor((Math.random() * songs.length) + 1);
    }
    music.src =`music/${index}.mp3`
    music.play();
    wave.classList.add('active1');
    masterPlay.classList.remove("bi-play-fill");
    masterPlay.classList.add("bi-pause-fill");

    

    let songTitle = songs.filter((els) =>{
        return els.id == index;
    });
    songTitle.forEach(elss =>{
        let {songName, poster,artist} = elss;
        title.innerHTML = songName;
        poster_master_play.src = poster;
        artist.innerText =artist;
    });
    makeAllPlay();
    el.target.classList.remove('bi-play-circle-fill');
    el.target.classList.add('bi-pause-circle-fill');
}




music.addEventListener('ended', ()=>{
    let b = shuffle.innerHTML;

    switch (b) {
        case 'repeat':
            repeat_music();
            break;
            case 'next':
                next_music();
                break;
                case 'random':
                    random_music();
                    break;
    
        default:
            break;
    }
});
