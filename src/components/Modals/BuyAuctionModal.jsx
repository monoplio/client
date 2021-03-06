/* eslint-disable react/prop-types */
import React, { useState } from 'react'
import { useQuery } from '@apollo/client'
import { TILE } from '../../data'
import { PropertyDetailed } from '../../components'

function BuyAuctionModal (props) {
  const [show, setShow] = useState(true)

  const { loading: tileQueryLoading, data: tileQueryData } = useQuery(TILE, {
    variables: {
      id: props.tileId
    }
  })

  const hide = () => {
    setShow(false)
  }
  return (
        <>
            {show
              ? (
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
                        <input className="menu-button" type="button" value="Buy" onClick={() => { props.buy(); hide() }}/>
                        <input className="menu-button" type="button" value="Auction" onClick={() => { props.auction(); hide() }}/>
                        </div>
                    </div>
                </div>
                )
              : null}
        </>
  )
}

export { BuyAuctionModal }
