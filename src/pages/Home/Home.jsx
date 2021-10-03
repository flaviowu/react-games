import React, { useState } from 'react'
import { Api } from '../../Api/Api'

const Home = () => {
    const [games, setGames] = useState([])

    const HandleRefreshData = async () => {
        const response = await Api.getGames()
        const data = await response.json()
        setGames(data)
        console.log(games)
    }


    return (
        <div>
            <h2 onClick={HandleRefreshData}>Página Home</h2>
            <h3>Jogos</h3>
            {games.map((game, index) => <div key={index}>
                <h4>{game.title}</h4>
                <p>{game.description}</p>
                <img src={game.cover} alt={game.title}/>
            </div>)}
        </div>
    )
}

export default Home
