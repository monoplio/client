import { useMutation, gql } from '@apollo/client'

const CREATE_AUCTION = gql`
    mutation($propertyId: ID!){
        createAuction(propertyId: $propertyId){
          id
        }
      }
`

const useCreateAuctionMutation = (options) => useMutation(CREATE_AUCTION, options)
export { useCreateAuctionMutation, CREATE_AUCTION }
