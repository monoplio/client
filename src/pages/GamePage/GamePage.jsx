/* eslint-disable react/prop-types */
/* eslint-disable no-empty-pattern */
import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { useQuery, useSubscription } from '@apollo/client'
import { GAME, TEST } from '../../data'
import { Board } from '../../components'

const GamePage = props => {
  const { id } = useParams()
  const [game, setGame] = useState(null)

  const handleReceivedData = ({ subscriptionData: { data } }) => {
    setGame(data.gameEvents.data)
  }

  const { loading, data } = useQuery(GAME, {
    variables: {
      id: id
    }
  })

  const {} = useSubscription(TEST, // data: testData, loading: testLoading
    {
      variables: {
        gameId: id
      },
      onSubscriptionData: handleReceivedData
    }
  )

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
                  <input className="menu-input" type="text" placeholder="Nickname (optional)" name="username"/>
                  <input className="menu-button" type="button" value="Join"/>
                </>
              }
              { props.user && (game.owner.id === props.user.id) && (game.players.length >= 2) &&
                  <input className="menu-button" type="button" value="Start Game"/>
              }
            </div>
        }
        { (!loading && game && game.state !== 'pending') &&
          <Board game={game}/>
        }
      </div>
  )
}

export { GamePage }
