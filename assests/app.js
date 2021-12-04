// Notre variable qui contient le "module" app (un objet)
let app = {
  counter: 1,
  // Méthode appelée au chargement de la page
  init: function () {
    let spriteElement = document.getElementById('doomguy');
    spriteElement.addEventListener('click', app.handleClickOnSprite);

    let resetButton = document.getElementById('resetButton');
    resetButton.addEventListener('click', app.handleClickOnResetButton);

    let leftOver = document.getElementById('aside-left');
    leftOver.addEventListener('mouseover', app.handleLeftMouseover);
    leftOver.addEventListener('mouseleave', app.handleMouseleave);

    let rightOver = document.getElementById('aside-right');
    rightOver.addEventListener('mouseover', app.handleRightMouseover);
    rightOver.addEventListener('mouseleave', app.handleMouseleave);
  },
  handleClickOnSprite: function () {
    let audio = new Audio("../assests/sound/DSPUNCH.wav");
    audio.play();
    
    app.counter += 1;
    if (app.counter < 6) {
      document.getElementById('doomguy').src = '../assests/sprite/DGF-' + app.counter + '.png';
    }

  },
  handleClickOnResetButton: function () {
    let audio = new Audio("../assests/sound/DSBSPSIT.wav");
    audio.play();

    app.counter = 1;

    document.getElementById('doomguy').src = '../assests/sprite/DGF-1.png';
  },
  handleLeftMouseover: function () {
    if (app.counter < 6) {
    document.getElementById('doomguy').src = '../assests/sprite/DGL-' + app.counter + '.png';
    }
  },
  handleRightMouseover: function () {
    if (app.counter < 6) {
    document.getElementById('doomguy').src = '../assests/sprite/DGR-' + app.counter + '.png';
    }
  },
  handleMouseleave: function () {
    if (app.counter < 6) {
    document.getElementById('doomguy').src = '../assests/sprite/DGF-' + app.counter + '.png';
    }
  },
};

// Quand la page est entièrement chargée, on exécute la méthode init située dans l'object app.
document.addEventListener('DOMContentLoaded', app.init);


