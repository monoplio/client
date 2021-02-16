import { useMutation, gql } from '@apollo/client'

const UNMORTGAGE_PROPERTY = gql`
  mutation($propertyId: ID!){
    unmortgageProperty(propertyId: $propertyId){
      id
    }
  }
`

const useUnmortgagePropertyMutation = (options) => useMutation(UNMORTGAGE_PROPERTY, options)
export { useUnmortgagePropertyMutation, UNMORTGAGE_PROPERTY }
