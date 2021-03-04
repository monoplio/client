/* eslint-disable react/prop-types */
import React from 'react'

const PropertyDetailed = props => {
  return (
        <>
            {(props.tile.boardTileType === 'Property' && props.tile.boardTile.propertySet.color !== 'black') &&
                <div className="property-detailed">
                    <div className="property-detailed-header" style={{ backgroundColor: props.tile.boardTile.propertySet.color }}>
                        {props.tile.boardTile.name}
                    </div>
                    <div className="property-detailed-rent">RENT ${props.tile.boardTile.propertyRents[0].rent}</div>
                    <hr></hr>
                    <>
                        { props.tile.boardTile.propertyRents.map(propertyRent => (
                            <>
                                { propertyRent.stage !== 0 &&
                                    <div className="property-detailed-row" key={propertyRent.stage}>
                                        <div>With {propertyRent.stage < 5 ? propertyRent.stage : ''} { propertyRent.stage !== 1 ? (propertyRent.stage !== 5 ? 'Houses' : 'HOTEL') : 'House' }</div>
                                        <div>${propertyRent.rent}</div>
                                    </div>
                                }
                            </>
                        ))
                        }
                    </>
                    <hr></hr>
                    <div className="property-detailed-row">
                        <div>House Cost</div>
                        <div>${props.tile.boardTile.housePrice}</div>
                    </div>
                    <div className="property-detailed-row">
                        <div>Mortgage Value</div>
                        <div>${props.tile.boardTile.mortgage}</div>
                    </div>
                </div>
            }
        </>
  )
}

export { PropertyDetailed }
