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
                    id
                    username
                }
                owner {
                    id
                    username
                }
                currentPlayer{
                    id
                    username
                    canRoll
                    lastRoll1
                    lastRoll2
                }
                state
                tiles {
                boardTile{
                    ... on ActionTile {
                        id
                        name
                    }
                    ... on Property {
                        id
                        name
                        price
                        mortgage
                        stage
                        state
                        housePrice
                        propertySet{
                            color
                        }
                    }
                    ... on Deck {
                        id
                        name
                    }
                    ... on Utility {
                        id
                        name
                        price
                    }
                }
                boardTileType
                currentPlayers{
                    id
                    color
                }
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
