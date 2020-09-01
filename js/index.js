// Your code goes here
const intro = document.querySelector('.intro');

intro.addEventListener('mouseover', (event) => {
    event.target.style.color = 'red';
})

intro.addEventListener('mouseout', (event) => {
    event.target.style.color = 'black';
})


document.addEventListener('keydown', function(event) {
    if (event.key === 'b')
    console.log('you performed a key press on b')
});


const imgBig = document.querySelector('.img-content');
imgBig.addEventListener('dblclick', function (event) {
    event.target.style.width = "50%";
})

const mybutton = document.querySelector('#mybutton');
mybutton.addEventListener('focus', (event) => {
    event.target.style.backgroundColor = 'yellow';
});