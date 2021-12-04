// Notre variable qui contient le "module" app (un objet)
let app = {
  counter: 1,
  // Méthode appelée au chargement de la page
  init: function () {
    let spriteElement = document.getElementById('doomguy');
    spriteElement.addEventListener('click', app.handleClickOnSprite);

    let leftOver = document.getElementById('aside-left');
    leftOver.addEventListener('mouseover', app.handleLeftMouseover);
    leftOver.addEventListener('mouseleave', app.handleMouseleave);

    let rightOver = document.getElementById('aside-right');
    rightOver.addEventListener('mouseover', app.handleRightMouseover);
    rightOver.addEventListener('mouseleave', app.handleMouseleave);
  },
  handleClickOnSprite: function () {
    let audio = new Audio('./assests/sound/DSPUNCH.wav');
    audio.play();

    if (app.counter < 5) {
      app.counter += 1;
      document.getElementById('doomguy').src =
        './assests/sprite/DGF-' + app.counter + '.png';
      if (app.counter == 5) {
        const footer = document.getElementById('footer');
        if (!document.getElementById('resetButton')) {
          const resetButton = document.createElement('button');
          // '<button id="resetButton">Heal !</button>';
          resetButton.setAttribute('id', 'resetButton');
          resetButton.textContent = 'heal !';
          resetButton.addEventListener('click', app.handleClickOnResetButton);
          footer.appendChild(resetButton);
        }
      }
    }
  },
  handleClickOnResetButton: function () {
    let audio = new Audio('./assests/sound/DSBSPSIT.wav');
    audio.play();

    app.counter = 1;

    document.getElementById('doomguy').src = './assests/sprite/DGF-1.png';
    const footer = document.getElementById('footer');
    const resetButton = document.getElementById('resetButton');
    footer.removeChild(resetButton);
  },
  handleLeftMouseover: function () {
    if (app.counter < 6) {
      document.getElementById('doomguy').src =
        './assests/sprite/DGL-' + app.counter + '.png';
    }
  },
  handleRightMouseover: function () {
    if (app.counter < 6) {
      document.getElementById('doomguy').src =
        './assests/sprite/DGR-' + app.counter + '.png';
    }
  },
  handleMouseleave: function () {
    if (app.counter < 6) {
      document.getElementById('doomguy').src =
        './assests/sprite/DGF-' + app.counter + '.png';
    }
  },
};

// Quand la page est entièrement chargée, on exécute la méthode init située dans l'object app.
document.addEventListener('DOMContentLoaded', app.init);
