/* eslint-disable react/prop-types */
import React from 'react'
import { CornerTile, TileRow } from '../../components'

const Board = props => {
  return (
    <div className="board">
        <div className="horizontal-row">
            <CornerTile tile={props.game.tiles[20]}/>
            <TileRow style={{ transform: 'rotate(180deg)' }} tiles={props.game.tiles.slice(21, 30).reverse()} />
            <CornerTile tile={props.game.tiles[30]}/>
        </div>
        <div className="middle-row">
            <div className="column">
                <TileRow style={{ transform: 'rotate(90deg)' }} tiles={props.game.tiles.slice(11, 20).reverse()}/>
            </div>
            <h1>Monopl.io</h1>
            <div className="column">
                <TileRow style={{ transform: 'rotate(270deg)' }} tiles={props.game.tiles.slice(31, 40).reverse()}/>
            </div>
        </div>
        <div className="horizontal-row">
            <CornerTile tile={props.game.tiles[10]}/>
            <TileRow tiles={props.game.tiles.slice(1, 10).reverse()}/>
            <CornerTile tile={props.game.tiles[0]}/>
        </div>
  </div>
  )
}

export { Board }
