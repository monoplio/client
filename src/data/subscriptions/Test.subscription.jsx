import { gql } from '@apollo/client'

const TEST = gql`
    subscription{
        gameEvents{
            data{
                height
                hotelAvailable
                houseAvailable
                id
                players {
                    username
                }
                state
                tiles {
                boardTile{
                    ... on ActionTile {
                        name
                    }
                    ... on Property {
                        name
                        price
                        mortgage
                        stage
                        state
                        housePrice
                    }
                    ... on Deck {
                        name
                    }
                    ... on Utility {
                        name
                        price
                    }
                }
                boardTileType
                x
                y
                }
                width
            }
            message
        }
    }
`
export { TEST }
