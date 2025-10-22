const modalContainer = document.getElementById('modal-container');

modalContainer.addEventListener('click', () => {
        setTimeout(() => {
                modalContainer.classList.remove('on');
        }, 750);
         
        modalContainer.classList.add('out');
        document.body.classList.remove('modal-active');
        outterContainer.classList.remove('leave');
        outterContainer.classList.add('comeBack');
});


const outterContainer = document.getElementById('outterContainer');
const modalContent = document.getElementById('modal_content');
modalContent.innerHTML = `<div class="scroll-container-modal" id="scroll-container-modal"><div class="block-modal"></div><div class="scroll-modal-holder" id="scroll-modal-holder"><div class="modal-scroll-container" id="modal-scroll-container"></div></div></div>`;


function playModalVideos(x) {
        var project1Assets = allProjects[x].assets;

        var heroBox = document.getElementById('hero-text');
        for (let i=0;i<project1Assets[0].assetTexts.length;i++) {
                heroBox.innerHTML+=project1Assets[0].assetTexts[i];
                heroBox.innerHTML+=`<div class="rect" id="rect-${i+1}"></div>`;
        };

        var allVideoModals = []
        for (let j=0;j<project1Assets.length;j++) {
                if (project1Assets[j].isVideo) {
                        var currentVideoModal = document.getElementById(`video_${x+1}0${j+1}_m`);
                        allVideoModals.push(currentVideoModal)
                }
        };

        for (let j=0;j<allVideoModals.length;j++) {
                allVideoModals[j].play();
                allVideoModals[j].addEventListener('timeupdate', funcloop=function(){
                        if (allVideoModals[j].currentTime > (allVideoModals[j].duration - 0.01)) {
                                allVideoModals[j].currentTime = 0.01;
                                allVideoModals[j].play();
                        }
                }, false);
        };
};

var modalScrollContainer = document.getElementById('modal-scroll-container');





// ----------------------- PROJECT 1 MODAL ----------------------- //

const project1 = document.getElementById('parent_1');

project1.addEventListener('click', () => {
        outterContainer.classList.remove('comeBack');
        modalContainer.classList.remove('out');
        setTimeout(() => {
                modalContainer.classList.add('on'); 
        }, 100);
        outterContainer.classList.add('leave');
        document.body.classList.add('modal-active');
});

function addVideo1() {
        modalScrollContainer.innerHTML = "";
        modalScrollContainer.innerHTML+=allMappedAssets[0].join("");
        modalScrollContainer.scrollTop = 0;
        playModalVideos(0);
};
const videoBox1 = document.getElementById('video_box_1');
videoBox1.addEventListener('click', addVideo1, false);


// ----------------------- PROJECT 2 MODAL ----------------------- //

const project2 = document.getElementById('parent_2');

project2.addEventListener('click', () => {
        outterContainer.classList.remove('comeBack');
        modalContainer.classList.remove('out');
        setTimeout(() => {
                modalContainer.classList.add('on'); 
        }, 100);
        
        outterContainer.classList.add('leave');
        document.body.classList.add('modal-active');
});

function addVideo2() {
        modalScrollContainer.innerHTML = "";
        modalScrollContainer.innerHTML+=allMappedAssets[1].join("");
        modalScrollContainer.scrollTop = 0;
        playModalVideos(1);
};
const imageBox2 = document.getElementById('image_box_2');
imageBox2.addEventListener('click', addVideo2, false);

// ----------------------- PROJECT 3 MODAL ----------------------- //

const project3 = document.getElementById('parent_3');

project3.addEventListener('click', () => {
        outterContainer.classList.remove('comeBack');
        modalContainer.classList.remove('out');
        setTimeout(() => {
                modalContainer.classList.add('on'); 
        }, 100);
        
        outterContainer.classList.add('leave');
        document.body.classList.add('modal-active');
});

function addVideo3() {
        modalScrollContainer.innerHTML = "";
        modalScrollContainer.innerHTML+=allMappedAssets[2].join("");
        playModalVideos(2);
};
const imageBox3 = document.getElementById('video_box_3');
imageBox3.addEventListener('click', addVideo3, false);

// ----------------------- PROJECT 4 MODAL ----------------------- //

const project4 = document.getElementById('parent_4');

project4.addEventListener('click', () => {
        outterContainer.classList.remove('comeBack');
        modalContainer.classList.remove('out');
        setTimeout(() => {
                modalContainer.classList.add('on'); 
        }, 100);
        
        outterContainer.classList.add('leave');
        document.body.classList.add('modal-active');
});

function addVideo4() {
        modalScrollContainer.innerHTML = "";
        modalScrollContainer.innerHTML+=allMappedAssets[3].join("");
        playModalVideos(3);
};
const imageBox4 = document.getElementById('video_box_4');
imageBox4.addEventListener('click', addVideo4, false);

// ----------------------- PROJECT 5 MODAL ----------------------- //

// const project5 = document.getElementById('parent_5');

// project5.addEventListener('click', () => {
//         outterContainer.classList.remove('comeBack');
//         modalContainer.classList.remove('out');
//         setTimeout(() => {
//                 modalContainer.classList.add('on'); 
//         }, 100);
        
//         outterContainer.classList.add('leave');
//         document.body.classList.add('modal-active');
// });

// function addVideo5() {
//         modalScrollContainer.innerHTML = "";
//         modalScrollContainer.innerHTML+=allMappedAssets[4].join("");
//         playModalVideos(4);
// };
// const imageBox5 = document.getElementById('video_box_5');
// imageBox5.addEventListener('click', addVideo5, false);

