const path = require('path')
const caminho = path.join(__dirname, 'assets', 'avatar-hds.jpg')

function addClassToHtmlTag() {
  const htmlTag = document.documentElement
  htmlTag.classList.toggle('light')

  const img = document.querySelector('#profile img')

  if (htmlTag.classList.contains('light')) {
    img.setAttribute('src', caminho)
  } else {
    img.setAttribute('src', caminho)
  }
}
