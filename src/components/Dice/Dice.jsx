/* eslint-disable react/prop-types */
import React from 'react'

const Dice = props => {
  return (
    <div className="dice-wrap">
        <span className={'dice dice-' + props.dice.lastRoll1} title={'Dice ' + props.dice.lastRoll1}></span>
        <span className={'dice dice-' + props.dice.lastRoll2} title={'Dice ' + props.dice.lastRoll2}></span>
    </div>
  )
}

export { Dice }
