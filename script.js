const music = new Audio('audio/1.mp3');
// music.play();

const songs=[
    {
        id:"1",
        songName:`On My Way <br><div class="subtitle">Alan WAlker</div>`,
        poster: "img/1.jpg",
    },
    {
        id:"2",
        songName:`arijit singh <br><div class="subtitle">Alan WAlker</div>`,
        poster: "img/2.jpg",
    },
    {
        id:"3",
        songName:`On My Way <br> <div class="subtitle">Alan WAlker</div>`,
        poster: "img/3.jpg",
    },
    {
        id:"4",
        songName:`On My Way <br><div class="subtitle">Alan WAlker</div>`,
        poster: "img/4.jpg",
    },
    {
        id:"5",
        songName:`On My Way <br><div class="subtitle">Alan WAlker</div>`,
        poster: "img/5.jpg",
    },
    {
        id:"6",
        songName:`On My Way <br><div class="subtitle">Alan WAlker</div>`,
        poster: "img/6.jpg",
    },
    {
        id:"7",
        songName:`On My Way <br> <div class="subtitle">Alan WAlker</div>`,
        poster: "img/7.jpg",
    },
    {
        id:"8",
        songName:`On My Way <br><div class="subtitle">Alan WAlker</div>`,
        poster: "img/8.jpg",
    },
    {
        id:"9",
        songName:`On My Way <br><div class="subtitle">Alan WAlker</div>`,
        poster: "img/9.jpg",
    },
    {
        id:"10",
        songName:`On My Way <br><div class="subtitle">Alan </div>`,
        poster: "img/10.jpg",
    }

];



Array.from(document.getElementsByClassName('songItem')).forEach((e,i) =>{
    e.getElementsByTagName('img')[0].src =songs[i].poster;
    e.getElementsByTagName('h5')[0].innerHTML =songs[i].songName;
});



let masterPlay = document.getElementById('masterPlay');
let wave = document.getElementById('wave');

masterPlay.addEventListener('click', () => {
    if(music.paused || music.currentTime <= 0){
        music.play();
        wave.classList.add('active1');
        masterPlay.classList.remove('bi-play-fill');
        masterPlay.classList.add('bi-pause-fill');
    }
    else{
        music.pause();
        wave.classList.remove('active1');
        masterPlay.classList.add('bi-play-fill');
        masterPlay.classList.remove('bi-pause-fill');
    }
    
});


const makeAllplays = () =>{
    Array.from(document.getElementsByClassName('playListPlay')).forEach((el) =>{
        el.classList.add('bi-play-circle-fill');
        el.classList.remove('bi-pause-circle-fill');
})
}
const makeAllBackground = () =>{
    Array.from(document.getElementsByClassName('songItem')).forEach((el) =>{
        el.style.background ='rgb(105,105,105,.0)';
})
}


let pop_song_left = document.getElementById('pop_song_left');
let pop_song_right = document.getElementById('pop_song_right');
let pop_song = document.getElementsByClassName('pop_song')[0];
pop_song_right.addEventListener('click',()=>{
    pop_song.scrollLeft += 30;
});
pop_song_left.addEventListener('click', () => {
    pop_song.scrollLeft -= 30;
});

let pop_art_left =document.getElementById('pop_art_left');
let pop_art_right =document.getElementById('pop_art_right');
letitem=document.getElementsByClassName('item')[0];
pop_art_right.addEventListener('click',()=>{
    item.scrollLeft += 330;
});
pop_art_left.addEventListener('click', () => {
    item.scrollLeft -= 330;
});



let index =0;
let poster_master_play =document.getElementById('poster_master_play');
let title =document.getElementById('title');
Array.from(document.getElementsByClassName('playListPlay')).forEach((e) =>{
    e.addEventListener('click', () => {
      index =el.target.id;
    //   console.log(abc);
    music.src = `audio/${index}.mp3`;
    poster_master_play.src = `img/${index}.jpg`;
    music.play();
    masterPlay.classList.remove('bi-play-fill');
    masterPlay.classList.add('bi-pause-fill');
});

    let songTitles =songs.filter((els) =>{
        return els.id == index;

    })
    songTitles.forEach(elss =>{
        let {songName} =elss;
        title.innerHTML=songName;
        // poster_master_play.src =poster;

    });
    makeAllBackground();
    Array.from(document.getElementsByClassName('songItem'))[index-1].style.background = "rgb(105,105,105,.1)";
    
    makeAllplays();
    el.targetclassList.remove('bi-play-circle-fill');
    el.targetclassList.add('bi-pause-circle-fill');
    wave.classList.add('active1');
});

let currentStart = document.getElementById('currentStart');
let currentEnd = document.getElementById('currentEnd');
let seek = document.getElementById('seek');
let bar2 = document.getElementById('bar2');
let dot = document.getElementsByClassName('dot')[0];

music.addEventListener('timeupdate',()=>{
    let music_curr =music.currentTime;
    let music_dur=music.duration;
    let min1=Math.floor(music_dur/60);
    let sec1 = Math.floor(music_dur % 60);
    
    if(sec1<10){
        sec1 = `0${sec1}`;
    }
    currentEnd.innerHTML=`${min1}:${sec1}`;
    
    let min2=Math.floor(music_curr/60);
    let sec2 = Math.floor(music_curr % 60);
    if(sec2<10){
        sec2 = `0${sec2}`;
    }
    
    currentStart.innerHTML=`${min2}:${sec2}`;

    let progressBar =parseInt((music_curr/music_dur)*100);
    seek.value =progressBar;
    let seekbar =seek.value;
    bar2.style.width=`${seekbar}%`;
    dot.style.left=`${seekbar}%`;

});
   
seek.addEventListener('change', () => {
    music.currentTime = seek.value * music.duration/100;
});


let vol_icon =document.getElementById('vol_icon');
let vol =document.getElementById('vol');
let vol_bar =document.getElementsByClassName('vol_bar')[0];
let vol_dot =document.getElementById('vol_dot');

vol_icon.addEventListener('click', () => {
    if(vol.value==0){
        vol_icon.classList.remove('bi-volume-up-fill');
        vol_icon.classList.remove('bi-volume-down-fill');
        vol_icon.classList.add('bi-volume-off-fill');
    }
    if(vol.value>0){
        vol_icon.classList.remove('bi-volume-up-fill');
        vol_icon.classList.add('bi-volume-down-fill');
        vol_icon.classList.remove('bi-volume-off-fill');
    }
    if(vol.value>50){
        vol_icon.classList.add('bi-volume-up-fill');
        vol_icon.classList.remove('bi-volume-down-fill');
        vol_icon.classList.remove('bi-volume-off-fill');

    }
    let vol_a =vol.value;
    vol_bar.style.width=`${vol_a}%`;
    vol_dot.style.left=`${vol_a}%`;
    music.volume = vol_a/100;
    });

    let back =Document.getElementById('back');
    let next =Document.getElementById('next');


back.addEventListener('click',()=>{
    index -=1;
    if(index<=0){
        index=Array.from(document.getElementsByClassName('songItem')).length ;;
    }
    music.src = `audio/${index}.mp3`;
    poster_master_play.src = `img/${index}.jpg`;
    music.play();
    masterPlay.classList.remove('bi-play-fill');
    masterPlay.classList.add('bi-pause-fill');


    let songTitles =songs.filter((els) =>{
        return els.id == index;

    });
    songTitles.forEach(elss =>{
        let {songName} =elss;
        title.innerHTML=songName;
        // poster_master_play.src =poster;

    });
    makeAllBackground();
    Array.from(document.getElementsByClassName('songItem'))[index-1].style.background = "rgb(105,105,105,.1)";
    
    makeAllplays();
    el.targetclassList.remove('bi-play-circle-fill');
    el.targetclassList.add('bi-pause-circle-fill');
    wave.classList.add('active1');

})
    next.addEventListener('click', ()=>{
        index++;
        if(index>Array.from(document.getElementsByClassName('songItem')).length){
            index=1;
        }
        music.src = `audio/${index}.mp3`;
        poster_master_play.src = `img/${index}.jpg`;
        music.play();
        masterPlay.classList.remove('bi-play-fill');
        masterPlay.classList.add('bi-pause-fill');
    
    
        let songTitles =songs.filter((els) =>{
            return els.id == index;
    
        });
        songTitles.forEach(elss =>{
            let {songName} =elss;
            title.innerHTML=songName;
            // poster_master_play.src =poster;
    
        });
        makeAllBackground();
        Array.from(document.getElementsByClassName('songItem'))[index-1].style.background = "rgb(105,105,105,.1)";
        
        makeAllplays();
        el.targetclassList.remove('bi-play-circle-fill');
        el.targetclassList.add('bi-pause-circle-fill');
        wave.classList.add('active1');
    })


