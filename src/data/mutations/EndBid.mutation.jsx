import { useMutation, gql } from '@apollo/client'

const END_BID = gql`
    mutation($playerId: ID!, $auctionId: ID!){
        endBid(playerId: $playerId, auctionId: $auctionId){
          id
        }
      }
`

const useEndBidMutation = (options) => useMutation(END_BID, options)
export { useEndBidMutation, END_BID }
