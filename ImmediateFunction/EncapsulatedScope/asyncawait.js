(async () => {
  const url = 'https://api.github.com/users/tackernao0522'

  const json = await fetch(url)
    .then(res => {
      return res.json()
    }).catch(error => {
      return null
    });

  console.log(json.login)
})()
