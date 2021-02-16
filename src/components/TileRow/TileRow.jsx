/* eslint-disable react/prop-types */
import React from 'react'
import { Tile } from '../../components'

const TileRow = props => {
  return (
    <div className="row" style={props.style}>
        { props.tiles.map(tile => (
            <Tile key={tile.id} tile={tile} setSelectedTile={props.setSelectedTile}/>
        ))
        }
    </div>
  )
}

export { TileRow }
