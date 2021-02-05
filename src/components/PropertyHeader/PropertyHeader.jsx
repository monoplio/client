/* eslint-disable react/prop-types */
import React from 'react'

const PropertyHeader = props => {
  return (
    <div className="property-header" style={{ backgroundColor: props.color }}>
        { props.stage < 5 &&
            <>
                { props.stage >= 1 && <div className="property-house"></div> }
                { props.stage >= 2 && <div className="property-house"></div> }
                { props.stage >= 3 && <div className="property-house"></div> }
                { props.stage >= 4 && <div className="property-house"></div> }
            </>
        }
        { props.stage >= 5 &&
            <div className="property-hotel"></div>
        }
    </div>
  )
}

export { PropertyHeader }
