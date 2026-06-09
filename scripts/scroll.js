// import Lenis from 'lenis'

// const lenis = new Lenis({
//         autoRaf: true,
//       });
      
//       // Listen for the scroll event and log the event data
//       lenis.on('scroll', (e) => {
//         console.log(e);
//       });

let mappedData = allProjects.map((a => {
        if (a.isVideo) {
                if (a.isSquareParent) {
                        return `<div class="parents square_asset scroll_images" id="parent_${a.id}"><div class="video_box" id="video_box_${a.id}"><video class="" id="video_${a.id}" muted autoplay playsinline preload="metadata" src="${a.projectMedia}" type="video/mp4"></video></div><div class="text_P${a.id}" id="text_P${a.id}"><div class="P${a.id}_line_1" id="P${a.id}_line_1"></div><div class="P${a.id}_line_2" id="P${a.id}_line_2"></div><div class="P${a.id}_line_3" id="P${a.id}_line_3"></div></div></div>`
                } else {
                        return `<div class="parents nonsquare_asset scroll_images" id="parent_${a.id}"><div class="video_box" id="video_box_${a.id}"><video class="" id="video_${a.id}" muted autoplay playsinline preload="metadata" src="${a.projectMedia}" type="video/mp4"></video></div><div class="text_P${a.id}" id="text_P${a.id}"><div class="P${a.id}_line_1" id="P${a.id}_line_1"></div><div class="P${a.id}_line_2" id="P${a.id}_line_2"></div><div class="P${a.id}_line_3" id="P${a.id}_line_3"></div></div></div>`
                }
        } else {
                if (a.isSquareParent) {
                        return `<div class="parents square_asset scroll_images" id="parent_${a.id}"><div class="image_box" id="image_box_${a.id}"><img class="image" src="${a.projectMedia}" style="z-index: -999;"></div><div class="text_P${a.id}" id="text_P${a.id}"><div class="P${a.id}_line_1" id="P${a.id}_line_1"></div><div class="P${a.id}_line_2" id="P${a.id}_line_2"></div><div class="P${a.id}_line_3" id="P${a.id}_line_3"></div></div></div>`
                } else {
                        return `<div class="parents nonsquare_asset scroll_images" id="parent_${a.id}"><div class="image_box" id="image_box_${a.id}"><img class="image" src="${a.projectMedia}" style="z-index: -999;"></div><div class="text_P${a.id}" id="text_P${a.id}"><div class="P${a.id}_line_1" id="P${a.id}_line_1"></div><div class="P${a.id}_line_2" id="P${a.id}_line_2"></div><div class="P${a.id}_line_3" id="P${a.id}_line_3"></div></div></div>`
                }
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



var allMappedAssets = []
for (let k=0;k<allProjects.length;k++) {
        var currentProjectAssets = allProjects[k].assets;
        let mappedAssets = currentProjectAssets.map((a => {
                if (a.isFirst) {
                        if (a.isText) {
                                if (a.isVideo) {
                                        if (a.isSquare) {
                                                return `<div class="parents_m square_asset_modal" id="parent_${a.id}_m"><div class="video_box_modal" id="video_box_${a.id}_m"><video class="scroll_modal" id="video_${a.id}_m" muted autoplay playsinline preload="metadata" src="${a.assetMedia}" type="video/mp4"></video><div class="hero-text" id="hero-text"></div></div><div class="text_m" id="text_m${a.id}"><div class="m${a.id}_line_1" id="m${a.id}_line_1">${a.firstText}</div><div class="m${a.id}_line_2" id="m${a.id}_line_2">${a.secondText}</div></div></div>`
                                        } else {
                                                return `<div class="parents_m nonsquare_asset_modal" id="parent_${a.id}_m"><div class="video_box_modal" id="video_box_${a.id}_m"><video class="scroll_modal" id="video_${a.id}_m" muted autoplay playsinline preload="metadata" src="${a.assetMedia}" type="video/mp4"></video><div class="hero-text" id="hero-text"></div></div><div class="text_m" id="text_m${a.id}"><div class="m${a.id}_line_1" id="m${a.id}_line_1">${a.firstText}</div><div class="m${a.id}_line_2" id="m${a.id}_line_2">${a.secondText}</div></div></div>`
                                        }
                                } else {
                                        if (a.isSquare) {
                                                return `<div class="parents_m square_asset_modal" id="parent_${a.id}_m"><div class="image_box_modal" id="image_box_${a.id}_m"><img class="scroll_modal" src="${a.assetMedia}" style="z-index: -999;"><div class="hero-text" id="hero-text"></div></div><div class="text_m" id="text_m${a.id}"><div class="m${a.id}_line_1" id="m${a.id}_line_1">${a.firstText}</div><div class="m${a.id}_line_2" id="m${a.id}_line_2">${a.secondText}</div></div></div>`
                                        } else {
                                                return `<div class="parents_m nonsquare_asset_modal" id="parent_${a.id}_m"><div class="image_box_modal" id="image_box_${a.id}_m"><img class="scroll_modal" src="${a.assetMedia}" style="z-index: -999;"><div class="hero-text" id="hero-text"></div></div><div class="text_m" id="text_m${a.id}"><div class="m${a.id}_line_1" id="m${a.id}_line_1">${a.firstText}</div><div class="m${a.id}_line_2" id="m${a.id}_line_2">${a.secondText}</div></div></div>`
                                        }
                                }
                        } else {
                                if (a.isVideo) {
                                        if (a.isSquare) {
                                                return `<div class="parents_m square_asset_modal" id="parent_${a.id}_m"><div class="video_box_modal" id="video_box_${a.id}_m"><video class="scroll_modal" id="video_${a.id}_m" muted autoplay playsinline preload="metadata" src="${a.assetMedia}" type="video/mp4"></video><div class="hero-text" id="hero-text"></div></div></div>`
                                        } else {
                                                return `<div class="parents_m nonsquare_asset_modal" id="parent_${a.id}_m"><div class="video_box_modal" id="video_box_${a.id}_m"><video class="scroll_modal" id="video_${a.id}_m" muted autoplay playsinline preload="metadata" src="${a.assetMedia}" type="video/mp4"></video><div class="hero-text" id="hero-text"></div></div></div>`
                                        }
                                } else {
                                        if (a.isSquare) {
                                                return `<div class="parents_m square_asset_modal" id="parent_${a.id}_m"><div class="image_box_modal" id="image_box_${a.id}_m"><img class="scroll_modal" src="${a.assetMedia}" style="z-index: -999;"><div class="hero-text" id="hero-text"></div></div></div>`
                                        } else {
                                                return `<div class="parents_m nonsquare_asset_modal" id="parent_${a.id}_m"><div class="image_box_modal" id="image_box_${a.id}_m"><img class="scroll_modal" src="${a.assetMedia}" style="z-index: -999;"><div class="hero-text" id="hero-text"></div></div></div>`
                                        }
                                }
                        }
                } else {
                        if (a.isText) {
                                if (a.isVideo) {
                                        if (a.isSquare) {
                                                return `<div class="parents_m square_asset_modal" id="parent_${a.id}_m"><div class="video_box_modal" id="video_box_${a.id}_m"><video class="scroll_modal" id="video_${a.id}_m" muted autoplay playsinline preload="metadata" src="${a.assetMedia}" type="video/mp4"></video></div><div class="text_m" id="text_m${a.id}"><div class="m${a.id}_line_1" id="m${a.id}_line_1">${a.firstText}</div><div class="m${a.id}_line_2" id="m${a.id}_line_2">${a.secondText}</div></div></div>`
                                        } else {
                                                return `<div class="parents_m nonsquare_asset_modal" id="parent_${a.id}_m"><div class="video_box_modal" id="video_box_${a.id}_m"><video class="scroll_modal" id="video_${a.id}_m" muted autoplay playsinline preload="metadata" src="${a.assetMedia}" type="video/mp4"></video></div><div class="text_m" id="text_m${a.id}"><div class="m${a.id}_line_1" id="m${a.id}_line_1">${a.firstText}</div><div class="m${a.id}_line_2" id="m${a.id}_line_2">${a.secondText}</div></div></div>`
                                        }
                                } else {
                                        if (a.isSquare) {
                                                return `<div class="parents_m square_asset_modal" id="parent_${a.id}_m"><div class="image_box_modal" id="image_box_${a.id}_m"><img class="scroll_modal" src="${a.assetMedia}" style="z-index: -999;"></div><div class="text_m" id="text_m${a.id}"><div class="m${a.id}_line_1" id="m${a.id}_line_1">${a.firstText}</div><div class="m${a.id}_line_2" id="m${a.id}_line_2">${a.secondText}</div></div></div>`
                                        } else {
                                                return `<div class="parents_m nonsquare_asset_modal" id="parent_${a.id}_m"><div class="image_box_modal" id="image_box_${a.id}_m"><img class="scroll_modal" src="${a.assetMedia}" style="z-index: -999;"></div><div class="text_m" id="text_m${a.id}"><div class="m${a.id}_line_1" id="m${a.id}_line_1">${a.firstText}</div><div class="m${a.id}_line_2" id="m${a.id}_line_2">${a.secondText}</div></div></div>`
                                        }
                                }
                        } else {
                                if (a.isVideo) {
                                        if (a.isSquare) {
                                                return `<div class="parents_m square_asset_modal" id="parent_${a.id}_m"><div class="video_box_modal" id="video_box_${a.id}_m"><video class="scroll_modal" id="video_${a.id}_m" muted autoplay playsinline preload="metadata" src="${a.assetMedia}" type="video/mp4"></video></div></div>`
                                        } else {
                                                return `<div class="parents_m nonsquare_asset_modal" id="parent_${a.id}_m"><div class="video_box_modal" id="video_box_${a.id}_m"><video class="scroll_modal" id="video_${a.id}_m" muted autoplay playsinline preload="metadata" src="${a.assetMedia}" type="video/mp4"></video></div></div>`
                                        }
                                } else {
                                        if (a.isSquare) {
                                                return `<div class="parents_m square_asset_modal" id="parent_${a.id}_m"><div class="image_box_modal" id="image_box_${a.id}_m"><img class="scroll_modal" src="${a.assetMedia}" style="z-index: -999;"></div></div>`
                                        } else {
                                                return `<div class="parents_m nonsquare_asset_modal" id="parent_${a.id}_m"><div class="image_box_modal" id="image_box_${a.id}_m"><img class="scroll_modal" src="${a.assetMedia}" style="z-index: -999;"></div></div>`
                                        }
                                }
                        }
                }
        }));
        var currProject = []
        for (let j=0;j<mappedAssets.length;j++) {
                currProject.push(mappedAssets[j]);
        }
        allMappedAssets.push(currProject);
};
