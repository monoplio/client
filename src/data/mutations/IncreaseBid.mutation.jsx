import { useMutation, gql } from '@apollo/client'

const INCREASE_BID = gql`
    mutation($playerId: ID!, $auctionId: ID!, $bidAmount: Int!){
        increaseBid(playerId: $playerId, auctionId: $auctionId, bidAmount: $bidAmount){
          id
        }
      }
`

const useIncreaseBidMutation = (options) => useMutation(INCREASE_BID, options)
export { useIncreaseBidMutation, INCREASE_BID }
