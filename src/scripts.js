function addClassToHtmlTag() {
  const htmlTag = document.documentElement
  htmlTag.classList.toggle('light')

  const img = document.querySelector('#profile img')

  if (htmlTag.classList.contains('light')) {
    img.setAttribute('src', '../assets/avatar-hds.jpg')
  } else {
    img.setAttribute('src', '../assets/avatar-hds.jpg')
  }
}
