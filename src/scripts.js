const path = require('path')
const caminho = path.join(__dirname, 'assets', 'avatar-hds.jpg')

function addClassToHtmlTag() {
  const htmlTag = document.documentElement
  htmlTag.classList.toggle('light')

  const img = document.querySelector('#profile img')

  if (htmlTag.classList.contains('light')) {
<<<<<<< HEAD
    img.setAttribute('src', caminho)
  } else {
    img.setAttribute('src', caminho)
=======
    img.setAttribute('src', './assets/avatar-hds.jpg')
  } else {
    img.setAttribute('src', './assets/avatar-hds.jpg')
>>>>>>> f0d5da757c4349bb333cbc68263cb4b22ab768bf
  }
}
