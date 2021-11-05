const returnCodeToBrTag = (text) => {
  return text.replace(/\r?\n/g, '<br>');
}

const outputDescription = () => {
  const description = document.getElementById('description').value
  // document.getElementById('result').innerHTML = description // 改行されない
  const formattedDescription = returnCodeToBrTag(description)
  document.getElementById('result').innerHTML = formattedDescription
}
