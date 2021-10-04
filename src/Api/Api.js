const Api = {
    url: 'http://localhost:3001/',

    getGames: () => fetch(`${Api.url}game`, {
        method: 'GET',
        mode: 'cors'
    })
}

export default Api