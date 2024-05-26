const yesBtn = document.querySelector('#yesBtn');

yesBtn.addEventListener('click',function () {
    // alert("Vivan las papas locas")
    Swal.fire({
        title: "Hola amor, vivan las papas locas",
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
})

const noBtn = document.querySelector('#noBtn');

noBtn.addEventListener('mouseover', function () {
    const randomX = parseInt(Math.random()*100);
    const randomY = parseInt(Math.random()*100);
    noBtn.style.setProperty('top',randomY+'%');
    noBtn.style.setProperty('left',randomX+'%');
    noBtn.style.setProperty('transform',`translate(-${randomX}%,-${randomY}%)`);
})
