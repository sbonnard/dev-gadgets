// Previous button

const previousButton = document.querySelector('[data-previous-button]');

const duckPic1 =  document.querySelector('[data-duck-pic="img/canard-jaune-1-l.png"]');
const duckPic2 =  document.querySelector('[data-duck-pic="img/canard-jaune-2-l.png"]');
const duckPic3 =  document.querySelector('[data-duck-pic="img/canard-jaune-3-l.png"]');
const duckPic4 =  document.querySelector('[data-duck-pic="img/canard-jaune-4-l.png"]');
const duckPic5 =  document.querySelector('[data-duck-pic="img/canard-jaune-5-l.png"]');

const duckPics =  document.querySelectorAll('[data-duck-pic]');
console.log(duckPics);

const mainDuckPic = document.getElementById('main-duck-pic');
console.log(mainDuckPic);

duckPics.forEach(element => {
    element.addEventListener('mouseover', function(){
        mainDuckPic.src = element.src;
    })
})

// previousButton.addEventListener('click', function(event){
//     let i = 0;
//     for (let pic of duckPics) {    
//         mainDuckPic.src = `img/canard-jaune-${5}-l.png`
//     }
// })


