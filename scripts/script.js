const hamburger = document.getElementById('hamburger')
const menu = document.getElementById('main-menu')

hamburger.addEventListener('click', () => {
  menu.classList.toggle('show')
})

/*var granimInstance = new Granim({
  element: '#canvas-interactive-header',
  direction: 'diagonal',
  isPausedWhenNotInView: true,
  states: {
    'default-state': {
      gradients: [
        ['#303030', '#434141'],
        ['#1D1B1B', '#302E2E'],
        ['#000000', '#252525'],
      ],
    },
  },
})

var granimInstance = new Granim({
  element: '#canvas-interactive-footer',
  direction: 'top-bottom',
  isPausedWhenNotInView: true,
  states: {
    'default-state': {
      gradients: [
        ['#ff9966', '#ff5e62'],
        ['#00F260', '#0575E6'],
        ['#4F40F9', '#f05053'],
      ],
    },
  },
})*/

// top button
var btn = $('#button')

$(window).scroll(function () {
  if ($(window).scrollTop() > 300) {
    btn.addClass('show')
  } else {
    btn.removeClass('show')
  }
})

btn.on('click', function (e) {
  e.preventDefault()
  $('html, body').animate({ scrollTop: 0 }, '300')
})

$('.section-works-menu-item').mouseover(function () {
  if ($(this).data('hover') !== undefined) {
    $('.section-works-image img').attr('src', $(this).data('hover'))
  }
})
