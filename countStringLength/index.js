const description =
  document.getElementById('description')
const currentLength =
  document.getElementById('current-length')

description.addEventListener('change', (event) => {
  const text = event.target.value
  const length = text.length
  currentLength.innerText = length
})
