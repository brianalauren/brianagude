// text effect ---------------------------------------------------------------------------------

const makeSpans = selector => {
  const [...elements] = document.querySelectorAll(selector)
  return elements.map(element => {
    const text = element.innerText.split('')
    const spans = text
      .map(letter => '<span>' + letter + '</span>')
      .join('')
    return element.innerHTML = spans
  })
}

// theme changer ---------------------------------------------------------------------------------

function randomPageClass(){
  const pageClasses = [
    'pinks',
    'orange-crush',
    'blue-green',
    'og',
  ]

  const randomIndex = Math.floor(Math.random() * pageClasses.length);
  const randomClass = pageClasses[randomIndex];

  console.log(randomClass)
  document.body.classList.add(randomClass);
}

window.onload = function () {
  makeSpans('p, h1, h2, h3')
  // randomPageClass()
}


    
  
