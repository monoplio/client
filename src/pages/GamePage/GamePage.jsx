import React from 'react'
import { useParams } from 'react-router-dom'
import { useQuery, useSubscription } from '@apollo/client'
import { GAMES, TEST } from '../../data'

const GamePage = props => {
  const { id } = useParams()
  const { loading, data } = useQuery(GAMES)

  const handleReceivedData = ({ subscriptionData: { data } }) => {
    console.log(data)
  }

  const { data: testData, loading: testLoading } = useSubscription(TEST,
    { onSubscriptionData: handleReceivedData }
  )

  return (
      <div>
          <div>Game {id}</div>
          { !loading &&
            <div>{data.games[0].id}</div>
          }

          {
             !testLoading &&
             <div>Test: {testData.id}</div>
          }
      </div>
  )
}

export { GamePage }
