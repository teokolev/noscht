const project1 = document.getElementById('parent_1');
const project2 = document.getElementById('parent_2');
const project3 = document.getElementById('parent_3');
const project4 = document.getElementById('parent_4');

const modalContainer = document.getElementById('modal-container');

const outterContainer = document.getElementById('outterContainer');

project1.addEventListener('click', () => {
        outterContainer.classList.remove('comeBack');
        modalContainer.classList.remove('out');
        setTimeout(() => {
                modalContainer.classList.add('on'); 
        }, 100);
        
        outterContainer.classList.add('leave');
        // project1.classList.add('content');
        document.body.classList.add('modal-active');
})

project2.addEventListener('click', () => {
        outterContainer.classList.remove('comeBack');
        modalContainer.classList.remove('out');
        setTimeout(() => {
                modalContainer.classList.add('on'); 
        }, 100);
        
        outterContainer.classList.add('leave');
        // project1.classList.add('content');
        document.body.classList.add('modal-active');
})

project3.addEventListener('click', () => {
        outterContainer.classList.remove('comeBack');
        modalContainer.classList.remove('out');
        setTimeout(() => {
                modalContainer.classList.add('on'); 
        }, 100);
        
        outterContainer.classList.add('leave');
        // project1.classList.add('content');
        document.body.classList.add('modal-active');
});

project4.addEventListener('click', () => {
        outterContainer.classList.remove('comeBack');
        modalContainer.classList.remove('out');
        setTimeout(() => {
                modalContainer.classList.add('on'); 
        }, 100);
        
        outterContainer.classList.add('leave');
        // project1.classList.add('content');
        document.body.classList.add('modal-active');
});

modalContainer.addEventListener('click', () => {
        setTimeout(() => {
                modalContainer.classList.remove('on');
        }, 750);
         
        modalContainer.classList.add('out');
        document.body.classList.remove('modal-active');
        outterContainer.classList.remove('leave');
        outterContainer.classList.add('comeBack');
})