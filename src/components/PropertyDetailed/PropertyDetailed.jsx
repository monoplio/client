/* eslint-disable react/prop-types */
import React from 'react'
import { TILE } from '../../data'
import { useQuery } from '@apollo/client'

const PropertyDetailed = props => {
  const { loading: tileQueryLoading, data: tileQueryData } = useQuery(TILE, {
    variables: {
      id: props.selectedTile
    }
  })

  return (
        <>
            {(!tileQueryLoading && tileQueryData && tileQueryData.tile.boardTileType === 'Property') &&
                <div>
                    <div className="property-detailed-header" style={{ backgroundColor: tileQueryData.tile.boardTile.propertySet.color }}>
                        {tileQueryData.tile.boardTile.name}
                    </div>
                    <div className="property-detailed-row">
                        <div>PRICE: ${tileQueryData.tile.boardTile.price}</div>
                        <div>RENT: ${tileQueryData.tile.boardTile.propertyRents[0].rent}</div>
                    </div>
                    <hr></hr>
                    <>
                        { tileQueryData.tile.boardTile.propertyRents.map(propertyRent => (
                            <>
                                { propertyRent.stage !== 0 &&
                                    <div className="property-detailed-row" key={propertyRent.stage}>
                                        <div>With {propertyRent.stage < 5 ? propertyRent.stage : ''} { propertyRent.stage !== 1 ? (propertyRent.stage !== 5 ? 'Houses' : 'HOTEL') : 'House' } ${propertyRent.rent}</div>
                                    </div>
                                }
                            </>
                        ))
                        }
                    </>
                    <hr></hr>
                    <div className="property-detailed-row">
                        <div>One house costs ${tileQueryData.tile.boardTile.housePrice}</div>
                    </div>
                    <div className="property-detailed-row">
                        <div>Mortgage value ${tileQueryData.tile.boardTile.mortgage}</div>
                    </div>
                </div>
            }
        </>
  )
}

export { PropertyDetailed }
