const containerEl = document.querySelector('.container')


let randomIcon = ['', '💜', '😎', '😳', '💎', '😂']

function getRandomIcon(array) {
  let icons = array[Math.ceil(Math.random() * (array.length - 1))]
  return icons
}



function createHeart() {

  let heartDiv = document.createElement('div')
  heartDiv.classList.add('heart')
  heartDiv.style.left = Math.random() * 100 + 'vw'
  heartDiv.style.animationDuration = Math.random() * 2 + 3 + 's'



  heartDiv.innerHTML = getRandomIcon(randomIcon)


  containerEl.appendChild(heartDiv)

  setTimeout(() => {
    heartDiv.remove()
  }, 5000)

}

setInterval(createHeart, 100)