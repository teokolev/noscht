// ******************************************************************************** //
var test1 = true;
var test2 = true;
var test3 = true;
var test4 = true;
var test5 = true;


function type(element, element2, text, text2, time, i=0) {
        if (i === 0) {
            element.textContent = "";
            element2.textConent = "";
        }
    
        if (i < text.length) {
            element.textContent += text[i];
        }
        
        if (i > text.length - 1) {
            const j = i - text.length;
            element2.textContent += text2[j];
        }
    
        if (i === text.length + text2.length - 1) {
            return;
        }
        
        setTimeout(() => type(element, element2, text, text2, time, i + 1), time); 
};

const emptyText = "";

// *****************************************__P1__***************************************** //

const P1Container = document.getElementById('text_P1');
const P1imagebox = document.getElementById('video_box_1');

const P1Line1 = document.getElementById('P1_line_1');
const P1Line2 = document.getElementById('P1_line_2');
const P1Line3 = document.getElementById('P1_line_3');

const P1Text1 = allProjects[0].projectName;
const P1Text2 = allProjects[0].projectType;
const P1Text3 = allProjects[0].projectAuthor;

var runningP1 = false;
var hoveringP1 = false;
var waitingP1 = false;
var fadedP1 = true;

P1imagebox.addEventListener('mouseover', () => {
    // if (P1Line1.innerText.length < P1Text1Length) {}

    hoveringP1 = true;
    if (runningP1 || waitingP1) {
        return;
    }

    runningP1 = true;
    fadedP1 = false;
    test1 = true;
    

    P1Container.classList.remove('hide-image-fast');
    P1Container.classList.add('reveal-image-fast');
    P1Line1.classList.remove('hide-image-fast');
    P1Line1.classList.add('reveal-image-fast');

//     CZsPacer1f.classList.remove('hide-image-fast');
//     CZsPacer1f.classList.add('reveal-image-fast');
//     CZsPacer1r.classList.remove('hide-image-fast');
//     CZsPacer1r.classList.add('reveal-image-fast');
    console.log(P1Line1.innerText);
    console.log(P1Line1.innerHTML);

    type(P1Line1, P1Line1, P1Text1, emptyText, 30);

    setTimeout(() => {
        P1Line2.classList.remove('hide-image-fast');
        P1Line2.classList.add('reveal-image-fast');

        // CZsPacer2f.classList.remove('hide-image-fast');
        // CZsPacer2f.classList.add('reveal-image-fast');
        // CZsPacer2r.classList.remove('hide-image-fast');
        // CZsPacer2r.classList.add('reveal-image-fast');


        type(P1Line2, P1Line2, P1Text2, emptyText, 30)
    }, 500);

    setTimeout(() => {
        P1Line3.classList.remove('hide-image-fast');
        P1Line3.classList.add('reveal-image-fast');

        // CZsPacer2f.classList.remove('hide-image-fast');
        // CZsPacer2f.classList.add('reveal-image-fast');
        // CZsPacer2r.classList.remove('hide-image-fast');
        // CZsPacer2r.classList.add('reveal-image-fast');


        type(P1Line3, P1Line3, P1Text3, emptyText, 30)
    }, 1000);

    setTimeout(() => {
        runningP1 = false;
        waitingP1 = true;
        console.log('done');
    }, 1000);
    setTimeout(() => {
        if (fadedP1) {
            waitingP1 = false;
            return;
        }
        if (!hoveringP1) {
            fadeP1();
        }
        waitingP1 = false;
    }, 2000);
});

P1imagebox.addEventListener('mouseleave', () => {
        hoveringP1 = false;
        if (fadedP1) {
            return;
        }
        if (!runningP1) {
            fadeP1();
        }
});

function fadeP1() {
        P1Container.classList.remove('reveal-image-fast');
        P1Container.classList.add('hide-image-fast');
        // CZsPacer1f.classList.remove('reveal-image-fast');
        // CZsPacer1f.classList.add('hide-image-fast');
        // CZsPacer1r.classList.remove('reveal-image-fast');
        // CZsPacer1r.classList.add('hide-image-fast');
    
        // CZsPacer2f.classList.remove('reveal-image-fast');
        // CZsPacer2f.classList.add('hide-image-fast');
        // CZsPacer2r.classList.remove('reveal-image-fast');
        // CZsPacer2r.classList.add('hide-image-fast');
    
        P1Line1.classList.remove('reveal-image-fast');
        P1Line1.classList.add('hide-image-fast');
        P1Line2.classList.remove('reveal-image-fast');
        P1Line2.classList.add('hide-image-fast');
        P1Line3.classList.remove('reveal-image-fast');
        P1Line3.classList.add('hide-image-fast');
        // console.log('!');
        
    
        setTimeout(() => {
            test1 = false;
            P1Line1.innerText = "";
            P1Line2.innerText = "";
            P1Line3.innerText = "";
            fadedP1 = true;
        }, 500);
}


// *****************************************__P2__***************************************** //

const P2Container = document.getElementById('text_P2');
const P2imagebox = document.getElementById('image_box_2');


const P2Line1 = document.getElementById('P2_line_1');
const P2Line2 = document.getElementById('P2_line_2');
const P2Line3 = document.getElementById('P2_line_3');

const P2Text1 = allProjects[1].projectName;
const P2Text2 = allProjects[1].projectType;
const P2Text3 = allProjects[1].projectAuthor;

var runningP2 = false;
var hoveringP2 = false;
var waitingP2 = false;
var fadedP2 = true;

P2imagebox.addEventListener('mouseover', () => {
    hoveringP2 = true;
    if (runningP2 || waitingP2) {
        return;
    }

    runningP2 = true;
    fadedP2 = false;
    test2 = true;
    

    P2Container.classList.remove('hide-image-fast');
    P2Container.classList.add('reveal-image-fast');
    P2Line1.classList.remove('hide-image-fast');
    P2Line1.classList.add('reveal-image-fast');

//     CZsPacer1f.classList.remove('hide-image-fast');
//     CZsPacer1f.classList.add('reveal-image-fast');
//     CZsPacer1r.classList.remove('hide-image-fast');
//     CZsPacer1r.classList.add('reveal-image-fast');
    console.log(P2Line1.innerText);
    console.log(P2Line1.innerHTML);

    type(P2Line1, P2Line1, P2Text1, emptyText, 30);

    setTimeout(() => {
        P2Line2.classList.remove('hide-image-fast');
        P2Line2.classList.add('reveal-image-fast');

        // CZsPacer2f.classList.remove('hide-image-fast');
        // CZsPacer2f.classList.add('reveal-image-fast');
        // CZsPacer2r.classList.remove('hide-image-fast');
        // CZsPacer2r.classList.add('reveal-image-fast');


        type(P2Line2, P2Line2, P2Text2, emptyText, 30)
    }, 500);

    setTimeout(() => {
        P2Line3.classList.remove('hide-image-fast');
        P2Line3.classList.add('reveal-image-fast');

        // CZsPacer2f.classList.remove('hide-image-fast');
        // CZsPacer2f.classList.add('reveal-image-fast');
        // CZsPacer2r.classList.remove('hide-image-fast');
        // CZsPacer2r.classList.add('reveal-image-fast');


        type(P2Line3, P2Line3, P2Text3, emptyText, 30)
    }, 1000);

    setTimeout(() => {
        runningP2 = false;
        waitingP2 = true;
        console.log('done');
    }, 1000);
    setTimeout(() => {
        if (fadedP2) {
            waitingP2 = false;
            return;
        }
        if (!hoveringP2) {
            fadeP2();
        }
        waitingP2 = false;
    }, 2000);
});

P2imagebox.addEventListener('mouseleave', () => {
        hoveringP2 = false;
        if (fadedP2) {
            return;
        }
        if (!runningP2) {
            fadeP2();
        }
});

function fadeP2() {
        P2Container.classList.remove('reveal-image-fast');
        P2Container.classList.add('hide-image-fast');
        // CZsPacer1f.classList.remove('reveal-image-fast');
        // CZsPacer1f.classList.add('hide-image-fast');
        // CZsPacer1r.classList.remove('reveal-image-fast');
        // CZsPacer1r.classList.add('hide-image-fast');
    
        // CZsPacer2f.classList.remove('reveal-image-fast');
        // CZsPacer2f.classList.add('hide-image-fast');
        // CZsPacer2r.classList.remove('reveal-image-fast');
        // CZsPacer2r.classList.add('hide-image-fast');
    
        P2Line1.classList.remove('reveal-image-fast');
        P2Line1.classList.add('hide-image-fast');
        P2Line2.classList.remove('reveal-image-fast');
        P2Line2.classList.add('hide-image-fast');
        P2Line3.classList.remove('reveal-image-fast');
        P2Line3.classList.add('hide-image-fast');
        // console.log('!');
        
    
        setTimeout(() => {
            test2 = false;
            P2Line1.innerText = "";
            P2Line2.innerText = "";
            P2Line3.innerText = "";
            fadedP2 = true;
        }, 500);
}




// *****************************************__P3__***************************************** //

const P3Container = document.getElementById('text_P3');
const P3imagebox = document.getElementById('video_box_3');


const P3Line1 = document.getElementById('P3_line_1');
const P3Line2 = document.getElementById('P3_line_2');
const P3Line3 = document.getElementById('P3_line_3');

const P3Text1 = allProjects[2].projectName;
const P3Text2 = allProjects[2].projectType;
const P3Text3 = allProjects[2].projectAuthor;

var runningP3 = false;
var hoveringP3 = false;
var waitingP3 = false;
var fadedP3 = true;


P3imagebox.addEventListener('mouseover', () => {
    hoveringP3 = true;
    if (runningP3 || waitingP3) {
        return;
    }

    runningP3 = true;
    fadedP3 = false;
    test3 = true;
    

    P3Container.classList.remove('hide-image-fast');
    P3Container.classList.add('reveal-image-fast');
    P3Line1.classList.remove('hide-image-fast');
    P3Line1.classList.add('reveal-image-fast');

//     CZsPacer1f.classList.remove('hide-image-fast');
//     CZsPacer1f.classList.add('reveal-image-fast');
//     CZsPacer1r.classList.remove('hide-image-fast');
//     CZsPacer1r.classList.add('reveal-image-fast');
    console.log(P3Line1.innerText);
    console.log(P3Line1.innerHTML);

    type(P3Line1, P3Line1, P3Text1, emptyText, 30);

    setTimeout(() => {
        P3Line2.classList.remove('hide-image-fast');
        P3Line2.classList.add('reveal-image-fast');

        // CZsPacer2f.classList.remove('hide-image-fast');
        // CZsPacer2f.classList.add('reveal-image-fast');
        // CZsPacer2r.classList.remove('hide-image-fast');
        // CZsPacer2r.classList.add('reveal-image-fast');


        type(P3Line2, P3Line2, P3Text2, emptyText, 30)
    }, 500);

    setTimeout(() => {
        P3Line3.classList.remove('hide-image-fast');
        P3Line3.classList.add('reveal-image-fast');

        // CZsPacer2f.classList.remove('hide-image-fast');
        // CZsPacer2f.classList.add('reveal-image-fast');
        // CZsPacer2r.classList.remove('hide-image-fast');
        // CZsPacer2r.classList.add('reveal-image-fast');


        type(P3Line3, P3Line3, P3Text3, emptyText, 30)
    }, 1000);

    setTimeout(() => {
        runningP3 = false;
        waitingP3 = true;
        console.log('done');
    }, 1000);
    setTimeout(() => {
        if (fadedP3) {
            waitingP3 = false;
            return;
        }
        if (!hoveringP3) {
            fadeP3();
        }
        waitingP3 = false;
    }, 2000);
});

P3imagebox.addEventListener('mouseleave', () => {
        hoveringP3 = false;
        if (fadedP3) {
            return;
        }
        if (!runningP3) {
            fadeP3();
        }
});

function fadeP3() {
        P3Container.classList.remove('reveal-image-fast');
        P3Container.classList.add('hide-image-fast');
        // CZsPacer1f.classList.remove('reveal-image-fast');
        // CZsPacer1f.classList.add('hide-image-fast');
        // CZsPacer1r.classList.remove('reveal-image-fast');
        // CZsPacer1r.classList.add('hide-image-fast');
    
        // CZsPacer2f.classList.remove('reveal-image-fast');
        // CZsPacer2f.classList.add('hide-image-fast');
        // CZsPacer2r.classList.remove('reveal-image-fast');
        // CZsPacer2r.classList.add('hide-image-fast');
    
        P3Line1.classList.remove('reveal-image-fast');
        P3Line1.classList.add('hide-image-fast');
        P3Line2.classList.remove('reveal-image-fast');
        P3Line2.classList.add('hide-image-fast');
        P3Line3.classList.remove('reveal-image-fast');
        P3Line3.classList.add('hide-image-fast');
        // console.log('!');
        
    
        setTimeout(() => {
            test3 = false;
            P3Line1.innerText = "";
            P3Line2.innerText = "";
            P3Line3.innerText = "";
            fadedP3 = true;
        }, 500);
}




// *****************************************__P4__***************************************** //
const P4Container = document.getElementById('text_P4');
const P4imagebox = document.getElementById('video_box_4');


const P4Line1 = document.getElementById('P4_line_1');
const P4Line2 = document.getElementById('P4_line_2');
const P4Line3 = document.getElementById('P4_line_3');

const P4Text1 = allProjects[3].projectName;
const P4Text2 = allProjects[3].projectType;
const P4Text3 = allProjects[3].projectAuthor;

const P4Text1Length = P4Text1.length;
const P4Text2Length = P4Text2.length;
const P4Text3Length = P4Text3.length;

var runningP4 = false;
var hoveringP4 = false;
var waitingP4 = false;
var fadedP4 = true;

P4imagebox.addEventListener('mouseover', () => {
    hoveringP4 = true;
    if (runningP4 || waitingP4) {
        return;
    }

    runningP4 = true;
    fadedP4 = false;
    test4 = true;
    

    P4Container.classList.remove('hide-image-fast');
    P4Container.classList.add('reveal-image-fast');
    P4Line1.classList.remove('hide-image-fast');
    P4Line1.classList.add('reveal-image-fast');

//     CZsPacer1f.classList.remove('hide-image-fast');
//     CZsPacer1f.classList.add('reveal-image-fast');
//     CZsPacer1r.classList.remove('hide-image-fast');
//     CZsPacer1r.classList.add('reveal-image-fast');
    console.log(P4Line1.innerText);
    console.log(P4Line1.innerHTML);

    type(P4Line1, P4Line1, P4Text1, emptyText, 30);

    setTimeout(() => {
        P4Line2.classList.remove('hide-image-fast');
        P4Line2.classList.add('reveal-image-fast');

        // CZsPacer2f.classList.remove('hide-image-fast');
        // CZsPacer2f.classList.add('reveal-image-fast');
        // CZsPacer2r.classList.remove('hide-image-fast');
        // CZsPacer2r.classList.add('reveal-image-fast');


        type(P4Line2, P4Line2, P4Text2, emptyText, 30)
    }, 500);

    setTimeout(() => {
        P4Line3.classList.remove('hide-image-fast');
        P4Line3.classList.add('reveal-image-fast');

        // CZsPacer2f.classList.remove('hide-image-fast');
        // CZsPacer2f.classList.add('reveal-image-fast');
        // CZsPacer2r.classList.remove('hide-image-fast');
        // CZsPacer2r.classList.add('reveal-image-fast');


        type(P4Line3, P4Line3, P4Text3, emptyText, 30)
    }, 1000);

    setTimeout(() => {
        runningP4 = false;
        waitingP4 = true;
        console.log('done');
    }, 1000);
    setTimeout(() => {
        if (fadedP4) {
            waitingP4 = false;
            return;
        }
        if (!hoveringP4) {
            fadeP4();
        }
        waitingP4 = false;
    }, 2000);
});

P4imagebox.addEventListener('mouseleave', () => {
        hoveringP4 = false;
        if (fadedP4) {
            return;
        }
        if (!runningP4) {
            fadeP4();
        }
});

function fadeP4() {
        P4Container.classList.remove('reveal-image-fast');
        P4Container.classList.add('hide-image-fast');
        // CZsPacer1f.classList.remove('reveal-image-fast');
        // CZsPacer1f.classList.add('hide-image-fast');
        // CZsPacer1r.classList.remove('reveal-image-fast');
        // CZsPacer1r.classList.add('hide-image-fast');
    
        // CZsPacer2f.classList.remove('reveal-image-fast');
        // CZsPacer2f.classList.add('hide-image-fast');
        // CZsPacer2r.classList.remove('reveal-image-fast');
        // CZsPacer2r.classList.add('hide-image-fast');
    
        P4Line1.classList.remove('reveal-image-fast');
        P4Line1.classList.add('hide-image-fast');
        P4Line2.classList.remove('reveal-image-fast');
        P4Line2.classList.add('hide-image-fast');
        P4Line3.classList.remove('reveal-image-fast');
        P4Line3.classList.add('hide-image-fast');
        // console.log('!');
        
    
        setTimeout(() => {
            test4 = false;
            P4Line1.innerText = "";
            P4Line2.innerText = "";
            P4Line3.innerText = "";
            fadedP4 = true;
        }, 500);
};


// *****************************************__P5__***************************************** //
const P5Container = document.getElementById('text_P5');
const P5imagebox = document.getElementById('video_box_5');


const P5Line1 = document.getElementById('P5_line_1');
const P5Line2 = document.getElementById('P5_line_2');
const P5Line3 = document.getElementById('P5_line_3');

const P5Text1 = allProjects[4].projectName;
const P5Text2 = allProjects[4].projectType;
const P5Text3 = allProjects[4].projectAuthor;

const P5Text1Length = P5Text1.length;
const P5Text2Length = P5Text2.length;
const P5Text3Length = P5Text3.length;

var runningP5 = false;
var hoveringP5 = false;
var waitingP5 = false;
var fadedP5 = true;

P5imagebox.addEventListener('mouseover', () => {
    hoveringP5 = true;
    if (runningP5 || waitingP5) {
        return;
    }

    runningP5 = true;
    fadedP5 = false;
    test5 = true;
    

    P5Container.classList.remove('hide-image-fast');
    P5Container.classList.add('reveal-image-fast');
    P5Line1.classList.remove('hide-image-fast');
    P5Line1.classList.add('reveal-image-fast');

//     CZsPacer1f.classList.remove('hide-image-fast');
//     CZsPacer1f.classList.add('reveal-image-fast');
//     CZsPacer1r.classList.remove('hide-image-fast');
//     CZsPacer1r.classList.add('reveal-image-fast');
    console.log(P5Line1.innerText);
    console.log(P5Line1.innerHTML);

    type(P5Line1, P5Line1, P5Text1, emptyText, 30);

    setTimeout(() => {
        P5Line2.classList.remove('hide-image-fast');
        P5Line2.classList.add('reveal-image-fast');

        // CZsPacer2f.classList.remove('hide-image-fast');
        // CZsPacer2f.classList.add('reveal-image-fast');
        // CZsPacer2r.classList.remove('hide-image-fast');
        // CZsPacer2r.classList.add('reveal-image-fast');


        type(P5Line2, P5Line2, P5Text2, emptyText, 30)
    }, 500);

    setTimeout(() => {
        P5Line3.classList.remove('hide-image-fast');
        P5Line3.classList.add('reveal-image-fast');

        // CZsPacer2f.classList.remove('hide-image-fast');
        // CZsPacer2f.classList.add('reveal-image-fast');
        // CZsPacer2r.classList.remove('hide-image-fast');
        // CZsPacer2r.classList.add('reveal-image-fast');


        type(P5Line3, P5Line3, P5Text3, emptyText, 30)
    }, 1000);

    setTimeout(() => {
        runningP5 = false;
        waitingP5 = true;
        console.log('done');
    }, 1000);
    setTimeout(() => {
        if (fadedP5) {
            waitingP5 = false;
            return;
        }
        if (!hoveringP5) {
            fadeP5();
        }
        waitingP5 = false;
    }, 2000);
});

P5imagebox.addEventListener('mouseleave', () => {
        hoveringP5 = false;
        if (fadedP5) {
            return;
        }
        if (!runningP5) {
            fadeP5();
        }
});

function fadeP5() {
        P5Container.classList.remove('reveal-image-fast');
        P5Container.classList.add('hide-image-fast');
        // CZsPacer1f.classList.remove('reveal-image-fast');
        // CZsPacer1f.classList.add('hide-image-fast');
        // CZsPacer1r.classList.remove('reveal-image-fast');
        // CZsPacer1r.classList.add('hide-image-fast');
    
        // CZsPacer2f.classList.remove('reveal-image-fast');
        // CZsPacer2f.classList.add('hide-image-fast');
        // CZsPacer2r.classList.remove('reveal-image-fast');
        // CZsPacer2r.classList.add('hide-image-fast');
    
        P5Line1.classList.remove('reveal-image-fast');
        P5Line1.classList.add('hide-image-fast');
        P5Line2.classList.remove('reveal-image-fast');
        P5Line2.classList.add('hide-image-fast');
        P5Line3.classList.remove('reveal-image-fast');
        P5Line3.classList.add('hide-image-fast');
        // console.log('!');
        
    
        setTimeout(() => {
            test5 = false;
            P5Line1.innerText = "";
            P5Line2.innerText = "";
            P5Line3.innerText = "";
            fadedP5 = true;
        }, 500);
};