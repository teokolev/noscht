const allArchive = [
        // {id:22,isVideo:false,projectMedia:"../assets/6.jpg",projectTitle:`\xa0`},
        {id:1,isVideo:true,projectMedia:"../assets/nik/NM_Eyeball_Trimmed.mp4",projectTitle:"001 - WORLD PEACE INSIDE ME"},
                        {id:2,isVideo:false,projectMedia:"../assets/2.jpg",projectTitle:"002 - BOSE X COCO GAUFF"},
                        {id:3,isVideo:false,projectMedia:"../assets/3.jpeg",projectTitle:"003 - RYAN BEATTY ALBUM COVER"},
                        {id:4,isVideo:false,projectMedia:"../assets/4.jpeg",projectTitle:"004 - FUTURELAND"},
                        {id:5,isVideo:false,projectMedia:"../assets/6.jpg",projectTitle:"005 - CONTRALUZ X MALUMA"},
                        {id:6,isVideo:false,projectMedia:"../assets/6.jpg",projectTitle:"006 - MEJURI - LAILA GOHAR"},
                        {id:7,isVideo:false,projectMedia:"../assets/6.jpg",projectTitle:"007 - VICE LOGO ID LITTLE"},
                        {id:8,isVideo:false,projectMedia:"../assets/6.jpg",projectTitle:"008 - LITTLE"},
                        {id:9,isVideo:false,projectMedia:"../assets/6.jpg",projectTitle:"009 - YOUTUBE LOGO DOODLE"},
                        {id:10,isVideo:false,projectMedia:"../assets/6.jpg",projectTitle:"010 - BOSE X ANTHONY EDWARDS"},
                        {id:11,isVideo:false,projectMedia:"../assets/6.jpg",projectTitle:"011 - RYAN BEATTY SOCIAL PROMO"},
                        {id:12,isVideo:false,projectMedia:"../assets/6.jpg",projectTitle:`012 - GHOST ORCHARD PIXEL BIRD`},
                        {id:13,isVideo:false,projectMedia:"../assets/6.jpg",projectTitle:`013 - BIG SEAN ALBUM TEASER`},
                        {id:14,isVideo:false,projectMedia:"../assets/6.jpg",projectTitle:`014 - KOSTADIN KOLEV WEBSITE`},
                        {id:15,isVideo:false,projectMedia:"../assets/6.jpg",projectTitle:`\xa0`},
                        {id:16,isVideo:false,projectMedia:"../assets/6.jpg",projectTitle:`\xa0`},
                        {id:17,isVideo:false,projectMedia:"../assets/6.jpg",projectTitle:`\xa0`},
                        {id:15,isVideo:false,projectMedia:"../assets/6.jpg",projectTitle:`\xa0`},
                        {id:16,isVideo:false,projectMedia:"../assets/6.jpg",projectTitle:`\xa0`},
                        {id:17,isVideo:false,projectMedia:"../assets/6.jpg",projectTitle:`\xa0`},
                        {id:17,isVideo:false,projectMedia:"../assets/6.jpg",projectTitle:`\xa0`},
                        {id:15,isVideo:false,projectMedia:"../assets/6.jpg",projectTitle:`\xa0`},
                        
                        
];

let mappedArchive = allArchive.map((a => {
        if (a.isVideo) {
                return `<div class="archive-item-container test opac" id="archive-item-container-${a.id}"><div class="rectangle" id="rectangle-${a.id}"></div><a class="archive-item" id="archive-item-${a.id}">${a.projectTitle}</a></div>`
        } else {
                return `<div class="archive-item-container test opac" id="archive-item-container-${a.id}"><div class="rectangle" id="rectangle-${a.id}"></div><a class="archive-item" id="archive-item-${a.id}">${a.projectTitle}</a></div>`
        }
}));

archiveContainer=document.querySelector(".archive-items-container");

archiveContainer.innerHTML+=mappedArchive.join("");


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




const modalContentArchive = document.getElementById('modal-content-archive');

modalContentArchive.innerHTML = `<div class="scroll-container-modal" id="scroll-container-modal"><div class="block-modal"></div><div class="scroll-modal-holder" id="scroll-modal-holder"><div class="modal-scroll-container" id="modal-scroll-container"></div></div></div>`;
var modalScrollContainer = document.getElementById('modal-scroll-container');
// var allArchivePaths = []

// for (i=0;i<allArchive.length;i++) {
//         allArchivePaths.push(allArchive[i].projectMedia);
// }


var archiveItem1 = document.getElementById("archive-item-container-1");

function addVideo1() {
        modalScrollContainer.innerHTML = "";
        modalScrollContainer.innerHTML+=allMappedAssets[0].join("");
        modalScrollContainer.scrollTop = 0;
        playModalVideos(0);
};
// const videoBox1 = document.getElementById('video_box_1');
archiveItem1.addEventListener('click', addVideo1, false);

// function addModal1() {
//         modalContentArchive.innerHTML = `<div class="video_box_modal_1" id="video_box_modal_1"><video id="video_modal_1" muted preload="metadata" src="${allArchive[0].projectMedia}" type="video/mp4"></video></div>`;
//         var videoModal1 = document.getElementById('video_modal_1');
//         videoModal1.play();
//         videoModal1.addEventListener('timeupdate', funcloop=function(){
//                 if (videoModal1.currentTime > (videoModal1.duration - 0.01)) {
//                         videoModal1.currentTime = 0.01;
//                         videoModal1.play()
//                 }
//         }, false);
// };

// archiveItem1.addEventListener('click', addModal1, false);

rectangle1 = document.getElementById('rectangle-1');

var rectangle1Finished = false;

archiveItem1.addEventListener('mouseenter', () => {
        if (!rectangle1Finished) {
                archiveItem1.classList.toggle('black');
                rectangle1.classList.remove('down-leave-active');
                rectangle1.classList.add('down-enter-active');
                setTimeout(() => {
                        rectangle1Finished = true;
                }, 500);
        }
        
})

archiveItem1.addEventListener('mouseleave', () => {
        if (rectangle1Finished) {
                archiveItem1.classList.toggle('black');
                rectangle1.classList.remove('down-enter-active');
                rectangle1.classList.add('down-leave-active');
                setTimeout(() => {
                        rectangle1Finished = false;
                        
                }, 333);
        } else {
                setTimeout(() => {
                        rectangle1Finished = false;
                        archiveItem1.classList.toggle('black');
                        rectangle1.classList.remove('down-enter-active');
                        rectangle1.classList.add('down-leave-active');
                        
                }, 1000);
        }
        
})