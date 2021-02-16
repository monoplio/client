/* eslint-disable react/prop-types */
import React from 'react'
import { PropertyHeader } from '../../components'

const Tile = props => {
  return (
    <div className="horizontal-tile" key={props.key} onClick={() => props.setSelectedTile(props.tile.id)}>
        <div className="horizontal-tile-players">
            { props.tile.currentPlayers.map(player => (
                <div className="horizontal-tile-player" key={'player-' + player.id} style={{ backgroundColor: player.color }}></div>
            ))
            }
        </div>
        { props.tile.boardTileType === 'ActionTile' &&
            <div>{props.tile.boardTile.name}</div>
        }

        { props.tile.boardTileType === 'Property' &&
            <>
                <PropertyHeader color={props.tile.boardTile.propertySet.color} stage={props.tile.boardTile.stage}/>
                <div>{props.tile.boardTile.name}</div>
                <div>${props.tile.boardTile.price}</div>
                { props.tile.boardTile.player !== null &&
                    <div style={{ backgroundColor: props.tile.boardTile.player.color, height: '5px' }}></div>
                }
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
