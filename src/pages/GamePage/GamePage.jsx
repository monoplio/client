/* eslint-disable react/prop-types */
/* eslint-disable no-empty-pattern */
import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { useQuery, useSubscription } from '@apollo/client'
import { useEndTurnMutation, useJoinGameMutation, useStartGameMutation, useRollDiceMutation, GAME, TEST } from '../../data'
import { Board } from '../../components'

const GamePage = props => {
  const { id } = useParams()
  const [game, setGame] = useState(null)
  const [username, setUsername] = useState()

  const handleReceivedData = ({ subscriptionData: { data } }) => {
    setGame(data.gameEvents.data)
  }

  const { loading, data } = useQuery(GAME, {
    variables: {
      id: id
    }
  })

  const { data: subscriptionData } = useSubscription(TEST, // data: testData, loading: testLoading
    {
      variables: {
        gameId: id
      },
      onSubscriptionData: handleReceivedData
    }
  )

  const setUser = data => {
    props.setUser(data.joinGame)
  }

  const [joinGame] = useJoinGameMutation({
    onCompleted: setUser
  })

  const [startGame] = useStartGameMutation({
    variables: {
      gameId: id
    }
  })

  const [rollDice] = useRollDiceMutation({
    variables: {
      playerId: props.user ? props.user.id : -1
    }
  })

  const [endTurn] = useEndTurnMutation({
    variables: {
      playerId: props.user ? props.user.id : -1
    }
  })

  const handleJoin = () => {
    if (username && (username !== '' && username.length > 0)) {
      joinGame({
        variables: {
          username: username,
          gameId: id
        }
      })
    } else {
      alert('Please enter a username.')
    }
  }

  const handleInputChange = function (e) {
    switch (e.target.name) {
      case 'username':
        setUsername(e.target.value)
        break
    }
  }

  useEffect(() => {
    if (!loading) {
      setGame(data.game)
    }
  }, [data])

  return (
      <div className="game-page">
        { (!loading && game && game.state === 'pending') &&
          <div className="menu">
              <div className="menu-title">Game {id}</div>
              <div className="menu-subtitle">~ Awaiting players...</div>
              <div className="menu-players">
                { game.players.map(player => (
                  <>
                    { props.user && (player.id === props.user.id)
                      ? <div key={player.id}> * {player.username}</div>
                      : <div key={player.id}> {player.username}</div>
                    }
                  </>
                ))
                }
              </div>
              { !props.user &&
                <>
                  <input className="menu-input" type="text" placeholder="Nickname (optional)" name="username" value={username} onChange={handleInputChange}/>
                  <input className="menu-button" type="button" value="Join" onClick={handleJoin}/>
                </>
              }
              { props.user && (game.owner.id === props.user.id) && (game.players.length >= 2) &&
                  <input className="menu-button" type="button" value="Start Game" onClick={startGame}/>
              }
            </div>
        }
        { (!loading && game && game.state !== 'pending') &&
          <>
            <div>
              { game.players.map(player => (
                <>
                  { props.user && (player.id === props.user.id)
                    ? <div key={player.id}> {player.id === game.currentPlayer.id ? '->' : ''} {player.username} (you)</div>
                    : <div key={player.id}> {player.id === game.currentPlayer.id ? '->' : ''} {player.username}</div>
                  }
                </>
              ))
              }
            </div>
            {console.log(subscriptionData)}
            <Board game={game} message={ subscriptionData ? subscriptionData.gameEvents.message : null}/>
            { props.user && game.currentPlayer.id === props.user.id &&
              <>
              { game.currentPlayer.canRoll
                ? <input className="menu-button" type="button" value="Roll" onClick={rollDice}/>
                : <input className="menu-button" type="button" value="End" onClick={endTurn}/>
              }
              </>
            }
          </>
        }
      </div>
  )
}

export { GamePage }
