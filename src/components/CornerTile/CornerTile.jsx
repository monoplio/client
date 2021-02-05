/* eslint-disable react/prop-types */
import React from 'react'

const CornerTile = props => {
  return (
    <div className="corner">
        <div>{props.tile.boardTile.name}</div>
    </div>
  )
}

export { CornerTile }
