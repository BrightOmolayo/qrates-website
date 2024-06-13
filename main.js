/* eslint-disable no-unused-vars */
// eslint-disable-next-line no-unused-vars
function toggleSection (element) {
  const content = element.nextElementSibling

  // Close all other sections before opening the clicked one
  const allSections = document.querySelectorAll('.accordion-content')
  allSections.forEach(function (section) {
    if (section !== content && section.classList.contains('show')) {
      section.classList.remove('show')
    }
  })

  // Toggle the 'show' class to display or hide the content
  content.classList.toggle('show')
}
function dropdown () {
  // const dropIcon = document.getElementById("bars")
  const dropContent = document.getElementById('dropDownContent')

  if (dropContent.style.display === 'none') {
    dropContent.style.display = 'block'
  } else {
    dropContent.style.display = 'none'
  }
}
