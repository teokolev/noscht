import Lenis from '../node_modules/lenis'
// import Snap from '../node_modules/lenis/snap'

const lenis = new Lenis({
  autoRaf: true,
});

// Listen for the scroll event and log the event data
lenis.on('scroll', (e) => {
  console.log(e);
});

// const lenis = new Lenis()

// function raf(time) {
//     lenis.raf(time)
//     requestAnimationFrame(raf)
// }

// requestAnimationFrame(raf)

// const snap = new Snap(lenis)

// // add snaps points
// snap.add(500) // snap at 500px
// snap.add(1000) // snap at 1000px
// snap.add(1500) // snap at 1500px

// // or add an element to snap to
// snap.addElement(document.querySelector('.element'), {
//   align: ['start', 'end'], // 'start', 'center', 'end'
// })

// snap.addElement(document.querySelector('.element1'), {
//   align: 'center', // 'start', 'center', 'end'
// })

// // or add elements at once
// snap.addElements(document.querySelectorAll('.section'), {
//   align: ['start', 'end'], // 'start', 'center', 'end'
// })

