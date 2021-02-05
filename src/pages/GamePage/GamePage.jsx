import React from 'react'
import { useParams } from 'react-router-dom'
import { useQuery, useSubscription } from '@apollo/client'
import { GAME, TEST } from '../../data'
import { Board } from '../../components'

const GamePage = props => {
  const { id } = useParams()

  const handleReceivedData = ({ subscriptionData: { data } }) => {
    console.log(data)
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

  return (
      <div>
          <div>Game {id}</div>
          { !loading &&
            <div>{console.log(data)}</div>
          }

          {
             !testLoading &&
             <div>Test: {testData.id}</div>
          }
        { !loading &&
        <Board game={data.game}/>
        }
      </div>
  )
}

export { GamePage }
