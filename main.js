const WarningText = document.getElementById("warning-text");
const GithubIcon = document.getElementById("github-icon");
const DarkMode = document.getElementById("color-btn");
const CodeBtn = document.getElementById("code-btn");
const SoundBtn = document.getElementById("sound-btn");
const SoundBtnImg = document.getElementById("sound-btn-img");
const SoundOn = document.getElementById("sound-on");
const SoundOff = document.getElementById("sound-off");
let NotificationMute = document.getElementById("notification-mute");
    NotificationMute.style.display = "none";
let NotificationUnmute = document.getElementById("notification-unmute")
    NotificationUnmute.style.display = "none"

const NotificationMuteBtn = document.getElementById("notification-btn");

window.alert("Hello there! Welcome to Skander Ezzeddine's first-ever website built with JavaScript ;)")

function toggleDarkMode(){
    if(document.body.style.backgroundColor === "black"){
        document.body.style.backgroundColor = "white";
        DarkMode.style.backgroundColor = "black";
        DarkMode.style.color = "white";
        WarningText.style.color = "black";
        DarkMode.textContent= "Light Mode";
        WarningText.style.textShadow = "0px 0px 30px black";
        CodeBtn.style.color = "black";
        CodeBtn.style.backgroundColor = "white";
        CodeBtn.style.border = "2px solid black";
        GithubIcon.style.filter = "invert(0)";
        NotificationMute.style.backgroundColor = "rgb(0, 0, 0)";
        NotificationUnmute.style.backgroundColor = "rgb(0, 0, 0)"
        SoundBtn.style.backgroundColor = "white";
        SoundBtn.style.border = "2px solid black";
        SoundBtnImg.style.filter = "invert(0)";
        SoundOn.play()
    }
    else {
        document.body.style.backgroundColor = "black";
        DarkMode.style.backgroundColor = "white";
        DarkMode.style.color = "black";
        WarningText.style.color = "white"
        DarkMode.textContent= "Dark Mode"
        WarningText.style.textShadow = "0px 0px 40px white"
        DarkMode.style.animation = "button-1-animation-2 2s ease-in-out infinite";
        CodeBtn.style.color = "white"
        CodeBtn.style.backgroundColor = "black"
        GithubIcon.style.filter = "invert(1)"
        NotificationMute.style.backgroundColor = "rgb(68, 68, 68)"
        NotificationUnmute.style.backgroundColor = "rgb(68, 68, 68)"
        CodeBtn.style.border = "2px solid white"
        SoundBtn.style.backgroundColor = "black"
        SoundBtn.style.border = "2px solid white"
        SoundBtnImg.style.filter = "invert(1)"
        SoundOff.play();
        }
    }

let muteTimeout;
function ToggleVolume(){
    if (SoundOn.volume === 1){
        SoundOn.volume = 0
        SoundOff.volume = 0
        SoundBtnImg.src = "icons/mute.png"

        NotificationMute.style.display = "flex"
        NotificationMute.style.animation = "notification-animation-open 0.5s ease-in-out"

        clearTimeout(muteTimeout);

        // Disparaître après 3 secondes (3000 ms)
        muteTimeout = setTimeout(() => {
            NotificationMute.style.animation = "notification-animation-close 0.5s ease-in-out forwards";
            
            // Masquer complètement une fois l'animation de fermeture terminée
            setTimeout(() => {
                NotificationMute.style.display = "none";
            }, 500); 
        }, 3000);

    }
    else {
        SoundOn.volume = 1
        SoundOff.volume = 1
        NotificationUnmute.style.display = "flex"
        NotificationUnmute.style.animation = "notification-animation-open 0.5s ease-in-out"
        SoundBtnImg.src = "icons/volume.png"

        setTimeout(() => {
            NotificationUnmute.style.animation = "notification-animation-close 0.5s ease-in-out forwards";
            setTimeout(() => {
                NotificationUnmute.style.display = "none";
            }, 500);
        }, 3000);
    }
}

function CloseNotification(){
    if(NotificationMute.style.display === "flex"){
        NotificationMute.style.animation = "notification-animation-close 0.5s ease-in-out forwards";
        NotificationUnmute.style.animation = "notification-animation-close 0.5s ease-in-out forwards";
    }
}