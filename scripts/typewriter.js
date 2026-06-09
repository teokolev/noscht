document.addEventListener('DOMContentLoaded', function(event) {
        const elements = document.querySelectorAll('#typewritten > *');
        console.log(elements)
        // const litleBoxes = document.querySelectorAll('.little-box');
      
        function typeWriter(text, element, i, callback) {
          if (i < text.length) {
            element.innerHTML = text.substring(0, i + 1) + '<span class="cursor" aria-hidden="true"></span>';
      
            setTimeout(function () {
              typeWriter(text, element, i + 1, callback)
            }, Math.random() * 80);
          } else if (callback) {
            // remove cursor from end if element is done
            element.innerHTML = text;
            callback();
          } 
        //   else {
        //     // start spin animation
        //     litleBoxes.forEach((box) => {
        //       box.classList.add('spin');
        //     });
        //   }
        }
      
        function typeAllElements(elements, i) {
          if (i < elements.length) {
            const element = elements[i];
            const text = element.textContent;
            console.log(text);
            element.textContent = '';
            element.style.color = '#f5f5f5'
        //     element.style.color = 'inherit';
      
            if (i === elements.length -1) {
              typeWriter(text, element, 0, null)
            } else {
              typeWriter(text, element, 0, function () {
                typeAllElements(elements, i + 1);
              });
            }
          }
        }
      
        typeAllElements(elements, 0);
});
      