import { gql } from '@apollo/client'

const TILE = gql`   
    query($id: ID!) {
        tile(id: $id) {
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
                    canBuyHouse
                    canSellHouse
                    propertyRents{
                        stage
                        rent
                    }
                    propertySet{
                        color
                    }
                    player{
                        id
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
        }
    }
`

export { TILE }
