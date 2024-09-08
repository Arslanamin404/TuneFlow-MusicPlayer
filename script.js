const playBtn = document.getElementById("playBtn");
const prevBtn = document.getElementById("prevBtn");
const nextBtn = document.getElementById("nextBtn");
const coverImg = document.getElementById("coverImg");
const volumeControl = document.getElementById("volumeControl");
const songName = document.getElementById("songName");
const singer = document.getElementById("singer");

let index = 0;

const songList = [
    {
        songName: "Tum Hi Ho",
        songUrl: "Assets/Tum Hi Ho.mp3",
        artist: "Arijit Singh",
        poster: "https://pagalfree.com/images/128Tum%20Hi%20Ho%20-%20Aashiqui%202%20128%20Kbps.jpg"
    },
    {
        songName: "Gym De Shokeen",
        songUrl: "Assets/Gym De Shokeen.mp3",
        artist: "Sukhwinder Singh, Sapna Awasthi",
        poster: "https://pagalfree.com/images/128Gym%20De%20Shokeen%20-%20Bhallwaan%20128%20Kbps.jpg"
    },
    {
        songName: "Arjan Vailly",
        songUrl: "Assets/Arjan Vailly.mp3",
        artist: "Manan Bhardwaj, Bhupinder Babbal",
        poster: "https://pagalfree.com/images/128Arjan%20Vailly%20-%20Animal%20128%20Kbps.jpg"
    },
    {
        songName: "Tujh Mein Rab Dikhta Hai",
        songUrl: "Assets/Tujh Mein Rab Dikhta Hai.mp3",
        artist: "Roop Kumar Rathod",
        poster: "https://pagalfree.com/images/128Tujh%20Mein%20Rab%20Dikhta%20Hai%20-%20Rab%20Ne%20Bana%20Di%20Jodi%20128%20Kbps.jpg"
    },
    {
        songName: "Dil Dhadakne Do",
        songUrl: "Assets/Dil Dhadakne Do.mp3",
        artist: "Priyanka Chopra, Farhan Akhtar",
        poster: "https://pagalfree.com/images/128Dil%20Dhadakne%20Do%20-%20Dil%20Dhadakne%20Do%20128%20Kbps.jpg"
    }
];

const audio = new Audio();

function displaySong(currentSongIndex) {
    const song = songList[currentSongIndex];
    coverImg.src = song["poster"];
    coverImg.alt = song["songName"];
    songName.innerHTML = song["songName"];
    singer.innerHTML = song["artist"];
    audio.src = song["songUrl"];
    audio.load(); // Ensure the new audio track is loaded
}

function updatePlayButton(isPlaying) {
    if (isPlaying) {
        playBtn.innerHTML = `<i class="text-4xl md:text-3xl fa-solid fa-pause text-white text-3xl hover:text-gray-200"></i>`;
    } else {
        playBtn.innerHTML = `<i class="text-4xl md:text-3xl fa-solid fa-circle-play"></i>`;
    }
}

let flag = true;

// prev btn
prevBtn.addEventListener("click", () => {
    if (index > 0) {
        index--;
        displaySong(index); // Update song information
        audio.play();
        updatePlayButton(true)
        flag = false
    }
    else
        alert("You are playing the first song of the playlist");
});

// next btn
nextBtn.addEventListener("click", (e) => {
    if (index < songList.length - 1) {
        index++;
        displaySong(index); // Update song information
        audio.play();
        updatePlayButton(true)
        flag = false
    }
    else
        alert("You've reached to the last song in the playlist.");
});

// play btn
playBtn.addEventListener("click", (e) => {
    if (flag) {
        audio.play();
        updatePlayButton(true)
        flag = false;
    } else {
        audio.pause();
        updatePlayButton(false)
        flag = true;
    }
});

// Volume control
volumeControl.addEventListener("input", (e) => {
    audio.volume = volumeControl.value;
});

window.addEventListener("load", () => {
    displaySong(index);
});
