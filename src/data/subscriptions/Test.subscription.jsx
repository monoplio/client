import { gql } from '@apollo/client'

const TEST = gql`
    subscription($gameId: ID!){
        gameEvents(gameId: $gameId){
        data{
            id
        }
        message
        }
    }
`
export { TEST }
