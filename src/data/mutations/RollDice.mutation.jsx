import { useMutation, gql } from '@apollo/client'

const ROLL_DICE = gql`
  mutation($playerId: ID!){
    rollDice(playerId: $playerId){
      id
    }
  }
`

const useRollDiceMutation = (options) => useMutation(ROLL_DICE, options)
export { useRollDiceMutation, ROLL_DICE }
