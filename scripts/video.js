var video1 = document.getElementById("video_1");
var video4 = document.getElementById("video_4");


var allVideoHome = []
for (let j=0;j<allProjects.length;j++) {
        
        if (allProjects[j].isVideo) {
                var currentVideoHome = document.getElementById(`video_${j+1}`);
                allVideoHome.push(currentVideoHome);
        }
}

for (let j=0;j<allVideoHome.length;j++) {
        allVideoHome[j].play();
        allVideoHome[j].addEventListener('timeupdate', funcloop=function(){
                if (allVideoHome[j].currentTime > (allVideoHome[j].duration - 0.01)) {
                        allVideoHome[j].currentTime = 0.01;
                        allVideoHome[j].play();
                }
        }, false);
}




// function initVideo1() {
//         // video1.src = "assets/MP4/CONTRALUZ.mp4";
//         video1.play();
//         video1.addEventListener('timeupdate', funcloop=function(){
//                 if (video1.currentTime > (video1.duration - 0.01)) {
//                         video1.currentTime = 0.01;
//                         video1.play();
//                 }
//         }, false);

//         video4.play();
//         video4.addEventListener('timeupdate', funcloop=function(){
//                 if (video4.currentTime > (video4.duration - 0.01)) {
//                         video4.currentTime = 0.01;
//                         video4.play();
//                 }
//         }, false);
// };

// window.addEventListener("load", initVideo1, false);