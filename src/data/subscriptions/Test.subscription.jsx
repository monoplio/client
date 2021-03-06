import { gql } from '@apollo/client'

const TEST = gql`
    subscription{
        gameEvents{
            data{
                auctions {
                    bids {
                        amount
                        player {
                            id
                        }
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
            message
        }
    }
`
export { TEST }
