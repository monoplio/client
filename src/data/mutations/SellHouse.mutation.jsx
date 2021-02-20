import { useMutation, gql } from '@apollo/client'

const SELL_HOUSE = gql`
    mutation($playerId: ID!, $propertyId: ID!){
        sellHouse(playerId: $playerId, propertyId: $propertyId){
            id
        }
    }
`

const useSellHouseMutation = (options) => useMutation(SELL_HOUSE, options)
export { useSellHouseMutation, SELL_HOUSE }
