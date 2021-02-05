/* eslint-disable react/prop-types */
import React from 'react'
import { PropertyHeader } from '../../components'

const Tile = props => {
  return (
    <div className="horizontal-tile" key={props.key}>
        { props.tile.boardTileType === 'ActionTile' &&
            <div>{props.tile.boardTile.name}</div>
        }

        { props.tile.boardTileType === 'Property' &&
            <>
                <PropertyHeader color={props.tile.boardTile.propertySet.color} stage={props.tile.boardTile.stage}/>
                <div>{props.tile.boardTile.name}</div>
                <div>${props.tile.boardTile.price}</div>
            </>
        }

        { props.tile.boardTileType === 'Deck' &&
            <div>{props.tile.boardTile.name}</div>
        }

        { props.tile.boardTileType === 'Utility' &&
            <>
                <div>{props.tile.boardTile.name}</div>
                <div>${props.tile.boardTile.price}</div>
            </>
        }
    </div>
  )
}

export { Tile }
