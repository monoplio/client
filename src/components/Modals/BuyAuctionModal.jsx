/* eslint-disable react/prop-types */
import React, { useState } from 'react'

function BuyAuctionModal (props) {
  const [show, setShow] = useState(true)
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
