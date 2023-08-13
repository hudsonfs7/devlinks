function addClassToHtmlTag() {
  var htmlTag = document.documentElement

  if (!htmlTag.classList.contains('light')) {
    htmlTag.classList.add('light')
  } else {
    htmlTag.classList.remove('light')
  }
}
