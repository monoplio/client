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
            <div>{data.games[0].id}</div>
          }

          {
             !testLoading &&
             <div>Test: {testData.id}</div>
          }
          <div className="board" style={{ transform: 'rotate(180deg)' }}>
            <div className="horizontal-row">
              <div className="corner"></div>
              <div className="row" style={{ transform: 'rotate(180deg)' }}>
                <div className="horizontal-tile">
                  <div className="property-color"></div>
                </div>
                <div className="horizontal-tile">
                  <div className="property-color"></div>
                </div>
                <div className="horizontal-tile">
                  <div className="property-color"></div>
                </div>
                <div className="horizontal-tile">
                  <div className="property-color"></div>
                </div>
                <div className="horizontal-tile">
                  <div className="property-color"></div>
                </div>
                <div className="horizontal-tile">
                  <div className="property-color"></div>
                </div>
                <div className="horizontal-tile">
                  <div className="property-color"></div>
                </div>
                <div className="horizontal-tile">
                  <div className="property-color"></div>
                </div>
                <div className="horizontal-tile">
                  <div className="property-color"></div>
                </div>
              </div>
              <div className="corner"></div>
            </div>
            <div className="middle-row">
              <div className="vertical-row">
                  <div className="vertical-tile"></div>
                  <div className="vertical-tile"></div>
                  <div className="vertical-tile"></div>
                  <div className="vertical-tile"></div>
                  <div className="vertical-tile"></div>
                  <div className="vertical-tile"></div>
                  <div className="vertical-tile"></div>
                  <div className="vertical-tile"></div>
                  <div className="vertical-tile"></div>
              </div>
              <div className="vertical-row">
                  <div className="vertical-tile"></div>
                  <div className="vertical-tile"></div>
                  <div className="vertical-tile"></div>
                  <div className="vertical-tile"></div>
                  <div className="vertical-tile"></div>
                  <div className="vertical-tile"></div>
                  <div className="vertical-tile"></div>
                  <div className="vertical-tile"></div>
                  <div className="vertical-tile"></div>
              </div>
            </div>
            <div className="horizontal-row">
              <div className="corner"></div>
              <div className="row">
                <div className="horizontal-tile">
                  <div className="property-color"></div>
                </div>
                <div className="horizontal-tile">
                  <div className="property-color"></div>
                </div>
                <div className="horizontal-tile">
                  <div className="property-color"></div>
                </div>
                <div className="horizontal-tile">
                  <div className="property-color"></div>
                </div>
                <div className="horizontal-tile">
                  <div className="property-color"></div>
                </div>
                <div className="horizontal-tile">
                  <div className="property-color"></div>
                </div>
                <div className="horizontal-tile">
                  <div className="property-color"></div>
                </div>
                <div className="horizontal-tile">
                  <div className="property-color"></div>
                </div>
                <div className="horizontal-tile">
                  <div className="property-color"></div>
                </div>
              </div>
              <div className="corner"></div>
            </div>
          </div>
      </div>
  )
}

export { GamePage }
