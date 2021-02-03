import { gql } from '@apollo/client'

const TEST = gql`
    subscription{
        gameEvents{
            data{
                id
            }
            message
        }
    }
`
export { TEST }
