// import fetch from '/node-fetch';

// 非同期処理を行う関数を宣言
const getGitUsername = () => {
    const url = 'https://api.github.com/users/tackernao0522';

    // GitHub APIをFetchメソッドで実行
    fetch(url).then(res => res.json())
        .then(json => {
            console.log('これは非同期処理成功時のメッセージです')
            return json.login
        }).catch(error => {
            console.error('これは非同期処理失敗時のメッセージです。', error)
            return null
        })

};

const message = 'GitのユーザーIDは'
const username = getGitUsername()
console.log(message + username)
