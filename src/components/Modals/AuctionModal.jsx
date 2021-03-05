/* eslint-disable react/prop-types */
import React, { useState } from 'react'
import { useQuery } from '@apollo/client'
import { TILE } from '../../data'
import { PropertyDetailed } from '../../components'

function AuctionModal (props) {
  const [amount, setAmount] = useState('')

  const { loading: tileQueryLoading, data: tileQueryData } = useQuery(TILE, {
    variables: {
      id: props.tileId
    }
  })

  const handleInputChange = (e) => {
    setAmount(e.target.value)
    props.setBid(e.target.value)
  }

  const canEnd = () => {
    let max = props.bids[0]
    for (let i = 1; i < props.bids.length; i++) {
      max = props.bids[i].amount > max.amount ? props.bids[i] : max
    }
    return (props.user.id !== max.player.id || max.amount === 0)
  }

  return (
    <>
        <div className="modal">
            <label className="modal-bg" htmlFor="modal-1"></label>
            <div className="modal-inner">
                <div className="modal-body">
                    {(!tileQueryLoading && tileQueryData) &&
                      <>
                        <PropertyDetailed tile={tileQueryData.tile} />
                        <div style={{ marginBottom: '2em' }}></div>
                      </>
                    }
                    <h2>Highest Bid: ${props.highest}</h2>
                    {
                        (!props.bal || props.bal > props.highest)
                          ? <>
                            <input className="menu-input-num" min={`${props.highest + 1}`} type="number" onChange={handleInputChange} />
                            <input className="menu-button" type="button" value="Increase Bid" onClick={() => { props.setBid(amount); props.increase() }}/>
                        </>
                          : null
                    }
                    {
                        canEnd()
                          ? <input className="menu-button" type="button" value="End Bid" onClick={() => { props.end() }}/>
                          : null
                    }

                </div>
            </div>
        </div>
    </>
  )
}

export { AuctionModal }
