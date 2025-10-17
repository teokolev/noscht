// $('#parent_1').click(function(){
//         var buttonId = 'one';
//         $('#modal-container').removeAttr('class').addClass(buttonId);
//         $('body').addClass('modal-active');
// })
      
// $('#modal-container').click(function(){
//         $(this).addClass('out');
//         $('body').removeClass('modal-active');
// });

const archive1 = document.getElementById('archive-item-container-1');

const modalContainerArchive = document.getElementById('modal-container-archive');

const archiveContainer = document.getElementById('archive-container');

archive1.addEventListener('click', () => {
        archiveContainer.classList.remove('comeBack');
        modalContainerArchive.classList.remove('out');
        setTimeout(() => {
                modalContainerArchive.classList.add('on'); 
        }, 100);
        
        archiveContainer.classList.add('leave');
        // archive1.classList.add('content');
        document.body.classList.add('modal-active');
})

modalContainerArchive.addEventListener('click', () => {
        setTimeout(() => {
                modalContainerArchive.classList.remove('on');
        }, 750);
         
        modalContainerArchive.classList.add('out');
        document.body.classList.remove('modal-active');
        archiveContainer.classList.remove('leave');
        archiveContainer.classList.add('comeBack');
})