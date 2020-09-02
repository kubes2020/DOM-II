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

const advAwaits = document.querySelector('.text-content:nth-of-type(2)');

window.addEventListener('resize', (event) => {
    advAwaits.style.border = '2px solid green';
})


const introImg = document.querySelector('.intro img')
introImg.addEventListener('wheel', function(){
    alert("slow down")
})


const selectC = document.querySelector('#mybutton');

selectC.addEventListener('select', (event) => {
    event.target.style.color = 'teal';
})

window.addEventListener('load', (event) => {
    console.log('You did it!');
})

window.addEventListener('scroll', (event) => {
    console.log('scroll')
})

const navTop = document.querySelector('.nav-container');
const logo = document.querySelector('.logo-heading');
navTop.addEventListener('click', (event) => {
    event.target.style.background = 'purple';
    logo.addEventListener('click', (event) => {
        event.stopPropagation()
    })

})


