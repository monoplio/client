import { gql } from '@apollo/client'

const GAME = gql`   
    query($id: ID!){
        game(id: $id){
            auctions {
                bids {
                    amount
                }
                id
            }
            height
            hotelAvailable
            houseAvailable
            id
            players {
                id
                username
                color
                balance
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
                balance
                tile {
                    id
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
            state
            tiles {
            id
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
                    player{
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
    }  
`

export { GAME }
