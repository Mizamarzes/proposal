const yesBtn = document.querySelector('#yesBtn');
let sound = new Audio('./buenosdiasamor.mp3');
let meme = new Audio('./error.mp3');

document.getElementsByClassName('confetti-button')[0].addEventListener('click', () => {
    let canvas = document.createElement("canvas");
    canvas.width = 1000;
    canvas.height = 1000;
    
    let container = document.getElementsByClassName("container")[0];
    container.appendChild(canvas);

    let confetti_button = confetti.create(canvas);
    confetti_button();
});


yesBtn.addEventListener('click',function () {
    // alert("Vivan las papas locas")
    Swal.fire({
        title: "Buenos dias amor amor amor",
        width: 500,
        padding: "2em",
        color: "#716add",
        background: "rgba(207, 208, 218, 1)",
        backdrop: `
          rgba(0,0,123,0.4)
          url("/images/nyan-cat.gif")
          left top
          no-repeat
        `
    })

    

    sound.play();
});



const noBtn = document.querySelector('#noBtn');

noBtn.addEventListener('mouseover', function () {
    meme.play()
    const randomX = parseInt(Math.random()*100);
    const randomY = parseInt(Math.random()*100);
    noBtn.style.setProperty('top',randomY+'%');
    noBtn.style.setProperty('left',randomX+'%');
    noBtn.style.setProperty('transform',`translate(-${randomX}%,-${randomY}%)`);
})
