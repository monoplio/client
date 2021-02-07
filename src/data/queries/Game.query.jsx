import { gql } from '@apollo/client'

const GAME = gql`   
    query($id: ID!){
        game(id: $id){
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
            }
            x
            y
            }
            width
        }
    }  
`

export { GAME }
