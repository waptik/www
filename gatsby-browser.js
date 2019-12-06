exports.onInitialClientRender = () => {
  window.VanillaTilt.init(document.querySelectorAll('[data-tilt]'), {
    glare: true,
    reverse: true,
    max: 15,
    startX: -10,
    startY: 6.7,
    'full-page-listening': true,
    'max-glare': 0.1
  })
}