import { gql } from '@apollo/client'

const TEST = gql`
    subscription{
        test {
            id
        }
    }
`
export { TEST }
