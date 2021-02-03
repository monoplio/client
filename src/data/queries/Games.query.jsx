import { gql } from '@apollo/client'

const GAMES = gql`   
    query{
        games{
            id
            height
            hotelAvailable
            houseAvailable
        }
    }  
`

export { GAMES }
