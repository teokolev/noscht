

                // {id:6,isVideo:false,projectMedia:"../assets/7.jpg"},
                

let mappedData = allProjects.map((a => {
        if (a.isVideo) {
                return `<div class="parents parent_${a.id} scroll_images" id="parent_${a.id}"><div class="video_box_${a.id}" id="video_box_${a.id}"><video class="" id="video_${a.id}" muted preload="metadata" src="${a.projectMedia}" type="video/mp4"></video></div><div class="text_P${a.id}" id="text_P${a.id}"><div class="P${a.id}_line_1" id="P${a.id}_line_1"></div><div class="P${a.id}_line_2" id="P${a.id}_line_2"></div><div class="P${a.id}_line_3" id="P${a.id}_line_3"></div></div></div>`
        } else {
                return `<div class="parents parent_${a.id} scroll_images" id="parent_${a.id}"><div class="image_box_${a.id}" id="image_box_${a.id}"><img class="image_${a.id}" src="${a.projectMedia}" style="z-index: -999;"></div><div class="text_P${a.id}" id="text_P${a.id}"><div class="P${a.id}_line_1" id="P${a.id}_line_1"></div><div class="P${a.id}_line_2" id="P${a.id}_line_2"></div><div class="P${a.id}_line_3" id="P${a.id}_line_3"></div></div></div>`
        }
}));

container=document.querySelector(".container");

container.innerHTML+=mappedData.join("");

function playHomeVideos() {
        var allVideosHome = []
        for (let j=0;j<allProjects.length;j++) {
                if (allProjects[j].isVideo) {
                        var currentVideoModal = document.getElementById(`video_${j+1}`);
                        allVideosHome.push(currentVideoModal)
                }
        };

        for (let j=0;j<allVideosHome.length;j++) {
                allVideosHome[j].play();
                allVideosHome[j].addEventListener('timeupdate', funcloop=function(){
                        if (allVideosHome[j].currentTime > (allVideosHome[j].duration - 0.01)) {
                                allVideosHome[j].currentTime = 0.01;
                                allVideosHome[j].play();
                        }
                }, false);
        };
};

window.addEventListener("load", playHomeVideos, false);


const modalContent = document.getElementById('modal_content');
modalContent.innerHTML = `<div class="scroll-container-modal" id="scroll-container-modal"><div class="block-modal"></div><div class="scroll-modal-holder" id="scroll-modal-holder"><div class="modal-scroll-container" id="modal-scroll-container"></div></div></div>`;

var modalScrollContainer = document.getElementById('modal-scroll-container');



var allMappedAssets = []
for (let k=0;k<allProjects.length;k++) {
        var currentProjectAssets = allProjects[k].assets;
        let mappedAssets = currentProjectAssets.map((a => {
                if (a.isFirst) {
                        if (a.isText) {
                                if (a.isVideo) {
                                        return `<div class="parents_m parent_${a.id}_m" id="parent_${a.id}_m"><div class="video_box_${a.id}_m" id="video_box_${a.id}_m"><video class="scroll_modal" id="video_${a.id}_m" muted preload="metadata" src="${a.assetMedia}" type="video/mp4"></video><div class="hero-text" id="hero-text"></div></div><div class="text_m" id="text_m${a.id}"><div class="m${a.id}_line_1" id="m${a.id}_line_1">${a.firstText}</div><div class="m${a.id}_line_2" id="m${a.id}_line_2">${a.secondText}</div></div></div>`
                                } else {
                                        return `<div class="parents_m parent_${a.id}_m" id="parent_${a.id}_m"><div class="image_box_${a.id}_m" id="image_box_${a.id}_m"><img class="scroll_modal image_${a.id}_m" src="${a.assetMedia}" style="z-index: -999;"><div class="hero-text" id="hero-text"></div></div><div class="text_m" id="text_m${a.id}"><div class="m${a.id}_line_1" id="m${a.id}_line_1">${a.firstText}</div><div class="m${a.id}_line_2" id="m${a.id}_line_2">${a.secondText}</div></div></div>`
                                }
                        } else {
                                if (a.isVideo) {
                                        return `<div class="parents_m parent_${a.id}_m" id="parent_${a.id}_m"><div class="video_box_${a.id}_m" id="video_box_${a.id}_m"><video class="scroll_modal" id="video_${a.id}_m" muted preload="metadata" src="${a.assetMedia}" type="video/mp4"></video><div class="hero-text" id="hero-text"></div></div></div>`
                                } else {
                                        return `<div class="parents_m parent_${a.id}_m" id="parent_${a.id}_m"><div class="image_box_${a.id}_m" id="image_box_${a.id}_m"><img class="scroll_modal image_${a.id}_m" src="${a.assetMedia}" style="z-index: -999;"><div class="hero-text" id="hero-text"></div></div></div>`
                                }
                        }
                } else {
                        if (a.isText) {
                                if (a.isVideo) {
                                        return `<div class="parents_m parent_${a.id}_m" id="parent_${a.id}_m"><div class="video_box_${a.id}_m" id="video_box_${a.id}_m"><video class="scroll_modal" id="video_${a.id}_m" muted preload="metadata" src="${a.assetMedia}" type="video/mp4"></video></div><div class="text_m" id="text_m${a.id}"><div class="m${a.id}_line_1" id="m${a.id}_line_1">${a.firstText}</div><div class="m${a.id}_line_2" id="m${a.id}_line_2">${a.secondText}</div></div></div>`
                                } else {
                                        return `<div class="parents_m parent_${a.id}_m" id="parent_${a.id}_m"><div class="image_box_${a.id}_m" id="image_box_${a.id}_m"><img class="scroll_modal image_${a.id}_m" src="${a.assetMedia}" style="z-index: -999;"></div><div class="text_m" id="text_m${a.id}"><div class="m${a.id}_line_1" id="m${a.id}_line_1">${a.firstText}</div><div class="m${a.id}_line_2" id="m${a.id}_line_2">${a.secondText}</div></div></div>`
                                }
                        } else {
                                if (a.isVideo) {
                                        return `<div class="parents_m parent_${a.id}_m" id="parent_${a.id}_m"><div class="video_box_${a.id}_m" id="video_box_${a.id}_m"><video class="scroll_modal" id="video_${a.id}_m" muted preload="metadata" src="${a.assetMedia}" type="video/mp4"></video></div></div>`
                                } else {
                                        return `<div class="parents_m parent_${a.id}_m" id="parent_${a.id}_m"><div class="image_box_${a.id}_m" id="image_box_${a.id}_m"><img class="scroll_modal image_${a.id}_m" src="${a.assetMedia}" style="z-index: -999;"></div></div>`
                                }
                        }
                }
        }));
        var currProject = []
        for (let j=0;j<mappedAssets.length;j++) {
                currProject.push(mappedAssets[j]);
        }
        allMappedAssets.push(currProject);
}

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
}

function addVideo1() {
        modalScrollContainer.innerHTML = "";
        modalScrollContainer.innerHTML+=allMappedAssets[0].join("");
        modalScrollContainer.scrollTop = 0;
        playModalVideos(0);
};
const videoBox1 = document.getElementById('video_box_1');
videoBox1.addEventListener('click', addVideo1, false);



function addVideo2() {
        modalScrollContainer.innerHTML = "";
        modalScrollContainer.innerHTML+=allMappedAssets[1].join("");
        modalScrollContainer.scrollTop = 0;
        playModalVideos(1);
};
const imageBox2 = document.getElementById('image_box_2');
imageBox2.addEventListener('click', addVideo2, false);



function addVideo3() {
        modalScrollContainer.innerHTML = "";
        modalScrollContainer.innerHTML+=allMappedAssets[2].join("");
        playModalVideos(2);
};
const imageBox3 = document.getElementById('video_box_3');
imageBox3.addEventListener('click', addVideo3, false);



function addVideo4() {
        modalScrollContainer.innerHTML = "";
        modalScrollContainer.innerHTML+=allMappedAssets[3].join("");
        playModalVideos(3);
};
const imageBox4 = document.getElementById('video_box_4');
imageBox4.addEventListener('click', addVideo4, false);

