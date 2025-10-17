const pixelBox1 = document.getElementById('pixel-box-1');
var allPixels1 = pixelBox1.getElementsByTagName('*');
const archiveText = document.getElementById('archive-box');

for (let i=1; i<allPixels1.length+1; i++) {
    allPixels1[i-1].setAttribute('id', `pixel-l-${i}`);
};

// const rightLink = document.getElementById('right-link');
// var allPixelsRight = rightLink.getElementsByTagName('*');
// const infoText = document.getElementById('info-link');

// for (let i=1; i<allPixelsRight.length+1; i++) {
//     allPixelsRight[i-1].setAttribute('id', `pixel-r-${i}`);
// };


function randomIntFromInterval(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min);
}

randomIndexesLeft = []

while (randomIndexesLeft.length < 100) {
    var randomInt = randomIntFromInterval(0, 99);
    if (!randomIndexesLeft.includes(randomInt)) {
        randomIndexesLeft.push(randomInt);
    };
};

archiveText.addEventListener('touchend', () => {
    setTimeout(() => {
        for (let i=0; i<allPixels1.length; i++) {
            allPixels1[i].style.opacity = '1';
        }
        for (let j=0; j<randomIndexesLeft.length; j++) {
            if (j < 8) {
                allPixels1[randomIndexesLeft[j]].classList.add('fade-out-100-d1');
            } else if (j > 7 && j < 16) {
                allPixels1[randomIndexesLeft[j]].classList.add('fade-out-100-d2');
            } else if (j > 15 && j < 24) {
                allPixels1[randomIndexesLeft[j]].classList.add('fade-out-100-d3');
            } else if (j > 23 && j < 32) {
                allPixels1[randomIndexesLeft[j]].classList.add('fade-out-100-d4');
            } else if (j > 31 && j < 40) {
                allPixels1[randomIndexesLeft[j]].classList.add('fade-out-100-d5');
            } else if (j > 39 && j < 48) {
                allPixels1[randomIndexesLeft[j]].classList.add('fade-out-100-d6');
            } else if (j > 47 && j < 56) {
                allPixels1[randomIndexesLeft[j]].classList.add('fade-out-100-d7');
            } else if (j > 55 && j < 64) {
                allPixels1[randomIndexesLeft[j]].classList.add('fade-out-100-d8');
            } else if (j > 63 && j < 72) {
                allPixels1[randomIndexesLeft[j]].classList.add('fade-out-100-d9');
            } else if (j > 71 && j < 80) {
                allPixels1[randomIndexesLeft[j]].classList.add('fade-out-100-d10');
            } else if (j > 79 && j < 88) {
                allPixels1[randomIndexesLeft[j]].classList.add('fade-out-100-d11');
            } else if (j > 87 && j < 96) {
                allPixels1[randomIndexesLeft[j]].classList.add('fade-out-100-d12');
            } else if (j > 95 && j < 100) {
                allPixels1[randomIndexesLeft[j]].classList.add('fade-out-100-d13');
            } 
            // else if (j > 103 && j < 110) {
            //     allPixels1[randomIndexesLeft[j]].classList.add('fade-out-100-d14');
            // } 
            // else if (j > 111 && j < 120) {
            //     allPixels1[randomIndexesLeft[j]].classList.add('fade-out-100-d15');
            // } 
            // else if (j > 119 && j < 128) {
            //     allPixels1[randomIndexesLeft[j]].classList.add('fade-out-100-d16');
            // } else if (j > 127 && j < 136) {
            //     allPixels1[randomIndexesLeft[j]].classList.add('fade-out-100-d17');
            // } else if (j > 135 && j < 144) {
            //     allPixels1[randomIndexesLeft[j]].classList.add('fade-out-100-d18');
            // } else if (j > 143 && j < 152) {
            //     allPixels1[randomIndexesLeft[j]].classList.add('fade-out-100-d19');
            // } else {
            //     allPixels1[randomIndexesLeft[j]].classList.add('fade-out-100-d20');
            // }
        }
        setTimeout(() => {
            for (let i=0; i<allPixels1.length; i++) {
                allPixels1[i].style.opacity = '0';
            }
            for (let j=0; j<randomIndexesLeft.length; j++) {
                if (j < 8) {
                    allPixels1[randomIndexesLeft[j]].classList.remove('fade-out-100-d1');
                } else if (j > 7 && j < 16) {
                    allPixels1[randomIndexesLeft[j]].classList.remove('fade-out-100-d2');
                } else if (j > 15 && j < 24) {
                    allPixels1[randomIndexesLeft[j]].classList.remove('fade-out-100-d3');
                } else if (j > 23 && j < 32) {
                    allPixels1[randomIndexesLeft[j]].classList.remove('fade-out-100-d4');
                } else if (j > 31 && j < 40) {
                    allPixels1[randomIndexesLeft[j]].classList.remove('fade-out-100-d5');
                } else if (j > 39 && j < 48) {
                    allPixels1[randomIndexesLeft[j]].classList.remove('fade-out-100-d6');
                } else if (j > 47 && j < 56) {
                    allPixels1[randomIndexesLeft[j]].classList.remove('fade-out-100-d7');
                } else if (j > 55 && j < 64) {
                    allPixels1[randomIndexesLeft[j]].classList.remove('fade-out-100-d8');
                } else if (j > 63 && j < 72) {
                        allPixels1[randomIndexesLeft[j]].classList.remove('fade-out-100-d9');
                } else if (j > 71 && j < 80) {
                        allPixels1[randomIndexesLeft[j]].classList.remove('fade-out-100-d10');
                } else if (j > 79 && j < 88) {
                        allPixels1[randomIndexesLeft[j]].classList.remove('fade-out-100-d11');
                } else if (j > 87 && j < 96) {
                        allPixels1[randomIndexesLeft[j]].classList.remove('fade-out-100-d12');
                } else if (j > 95 && j < 100) {
                        allPixels1[randomIndexesLeft[j]].classList.remove('fade-out-100-d13');
                } 
                // else if (j > 103 && j < 110) {
                //         allPixels1[randomIndexesLeft[j]].classList.remove('fade-out-100-d14');
                // } 
                // else if (j > 111 && j < 120) {
                //         allPixels1[randomIndexesLeft[j]].classList.remove('fade-out-100-d15');
                // } 
                // else if (j > 119 && j < 128) {
                //         allPixels1[randomIndexesLeft[j]].classList.remove('fade-out-100-d16');
                // } else if (j > 127 && j < 136) {
                //         allPixels1[randomIndexesLeft[j]].classList.remove('fade-out-100-d17');
                // } else if (j > 135 && j < 144) {
                //         allPixels1[randomIndexesLeft[j]].classList.remove('fade-out-100-d18');
                // } else if (j > 143 && j < 152) {
                //         allPixels1[randomIndexesLeft[j]].classList.remove('fade-out-100-d19');
                // } else {
                //         allPixels1[randomIndexesLeft[j]].classList.remove('fade-out-100-d20');
                // }
            }
        }, 600);
    }, 2000);
    
})


archiveText.addEventListener('mouseleave', () => {
    for (let i=0; i<allPixels1.length; i++) {
        allPixels1[i].style.opacity = '1';
    }
    for (let j=0; j<randomIndexesLeft.length; j++) {
        if (j < 8) {
            allPixels1[randomIndexesLeft[j]].classList.add('fade-out-100-d1');
        } else if (j > 7 && j < 16) {
            allPixels1[randomIndexesLeft[j]].classList.add('fade-out-100-d2');
        } else if (j > 15 && j < 24) {
            allPixels1[randomIndexesLeft[j]].classList.add('fade-out-100-d3');
        } else if (j > 23 && j < 32) {
            allPixels1[randomIndexesLeft[j]].classList.add('fade-out-100-d4');
        } else if (j > 31 && j < 40) {
            allPixels1[randomIndexesLeft[j]].classList.add('fade-out-100-d5');
        } else if (j > 39 && j < 48) {
            allPixels1[randomIndexesLeft[j]].classList.add('fade-out-100-d6');
        } else if (j > 47 && j < 56) {
            allPixels1[randomIndexesLeft[j]].classList.add('fade-out-100-d7');
        } else if (j > 55 && j < 64) {
            allPixels1[randomIndexesLeft[j]].classList.add('fade-out-100-d8');
        } else if (j > 63 && j < 72) {
                allPixels1[randomIndexesLeft[j]].classList.add('fade-out-100-d9');
        } else if (j > 71 && j < 80) {
                allPixels1[randomIndexesLeft[j]].classList.add('fade-out-100-d10');
        } else if (j > 79 && j < 88) {
                allPixels1[randomIndexesLeft[j]].classList.add('fade-out-100-d11');
        } else if (j > 87 && j < 96) {
                allPixels1[randomIndexesLeft[j]].classList.add('fade-out-100-d12');
        } else if (j > 95 && j < 100) {
                allPixels1[randomIndexesLeft[j]].classList.add('fade-out-100-d13');
        } 
        // else if (j > 103 && j < 110) {
        //         allPixels1[randomIndexesLeft[j]].classList.add('fade-out-100-d14');
        // } 
        // else if (j > 111 && j < 120) {
        //         allPixels1[randomIndexesLeft[j]].classList.add('fade-out-100-d15');
        // } 
        // else if (j > 119 && j < 128) {
        //         allPixels1[randomIndexesLeft[j]].classList.add('fade-out-100-d16');
        // } else if (j > 127 && j < 136) {
        //         allPixels1[randomIndexesLeft[j]].classList.add('fade-out-100-d17');
        // } else if (j > 135 && j < 144) {
        //         allPixels1[randomIndexesLeft[j]].classList.add('fade-out-100-d18');
        // } else if (j > 143 && j < 152) {
        //         allPixels1[randomIndexesLeft[j]].classList.add('fade-out-100-d19');
        // } else {
        //         allPixels1[randomIndexesLeft[j]].classList.add('fade-out-100-d20');
        // }
    }
    setTimeout(() => {
        for (let i=0; i<allPixels1.length; i++) {
            allPixels1[i].style.opacity = '0';
        }
        for (let j=0; j<randomIndexesLeft.length; j++) {
                if (j < 8) {
                        allPixels1[randomIndexesLeft[j]].classList.remove('fade-out-100-d1');
                    } else if (j > 7 && j < 16) {
                        allPixels1[randomIndexesLeft[j]].classList.remove('fade-out-100-d2');
                    } else if (j > 15 && j < 24) {
                        allPixels1[randomIndexesLeft[j]].classList.remove('fade-out-100-d3');
                    } else if (j > 23 && j < 32) {
                        allPixels1[randomIndexesLeft[j]].classList.remove('fade-out-100-d4');
                    } else if (j > 31 && j < 40) {
                        allPixels1[randomIndexesLeft[j]].classList.remove('fade-out-100-d5');
                    } else if (j > 39 && j < 48) {
                        allPixels1[randomIndexesLeft[j]].classList.remove('fade-out-100-d6');
                    } else if (j > 47 && j < 56) {
                        allPixels1[randomIndexesLeft[j]].classList.remove('fade-out-100-d7');
                    } else if (j > 55 && j < 64) {
                        allPixels1[randomIndexesLeft[j]].classList.remove('fade-out-100-d8');
                    } else if (j > 63 && j < 72) {
                            allPixels1[randomIndexesLeft[j]].classList.remove('fade-out-100-d9');
                    } else if (j > 71 && j < 80) {
                            allPixels1[randomIndexesLeft[j]].classList.remove('fade-out-100-d10');
                    } else if (j > 79 && j < 88) {
                            allPixels1[randomIndexesLeft[j]].classList.remove('fade-out-100-d11');
                    } else if (j > 87 && j < 96) {
                            allPixels1[randomIndexesLeft[j]].classList.remove('fade-out-100-d12');
                    } else if (j > 95 && j < 100) {
                            allPixels1[randomIndexesLeft[j]].classList.remove('fade-out-100-d13');
                    } 
                    // else if (j > 103 && j < 110) {
                    //         allPixels1[randomIndexesLeft[j]].classList.remove('fade-out-100-d14');
                    // } 
                    // else if (j > 111 && j < 120) {
                    //         allPixels1[randomIndexesLeft[j]].classList.remove('fade-out-100-d15');
                    // } 
                    // else if (j > 119 && j < 128) {
                    //         allPixels1[randomIndexesLeft[j]].classList.remove('fade-out-100-d16');
                    // } else if (j > 127 && j < 136) {
                    //         allPixels1[randomIndexesLeft[j]].classList.remove('fade-out-100-d17');
                    // } else if (j > 135 && j < 144) {
                    //         allPixels1[randomIndexesLeft[j]].classList.remove('fade-out-100-d18');
                    // } else if (j > 143 && j < 152) {
                    //         allPixels1[randomIndexesLeft[j]].classList.remove('fade-out-100-d19');
                    // } else {
                    //         allPixels1[randomIndexesLeft[j]].classList.remove('fade-out-100-d20');
                    // }
        }
    }, 600);
})








const pixelBox2 = document.getElementById('pixel-box-2');
var allPixels2 = pixelBox2.getElementsByTagName('*');
const contactText = document.getElementById('contact-box');

for (let i=1; i<allPixels2.length+1; i++) {
    allPixels2[i-1].setAttribute('id', `pixel-r-${i}`);
};

randomIndexesRight = []

while (randomIndexesRight.length < 110) {
    var randomInt = randomIntFromInterval(0, 109);
    if (!randomIndexesRight.includes(randomInt)) {
        randomIndexesRight.push(randomInt);
    };
};



contactText.addEventListener('touchend', () => {
    setTimeout(() => {
        for (let i=0; i<allPixels2.length; i++) {
            allPixels2[i].style.opacity = '1';
        }
        for (let j=0; j<randomIndexesRight.length; j++) {
            if (j < 8) {
                allPixels2[randomIndexesRight[j]].classList.add('fade-out-100-d1');
            } else if (j > 7 && j < 16) {
                allPixels2[randomIndexesRight[j]].classList.add('fade-out-100-d2');
            } else if (j > 15 && j < 24) {
                allPixels2[randomIndexesRight[j]].classList.add('fade-out-100-d3');
            } else if (j > 23 && j < 32) {
                allPixels2[randomIndexesRight[j]].classList.add('fade-out-100-d4');
            } else if (j > 31 && j < 40) {
                allPixels2[randomIndexesRight[j]].classList.add('fade-out-100-d5');
            } else if (j > 39 && j < 48) {
                allPixels2[randomIndexesRight[j]].classList.add('fade-out-100-d6');
            } else if (j > 47 && j < 56) {
                allPixels2[randomIndexesRight[j]].classList.add('fade-out-100-d7');
            } else if (j > 55 && j < 64) {
                allPixels2[randomIndexesRight[j]].classList.add('fade-out-100-d8');
            } else if (j > 63 && j < 72) {
                allPixels2[randomIndexesRight[j]].classList.add('fade-out-100-d9');
            } else if (j > 71 && j < 80) {
                allPixels2[randomIndexesRight[j]].classList.add('fade-out-100-d10');
            } else if (j > 79 && j < 88) {
                allPixels2[randomIndexesRight[j]].classList.add('fade-out-100-d11');
            } else if (j > 87 && j < 96) {
                allPixels2[randomIndexesRight[j]].classList.add('fade-out-100-d12');
            } else if (j > 95 && j < 104) {
                allPixels2[randomIndexesRight[j]].classList.add('fade-out-100-d13');
            } else if (j > 103 && j < 112) {
                allPixels2[randomIndexesRight[j]].classList.add('fade-out-100-d14');
            } else if (j > 111 && j < 120) {
                allPixels2[randomIndexesRight[j]].classList.add('fade-out-100-d15');
            } else if (j > 119 && j < 128) {
                allPixels2[randomIndexesRight[j]].classList.add('fade-out-100-d16');
            } else if (j > 127 && j < 136) {
                allPixels2[randomIndexesRight[j]].classList.add('fade-out-100-d17');
            } else if (j > 135 && j < 144) {
                allPixels2[randomIndexesRight[j]].classList.add('fade-out-100-d18');
            } else if (j > 143 && j < 152) {
                allPixels2[randomIndexesRight[j]].classList.add('fade-out-100-d19');
            } else {
                allPixels2[randomIndexesRight[j]].classList.add('fade-out-100-d20');
            }
        }
        setTimeout(() => {
            for (let i=0; i<allPixels2.length; i++) {
                allPixels2[i].style.opacity = '0';
            }
            for (let j=0; j<randomIndexesRight.length; j++) {
                if (j < 8) {
                    allPixels2[randomIndexesRight[j]].classList.remove('fade-out-100-d1');
                } else if (j > 7 && j < 16) {
                    allPixels2[randomIndexesRight[j]].classList.remove('fade-out-100-d2');
                } else if (j > 15 && j < 24) {
                    allPixels2[randomIndexesRight[j]].classList.remove('fade-out-100-d3');
                } else if (j > 23 && j < 32) {
                    allPixels2[randomIndexesRight[j]].classList.remove('fade-out-100-d4');
                } else if (j > 31 && j < 40) {
                    allPixels2[randomIndexesRight[j]].classList.remove('fade-out-100-d5');
                } else if (j > 39 && j < 48) {
                    allPixels2[randomIndexesRight[j]].classList.remove('fade-out-100-d6');
                } else if (j > 47 && j < 56) {
                    allPixels2[randomIndexesRight[j]].classList.remove('fade-out-100-d7');
                } else if (j > 55 && j < 64) {
                    allPixels2[randomIndexesRight[j]].classList.remove('fade-out-100-d8');
                } else if (j > 63 && j < 72) {
                        allPixels2[randomIndexesRight[j]].classList.remove('fade-out-100-d9');
                } else if (j > 71 && j < 80) {
                        allPixels2[randomIndexesRight[j]].classList.remove('fade-out-100-d10');
                } else if (j > 79 && j < 88) {
                        allPixels2[randomIndexesRight[j]].classList.remove('fade-out-100-d11');
                } else if (j > 87 && j < 96) {
                        allPixels2[randomIndexesRight[j]].classList.remove('fade-out-100-d12');
                } else if (j > 95 && j < 104) {
                        allPixels2[randomIndexesRight[j]].classList.remove('fade-out-100-d13');
                } else if (j > 103 && j < 112) {
                        allPixels2[randomIndexesRight[j]].classList.remove('fade-out-100-d14');
                } else if (j > 111 && j < 120) {
                        allPixels2[randomIndexesRight[j]].classList.remove('fade-out-100-d15');
                } else if (j > 119 && j < 128) {
                        allPixels2[randomIndexesRight[j]].classList.remove('fade-out-100-d16');
                } else if (j > 127 && j < 136) {
                        allPixels2[randomIndexesRight[j]].classList.remove('fade-out-100-d17');
                } else if (j > 135 && j < 144) {
                        allPixels2[randomIndexesRight[j]].classList.remove('fade-out-100-d18');
                } else if (j > 143 && j < 152) {
                        allPixels2[randomIndexesRight[j]].classList.remove('fade-out-100-d19');
                } else {
                        allPixels2[randomIndexesRight[j]].classList.remove('fade-out-100-d20');
                }
            }
        }, 600);
    }, 2000);
    
})


contactText.addEventListener('mouseleave', () => {
    for (let i=0; i<allPixels2.length; i++) {
        allPixels2[i].style.opacity = '1';
    }
    for (let j=0; j<randomIndexesRight.length; j++) {
        if (j < 8) {
            allPixels2[randomIndexesRight[j]].classList.add('fade-out-100-d1');
        } else if (j > 7 && j < 16) {
            allPixels2[randomIndexesRight[j]].classList.add('fade-out-100-d2');
        } else if (j > 15 && j < 24) {
            allPixels2[randomIndexesRight[j]].classList.add('fade-out-100-d3');
        } else if (j > 23 && j < 32) {
            allPixels2[randomIndexesRight[j]].classList.add('fade-out-100-d4');
        } else if (j > 31 && j < 40) {
            allPixels2[randomIndexesRight[j]].classList.add('fade-out-100-d5');
        } else if (j > 39 && j < 48) {
            allPixels2[randomIndexesRight[j]].classList.add('fade-out-100-d6');
        } else if (j > 47 && j < 56) {
            allPixels2[randomIndexesRight[j]].classList.add('fade-out-100-d7');
        } else if (j > 55 && j < 64) {
            allPixels2[randomIndexesRight[j]].classList.add('fade-out-100-d8');
        } else if (j > 63 && j < 72) {
                allPixels2[randomIndexesRight[j]].classList.add('fade-out-100-d9');
        } else if (j > 71 && j < 80) {
                allPixels2[randomIndexesRight[j]].classList.add('fade-out-100-d10');
        } else if (j > 79 && j < 88) {
                allPixels2[randomIndexesRight[j]].classList.add('fade-out-100-d11');
        } else if (j > 87 && j < 96) {
                allPixels2[randomIndexesRight[j]].classList.add('fade-out-100-d12');
        } else if (j > 95 && j < 104) {
                allPixels2[randomIndexesRight[j]].classList.add('fade-out-100-d13');
        } else if (j > 103 && j < 112) {
                allPixels2[randomIndexesRight[j]].classList.add('fade-out-100-d14');
        } else if (j > 111 && j < 120) {
                allPixels2[randomIndexesRight[j]].classList.add('fade-out-100-d15');
        } else if (j > 119 && j < 128) {
                allPixels2[randomIndexesRight[j]].classList.add('fade-out-100-d16');
        } else if (j > 127 && j < 136) {
                allPixels2[randomIndexesRight[j]].classList.add('fade-out-100-d17');
        } else if (j > 135 && j < 144) {
                allPixels2[randomIndexesRight[j]].classList.add('fade-out-100-d18');
        } else if (j > 143 && j < 152) {
                allPixels2[randomIndexesRight[j]].classList.add('fade-out-100-d19');
        } else {
                allPixels2[randomIndexesRight[j]].classList.add('fade-out-100-d20');
        }
    }
    setTimeout(() => {
        for (let i=0; i<allPixels2.length; i++) {
            allPixels2[i].style.opacity = '0';
        }
        for (let j=0; j<randomIndexesRight.length; j++) {
                if (j < 8) {
                        allPixels2[randomIndexesRight[j]].classList.remove('fade-out-100-d1');
                    } else if (j > 7 && j < 16) {
                        allPixels2[randomIndexesRight[j]].classList.remove('fade-out-100-d2');
                    } else if (j > 15 && j < 24) {
                        allPixels2[randomIndexesRight[j]].classList.remove('fade-out-100-d3');
                    } else if (j > 23 && j < 32) {
                        allPixels2[randomIndexesRight[j]].classList.remove('fade-out-100-d4');
                    } else if (j > 31 && j < 40) {
                        allPixels2[randomIndexesRight[j]].classList.remove('fade-out-100-d5');
                    } else if (j > 39 && j < 48) {
                        allPixels2[randomIndexesRight[j]].classList.remove('fade-out-100-d6');
                    } else if (j > 47 && j < 56) {
                        allPixels2[randomIndexesRight[j]].classList.remove('fade-out-100-d7');
                    } else if (j > 55 && j < 64) {
                        allPixels2[randomIndexesRight[j]].classList.remove('fade-out-100-d8');
                    } else if (j > 63 && j < 72) {
                            allPixels2[randomIndexesRight[j]].classList.remove('fade-out-100-d9');
                    } else if (j > 71 && j < 80) {
                            allPixels2[randomIndexesRight[j]].classList.remove('fade-out-100-d10');
                    } else if (j > 79 && j < 88) {
                            allPixels2[randomIndexesRight[j]].classList.remove('fade-out-100-d11');
                    } else if (j > 87 && j < 96) {
                            allPixels2[randomIndexesRight[j]].classList.remove('fade-out-100-d12');
                    } else if (j > 95 && j < 104) {
                            allPixels2[randomIndexesRight[j]].classList.remove('fade-out-100-d13');
                    } else if (j > 103 && j < 112) {
                            allPixels2[randomIndexesRight[j]].classList.remove('fade-out-100-d14');
                    } else if (j > 111 && j < 120) {
                            allPixels2[randomIndexesRight[j]].classList.remove('fade-out-100-d15');
                    } else if (j > 119 && j < 128) {
                            allPixels2[randomIndexesRight[j]].classList.remove('fade-out-100-d16');
                    } else if (j > 127 && j < 136) {
                            allPixels2[randomIndexesRight[j]].classList.remove('fade-out-100-d17');
                    } else if (j > 135 && j < 144) {
                            allPixels2[randomIndexesRight[j]].classList.remove('fade-out-100-d18');
                    } else if (j > 143 && j < 152) {
                            allPixels2[randomIndexesRight[j]].classList.remove('fade-out-100-d19');
                    } else {
                            allPixels2[randomIndexesRight[j]].classList.remove('fade-out-100-d20');
                    }
        }
    }, 600);
})



// randomIndexesRight = []

// while (randomIndexesRight.length < 72) {
//     var randomInt = randomIntFromInterval(0, 71);
//     if (!randomIndexesRight.includes(randomInt)) {
//         randomIndexesRight.push(randomInt);
//     };
// };



// infoText.addEventListener('mouseleave', () => {
//     for (let i=0; i<allPixelsRight.length; i++) {
//         allPixelsRight[i].style.opacity = '1';
//     }
//     for (let j=0; j<randomIndexesRight.length; j++) {
//         if (j < 8) {
//             allPixelsRight[randomIndexesRight[j]].classList.add('fade-out-100-d1');
//         } else if (j > 7 && j < 16) {
//             allPixelsRight[randomIndexesRight[j]].classList.add('fade-out-100-d2');
//         } else if (j > 15 && j < 24) {
//             allPixelsRight[randomIndexesRight[j]].classList.add('fade-out-100-d3');
//         } else if (j > 23 && j < 32) {
//             allPixelsRight[randomIndexesRight[j]].classList.add('fade-out-100-d4');
//         } else if (j > 31 && j < 40) {
//             allPixelsRight[randomIndexesRight[j]].classList.add('fade-out-100-d5');
//         } else if (j > 39 && j < 48) {
//             allPixelsRight[randomIndexesRight[j]].classList.add('fade-out-100-d6');
//         } else if (j > 47 && j < 56) {
//             allPixelsRight[randomIndexesRight[j]].classList.add('fade-out-100-d7');
//         } else if (j > 55 && j < 64) {
//             allPixelsRight[randomIndexesRight[j]].classList.add('fade-out-100-d8');
//         } else {
//             allPixelsRight[randomIndexesRight[j]].classList.add('fade-out-100-d9');
//         }
//     }
//     setTimeout(() => {
//         for (let i=0; i<allPixelsRight.length; i++) {
//             allPixelsRight[i].style.opacity = '0';
//         }
//         for (let j=0; j<randomIndexesRight.length; j++) {
//             if (j < 8) {
//                 allPixelsRight[randomIndexesRight[j]].classList.remove('fade-out-100-d1');
//             } else if (j > 7 && j < 16) {
//                 allPixelsRight[randomIndexesRight[j]].classList.remove('fade-out-100-d2');
//             } else if (j > 15 && j < 24) {
//                 allPixelsRight[randomIndexesRight[j]].classList.remove('fade-out-100-d3');
//             } else if (j > 23 && j < 32) {
//                 allPixelsRight[randomIndexesRight[j]].classList.remove('fade-out-100-d4');
//             } else if (j > 31 && j < 40) {
//                 allPixelsRight[randomIndexesRight[j]].classList.remove('fade-out-100-d5');
//             } else if (j > 39 && j < 48) {
//                 allPixelsRight[randomIndexesRight[j]].classList.remove('fade-out-100-d6');
//             } else if (j > 47 && j < 56) {
//                 allPixelsRight[randomIndexesRight[j]].classList.remove('fade-out-100-d7');
//             } else if (j > 55 && j < 64) {
//                 allPixelsRight[randomIndexesRight[j]].classList.remove('fade-out-100-d8');
//             } else {
//                 allPixelsRight[randomIndexesRight[j]].classList.remove('fade-out-100-d9');
//             }
//         }
//     }, 600);
// })



// // const pixel11 = document.getElementById('pixel-11');
// // const pixel14 = document.getElementById('pixel-14');
// // const pixel17 = document.getElementById('pixel-17');
// // const pixel32 = document.getElementById('pixel-32');
// // const pixel39 = document.getElementById('pixel-39');
// // const pixel47 = document.getElementById('pixel-47');
// // const pixel62 = document.getElementById('pixel-62');
// // const pixel71 = document.getElementById('pixel-71');

// // var first60 = [pixel11, pixel14, pixel17, pixel32, pixel39, pixel47, pixel62, pixel71];

// // const pixel4 = document.getElementById('pixel-4');
// // const pixel15 = document.getElementById('pixel-15');
// // const pixel33 = document.getElementById('pixel-33');
// // const pixel40 = document.getElementById('pixel-40');
// // const pixel42 = document.getElementById('pixel-42');
// // const pixel49 = document.getElementById('pixel-49');
// // const pixel60 = document.getElementById('pixel-60');
// // const pixel72 = document.getElementById('pixel-72');

// // var second40 = [pixel4, pixel15, pixel33, pixel40, pixel42, pixel49, pixel60, pixel72];

// // archiveText.addEventListener('mouseover', () => {
// //     setTimeout(() => {
// //         for (let b=0; b<72; b++) {
// //             allPixelsHomeRight[b].style.border = 'solid 0.4px rgba(0, 0, 0, 0.8)';
// //         };
// //     }, 600);
// //     setTimeout(() => {
// //         for (let b=0; b<72; b++) {
// //             allPixelsHomeRight[b].style.border = 'solid 0.4px rgba(0, 0, 0, 0.6)';
// //         };
// //     }, 650);
// //     setTimeout(() => {
// //         for (let b=0; b<72; b++) {
// //             allPixelsHomeRight[b].style.border = 'solid 0.4px rgba(0, 0, 0, 0.4)';
// //         };
// //     }, 700);
// //     setTimeout(() => {
// //         for (let b=0; b<72; b++) {
// //             allPixelsHomeRight[b].style.border = 'solid 0.4px rgba(0, 0, 0, 0.2)';
// //         };
// //     }, 750);
// //     setTimeout(() => {
// //         for (let j=0;j<72;j++) {
// //             allPixelsHome[j].style.border = 'none';
// //         }
// //     }, 800);
// // });

// // archiveText.addEventListener('mouseleave', () => {
// //     setTimeout(() => {
// //         for (let j=0;j<72;j++) {
// //             allPixelsHome[j].style.border = 'solid 0.4px black';
// //         }
// //     }, 0);
// // });



// // pixelTest.classList.add('red');