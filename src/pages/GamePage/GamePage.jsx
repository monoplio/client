import React from 'react'
import { useParams } from 'react-router-dom'
import { ActionCableConsumer } from 'react-actioncable-provider'

const GamePage = props => {
  const { id } = useParams()

  const handleReceivedData = response => {
    console.log(response)
  }

  return (
      <div>
          <ActionCableConsumer
            channel={{ channel: 'GameChannel', game_id: 1 }}
            onReceived={handleReceivedData}
           />
          <div>Game {id}

          </div>
      </div>
  )
}

export { GamePage }
