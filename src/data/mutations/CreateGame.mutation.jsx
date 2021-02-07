import { useMutation, gql } from '@apollo/client'

const CREATE_GAME = gql`
  mutation createGame ($username: String!) {
    createGame(username: $username) {
        id
        owner {
            id
            username
            color
            game {
                id
            }
        }
    }
  }
`

const useCreateGameMutation = (options) => useMutation(CREATE_GAME, options)
export { useCreateGameMutation, CREATE_GAME }
