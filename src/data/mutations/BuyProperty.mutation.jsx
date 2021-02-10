import { useMutation, gql } from '@apollo/client'

const BUY_PROPERTY = gql`
    mutation($playerId: ID!, $propertyId: ID!){
        buyProperty(playerId: $playerId, propertyId: $propertyId){
            id
        }
    }
`

const useBuyPropertyMutation = (options) => useMutation(BUY_PROPERTY, options)
export { useBuyPropertyMutation, BUY_PROPERTY }
