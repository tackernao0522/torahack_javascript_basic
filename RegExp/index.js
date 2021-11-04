const regexpModule = (() => {
  // const path = '/posts/POST_ID'
  // const path = '/posts'
  const path = '/form'
  // const path = ''
  const title = document.getElementById('title')

  switch (true) {
    case /\/form/.test(path):
      title.innerText = '申し込みフォーム'
      break;
    case /\/posts\/*/.test(path):
      title.innerText = '個別記事ページ'
      break;
    case /\/posts/.test(path):
      title.innerText = '記事一覧'
      break;
    default:
      break;
  }

  return {
    excludeNonNumbers: (id) => {
      const telWithHyphen = document.getElementById(id).value;
      const tel = telWithHyphen.replace(/[^0-9]/g, '')
      alert('電話番号は' + tel + 'です。')
    },
    isValidEmailFormat: (id) => {
      const email = document.getElementById(id).value;
      const regex = /^[a-zA-Z0-9.!#$%&'*+\/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/
      if (regex.test(email)) {
        alert('正しいメールアドレスの形式です。')
      } else {
        alert('不正なメールアドレスの形式です。')
      }
    },
  }
})()
