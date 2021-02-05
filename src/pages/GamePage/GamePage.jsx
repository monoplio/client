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

  const { data: testData, loading: testLoading } = useSubscription(TEST,
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
      <div>
        <div>Game {id}</div>
        {
          !testLoading &&
          <div>Test: {testData.id}</div>
        }

        { (!loading && game)
          ? <Board game={game}/>
          : <div>Loading...</div>
        }
      </div>
  )
}

export { GamePage }
