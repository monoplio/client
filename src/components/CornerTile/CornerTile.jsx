/* eslint-disable react/prop-types */
import React from 'react'

const CornerTile = props => {
  return (
    <div className="corner">
        <div className="corner-tile-players">
            { props.tile.currentPlayers.map(player => (
                <div className="horizontal-tile-player" key={'player-' + player.id} style={{ backgroundColor: player.color }} onClick={() => console.log(player)}></div>
            ))
            }
        </div>
        <div>{props.tile.boardTile.name}</div>
    </div>
  )
}

export { CornerTile }
