import { useMutation, gql } from '@apollo/client'

const BUY_HOUSE = gql`
    mutation($playerId: ID!, $propertyId: ID!){
        buyHouse(playerId: $playerId, propertyId: $propertyId){
            id
        }
    }
`

const useBuyHouseMutation = (options) => useMutation(BUY_HOUSE, options)
export { useBuyHouseMutation, BUY_HOUSE }
